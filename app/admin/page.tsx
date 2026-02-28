'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Script from 'next/script';

/* ──────────────────────────────────────────────
   Types
   ────────────────────────────────────────────── */

interface LineItem {
  id: number;
  desc: string;
  qty: number;
  rate: number;
}

interface InvoiceData {
  invNumber: string;
  invDate: string;
  clientName: string;
  clientAddress: string;
  projectRef: string;
  bbl: string;
  taxRate: number;
  items: LineItem[];
}

const STORAGE_KEY = 'invoiceAppData';
const INV_COUNTER_KEY = 'invoiceCounters';

const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

function generateInvoiceNumber(): string {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const monthKey = yy + mm;

  let counters: Record<string, number> = {};
  try {
    counters = JSON.parse(localStorage.getItem(INV_COUNTER_KEY) || '{}');
  } catch {
    /* empty */
  }

  if (!counters[monthKey]) {
    counters[monthKey] = 100 + Math.floor(Math.random() * 30);
  }
  counters[monthKey]++;
  localStorage.setItem(INV_COUNTER_KEY, JSON.stringify(counters));

  return `INV-${monthKey}-${counters[monthKey]}`;
}

function loadFromStorage(): InvoiceData | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function defaultData(): InvoiceData {
  return {
    invNumber: typeof window !== 'undefined' ? generateInvoiceNumber() : 'INV-000',
    invDate: new Date().toISOString().split('T')[0],
    clientName: '',
    clientAddress: '',
    projectRef: '',
    bbl: '',
    taxRate: 0,
    items: [
      { id: 1, desc: 'Architectural Design Services', qty: 1, rate: 2500 },
      { id: 2, desc: 'Zoning Feasibility Study', qty: 1, rate: 850 },
    ],
  };
}

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */

export default function AdminInvoicePage() {
  const [data, setData] = useState<InvoiceData>(defaultData);
  const [loaded, setLoaded] = useState(false);
  const saveTimer = useRef<NodeJS.Timeout | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = loadFromStorage();
    if (saved) setData(saved);
    setLoaded(true);
  }, []);

  // Save debounce
  const save = useCallback((d: InvoiceData) => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
    }, 300);
  }, []);

  const update = useCallback(
    (patch: Partial<InvoiceData>) => {
      setData((prev) => {
        const next = { ...prev, ...patch };
        save(next);
        return next;
      });
    },
    [save],
  );

  const updateItem = useCallback(
    (index: number, field: keyof LineItem, value: string | number) => {
      setData((prev) => {
        const items = [...prev.items];
        items[index] = { ...items[index], [field]: value };
        const next = { ...prev, items };
        save(next);
        return next;
      });
    },
    [save],
  );

  const addItem = () => {
    update({ items: [...data.items, { id: Date.now(), desc: '', qty: 1, rate: 0 }] });
  };

  const removeItem = (index: number) => {
    const items = data.items.filter((_, i) => i !== index);
    update({ items });
  };

  const newInvoice = () => {
    if (!confirm('Start a new invoice? Current data will be cleared.')) return;
    const fresh: InvoiceData = {
      invNumber: generateInvoiceNumber(),
      invDate: new Date().toISOString().split('T')[0],
      clientName: '',
      clientAddress: '',
      projectRef: '',
      bbl: '',
      taxRate: 0,
      items: [{ id: Date.now(), desc: '', qty: 1, rate: 0 }],
    };
    setData(fresh);
    save(fresh);
  };

  const handlePrint = () => {
    document.title = `Invoice - ${data.invNumber || 'INV-000'} - ${data.clientName || 'Client'}`;
    window.print();
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/admin/login';
  };

  // Calculations
  const subtotal = data.items.reduce((s, i) => s + i.qty * i.rate, 0);
  const taxAmount = subtotal * (data.taxRate / 100);
  const total = subtotal + taxAmount;

  if (!loaded) return null;

  return (
    <>
      {/* Admin-specific CSS — scoped to this page */}
      <link rel="stylesheet" href="/admin-style.css" />

      {/* Lucide icons (CDN, matches original) */}
      <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" onLoad={() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).lucide?.createIcons?.();
      }} />

      <div className="app-container" id="app-content" style={{ display: 'flex' }}>
        {/* ───── Control Panel (hidden in print) ───── */}
        <div className="control-panel no-print">
          <div className="control-header">
            <div className="control-title-row">
              <i data-lucide="file-text" className="panel-icon" />
              <h2>Invoice Generator</h2>
            </div>
            <button className="primary-btn" onClick={handlePrint}>
              <i data-lucide="printer" /> Print / Save PDF
            </button>
            <button className="secondary-btn" onClick={newInvoice}>
              <i data-lucide="plus" /> New Invoice
            </button>
            <button
              className="secondary-btn"
              onClick={handleLogout}
              style={{ marginTop: '0.5rem', color: '#ef4444' }}
            >
              Sign Out
            </button>
          </div>

          <div className="settings-group">
            <h3>
              <i data-lucide="hash" className="section-icon" /> Invoice Details
            </h3>
            <div className="input-row">
              <div className="input-group">
                <label>Invoice Number</label>
                <input
                  type="text"
                  value={data.invNumber}
                  onChange={(e) => update({ invNumber: e.target.value })}
                  placeholder="Auto-generated"
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Date</label>
                <input
                  type="date"
                  value={data.invDate}
                  onChange={(e) => update({ invDate: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="settings-group">
            <h3>
              <i data-lucide="user" className="section-icon" /> Client Information
            </h3>
            <div className="input-group">
              <label>Client Name / Company</label>
              <input
                type="text"
                value={data.clientName}
                onChange={(e) => update({ clientName: e.target.value })}
                placeholder="Client Name"
              />
            </div>
            <div className="input-group">
              <label>Client Address</label>
              <textarea
                rows={3}
                value={data.clientAddress}
                onChange={(e) => update({ clientAddress: e.target.value })}
                placeholder={'Street Address\nCity, State ZIP'}
              />
            </div>
            <div className="input-group">
              <label>Project Reference</label>
              <textarea
                rows={2}
                value={data.projectRef}
                onChange={(e) => update({ projectRef: e.target.value })}
                placeholder="Project Name or Address"
              />
            </div>
            <div className="input-group">
              <label>BBL</label>
              <input
                type="text"
                value={data.bbl}
                onChange={(e) => update({ bbl: e.target.value })}
                placeholder="Borough-Block-Lot"
              />
            </div>
          </div>
        </div>

        {/* ───── The A4 Invoice Page ───── */}
        <div className="invoice-page">
          <div className="accent-bar" />
          <header className="invoice-header">
            <div className="company-details">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/admin-assets/uploaded_logo.png" alt="Max AEC LLC Logo" className="company-logo" />
              <h1 className="company-name" style={{ display: 'none' }}>
                MAX AEC LLC
              </h1>
              <div className="company-contact">
                <p>Max Isakov, RA, AIA, NCARB</p>
                <p>
                  <i data-lucide="globe" className="contact-icon" /> www.maxaec.com
                </p>
                <p>
                  <i data-lucide="mail" className="contact-icon" />{' '}
                  {process.env.NEXT_PUBLIC_ADMIN_CONTACT_EMAIL || 'max@maxisakov.com'}
                </p>
                <p>
                  <i data-lucide="phone" className="contact-icon" />{' '}
                  {process.env.NEXT_PUBLIC_ADMIN_CONTACT_PHONE || '917.400.3123'}
                </p>
              </div>
            </div>
            <div className="tagline-column">
              <span>Architecture,</span>
              <span>Engineering</span>
              <span>&amp; Consulting</span>
            </div>
            <div className="invoice-meta">
              <h2 className="invoice-title">INVOICE</h2>
              <div className="meta-grid">
                <div className="meta-label">Invoice No:</div>
                <div className="meta-value">{data.invNumber || 'INV-000'}</div>
                <div className="meta-label">Date:</div>
                <div className="meta-value">{data.invDate || 'YYYY-MM-DD'}</div>
              </div>
            </div>
          </header>

          <section className="invoice-parties">
            <div className="bill-to">
              <h3>
                <i data-lucide="building-2" className="party-icon" /> BILL TO
              </h3>
              <div className="party-info">{data.clientName || 'Client Name'}</div>
              <div
                className="party-info"
                dangerouslySetInnerHTML={{
                  __html: data.clientAddress
                    ? data.clientAddress.replace(/\n/g, '<br>')
                    : 'Street Address<br>City, State ZIP',
                }}
              />
            </div>
            <div className="project-info">
              <h3>
                <i data-lucide="briefcase" className="party-icon" /> PROJECT
              </h3>
              <div
                className="party-info"
                dangerouslySetInnerHTML={{
                  __html: data.projectRef
                    ? data.projectRef.replace(/\n/g, '<br>')
                    : 'Project Description',
                }}
              />
              {data.bbl && (
                <div className="party-info bbl-line">BBL: {data.bbl}</div>
              )}
            </div>
          </section>

          <section className="invoice-items">
            <table className="items-table">
              <thead>
                <tr>
                  <th className="col-desc">Description</th>
                  <th className="col-qty">Qty / Hrs</th>
                  <th className="col-rate">Rate</th>
                  <th className="col-amount">Amount</th>
                  <th className="col-action no-print" />
                </tr>
              </thead>
              <tbody>
                {data.items.map((item, i) => (
                  <tr key={item.id}>
                    <td className="col-desc">
                      <textarea
                        className="item-input item-desc-input"
                        rows={1}
                        placeholder="Description"
                        value={item.desc}
                        onChange={(e) => updateItem(i, 'desc', e.target.value)}
                      />
                    </td>
                    <td className="col-qty">
                      <input
                        type="number"
                        className="item-input qty-input"
                        value={item.qty}
                        min={0}
                        step={0.5}
                        onChange={(e) => updateItem(i, 'qty', parseFloat(e.target.value) || 0)}
                      />
                    </td>
                    <td className="col-rate">
                      <input
                        type="number"
                        className="item-input rate-input"
                        value={item.rate}
                        min={0}
                        step={1}
                        onChange={(e) => updateItem(i, 'rate', parseFloat(e.target.value) || 0)}
                      />
                    </td>
                    <td className="col-amount">{fmt.format(item.qty * item.rate)}</td>
                    <td className="col-action no-print">
                      <button
                        className="remove-btn"
                        title="Remove Item"
                        onClick={() => removeItem(i)}
                      >
                        <i data-lucide="trash-2" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="secondary-btn no-print" onClick={addItem}>
              <i data-lucide="plus" /> Add Line Item
            </button>
          </section>

          <section className="invoice-summary">
            <div className="summary-top">
              <div className="payment-terms">
                <h3>
                  <i data-lucide="clock" className="party-icon" /> PAYMENT TERMS
                </h3>
                <p>Due upon receipt.</p>
              </div>
              <div className="totals-area">
                <div className="total-row">
                  <div className="total-label">Subtotal</div>
                  <div className="total-value">{fmt.format(subtotal)}</div>
                </div>
                <div className="total-row tax-row">
                  <div className="total-label">
                    <span className="no-print">
                      Tax %{' '}
                      <input
                        type="number"
                        value={data.taxRate}
                        min={0}
                        step={0.1}
                        style={{ width: 50, marginLeft: 8 }}
                        onChange={(e) => update({ taxRate: parseFloat(e.target.value) || 0 })}
                      />
                    </span>
                    <span className="print-only">Tax</span>
                  </div>
                  <div className="total-value">{fmt.format(taxAmount)}</div>
                </div>
                <div className="total-row final-total">
                  <div className="total-label">Total Due</div>
                  <div className="total-value">{fmt.format(total)}</div>
                </div>
              </div>
            </div>
            <div className="payment-methods-section">
              <h3>
                <i data-lucide="credit-card" className="party-icon" /> PAYMENT METHODS
              </h3>
              <div className="payment-methods-row">
                <div className="payment-method-item zelle-card">
                  <i data-lucide="smartphone" className="payment-icon" />
                  <div className="zelle-content">
                    <p><strong>Pay via Zelle</strong></p>
                    <p>Open your banking app and select &quot;Send with Zelle.&quot;</p>
                    <p>
                      Recipient:
                      <br />
                      <strong>MAX AEC LLC</strong>
                    </p>
                    <p>
                      Phone:
                      <br />
                      <strong>{process.env.NEXT_PUBLIC_ADMIN_CONTACT_PHONE || '917-400-3123'}</strong>
                    </p>
                    <p>
                      <em>Instant and free.</em>
                    </p>
                  </div>
                  <div className="payment-qr">
                    <p className="scan-text">Scan to pay</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/admin-assets/zelle-logo-only.png" alt="Zelle Logo" className="zelle-logo" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/admin-assets/zelle-qr-only.png" alt="Zelle QR Code" className="payment-qrcode" />
                  </div>
                </div>
                <div className="payment-method-item">
                  <i data-lucide="mail" className="payment-icon" />
                  <div>
                    <p><strong>Pay by Check</strong></p>
                    <p>
                      Payable to:
                      <br />
                      <strong>MAX AEC LLC</strong>
                    </p>
                    <p>
                      Mail to:
                      <br />
                      <strong>
                        MAX AEC LLC
                        <br />
                        {process.env.NEXT_PUBLIC_ADMIN_MAILING_ADDRESS || '373 92nd Street\nBrooklyn, NY 11209'}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

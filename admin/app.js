document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // DOM Elements
    const printBtn = document.getElementById('print-btn');
    const newInvoiceBtn = document.getElementById('new-invoice-btn');
    const addItemBtn = document.getElementById('add-item-btn');
    const itemsBody = document.getElementById('items-body');
    const taxRateInput = document.getElementById('tax-rate-input');

    // Display Elements
    const elements = {
        invNumber: { input: document.getElementById('inv-number-input'), display: document.getElementById('display-inv-number') },
        invDate: { input: document.getElementById('inv-date-input'), display: document.getElementById('display-inv-date') },
        clientName: { input: document.getElementById('client-name-input'), display: document.getElementById('display-client-name') },
        clientAddress: { input: document.getElementById('client-address-input'), display: document.getElementById('display-client-address') },
        projectRef: { input: document.getElementById('project-ref-input'), display: document.getElementById('display-project-ref') },
        bbl: { input: document.getElementById('bbl-input'), display: document.getElementById('display-bbl') },
    };

    // Calculate Elements
    const calcSubtotal = document.getElementById('calc-subtotal');
    const calcTax = document.getElementById('calc-tax');
    const calcTotal = document.getElementById('calc-total');

    // State
    const STORAGE_KEY = 'invoiceAppData';
    let items = [
        { id: 1, desc: 'Architectural Design Services', qty: 1, rate: 2500 },
        { id: 2, desc: 'Zoning Feasibility Study', qty: 1, rate: 850 }
    ];

    // ─── LocalStorage persistence ───
    function saveToStorage() {
        const data = {
            invNumber: elements.invNumber.input.value,
            invDate: elements.invDate.input.value,
            clientName: elements.clientName.input.value,
            clientAddress: elements.clientAddress.input.value,
            projectRef: elements.projectRef.input.value,
            bbl: elements.bbl.input.value,
            taxRate: taxRateInput.value,
            items: items,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function loadFromStorage() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return false;
        try {
            const data = JSON.parse(raw);
            if (data.invNumber !== undefined) elements.invNumber.input.value = data.invNumber;
            if (data.invDate !== undefined) elements.invDate.input.value = data.invDate;
            if (data.clientName !== undefined) elements.clientName.input.value = data.clientName;
            if (data.clientAddress !== undefined) elements.clientAddress.input.value = data.clientAddress;
            if (data.projectRef !== undefined) elements.projectRef.input.value = data.projectRef;
            if (data.bbl !== undefined) elements.bbl.input.value = data.bbl;
            if (data.taxRate !== undefined) taxRateInput.value = data.taxRate;
            if (data.items && data.items.length > 0) items = data.items;
            return true;
        } catch (e) {
            return false;
        }
    }

    // ─── Invoice number generation ───
    const INV_COUNTER_KEY = 'invoiceCounters';

    function generateInvoiceNumber() {
        const now = new Date();
        const yy = String(now.getFullYear()).slice(-2);
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const monthKey = yy + mm;

        // Load counters per month
        let counters = {};
        try { counters = JSON.parse(localStorage.getItem(INV_COUNTER_KEY)) || {}; } catch (e) { }

        // Start each month at an offset so numbers look established
        if (!counters[monthKey]) {
            counters[monthKey] = 100 + Math.floor(Math.random() * 30);
        }
        counters[monthKey]++;
        localStorage.setItem(INV_COUNTER_KEY, JSON.stringify(counters));

        return `INV-${monthKey}-${counters[monthKey]}`;
    }

    // Load saved data or set defaults
    const hasSaved = loadFromStorage();
    if (!hasSaved) {
        const today = new Date().toISOString().split('T')[0];
        elements.invDate.input.value = today;
        elements.invNumber.input.value = generateInvoiceNumber();
    }

    // Sync Inputs to Display
    function syncInputDisplay(inputEl, displayEl, defaultText = '') {
        const update = () => {
            let val = inputEl.value;
            if (inputEl.tagName === 'TEXTAREA') {
                displayEl.innerHTML = val ? val.replace(/\n/g, '<br>') : defaultText;
            } else {
                displayEl.textContent = val || defaultText;
            }
            saveToStorage();
        };
        inputEl.addEventListener('input', update);
        update();
    }

    syncInputDisplay(elements.invNumber.input, elements.invNumber.display, 'INV-000');
    syncInputDisplay(elements.invDate.input, elements.invDate.display, 'YYYY-MM-DD');
    syncInputDisplay(elements.clientName.input, elements.clientName.display, 'Client Name');
    syncInputDisplay(elements.clientAddress.input, elements.clientAddress.display, 'Client Address');
    syncInputDisplay(elements.projectRef.input, elements.projectRef.display, 'Project Description');

    // BBL sync with prefix label
    const bblInput = elements.bbl.input;
    const bblDisplay = elements.bbl.display;
    const updateBbl = () => {
        const val = bblInput.value.trim();
        if (val) {
            bblDisplay.textContent = 'BBL: ' + val;
            bblDisplay.style.display = '';
        } else {
            bblDisplay.textContent = '';
            bblDisplay.style.display = 'none';
        }
        saveToStorage();
    };
    bblInput.addEventListener('input', updateBbl);
    updateBbl();

    // Formatting helper
    const formatCurrency = (num) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
    };

    // Render Table Items
    function renderItems() {
        itemsBody.innerHTML = '';

        items.forEach((item, index) => {
            const tr = document.createElement('tr');
            const amount = item.qty * item.rate;

            tr.innerHTML = `
                <td class="col-desc">
                    <textarea class="item-input item-desc-input" rows="1" placeholder="Description" data-index="${index}" data-field="desc">${item.desc}</textarea>
                </td>
                <td class="col-qty">
                    <input type="number" class="item-input qty-input" value="${item.qty}" min="0" step="0.5" data-index="${index}" data-field="qty">
                </td>
                <td class="col-rate">
                    <input type="number" class="item-input rate-input" value="${item.rate}" min="0" step="1" data-index="${index}" data-field="rate">
                </td>
                <td class="col-amount">${formatCurrency(amount)}</td>
                <td class="col-action no-print">
                    <button class="remove-btn" data-index="${index}" title="Remove Item">
                        <i data-lucide="trash-2"></i>
                    </button>
                </td>
            `;
            itemsBody.appendChild(tr);
        });

        // Re-initialize Lucide icons for dynamically added elements
        lucide.createIcons();
        // Auto-resize description textareas
        document.querySelectorAll('.item-desc-input').forEach(ta => {
            ta.style.height = 'auto';
            ta.style.height = ta.scrollHeight + 'px';
            ta.addEventListener('input', () => {
                ta.style.height = 'auto';
                ta.style.height = ta.scrollHeight + 'px';
            });
        });
        attachItemListeners();
        calculateTotals();
    }

    function attachItemListeners() {
        // Input changes
        document.querySelectorAll('.item-input').forEach(input => {
            input.addEventListener('input', (e) => {
                const index = parseInt(e.target.dataset.index);
                const field = e.target.dataset.field;
                const val = e.target.value;

                if (field === 'desc') {
                    items[index].desc = val;
                } else {
                    items[index][field] = parseFloat(val) || 0;
                    const tr = e.target.closest('tr');
                    const amountCell = tr.querySelector('.col-amount');
                    amountCell.textContent = formatCurrency(items[index].qty * items[index].rate);
                }
                calculateTotals();
                saveToStorage();
            });
        });

        // Remove buttons
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                items.splice(index, 1);
                renderItems();
                saveToStorage();
            });
        });
    }

    function calculateTotals() {
        const subtotal = items.reduce((sum, item) => sum + (item.qty * item.rate), 0);
        const taxRate = parseFloat(taxRateInput.value) || 0;
        const taxAmount = subtotal * (taxRate / 100);
        const total = subtotal + taxAmount;

        calcSubtotal.textContent = formatCurrency(subtotal);
        calcTax.textContent = formatCurrency(taxAmount);
        calcTotal.textContent = formatCurrency(total);
    }

    // Event Listeners
    addItemBtn.addEventListener('click', () => {
        items.push({ id: Date.now(), desc: '', qty: 1, rate: 0 });
        renderItems();
        saveToStorage();
    });

    taxRateInput.addEventListener('input', () => {
        calculateTotals();
        saveToStorage();
    });

    printBtn.addEventListener('click', () => {
        const invNum = elements.invNumber.input.value || 'INV-000';
        const clientName = elements.clientName.input.value || 'Client Name';
        document.title = `Invoice - ${invNum} - ${clientName}`;
        window.print();
    });

    newInvoiceBtn.addEventListener('click', () => {
        if (!confirm('Start a new invoice? Current data will be cleared.')) return;
        // Clear all inputs
        elements.invNumber.input.value = generateInvoiceNumber();
        const today = new Date().toISOString().split('T')[0];
        elements.invDate.input.value = today;
        elements.clientName.input.value = '';
        elements.clientAddress.input.value = '';
        elements.projectRef.input.value = '';
        elements.bbl.input.value = '';
        taxRateInput.value = '0';
        items = [{ id: Date.now(), desc: '', qty: 1, rate: 0 }];
        // Trigger display updates
        Object.values(elements).forEach(el => el.input.dispatchEvent(new Event('input')));
        renderItems();
        saveToStorage();
    });

    // ─── Payment layout logic ───
    // Detects if payment card text is being clipped/wrapped and
    // switches to a stacked layout when it doesn't fit.
    function fitPaymentLayout() {
        const row = document.querySelector('.payment-methods-row');
        const zelleCard = document.querySelector('.zelle-card');
        if (!row || !zelleCard) return;

        // Reset classes to measure natural width
        row.classList.remove('stacked');
        zelleCard.classList.remove('stacked');

        // Check if the zelle text content overflows its container
        const zelleText = zelleCard.querySelector('.zelle-content');
        if (zelleText) {
            const paragraphs = zelleText.querySelectorAll('p');
            let textOverflows = false;
            paragraphs.forEach(p => {
                if (p.scrollWidth > p.clientWidth + 1) {
                    textOverflows = true;
                }
            });
            if (textOverflows) {
                zelleCard.classList.add('stacked');
            }
        }

        // Check if the row itself is overflowing (cards too wide side-by-side)
        if (row.scrollWidth > row.clientWidth + 1) {
            row.classList.add('stacked');
        }
    }

    // Run layout check on load and resize
    fitPaymentLayout();
    window.addEventListener('resize', fitPaymentLayout);

    // Initial render
    renderItems();
});

// ─── Google Identity Authentication ───
// Decode the JWT token returned by Google
function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        return null;
    }
}

// Called by the Google sign-in script
window.handleCredentialResponse = function(response) {
    const payload = parseJwt(response.credential);
    const errorMsg = document.getElementById('login-error');
    
    if (!payload || !payload.email) {
        errorMsg.textContent = "Google login failed. Please try again.";
        errorMsg.style.display = 'block';
        return;
    }

    const email = payload.email.toLowerCase();
    
    // Check if authorized
    if (email === 'max@maxaec.com' || email === 'max@maxisakov.com') {
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('app-content').style.display = 'flex';
        // Force layout check on reveal
        window.dispatchEvent(new Event('resize'));
    } else {
        errorMsg.textContent = "Access Denied. Unauthorized account (" + email + ").";
        errorMsg.style.display = 'block';
    }
};

import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

const ROOT = process.cwd();

const jobs = [
  {
    input: 'public/images/signature/icon-phone.svg',
    output: 'public/images/signature/icon-phone.png',
    width: 28,
    height: 28,
  },
  {
    input: 'public/images/signature/icon-email.svg',
    output: 'public/images/signature/icon-email.png',
    width: 28,
    height: 28,
  },
  {
    input: 'public/images/signature/icon-globe.svg',
    output: 'public/images/signature/icon-globe.png',
    width: 28,
    height: 28,
  },
  {
    input: 'public/images/signature/lockup.svg',
    output: 'public/images/signature/lockup.png',
    width: 398,
    height: 72,
  },
];

async function renderPng(job) {
  const inputPath = path.join(ROOT, job.input);
  const outputPath = path.join(ROOT, job.output);
  const outputDir = path.dirname(outputPath);

  await fs.mkdir(outputDir, { recursive: true });

  const buffer = await sharp(inputPath, { density: 288 })
    .resize(job.width, job.height, { fit: 'fill' })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();

  if (buffer.byteLength <= 0) {
    throw new Error(`Generated empty output for ${job.output}`);
  }

  const metadata = await sharp(buffer).metadata();
  if (metadata.width !== job.width || metadata.height !== job.height) {
    throw new Error(
      `Unexpected dimensions for ${job.output}: got ${metadata.width}x${metadata.height}, expected ${job.width}x${job.height}`
    );
  }

  await fs.writeFile(outputPath, buffer);
  const stats = await fs.stat(outputPath);
  if (stats.size <= 0) {
    throw new Error(`Wrote empty file for ${job.output}`);
  }

  console.log(
    `Generated ${job.output} (${metadata.width}x${metadata.height}, ${stats.size} bytes)`
  );
}

async function main() {
  for (const job of jobs) {
    await renderPng(job);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

import { cpSync, mkdirSync, rmSync } from 'node:fs';
const output = new URL('../docs/.vitepress/dist/', import.meta.url);
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync(new URL('../site/', import.meta.url), output, { recursive: true });
console.log('Aloer Pages built successfully.');

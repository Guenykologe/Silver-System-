// Kopiert web/ nach www/ (das liest Capacitor) und legt Capacitors Laufzeit-Skript dazu.
import { cp, rm, mkdir } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const www = new URL('www/', root);

await rm(www, { recursive: true, force: true });
await cp(new URL('web/', root), www, { recursive: true });
await mkdir(new URL('vendor/', www), { recursive: true });
await cp(new URL('node_modules/@capacitor/core/dist/capacitor.js', root), new URL('vendor/capacitor.js', www));

console.log('www/ ist fertig.');

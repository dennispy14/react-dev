export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')               // separa letra do acento
    .replace(/[\u0300-\u036f]/g, ''); // remove acentos
}
// src/utils/loadTemplate.ts
export async function loadTemplate(path: string): Promise<string> {
  const response = await fetch(path);
  return await response.text();
}

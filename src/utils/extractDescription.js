export function extractDescription(species) {
  if (!species || !Array.isArray(species.flavor_text_entries)) {
    return null;
  }

  // 1. busca entrada en español
  const spanishEntry = species.flavor_text_entries.find(
    (entry) => entry.language?.name === "es"
  );

  // 2. Si no hay español, busca inglés
  const fallbackEntry = species.flavor_text_entries.find(
    (entry) => entry.language?.name === "en"
  );

  const entry = spanishEntry || fallbackEntry;

  if (!entry) return null;

  // 3. limpia el formato de la descripción, reemplazando saltos de línea y espacios
  return entry.flavor_text.replace(/\s+/g, " ").trim();
}

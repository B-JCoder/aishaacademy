import "server-only";

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  es: () => import("../dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const loadDictionary = dictionaries[locale as keyof typeof dictionaries];

  if (typeof loadDictionary !== "function") {
    console.warn(
      `No dictionary found for locale: "${locale}". Falling back to "es".`,
    );
    return dictionaries.es();
  }

  return loadDictionary();
};

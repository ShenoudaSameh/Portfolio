// Uses MyMemory Free Translation API for seamless front-end translation
export const translateText = async (text, targetLang, sourceLang = 'en') => {
  if (!text) return '';
  try {
    const langPair = `${sourceLang}|${targetLang}`;
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langPair}`
    );
    const data = await response.json();
    return data.responseData?.translatedText || text;
  } catch (error) {
    console.error(`Translation error for ${targetLang}:`, error);
    return text; // Fallback to original text on failure
  }
};
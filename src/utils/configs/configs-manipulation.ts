interface ConfigObject {
  [key: string]: any;
}

export const switchConfigByLanguage = (obj: ConfigObject, language: string, languagesToRemove: string[]): ConfigObject | undefined => {
  if (typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map((item) => switchConfigByLanguage(item, language, languagesToRemove));

  if (obj && typeof obj === "object")
    return Object.keys(obj).reduce((prev_value, current_key) => {
      const regex = new RegExp(languagesToRemove.map((item) => "_" + item).join("|"), "gi");
      const key_without_language_suffix = current_key.replace(regex, "");

      const requestedLanguageKey = key_without_language_suffix + "_" + language;
      const fallbackLanguageKey = key_without_language_suffix + "_en";
      const hasRequestedTranslation = Object.prototype.hasOwnProperty.call(obj, requestedLanguageKey);
      const hasFallbackTranslation = Object.prototype.hasOwnProperty.call(obj, fallbackLanguageKey);
      const isLanguageSpecificKey = languagesToRemove?.some((languageToRemove) => key_without_language_suffix + "_" + languageToRemove === current_key);

      if (
        requestedLanguageKey === current_key ||
        (!hasRequestedTranslation && fallbackLanguageKey === current_key) ||
        (!hasRequestedTranslation && !hasFallbackTranslation && !isLanguageSpecificKey)
      )
        prev_value[key_without_language_suffix] = switchConfigByLanguage(obj[current_key], language, languagesToRemove) as any;

      return prev_value;
    }, {} as ConfigObject);
};

"use client";

import {
  defaultLanguage,
  LANGUAGE_STORAGE_KEY,
  languages,
  type Language,
} from "@/config/i18n.config";
import { useEffect, useMemo, useState } from "react";

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] =
    useState<Language>(defaultLanguage);

  useEffect(() => {
    const storedLanguage = localStorage.getItem(
      LANGUAGE_STORAGE_KEY,
    ) as Language | null;

    if (storedLanguage && languages.includes(storedLanguage)) {
      setCurrentLanguage(storedLanguage);
      document.documentElement.lang = storedLanguage;
      return;
    }

    document.documentElement.lang = defaultLanguage;
  }, []);

  const changeLanguage = (nextLanguage: Language) => {
    if (!languages.includes(nextLanguage)) return;

    setCurrentLanguage(nextLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  const availableLanguages = useMemo(() => [...languages], []);

  return {
    currentLanguage,
    changeLanguage,
    languages: availableLanguages,
  };
}

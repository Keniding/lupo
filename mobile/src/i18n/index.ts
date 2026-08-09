import { useGameStore } from '../state/store';
import { DICT, LANGS, type Dict, type LangCode } from './dict';

export { LANGS };
export type { Dict, LangCode };

export function useT(): Dict {
  const lang = useGameStore((s) => s.lang);
  return DICT[lang];
}

export function useLang() {
  const lang = useGameStore((s) => s.lang);
  const setLang = useGameStore((s) => s.setLang);
  return { lang, setLang, langs: LANGS };
}

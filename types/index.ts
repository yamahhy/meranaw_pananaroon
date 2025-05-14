// types/index.ts
export interface Proverb {
  id: number;
  title: string;
  content: string;
  translation: string;
  explanation: string;
}

export interface Theme {
  id: number;
  name: string;
  textColor: string;
  borderColor: string;
  proverbs: Proverb[];
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
}

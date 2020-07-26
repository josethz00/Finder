import 'styled-componets/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      tertiary: string;
      quaternary: string;
      background: string;
      text: string;
      secText: string;
    }
  }
}
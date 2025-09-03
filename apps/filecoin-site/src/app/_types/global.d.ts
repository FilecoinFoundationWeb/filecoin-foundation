declare global {
  interface Window {
    Transifex?: {
      live: {
        onFetchLanguages: (
          callback: (languages: Array<{ code: string; name: string }>) => void,
        ) => void
        onTranslatePage: (callback: (languageCode: string) => void) => void
        translateTo: (languageCode: string, reload?: boolean) => void
        getSelectedLanguageCode: () => string
        getSourceLanguage: () => { code: string; name: string }
        getLanguageName: (code: string) => string
        onReady: (callback: () => void) => void
      }
    }
  }
}

export {}

export interface Setting {
    theme: string
    language: string
    fontSize: number
    fontFamily: string
    setTheme: (theme: string) => void
    setLanguage: (language: string) => void
    setFontSize: (fontSize: number) => void
    setFontFamily: (fontFamily: string) => void
    resetSettings: () => void
}

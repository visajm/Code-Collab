import { createContext, useContext, useEffect, useState } from "react"
import { Setting } from "../types/setting"

const defaultSettings = {
    theme: "vs-dark",
    language: "javascript",
    fontSize: 16,
    fontFamily: "Fira Code",
}

const SettingContext = createContext<Setting>({
    ...defaultSettings,
    setTheme: () => { },
    setLanguage: () => { },
    setFontSize: () => { },
    setFontFamily: () => { },
    resetSettings: () => { },
})

export const SettingProvider = ({ children }: { children: React.ReactNode }) => {
    const storedSettings = JSON.parse(localStorage.getItem("settings") || "{}")

    const storedTheme = storedSettings.theme !== undefined ? storedSettings.theme : defaultSettings.theme
    const storedLanguage = storedSettings.language !== undefined ? storedSettings.language : defaultSettings.language
    const storedFontSize = storedSettings.fontSize !== undefined ? storedSettings.fontSize : defaultSettings.fontSize
    const storedFontFamily = storedSettings.fontFamily !== undefined ? storedSettings.fontFamily : defaultSettings.fontFamily

    const [theme, setTheme] = useState<string>(storedTheme)
    const [language, setLanguage] = useState<string>(storedLanguage)
    const [fontSize, setFontSize] = useState<number>(storedFontSize)
    const [fontFamily, setFontFamily] = useState<string>(storedFontFamily)

    const resetSettings = () => {
        setTheme(defaultSettings.theme)
        setLanguage(defaultSettings.language)
        setFontSize(defaultSettings.fontSize)
        setFontFamily(defaultSettings.fontFamily)
    }

    useEffect(() => {
        localStorage.setItem(
            "settings",
            JSON.stringify({
                theme,
                language,
                fontSize,
                fontFamily,
            })
        )
    }, [theme, language, fontSize, fontFamily])

    return (
        <SettingContext.Provider
            value={{
                theme,
                language,
                fontSize,
                fontFamily,
                setTheme,
                setLanguage,
                setFontSize,
                setFontFamily,
                resetSettings,
            }}
        >
            {children}
        </SettingContext.Provider>
    )
}

export const useSettings = () => useContext(SettingContext)

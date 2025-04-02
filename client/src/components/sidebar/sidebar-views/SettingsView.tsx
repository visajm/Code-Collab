import { ChangeEvent } from "react"
import { useSettings } from "../../../context/SettingContext"
import Select from "../../common/Select"

const SettingsView = () => {
    const {
        theme,
        setTheme,
        language,
        setLanguage,
        fontSize,
        setFontSize,
        fontFamily,
        setFontFamily,
        resetSettings,
    } = useSettings()

    const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) =>
        setTheme(e.target.value)

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) =>
        setLanguage(e.target.value)

    const handleFontSizeChange = (e: ChangeEvent<HTMLInputElement>) =>
        setFontSize(Number(e.target.value))

    const handleFontFamilyChange = (e: ChangeEvent<HTMLSelectElement>) =>
        setFontFamily(e.target.value)

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="theme" className="text-sm font-medium">
                    Theme
                </label>
                <Select
                    id="theme"
                    value={theme}
                    onChange={handleThemeChange}
                    options={[
                        { value: "vs-dark", label: "VS Dark" },
                        { value: "vs-light", label: "VS Light" },
                        { value: "hc-black", label: "High Contrast Dark" },
                        { value: "hc-light", label: "High Contrast Light" },
                    ]}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="language" className="text-sm font-medium">
                    Language
                </label>
                <Select
                    id="language"
                    value={language}
                    onChange={handleLanguageChange}
                    options={[
                        { value: "javascript", label: "JavaScript" },
                        { value: "typescript", label: "TypeScript" },
                        { value: "python", label: "Python" },
                        { value: "java", label: "Java" },
                        { value: "csharp", label: "C#" },
                        { value: "cpp", label: "C++" },
                        { value: "go", label: "Go" },
                        { value: "rust", label: "Rust" },
                        { value: "ruby", label: "Ruby" },
                        { value: "php", label: "PHP" },
                    ]}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="fontSize" className="text-sm font-medium">
                    Font Size: {fontSize}px
                </label>
                <input
                    type="range"
                    id="fontSize"
                    min="12"
                    max="24"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                    className="w-full"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="fontFamily" className="text-sm font-medium">
                    Font Family
                </label>
                <Select
                    id="fontFamily"
                    value={fontFamily}
                    onChange={handleFontFamilyChange}
                    options={[
                        { value: "Fira Code", label: "Fira Code" },
                        { value: "Source Code Pro", label: "Source Code Pro" },
                        { value: "JetBrains Mono", label: "JetBrains Mono" },
                        { value: "Cascadia Code", label: "Cascadia Code" },
                        { value: "Consolas", label: "Consolas" },
                        { value: "Courier New", label: "Courier New" },
                    ]}
                />
            </div>

            <button
                onClick={resetSettings}
                className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                Reset Settings
            </button>
        </div>
    )
}

export default SettingsView

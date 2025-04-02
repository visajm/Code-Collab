import { ChangeEvent } from "react"
import { PiCaretDownBold } from "react-icons/pi"

interface Option {
    value: string
    label: string
}

interface SelectProps {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
    value: string
    options: (Option | string)[]
    title?: string
    id?: string
    className?: string
}

function Select({ onChange, value, options, title, id, className = "" }: SelectProps) {
    return (
        <div className="relative w-full">
            {title && <label htmlFor={id} className="mb-2">{title}</label>}
            <select
                id={id}
                className={`w-full rounded-md border-none bg-darkHover px-4 py-2 text-white outline-none ${className}`}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => {
                    const isOptionObject = typeof option === 'object' && option !== null;
                    const optionValue = isOptionObject ? (option as Option).value : option as string;
                    const optionLabel = isOptionObject ? (option as Option).label : (option as string).charAt(0).toUpperCase() + (option as string).slice(1);

                    return (
                        <option key={optionValue} value={optionValue}>
                            {optionLabel}
                        </option>
                    )
                })}
            </select>
            <PiCaretDownBold
                size={16}
                className="absolute bottom-3 right-4 z-10 text-white"
            />
        </div>
    )
}

export default Select

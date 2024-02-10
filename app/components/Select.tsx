import React from 'react'

interface Props {
  options: Option[]
  value?: string
}

interface Option {
  label: string
  value: string
}
export const Select = ({ options, value }: Props) => {
  return (
    <select value={value}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

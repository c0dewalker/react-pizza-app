import { createContext, useContext } from 'react'

type IRadioGroupContext = {
	value: string
	onChange: (value: string) => void
}

const RadioGroupContext = createContext<IRadioGroupContext>({} as IRadioGroupContext)

export const RadioGroupProvider = RadioGroupContext.Provider

export const useRadioGroupValues = () => useContext(RadioGroupContext)

import { createContext, useContext } from 'react'

const FieldContext = createContext<string | undefined>(undefined)
const useFieldId = () => useContext(FieldContext)

export { FieldContext, useFieldId }

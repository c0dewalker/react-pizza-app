import { PropsWithChildren, useId } from 'react'
import { FieldContext } from './FieldContext'
import { FieldInput } from './FieldInput'
import { FieldLabel } from './FieldLabel'

interface FieldComponent extends React.FC<PropsWithChildren> {
	Label: typeof FieldLabel
	Input: typeof FieldInput
}

export const Field: FieldComponent = ({ children }) => {
	const id = useId()

	return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>
}

Field.Label = FieldLabel
Field.Input = FieldInput

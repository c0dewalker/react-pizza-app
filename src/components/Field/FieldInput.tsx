import { forwardRef, InputHTMLAttributes } from 'react'
import { useFieldId } from './FieldContext'
import { StyledInput } from './FieldInput.styled'

export const FieldInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
	const id = useFieldId()

	return <StyledInput ref={ref} id={id} type="text" {...props} />
})

FieldInput.displayName = 'Field.Input'

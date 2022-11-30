import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { useFieldId } from './FieldContext'
import { StyledLabel } from './FieldLabel.styled'

export const FieldLabel = forwardRef<HTMLLabelElement, ComponentPropsWithoutRef<'label'>>((props, ref) => {
	const id = useFieldId()

	return <StyledLabel htmlFor={id} ref={ref} {...props} />
})

FieldLabel.displayName = 'Field.Label'

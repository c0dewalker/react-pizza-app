import { useMemo, PropsWithChildren } from 'react'
import { RadioGroupProvider } from './RadioGroupContext'
import * as S from './Radio.styled'

interface RadioGroupProps extends PropsWithChildren {
	value: string
	label?: string
	onChange: (nextValue: string) => void
}

export const RadioGroup = ({ children, value, label, onChange }: RadioGroupProps) => {
	const contextValue = useMemo(() => ({ value, onChange }), [value, onChange])

	return (
		<RadioGroupProvider value={contextValue}>
			<S.RadioGroup>
				{label && <S.RadioGroupLabel>{label}</S.RadioGroupLabel>}
				<S.RadioItemsContainer>{children}</S.RadioItemsContainer>
			</S.RadioGroup>
		</RadioGroupProvider>
	)
}

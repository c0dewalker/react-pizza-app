import { PropsWithChildren } from 'react'
import { useRadioGroupValues } from './RadioGroupContext'
import * as S from './Radio.styled'

interface RadioItemProps extends PropsWithChildren {
	value: string
}

export const RadioItem = (props: RadioItemProps) => {
	const { value, onChange } = useRadioGroupValues()
	const checked = value === props.value

	return (
		<S.RadioItem checked={checked}>
			<label>
				<input
					type="radio"
					className="visually-hidden"
					checked={checked}
					onChange={evt => {
						if (evt.target.checked === true) {
							onChange(props.value)
						}
					}}
				/>
				{props.children}
			</label>
		</S.RadioItem>
	)
}

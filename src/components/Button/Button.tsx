import { forwardRef, ReactElement, ComponentPropsWithRef } from 'react'
import { StyledButton } from './'

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
	variant?: 'primary' | 'secondary' | 'ghost'
	size?: 'base' | 'large'
	icon?: ReactElement
	disabled?: boolean
	isFullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, icon, ...props }, ref) => (
	<StyledButton ref={ref} {...props}>
		{icon}
		{children && <span>{children}</span>}
	</StyledButton>
))

Button.displayName = 'Button'

Button.defaultProps = {
	type: 'button',
	variant: 'primary',
	size: 'base',
	disabled: false,
	isFullWidth: false
}

import { DefaultTheme } from 'styled-components'
import { fontSizeMixin } from './mixins'

declare module 'styled-components' {
	export interface DefaultTheme {
		color: typeof color
		spacing: typeof spacing
		font: {
			size: typeof fontSize
			weight: typeof fontWeight
		}
		shadow: typeof shadow
		borderRadius: typeof borderRadius
		breaktpoints: typeof breaktpoints
	}
}

const color = {
	primary: '#00A896',
	primaryDark: '#009485',
	secondary: '#F3752B',
	secondaryLight: '#F79D5C',
	white: '#FFFFFF',
	black: '#1F1F33',
	gray100: '#F9F9FB',
	gray200: '#E1E1ED',
	gray400: '#8181B1',
	gray600: '#4B4B7C',
	success: '#00A896',
	warning: '#F18F01',
	error: '#E3170A'
}

const spacing = {
	xs: '4px',
	s: '8px',
	m: '12px',
	l: '16px',
	xl: '24px',
	'2xl': '32px'
} as const

const fontSize = {
	xs: fontSizeMixin(12, 18),
	sm: fontSizeMixin(14, 20),
	base: fontSizeMixin(16, 24),
	lg: fontSizeMixin(20, 24),
	xl: fontSizeMixin(24, 32),
	'2xl': fontSizeMixin(28, 36),
	'3xl': fontSizeMixin(40, 56)
} as const

const fontWeight = {
	regular: 400,
	medium: 600,
	bold: 800
} as const
const font = { size: fontSize, weight: fontWeight }

const borderRadius = {
	'2xs': '4px',
	xs: '8px',
	s: '10px',
	m: '12px',
	l: '14px',
	xl: '16px',
	round: '50%'
} as const

const shadow = {
	sm: 'box-shadow: 0 16px 32px rgba(75, 75, 124, 0.05), 0 0 4px rgba(75, 75, 124, 0.1);',
	lg: 'box-shadow: 0 8px 16px rgba(75, 75, 124, 0.05);',
	panelTop: 'box-shadow: 0 -16px 32px rgba(75, 75, 124, 0.05), 0 0 4px rgba(75, 75, 124, 0.1);',
	panelBottom: 'box-shadow: 0 16px 32px rgba(75, 75, 124, 0.05), 0 0 4px rgba(75, 75, 124, 0.1);',
	innerSm: 'box-shadow: inset 0 2px 2px rgba(20, 20, 55, 0.1);'
}

const breaktpoints = {
	desktop: '(min-width: 768px)'
}

export const theme: DefaultTheme = { color, spacing, font, borderRadius, shadow, breaktpoints }

import { css } from 'styled-components'

export const fontSizeMixin = (sizeInPx: number, lineHeght = sizeInPx) => css`
	font-size: ${rem(sizeInPx)};
	line-height: ${lineHeght / sizeInPx};
`

export const rem = (valuePx: number, base = 16): string => `${valuePx / base}rem`

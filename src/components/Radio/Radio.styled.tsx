import styled, { css } from 'styled-components'

export const RadioGroup = styled.fieldset`
	margin: 0;
	border: none;
`

export const RadioGroupLabel = styled.legend(
	({ theme }) => css`
		font-weight: ${theme.font.weight.medium};
	`
)

export const RadioItemsContainer = styled.ul(
	({ theme: { color, breakpoints, borderRadius } }) => css`
		margin: 0;
		display: flex;
		gap: 2px;
		padding: 2px;
		background: ${color.gray100};
		border-radius: ${borderRadius.m};
		width: max-content;

		@media ${breakpoints.desktop} {
			flex-wrap: wrap;
			width: fit-content;
			border-radius: ${borderRadius.l};
		}
	`
)

export const RadioItem = styled.li<{ checked: boolean }>(
	({ theme: { color, spacing, font, borderRadius, breakpoints, shadow }, checked }) => css`
		& label {
			display: inline-block;
			padding: ${spacing.xs} ${spacing.m};
			background: transparent;
			font-weight: ${font.weight.regular};
			border-radius: ${borderRadius.s};
			cursor: pointer;

			${checked &&
			css`
				background-color: ${color.white};
				${shadow.sm};
				color: ${color.black};
			`}

			@media ${breakpoints.desktop} {
				padding: ${spacing.s} ${spacing.l};
				border-radius: ${borderRadius.m};
			}
		}
	`
)

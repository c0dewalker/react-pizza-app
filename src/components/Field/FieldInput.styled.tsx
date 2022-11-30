import styled, { css } from 'styled-components'

export const StyledInput = styled.input(
	({ theme: { color, spacing, borderRadius, breaktpoints } }) => css`
		border: 2px solid ${color.gray200};
		border-radius: ${borderRadius.xs};
		padding: ${spacing.m};

		&::placeholder {
			color: ${color.gray400};
		}

		&:hover {
			border-color: ${color.gray400};
		}

		&:focus,
		&:focus-visible {
			outline-color: ${color.primary};
		}

		@media ${breaktpoints.desktop} {
			padding: ${spacing.l};
		}
	`
)

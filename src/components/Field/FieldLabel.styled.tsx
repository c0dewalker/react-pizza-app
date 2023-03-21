import styled, { css } from 'styled-components'

export const StyledLabel = styled.label(
	({ theme: { spacing, breakpoints } }) => css`
		display: block;

		& + input {
			margin-top: ${spacing.xs};
		}

		@media ${breakpoints.desktop} {
			& + input {
				margin-top: ${spacing.s};
			}
		}
	`
)

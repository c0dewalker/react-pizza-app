import styled, { css } from 'styled-components'

export const StyledLabel = styled.label(
	({ theme: { spacing, breaktpoints } }) => css`
		display: block;
      
		& + input {
			margin-top: ${spacing.xs};
		}

		@media ${breaktpoints.desktop} {
			& + input {
				margin-top: ${spacing.s};
a			}
		}
	`
)

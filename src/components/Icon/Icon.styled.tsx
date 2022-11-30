import styled, { css } from 'styled-components'
import { IconProps } from './Icon'

export const StyledIcon = styled.svg<Partial<IconProps>>(
	({ theme, color }) => css`
		width: ${theme.spacing.l};
		height: ${theme.spacing.l};
		fill: ${color ?? theme.color.gray600};

		& path {
			fill-rule: evenodd;
			clip-rule: evenodd;
		}
	`
)

import styled, { css } from 'styled-components'
import { StyledIcon } from '../Icon'
import { ButtonProps } from './'

export const StyledButton = styled.button<ButtonProps>(
	({ variant, size, isFullWidth, theme: { spacing, color, borderRadius, font, shadow } }) => css`
		cursor: pointer;
		display: inline-flex;
		align-items: center;

		color: ${variant === 'primary' ? color.white : color.gray600};
		background-color: ${variant === 'primary' ? color.primary : color.white};

		${size === 'large' ? font.size.lg : font.size.base}
		font-weight: ${font.weight.bold};

		padding: ${size === 'large' ? spacing.l + ' ' + spacing.xl : spacing.m + ' ' + spacing.l};
		border: 1px solid;
		border-color: ${variant === 'primary' || variant === 'ghost' ? 'transparent' : color.gray200};
		border-radius: ${borderRadius.xl};

		width: ${isFullWidth && '100%'};

		&:hover {
			background-color: ${variant === 'primary' ? color.primaryDark : color.gray100};
			${shadow.sm}
		}

		&:active {
			background-color: ${variant === 'primary' ? color.primaryDark : color.gray100};
			${shadow.innerSm}
		}

		&:disabled {
			cursor: revert;
			color: ${color.gray400};
			background-color: ${color.gray200};
			border-color: transparent;
			box-shadow: none;
		}

		& ${StyledIcon} {
			fill: currentColor;
		}

		${StyledIcon} + span {
			margin-left: ${spacing.s};
		}
	`
)

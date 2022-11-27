import { DecoratorFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../src/styles'

const withTheme: DecoratorFn = StoryFn => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<StoryFn />
	</ThemeProvider>
)

export const globalDecorators = [withTheme]

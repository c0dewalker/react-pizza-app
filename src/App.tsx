import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<h1>Artem Pizza</h1>
	</ThemeProvider>
)

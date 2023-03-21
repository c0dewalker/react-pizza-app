import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle(
	({ theme: { color, font, breakpoints } }) => css`
		@font-face {
			font-family: 'Nunito';
			font-style: normal;
			font-weight: 400;
			src: local('Nunito'), url('assets/fonts/nunito-v25-latin-regular.woff2') format('woff2'),
				url('assets/fonts/nunito-v25-latin-regular.woff') format('woff');
		}
		@font-face {
			font-family: 'Nunito';
			font-style: normal;
			font-weight: 600;
			src: local('Nunito'), url('assets/fonts/nunito-v25-latin-600.woff2') format('woff2'),
				url('assets/fonts/nunito-v25-latin-600.woff') format('woff');
		}
		@font-face {
			font-family: 'Nunito';
			font-style: normal;
			font-weight: 800;
			src: local('Nunito'), url('assets/fonts/nunito-v25-latin-800.woff2') format('woff2'),
				url('assets/fonts/nunito-v25-latin-800.woff') format('woff');
		}

		:root {
			box-sizing: border-box;
			font-family: Nunito, Futura, Avenir, Arial, sans-serif;
			-webkit-text-size-adjust: 100%;
			color: ${color.gray600};
		}

		*,
		*::before,
		*::after {
			box-sizing: inherit;
		}

		body {
			margin: 0;
			${font.size.sm};
		}
		@media ${breakpoints.desktop} {
			body {
				${font.size.base};
			}
		}

		button,
		input,
		select {
			margin: 0;
			font-family: inherit;
			font-size: 100%;
			text-transform: none;
		}

		/**
      * Correct the inability to style clickable types in iOS and Safari.
      */
		button,
		[type='button'],
		[type='reset'],
		[type='submit'] {
			-webkit-appearance: button;
		}
		/**
      * Remove the inner border and padding in Firefox.
      */
		button::-moz-focus-inner,
		[type='button']::-moz-focus-inner,
		[type='reset']::-moz-focus-inner,
		[type='submit']::-moz-focus-inner {
			border-style: none;
			padding: 0;
		}
		/**
      * Restore the focus styles unset by the previous rule.
      */
		button:-moz-focusring,
		[type='button']:-moz-focusring,
		[type='reset']:-moz-focusring,
		[type='submit']:-moz-focusring {
			outline: 1px dotted ButtonText;
		}

		img {
			display: block;
			width: 100%;
			height: auto;
			user-drag: none;
			user-select: none;
		}

		ul {
			margin: 0;
		}

		li {
			list-style: none;
		}

		.visually-hidden {
			display: inline-block;
			position: absolute;
			overflow: hidden;
			clip: rect(0 0 0 0);
			height: 1;
			width: 1;
			margin: -1;
			padding: 0;
			border: 0;
		}
	`
)

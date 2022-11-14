import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {CssBaseline, ThemeProvider} from '@mui/material'
import { lightTheme } from '../themes/light-theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ lightTheme }>
      <Component {...pageProps} />
      <CssBaseline />

    </ThemeProvider>
    )
}

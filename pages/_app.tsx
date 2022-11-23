import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import {ThemeProvider} from '@mui/material'
import { lightTheme } from '../themes/light-theme';
import useSWR, { SWRConfig } from 'swr'
import { UiProvider } from '../context';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig 
      value={{
        //refreshInterval: 500,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <UiProvider>
        <ThemeProvider theme={ lightTheme }>
          <Component {...pageProps} />
          <CssBaseline />
      
        </ThemeProvider>

      </UiProvider>

      
    </SWRConfig>

  )
}
 
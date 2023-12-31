import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { customTheme, lightTheme, darkTheme } from '@/themes'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

interface Props extends AppProps {
  theme: string
}
export default function App({ Component, pageProps, theme = 'dark' }: Props) {

  // console.log({theme})

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {

    const cookieTheme = Cookies.get('theme') || 'light'
    const selectedTheme = cookieTheme === 'light'
      ? lightTheme
      : (cookieTheme === 'dark')
        ? darkTheme
        : customTheme

    setCurrentTheme(selectedTheme)
  }, [])


  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

// getInitialProps is not really recommended to use it cuz we lose the 
// automatic static optimization and we lose the capability to use static paths
// App.getInitialProps = async (appContext: AppContext) => {

//   const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme: 'light'}
//   const validTheme= ['light', 'dark', 'custom']

//   return {
//     theme: validTheme.includes(theme) ? theme : 'dark',
//   }  
// }



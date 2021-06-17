import NextApp from 'next/app'
import React from 'react'
import '../styles/globals.css'
import { StylesProvider, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6573c3',
      main: '#3072FF',
      dark: '#2c387e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#78a0ff',
      contrastText: '#000',
    },
    button: {
      light: '#ff847c',
      main: '#f25050',
      dark: '#b91027',
      contrastText: '#fff',
    }
  },
});

export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    )
  }
}

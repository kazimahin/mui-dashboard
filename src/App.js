import React from 'react'
import Header from "./component/header"
import "./App.css"
import value from "./values"
import { BrowserRouter} from "react-router-dom"
import {ThemeProvider ,createMuiTheme } from "@material-ui/core"
import { green } from '@material-ui/core/colors'
 

const theme = createMuiTheme({
  
  palette:{
    type:"dark",
    primary:green
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>

        <Header value={value}>
          {/* attach all element or use router */}<br/>Write here
        </Header>

    </BrowserRouter>
    </ThemeProvider>
   
  )
}

export default App

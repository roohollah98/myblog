import React from "react";
import ReactDOM from "react-dom/client";
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client'
import './styles/index.css'
import App from "./App";
import theme from './mui/theme.js'
import {ThemeProvider} from '@mui/material'
import { BrowserRouter } from "react-router-dom";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import FormContextProvider from "./components/context/formcontext";

const client=new ApolloClient({
    uri:process.env.REACT_APP_URI,
    cache:new InMemoryCache()
})

const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin]
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApolloProvider client={client}>
<ThemeProvider theme={theme}>

  <CacheProvider value={cacheRtl}>
  <FormContextProvider>

<BrowserRouter>

<App />
</BrowserRouter>
  </FormContextProvider>
   </CacheProvider>
</ThemeProvider>
</ApolloProvider>
);

import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'

import Routes from './routes'
import Header from './Components/Header';
import store from './Store'

export default function App() {
 return (
  <Provider store={store}>
    <BrowserRouter>
      <Header/>
      <Routes/>
    </BrowserRouter>
   </Provider>
 );
}
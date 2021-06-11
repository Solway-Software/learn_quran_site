import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from '../components/shared/Header/Header'
import HomePage from '../components/pages/HomePage/HomePage'
import AboutPage from '../components/pages/AboutPage/AboutPage'
import ServicesPage from '../components/pages/ServicesPage/ServicesPage'
import PackagesPage from '../components/pages/PackagesPage/PackagesPage'
import ContactPage from '../components/pages/ContactPage/ContactPage'
import Footer from '../components/shared/Footer/Footer';

const App = () => (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/about' component={AboutPage} />
          <Route path='/services' component={ServicesPage} />
          <Route path='/packages' component={PackagesPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
)

export default App;

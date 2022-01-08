import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/pages/Home';
import NewClient from './components/pages/NewClient';
import Clients from './components/pages/Clients'
import PageNotFound from './components/pages/PageNotFound'

import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import Client from './components/pages/Client'

function App() {
  return (
    <Router>
      <Header />

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/newclient' element={<NewClient/>}/>
          <Route exact path='/clients' element={<Clients/>}/>
          <Route path='/client/:id' element={<Client/>}/>
          <Route path ='*' element={<PageNotFound/>}/>
        </Routes>

      <Footer />
    </Router>
  )
}

export default App;

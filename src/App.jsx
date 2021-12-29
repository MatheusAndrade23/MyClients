import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/pages/Home';
import NewClient from './components/pages/NewClient';
import Clients from './components/pages/Clients'

import Container from './components/layouts/Container';
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'

function App() {
  return (
    <Router>
    <Header />

    <Container>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/newclient' element={<NewClient/>}/>
        <Route exact path='/clients' element={<Clients/>}/>
      </Routes>

    </Container>

    <Footer />
  </Router>
  )
}

export default App;

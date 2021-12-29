import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/pages/Home';

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
      </Routes>

    </Container>

    <Footer />
  </Router>
  );
}

export default App;

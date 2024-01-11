import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from './component/NavigationBar';
import Footer from './component/Footer';


const App = () => {
  return (
    <>
      <NavigationBar />
      <Footer />
      <main className='py-0'>
        <Container >
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App

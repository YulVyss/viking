import './App.css';
import './css/style.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About'
import Main from './pages/main/Main'
import Services from './pages/services/Services'
import Service1 from './pages/services/Service1'
import Service2 from './pages/services/Service2'
import Job from './pages/job/Job'
import Contacts from './pages/contacts/Contacts'

function App() {
  const [navLink, setNavLink] = useState()

  function styleNav(e) {

    setNavLink(e.target.href.split('/')[3])

  }

  return (
    <div className='wrapper'>
      <Header navLink={navLink} styleNav={styleNav} />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/services' element={<Services />} />
          <Route path='/service1' element={<Service1 />} />
          <Route path='/service2' element={<Service2 />} />
          <Route path='/about' element={<About />} />
          <Route path='/job' element={<Job />} />
          <Route path='/contacts' element={<Contacts />} />


        </Routes>
      </main>


      <Footer styleNav={styleNav} />
    </div>
  );
}

export default App;

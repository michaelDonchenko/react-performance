import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './navigation'

//regular imports

import PageNotFound from './pages/404'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'

//lazy imports

// const PageNotFound = React.lazy(() => import('./pages/404'))
// const Home = React.lazy(() => import('./pages/home'))
// const About = React.lazy(() => import('./pages/about'))
// const Contact = React.lazy(() => import('./pages/contact'))

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />

      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  )
}

export default Router

import React from 'react'
import Header from './component/header/Header'
import Content from './component/content/Content'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainPost from './MainPost';
import NotFound from './component/NotFound';
import Footer from './component/footer/Footer'

function App() {
  return (
    <>
      <Header></Header>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <div className="contentDiv">
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/:postId" element={<MainPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Container>
      </React.Fragment>
      <Footer></Footer>
    </>
  )
}

export default App

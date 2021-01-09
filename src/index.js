import React from 'react'
import ReactDom from 'react-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import WrestleImage from './components/WrestleImage'
import './index.css'

const Index = () => {
   return (
      <React.Fragment>
         <NavBar />
         <WrestleImage />
         <Footer />
      </React.Fragment>
   )
}

ReactDom.render(<Index />, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header';
import MainSection from './components/MainSection';

import './index.css'

const App = () => {
//  var inputNode = document.querySelector('input')
//  inputNode.addEventListener('change', playSelectedFile, false)

  return (
    <div className="fillPage">
      <Header />

      <MainSection />

      <input type="file" accept="video/*"/>

    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

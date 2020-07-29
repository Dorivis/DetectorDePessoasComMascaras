import React from 'react'
import ReactDOM from 'react-dom'

import useModel from './useModel'
import ObjectDetectionVideo from './object-detection-video/ObjectDetectionVideo'
import CountProvider from './context/Count';

import MainSection from './components/MainSection';
import Header from './components/Header';
import Map from './components/Map';

import './index.css'

const App = () => {
  const model = useModel(process.env.PUBLIC_URL + '/model_web')
//  var inputNode = document.querySelector('input')
//  inputNode.addEventListener('change', playSelectedFile, false)

  return (
    <CountProvider>
    <div className="fillPage">
      <Header />
      <div id="message"></div>
      <input type="file" accept="video/*"/>
      {/* <MainSection />*/}
      <ObjectDetectionVideo
        model={model}
        // onPrediction={handlePrediction}
        // render={render}
         // aspectFill: true
         // aspectFit:  The option to scale the video to fit the size of the view
        //             by maintaining the aspect ratio. Any remaining area of the
         //            view's bounds is transparent.
        fit="aspectFit"
        // mirrored:   mirror the video about its vertical axis.
        mirrored
      />
      <Map/>
    </div>
    </CountProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

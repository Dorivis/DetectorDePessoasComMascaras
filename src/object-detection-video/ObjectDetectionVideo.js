import React, { useRef, useCallback, useState } from 'react'

import useWebcam from './useWebcam'
import { getRetinaContext } from './retina-canvas'
import { renderPredictions } from './render-predictions'
import { useCount } from '../context/Count';
import Info from '../components/Info';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const video = urlParams.get('video')

const ObjectDetectionVideo = React.memo(
  ({ model, onPrediction, fit, mirrored, render }) => {
    const [personWithMask, setPersonWithMask] = useState(0);
    const [personWithoutMask, setPersonWithoutMask] = useState(0);
    const videoRef = useRef();
    const canvasRef = useRef();

    const { count, setCount } = useCount();

    useWebcam(videoRef, () => {
      detectFrame()
    })

    const detectFrame = useCallback(async () => {
      if(model){
        const predictions = await model.detect(videoRef.current);

        if (onPrediction) {
          onPrediction(predictions)
        }
        const wantedWidth = videoRef.current.offsetWidth

        const wantedHeight = videoRef.current.offsetHeight
        const videoWidth = videoRef.current.videoWidth
        const videoHeight = videoRef.current.videoHeight

        const scaleX = wantedWidth / videoWidth
        const scaleY = wantedHeight / videoHeight

        let scale
        if (fit === 'aspectFit') {
          scale = Math.min(scaleX, scaleY)
        } else {
          scale = Math.max(scaleX, scaleY)
        }

        const xOffset = (wantedWidth - videoWidth * scale) / 2
        const yOffset = (wantedHeight - videoHeight * scale) / 2

        const ctx = getRetinaContext(canvasRef.current)

        ctx.setWidth(wantedWidth)
        ctx.setHeight(wantedHeight)
        ctx.clearAll()

        // Update predictions to match canvas.
        const offsetPredictions = predictions.map((prediction) => {
          let x = prediction.bbox[0] * scale + xOffset
          const y = prediction.bbox[1] * scale + yOffset
          const width = prediction.bbox[2] * scale
          const height = prediction.bbox[3] * scale

          if (mirrored) {
            x = wantedWidth - x - width
          }
          return { ...prediction, bbox: [x, y, width, height] }
        });

        const withMask = predictions.filter((prediction, index, array) => prediction.class == 'Com mascara');
        const withoutMask = predictions.filter((prediction, index, array) => prediction.class == 'Sem mascara');

        setCount(predictions.length);
        setPersonWithMask(withMask.length);
        setPersonWithoutMask(withoutMask.length);
        const renderFunction = render || renderPredictions

        renderFunction(ctx, offsetPredictions)
        requestAnimationFrame(() => {
          detectFrame()
        })
      }
    }, [fit, mirrored, model, onPrediction, render])

    if (canvasRef.current) {
      canvasRef.current.style.position = 'absolute'
      canvasRef.current.style.left = '0'
      canvasRef.current.style.top = '0'
    }

    if (videoRef.current) {
      videoRef.current.style.width = '50%'
      videoRef.current.style.height = '50%'
      if (fit === 'aspectFit') {
        videoRef.current.style.objectFit = 'contain'
      } else {
        videoRef.current.style.objectFit = 'cover'
      }

      if (mirrored) {
        videoRef.current.style.transform = 'scaleX(-1)'
      } else {
        videoRef.current.style.transform = 'scaleX(1)'
      }
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
        <video controls autoPlay playsInline ref={videoRef} src={video} muted/>
        <canvas ref={canvasRef} />
        <Info personWithMask={personWithMask} personWithoutMask={personWithoutMask} count={count} />
      </div>
    )
  }
)

export default ObjectDetectionVideo

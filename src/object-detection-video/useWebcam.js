import { useEffect } from 'react'

const useWebcam = (videoRef, onLoaded) => {
  useEffect(() => {

      onLoaded()

  }, [onLoaded, videoRef])
}



export default useWebcam

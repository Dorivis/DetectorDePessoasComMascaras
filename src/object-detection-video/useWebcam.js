import { useEffect } from 'react'

const useWebcam = (videoRef, onLoaded) => {
  useEffect(() => {
      var URL = window.URL || window.webkitURL
      var displayMessage = function (message, isError) {
        var element = document.querySelector('#message')
        element.innerHTML = message
        element.className = isError ? 'error' : 'info'
      }
      var playSelectedFile = function (event) {
        var file = this.files[0]
        var videoNode = document.querySelector('video')

        var fileURL = URL.createObjectURL(file)
        videoNode.src = fileURL
      }
      var inputNode = document.querySelector('input')
      inputNode.addEventListener('change', playSelectedFile, false)
      var videoNode = document.querySelector('video')

      videoRef.current = videoNode
    //  if(!videoRef.current.onloadedmetadata){
        console.log(videoRef.current.onloadedmetadata);
    /*    videoRef.current.onloadedmetadata = () => {
          onLoaded()
        }*/
    /*  }else{
        console.log(videoRef.current.onloadedmetadata)
      }*/

      videoRef.current.onloadeddata = () => {
        onLoaded()
      }
  }, [onLoaded, videoRef])
}



export default useWebcam
import { useEffect } from 'react';

const useVideo = (videoRef, onLoaded) => {
  useEffect(() => {
      onLoaded();
  }, [onLoaded, videoRef]);
}

export default useVideo;

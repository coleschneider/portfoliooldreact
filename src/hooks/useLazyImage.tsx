import * as React from 'react';

const resolveImage = (url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.onload = () => resolve()
      image.onerror = reject
      image.src = url
    })
  }

function useLazyImage(imageSrc: string, fallback: string){
    const [src, setSource] = React.useState(fallback)
    React.useEffect(() => {
        resolveImage(imageSrc).then(() => {
            setSource(imageSrc)
        })
    }, [])
    return src
}

export default useLazyImage
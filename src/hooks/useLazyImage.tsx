import * as React from 'react'

const resolveImage = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(url)
    image.onerror = reject
    image.src = url
  })
}

function useLazyImage(imageSrc: string, fallback: string) {
  const [src, setSource] = React.useState(fallback)
  const isMountedRef = React.useRef<boolean>()

  React.useEffect(() => {
    isMountedRef.current = true

    const loadImage = async () => {
      const source = await resolveImage(imageSrc)
      if (isMountedRef.current) {
        setSource(source)
      }
    }
    loadImage()

    return () => {
      isMountedRef.current = false
    }
  }, [imageSrc])
  return src
}

export default useLazyImage

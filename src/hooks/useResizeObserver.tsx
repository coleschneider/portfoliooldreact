import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

interface Props {
  defaultWidth: number
  defaultHeight: number
}

function useResizeObserver({ defaultWidth = 1, defaultHeight = 1, update = () => {} }: Partial<Props> = {}) {
  const ref = React.useRef(null)
  const [width, changeWidth] = React.useState(defaultWidth)
  const [height, changeHeight] = React.useState(defaultHeight)

  React.useEffect(() => {
    const element = ref.current
    const resizeObserver = new ResizeObserver(entries => {
      if (!Array.isArray(entries)) {
        return
      }

      // Since we only observe the one element, we don't need to loop over the
      // array
      if (!entries.length) {
        return
      }

      const entry = entries[0]

      changeWidth(entry.contentRect.width)
      changeHeight(entry.contentRect.height)
      update({ width, height })
    })

    resizeObserver.observe(element)

    return () => resizeObserver.unobserve(element)
  }, [height, update, width])

  return { ref, width, height }
}
export default useResizeObserver

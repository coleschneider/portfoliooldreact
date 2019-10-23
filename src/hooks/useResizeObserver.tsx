import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export const useResizeObserver = (ref: React.RefObject<HTMLElement>, callback: DimensionCallback) => {
  React.useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const { top, right, bottom, left, width, height } = entries[0].target.getBoundingClientRect()
      callback({ top, right, bottom, left, width, height })
    })
    if (ref.current) {
      resizeObserver.observe(ref.current)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [callback, ref])
}
export default useResizeObserver

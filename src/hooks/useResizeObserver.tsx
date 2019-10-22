import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export interface ResizeObserverEntry {
  target: HTMLElement
  contentRect: DOMRectReadOnly
}
export type ObserverCallback = (entry: DOMRectReadOnly) => void

export const useResizeObserver = (ref: React.RefObject<HTMLElement>, callback: ObserverCallback) => {
  React.useEffect(() => {
    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      const { top, right, bottom, left, width, height } = entries[0].target.getBoundingClientRect()
      callback({ top, right, bottom, left, width, height })
    })

    resizeObserver.observe(ref.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [callback, ref])
}
export default useResizeObserver

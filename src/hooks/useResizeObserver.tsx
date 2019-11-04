/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useLayoutEffect } from 'react'

export interface DimensionObject {
  width: number
  height: number
  top: number
  left: number
  x: number
  y: number
  right: number
  bottom: number
}

export type UseDimensionsHook = [(node: HTMLElement) => void, {} | DimensionObject, HTMLElement]

export interface UseDimensionsArgs {
  liveMeasure?: boolean
}

function getDimensionObject(node: HTMLElement): DimensionObject {
  const { top, right, bottom, left, width, height } = node.getBoundingClientRect()

  // return {
  //   width: rect.width,
  //   height: rect.height,
  //   top: 'x' in rect ? rect.x : rect.top,
  //   left: 'y' in rect ? rect.y : rect.left,
  //   x: 'x' in rect ? rect.x : rect.left,
  //   y: 'y' in rect ? rect.y : rect.top,
  //   right: rect.right,
  //   bottom: rect.bottom,
  // }
  return { top, right, bottom, left, width, height }
}

function useDimensions({ liveMeasure = true }: UseDimensionsArgs = {}): UseDimensionsHook {
  const [dimensions, setDimensions] = useState({})
  const [node, setNode] = useState(null)

  const ref = useCallback(node => {
    setNode(node)
  }, [])

  useLayoutEffect(() => {
    if (node) {
      const measure = () => setDimensions(getDimensionObject(node))
      measure()

      if (liveMeasure) {
        window.addEventListener('resize', measure)
        window.addEventListener('scroll', measure)

        return () => {
          window.removeEventListener('resize', measure)
          window.removeEventListener('scroll', measure)
        }
      }
    }
  }, [node]) // eslint-disable-next-line

  return [ref, dimensions, node]
}

export default useDimensions

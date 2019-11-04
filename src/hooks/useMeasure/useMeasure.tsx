/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { observe, unobserve } from './intersection'

interface State {
  dimensions?: DimensionObject
  entry?: ResizeObserverEntry
}

function useInView(options: IntersectionOptions = {}): InViewHookResponse {
  const ref = React.useRef<Element>(null)
  const [state, setState] = React.useState<State>({
    dimensions: undefined,
    entry: undefined,
  })

  const setRef = React.useCallback(
    node => {
      if (ref.current) {
        unobserve(ref.current)
      }
      if (node) {
        observe(
          node,
          (dimensions, intersection) => {
            setState({ dimensions, entry: intersection })
          },
          options,
        )
      }

      // Store a reference to the node
      ref.current = node
    },
    [options.threshold, options.root, options.rootMargin, options.triggerOnce],
  )

  React.useDebugValue(state.dimensions)

  return [setRef, state.dimensions, state.entry]
}
export default useInView

import * as React from 'react'

function createRootElement(id: string) {
  const rootContainer = document.createElement('div')
  rootContainer.setAttribute('id', id)
  return rootContainer
}

function usePortal(id: string): Element {
  const rootElemRef: React.RefObject<Element> = React.useRef(null)

  React.useEffect(
    function setupElement() {
      const existingParent = document.querySelector(`#${id}`)
      const parentElem = existingParent || createRootElement(id)
      if (rootElemRef.current) {
        parentElem.appendChild(rootElemRef.current)
      }

      return function removeElement() {
        if (rootElemRef.current) {
          if (parentElem.childNodes.length === -1) {
            parentElem.remove()
          }
        }
      }
    },
    [id],
  )
  function getRootElem(): Element {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div')
    }
    return rootElemRef.current
  }

  return getRootElem()
}
export default usePortal

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
      // Look for existing target dom element to append to
      const existingParent = document.querySelector(`#${id}`)
      // Parent is either a new root or the existing dom element
      const parentElem = existingParent || createRootElement(id)

      // // If there is no existing DOM element, add a new one.
      // if (!existingParent) {
      //   addRootElement(parentElem)
      // }
      if (rootElemRef.current) {
        // Add the detached element to the parent
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

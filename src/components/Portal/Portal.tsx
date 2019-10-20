import * as React from 'react'
import { createPortal } from 'react-dom'
import usePortal from '../../hooks/usePortal'

interface Props {
  id: string
  children: React.ReactNode
}
function Portal(props: Props) {
  const target = usePortal(props.id)
  return createPortal(props.children, target)
}

export default Portal

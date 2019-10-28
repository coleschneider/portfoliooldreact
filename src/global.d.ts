type DimensionCallback = (dimensions: ClientRect | DOMRect) => void
type Icons = 'PointerRight' | 'Close' | 'LeftArrow'

interface Card {
  description: string[]
  id: string | number
  cardImage: string
  placeholder: string
}

type ConstantPaths = '/mywork' | '/' | '/static/media/Resume.pdf'

import ORCASPreview from '../../assets/images/ORCASPreview.png'
import ORCASPreviewSmall from '../../assets/images/ORCASPreviewSmall.jpg'
import BlendLogo from '../../assets/images/BlendLogo.png'
import BlendLogoSmall from '../../assets/images/BlendLogoSmall.jpg'

const cardsConfig: Card[] = [
  {
    id: 1,
    description: ['Software ', 'Engineer ', 'Internship'],
    cardImage: BlendLogo,
    placeholder: BlendLogoSmall,
  },
  {
    id: 2,
    description: ['Non ', '-', 'Profit ', 'Website'],
    cardImage: ORCASPreview,
    placeholder: ORCASPreviewSmall,
  },
]

export const cardsById = cardsConfig.reduce(
  (acc, curr) => {
    acc[curr.id.toString()] = curr
    return acc
  },
  {} as {
    [k: string]: Card
  },
)
export default cardsConfig

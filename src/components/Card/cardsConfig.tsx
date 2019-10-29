import BlendLogo from '../../assets/images/BlendLogo.png'
import BlendLogoSmall from '../../assets/images/BlendLogoSmall.jpg'
import DanMillerATI from '../../assets/images/DanMillerATI.png'
import DanMillerATISmall from '../../assets/images/DanMillerATISmaller.jpg'
import ORCASPreview from '../../assets/images/ORCASPreview.png'
import ORCASPreviewSmall from '../../assets/images/ORCASPreviewSmall.jpg'

export const cardsConfig: Card[] = [
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
  {
    id: 3,
    description: ['Dan ', 'Miller ', 'ATI '],
    cardImage: DanMillerATI,
    placeholder: DanMillerATISmall,
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

// export default cardsConfig

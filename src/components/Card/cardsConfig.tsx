import ORCASPreview from '../../assets/images/ORCASPreview.png'
import BlendLogo from '../../assets/images/BlendLogo.png'

const cardsConfig: Card[] = [
  {
    id: 1,
    description: ['Software ', 'Engineer ', 'Internship'],
    cardImage: BlendLogo,
  },
  {
    id: 2,
    description: ['Non ', '-', 'Profit ', 'Website'],
    cardImage: ORCASPreview,
  },
]


export const cardsById = cardsConfig.reduce((acc, curr) => {
  acc[curr.id.toString()] = curr;
  return acc
}, {} as {
  [k: string]: Card
})
export default cardsConfig

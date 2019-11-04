/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import styled from 'styled-components'
import { animated, useTrail, SpringConfig } from 'react-spring'
import { RouteComponentProps } from 'react-router'
import withNavigation from './withNavigation'
import { Pane } from '../../theme/Elements'
import { springs } from '../../theme/animations'
import useResizeObserver from '../../hooks/useResizeObserver'
import useLazyImage from '../../hooks/useLazyImage'
import usePrevious from '../../hooks/usePrevious'
import useDimensions from '../../hooks/useMeasure/useMeasure'

export const CardWrapper = styled(Pane)`
  z-index: 1200;
`
export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  /* z-index: 0; */
`
const ColumnFlex = styled.div`
  margin: 16px;
  flex: 1 1 250px;
`

type Props = RouteComponentProps & Card & { onUpdateCards: DimensionCallback }

interface TrailAnimation {
  config: SpringConfig
  opacity: number
  x: number
  height: number
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

function Card({
  onUnselectCard,
  onSelectCard,
  onUpdateCards,
  location,
  history,
  id,
  cardImage,
  description,
  placeholder,
}: Props) {
  const element = React.useRef(null)
  React.useEffect(() => {
    const handleResize = () => {
      if (element.current) {
        const { top, right, bottom, left, width, height } = element.current.getBoundingClientRect()
        onUpdateCards({ top, right, bottom, left, width, height }, id)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // const imageSrc = useLazyImage(cardImage, placeholder)
  // const [node, setNode] = React.useState(null)

  const [trail, set] = useTrail<TrailAnimation>(description.length, springs.trailCards)

  // React.useEffect(() => {
  //   set({
  //     opacity: 1,
  //     x: 0,
  //     height: 80,
  //   })
  // }, [location, set])

  const animateOnClick = () => {
    const { top, right, bottom, left, width, height } = element.current.getBoundingClientRect()
    onSelectCard(id)
    onUpdateCards({ top, right, bottom, left, width, height }, id)
    history.push({
      pathname: `/work/${id}`,
      state: {
        id,
        to: 'modal',
        background: location,
        meta: {
          from: { top, right, bottom, left, width, height },
        },
      },
    })

    // selectCard(id)
    // const completed = []
    // set({
    //   opacity: 0,
    //   x: -200,
    //   height: 80,
    //   onRest: item => {
    //     completed.push(item)
    //     if (completed.length === description.length) {
    //       // eslint-disable-next-line
    //       handleClick()
    //     }
    //   },
    // })
  }
  return (
    // <ColumnFlex ref={ref} onClick={animateOnClick}>
    <CardWrapper onClick={animateOnClick} hover ref={ref => (element.current = ref)}>
      <CardImage src={cardImage} />
    </CardWrapper>
    // </ColumnFlex>
  )
}

// class Card extends React.Component {
//   element = null
//         componentDidMount(){
//             window.addEventListener('resize', this.handleResize)
//         }
//         componentWillUnmount(){
//             window.removeEventListener('resize', this.handleResize)
//         }
//         handleResize = (e) => {
//             const { top, right, bottom, left, width, height } = this.element.getBoundingClientRect();
//             this.props.onUpdateCards({ top, right, bottom, left, width, height }, this.props.id)
//             // if(this.props.isModal){
//             //   this.props.onUpdateCards({ top, right, bottom, left, width, height }, this.props.id)
//             // }

//         }
//   render(){
//   const animateOnClick = () => {

//     const { top, right, bottom, left, width, height } = this.element.getBoundingClientRect();

//     this.props.onSelectCard({ top, right, bottom, left, width, height }, this.props.id)
//     console.log(this.props)
//     this.props.history.push({
//       pathname: `/work/${this.props.id}`,
//       state: {
//         background: this.props.location,
//         to: 'modal',
//         meta: {
//           from: { top, right, bottom, left, width, height },
//         },
//       },
//     })
//   }
//     return (

//     <CardWrapper ref={ref => this.element = ref} onClick={animateOnClick} hover>
//       <CardImage src={this.props.cardImage} />
//     </CardWrapper>
//     )
//   }
// }

export default Card

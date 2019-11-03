import * as React from 'react'
import styled from 'styled-components'
import { animated, useTrail, SpringConfig } from 'react-spring'
import { RouteComponentProps } from 'react-router'
import { Pane } from '../../theme/Elements'
import { springs } from '../../theme/animations'
import useResizeObserver from '../../hooks/useResizeObserver'
import useLazyImage from '../../hooks/useLazyImage'
import usePrevious from '../../hooks/usePrevious'

export const CardWrapper = styled(Pane)`
  /* z-index: 0; */
`
export const CardImage = styled.img`
  width: 100%;
  /* z-index: 0; */
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

function Card({  onUpdateCards, location, history, id, cardImage, description, placeholder }: Props) {
  // const imageSrc = useLazyImage(cardImage, placeholder)
  // const [node, setNode] = React.useState(null)

  const [ref, dimensions, node] = useResizeObserver()

// React.useEffect(() => {
//   if(ref.current){
//     const { top, right, bottom, left, width, height } = ref.current.getBoundingClientRect();
//     setDimensions({ top, right, bottom, left, width, height })
//   }
// }, [ref])

// React.useEffect(() => {
  
// }, [dimensions])
React.useEffect(() => {
  onUpdateCards(dimensions)
}, [dimensions])
  const handleClick = () => {
    onUpdateCards(dimensions)
    history.push({
      pathname: `/work/${id}`,
      state: {
        background: location,
        to: 'modal',
        meta: {
          from: dimensions,
        },
      },
    })
  }

  const [trail, set] = useTrail<TrailAnimation>(description.length, springs.trailCards)

  React.useEffect(() => {
    set({
      opacity: 1,
      x: 0,
      height: 80,
    })
  }, [location, set])

  const animateOnClick = () => {
    handleClick()
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
    <CardWrapper ref={ref} onClick={animateOnClick} hover>
      <CardImage src={cardImage} />
    </CardWrapper>
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

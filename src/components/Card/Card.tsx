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
  /* z-index: 1200; */
  /* margin-top: 67px; */
`
export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
`
const ColumnFlex = styled.div`
  margin: 16px;
  flex: 1 1 250px;
`
const ImagePopUp = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  vertical-align: middle;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  transition: opacity 0.2s ease;
  :hover {
    opacity: 1;
  }
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
  currentCard,
  onSelectCard,
  onUpdateCards,
  location,
  history,
  id,
  cardImage,
  description,
  placeholder,
  shouldResize,
  setResize,
}: Props) {
  // const imageSrc = useLazyImage(cardImage, placeholder)
  const element = React.useRef(null)

  React.useEffect(() => {
    if (shouldResize) {
      const { top, right, bottom, left, width, height } = element.current.getBoundingClientRect()
      onUpdateCards({ top, right, bottom, left, width, height }, id)
      setResize(false)
    }
  }, [shouldResize])
  console.log(shouldResize, id)
  // const [node, setNode] = React.useState(null)

  const [trail, set] = useTrail<TrailAnimation>(description.length, springs.trailCards)

  React.useEffect(() => {
    set({
      opacity: 1,
      x: 0,
      height: 80,
    })
  }, [location, set])
  const handleClick = () => {
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
  }
  const animateOnClick = () => {
    // selectCard(id)
    const completed = []
    set({
      opacity: 0,
      x: -200,
      height: 80,
      onRest: item => {
        completed.push(item)
        if (completed.length === description.length) {
          // eslint-disable-next-line
          handleClick()
        }
      },
    })
  }
  return (
    // <ColumnFlex ref={ref} onClick={animateOnClick}>

    <CardWrapper
      onClick={animateOnClick}
      hover
      ref={ref => (element.current = ref)}
      style={{ position: currentCard ? undefined : 'relative' }}
    >
      <CardImage src={cardImage} />
      <ImagePopUp>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={description[index]}
            style={{
              ...rest,
              color: 'white',
              whiteSpace: 'pre',
              fontSize: '1.5em',
              transform: x.interpolate(y => `translate3d(0,${y}px,0)`),
            }}
          >
            <animated.div style={{ height }}>{description[index]}</animated.div>
          </animated.div>
        ))}
      </ImagePopUp>
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

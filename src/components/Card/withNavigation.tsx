import React from 'react'

// function withNavigation(Component) {
//   return class Navigation extends React.Component {
//     element = null

//     componentDidMount() {
//       window.addEventListener('resize', this.handleResize)
//     }

//     componentWillUnmount() {
//       window.addEventListener('resize', this.handleResize)
//     }

//     handleResize = () => {
//       if (this.element) {
//         const { top, right, bottom, left, width, height } = this.element.getBoundingClientRect()
//         this.props.onUpdateCards({ top, right, bottom, left, width, height }, this.props.id)
//       }
//     }

//     render() {
//       const { onUpdateCards, history, id, ...rest } = this.props
//       const goToElement = () => {
//         const { top, right, bottom, left, width, height } = this.element.getBoundingClientRect()
//         this.props.onUpdateCards({ top, right, bottom, left, width, height }, this.props.id)
//         history.push({
//           pathname: `/work/${id}`,
//           state: {
//             id,
//             to: 'modal',
//             meta: {
//               from: { top, right, bottom, left, width, height },
//             },
//           },
//         })
//       }
//       return (
//         <div ref={el => (this.element = el)}>
//           <Component onClick={goToElement} id={id} {...rest} />
//         </div>
//       )
//     }
//   }
// }
function withNavigation(Component) {
  return function Navigation(props) {
    const element = React.useRef(null)
    React.useEffect(() => {
      const handleResize = () => {
        if (element.current) {
          const { top, right, bottom, left, width, height } = element.current.getBoundingClientRect()
          props.onUpdateCards({ top, right, bottom, left, width, height }, props.id)
        }
      }
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    })

    const { history, onUpdateCards, id, ...rest } = props
    const goToElement = () => {
      // const { top, right, bottom, left, width, height } = element.current.getBoundingClientRect()
      // props.onUpdateCards({ top, right, bottom, left, width, height }, props.id)
      // history.push({
      //   pathname: `/work/${id}`,
      //   state: {
      //     id,
      //     to: 'modal',
      //     meta: {
      //       from: { top, right, bottom, left, width, height },
      //     },
      //   },
      // })
    }
    return (
      <div ref={el => (element.current = el)}>
        <Component id={id} onClick={goToElement} />
      </div>
    )
  }
}
export default withNavigation

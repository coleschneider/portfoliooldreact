import React from 'react'
import * as Grid from '../../theme/Grid'

const renderTop = ({ numColumns }: { numColumns: number[] }) => {
  return numColumns.map((num, i) => (
    <Grid.Col w={num} key={i} debug>
      {num}
    </Grid.Col>
  ))
}
const Layout: React.FC = () => {
  return (
    <>
      <Grid.Row debug>{renderTop({ numColumns: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] })}</Grid.Row>

      <Grid.Row debug>{renderTop({ numColumns: [1, 2, 3, 4, 2] })}</Grid.Row>

      <Grid.Row debug>
        <Grid.Col w={5}>
          5 <p>Sotto un cespo di rose scarlatte dai al rospo the caldo col latte.</p>
          <p>Sotto un cespo di rose paonazze tocca al rospo lavare le tazze.</p>
        </Grid.Col>
        {renderTop({ numColumns: [3, 4] })}
      </Grid.Row>

      <Grid.Row debug>
        <Grid.Col w={6}>
          6 <Grid.Row nested>{renderTop({ numColumns: [7, 2, 3] })}</Grid.Row>
        </Grid.Col>
        <Grid.Col w={6}>
          6
          <Grid.Row nested wide>
            {renderTop({ numColumns: [7, 2, 3] })}
          </Grid.Row>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row center>
        <Grid.Col w={6}>
          6
          <Grid.Row nested wide>
            {renderTop({ numColumns: [7, 2, 3] })}
          </Grid.Row>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row center>{renderTop({ numColumns: [3, 3] })}</Grid.Row>
      <Grid.Row debug>{renderTop({ numColumns: [7, 2, 3] })}</Grid.Row>
      <Grid.Row debug>{renderTop({ numColumns: [8, 1, 3] })}</Grid.Row>
      <Grid.Row debug>{renderTop({ numColumns: [9, 1, 2] })}</Grid.Row>
      <Grid.Row debug>{renderTop({ numColumns: [10, 1, 1] })}</Grid.Row>
      <Grid.Row debug>{renderTop({ numColumns: [11, 1] })}</Grid.Row>
      <Grid.Row debug>{renderTop({ numColumns: [12] })}</Grid.Row>
      <Grid.Row center>{renderTop({ numColumns: [6] })}</Grid.Row>
      <Grid.Row center>{renderTop({ numColumns: [3, 3] })}</Grid.Row>
      <Grid.Row debug>
        <Grid.Col fixedWidth>
          <p>Fixed Width Column</p>
        </Grid.Col>
        <Grid.Col>
          <Grid.Row nested>{renderTop({ numColumns: [7, 2, 3] })}</Grid.Row>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row debug>
        <Grid.Col fixedWidth>
          <p>Fixed Width Column</p>
        </Grid.Col>
        <Grid.Col>
          <Grid.Row nested>{renderTop({ numColumns: [7, 2, 3] })}</Grid.Row>
        </Grid.Col>
      </Grid.Row>
    </>
  )
}

export default Layout

// import * as React from 'react'
// import styled from 'styled-components'
// import { useSpring } from 'react-spring'
// import { Container, Row, Col } from '../../theme/grid'

// const Wrapper = styled.div`
//   margin-top: 20vh;
//   height: 400vh;
// `

// function About() {
//   return (
//     <Wrapper>
//       <Row center>
//         <Col debug xs={4} md={2} lg={3}>
//           Column 1
//         </Col>
//         <Col debug xs={4} md={2} lg={3}>
//           Column 2
//         </Col>
//         <Col debug xs={4} md={2} lg={3}>
//           Column 3
//         </Col>
//         <Col debug xs={4} md={2} lg={1}>
//           Column 4
//         </Col>
//       </Row>
//     </Wrapper>
//   )
// }

// export default About

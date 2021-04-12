import styled from 'styled-components'
import MatrixParallax from 'react-matrix-parallax'

export const BackgroundImage = styled.div`
  background: #2b3e50 url(./background.jpg) no-repeat center 0;
  background-attachment: fixed;
  position: fixed;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
`

// TODO: move this
export const matrixColor = 'rgba(122, 229, 114, 0.87)'

export const StyledMatrixParallax = styled(MatrixParallax).attrs({
  parallaxRate: 50,
  color: matrixColor,
})``

export const Transparent = styled.div`
  opacity: 0.6;
`

import React from 'react'
import { BackgroundImage, StyledMatrixParallax, Transparent } from './AppBackground.styled'

export const AppBackground: React.FC = (): JSX.Element => (
  <>
    <BackgroundImage />
    <Transparent>
      <StyledMatrixParallax />
    </Transparent>
  </>
)

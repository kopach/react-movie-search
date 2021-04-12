import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

// TODO:
export const matrixColor = 'rgba(122, 229, 114, 0.87)'

export const HeaderCentered = styled.h1.attrs({
  className: 'text-center',
})`
  color: ${matrixColor};
  margin-top: -3rem;
`

const FilmLogo = styled(FontAwesomeIcon).attrs({
  icon: faFilm,
  color: matrixColor,
})`
  opacity: 0.3;
`

export const AppLogo: React.FC = (): JSX.Element => (
  <div className="text-center">
    <span className="fa-stack fa-7x">
      <FilmLogo className="fa-stack-1x" />
    </span>
  </div>
)

export const ContainerCentered = styled.div`
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 5rem;
`

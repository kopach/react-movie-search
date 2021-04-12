import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'

// TODO
export const matrixColor = 'rgba(122, 229, 114, 0.87)'

export const Spinner = styled(FontAwesomeIcon).attrs({
  icon: faCompactDisc,
  color: matrixColor,
  className: 'fa-spin fa-10x ',
})``

export const ContainerHorizontalCenter = styled.div.attrs({
  className: 'text-center',
})`
  margin-left: auto;
  margin-right: auto;
  position: relative;
`

export const ContainerFullScreen = styled.div.attrs({
  className: 'w-100 h-100',
})`
  position: fixed;
`

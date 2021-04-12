declare module 'react-matrix-parallax' {
  import * as React from 'react'

  export interface MatrixProps {
    width?: number
    height?: number
    fullscreen?: boolean
    colSize?: number
    fontSize?: number
    interval?: number
    color?: string
    frequency?: number
    speed?: number
    style?: object
    zIndex?: number
    fadeRate?: number
    backgroundColor?: string
  }

  export interface MatrixParallaxProps {
    parallaxRate?: number
    color?: MatrixProps.color
    overlay?: string
    backgroundColor?: MatrixProps.backgroundColor
    zoomEffect?: boolean
    frontMatrixProps?: MatrixProps
    backMatrixProps?: MatrixProps
  }

  export default class MatrixParallax extends React.Component<MatrixParallaxProps, unknown> {
    render(): JSX.Element
  }
}

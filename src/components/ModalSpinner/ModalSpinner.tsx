import React from 'react'
import { ContainerHorizontalCenter, ContainerFullScreen, Spinner } from './ModalSpinner.styled'

export const ModalSpinner: React.FC = (): JSX.Element => {
  return (
    <ContainerHorizontalCenter>
      <ContainerFullScreen>
        <div className="row h-100">
          <div className="col-sm-12 my-auto">
            <Spinner />
          </div>
        </div>
      </ContainerFullScreen>
    </ContainerHorizontalCenter>
  )
}

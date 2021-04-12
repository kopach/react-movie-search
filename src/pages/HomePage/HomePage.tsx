import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { SearchForm } from '../../components/SearchForm'
import { AppLogo, ContainerCentered, HeaderCentered } from './HomePage.styled'

export const HomePage: React.FC<IHomePageProps> = (): JSX.Element => {
  return (
    <ContainerCentered>
      <AppLogo />
      <HeaderCentered>Movie Search</HeaderCentered>
      <SearchForm />
    </ContainerCentered>
  )
}

interface IHomePageProps extends RouteComponentProps<{ name: string }> {}

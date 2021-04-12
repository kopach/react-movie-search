import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { useRecoilValue } from 'recoil'
import { SearchForm } from '../../components/SearchForm'
import { ListItem } from './components/ListItem'
import { useQuery } from '../../hooks/useQuery'
import { searchMoviesByTitle, SearchResponse } from '../../recoil/selectors/movieSelectors'

export const MovieList: React.FC<IMovieListProps> = (): JSX.Element => {
  const { y, t } = useQuery<IMovieListQuery>()
  const { Search: movies }: SearchResponse = useRecoilValue(searchMoviesByTitle({ y, t }))

  return (
    <>
      <Container fluid="xl">
        <Row>
          <Col xs sm="12" md="4" lg="3">
            <SearchForm title={t} year={y} />
          </Col>
          <Col>
            {movies.map(({ Title, imdbID, Poster, Year }) => {
              return (
                <ListGroup key={imdbID}>
                  <ListItem posterURL={Poster} movieTitle={Title}>
                    {Year}
                  </ListItem>
                </ListGroup>
              )
            })}
          </Col>
        </Row>
      </Container>
    </>
  )
}

interface IMovieListQuery {
  t?: string
  y?: string
}

interface IMovieListProps extends RouteComponentProps<{ name: string }> {}

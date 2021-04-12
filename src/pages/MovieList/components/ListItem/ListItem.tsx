import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const ListItem: React.FC<IListItemProps> = (props): JSX.Element => (
  <ListGroup.Item>
    <Row>
      <Col xs sm={12} md={5} lg={4}>
        <Card>
          <Card.Img src={props.posterURL} />
        </Card>
      </Col>
      <Col xs sm="12" md="7" lg="8">
        <Card>
          <Card.Body>
            <Card.Title>{props.movieTitle}</Card.Title>
            <Card.Text>{props.children}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </ListGroup.Item>
)

export { ListItem }

export interface IListItemProps {
  posterURL: string
  movieTitle: string
  children: React.ReactNode
}

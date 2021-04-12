import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SearchForm: React.FC<ISearchForm> = ({ title, year }): JSX.Element => (
  <Card>
    <Card.Body>
      <Form action="search" method="get" autoComplete="off">
        <Form.Group controlId="movieTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control name="t" type="text" placeholder="Title" defaultValue={title} />
        </Form.Group>

        <Form.Group controlId="movieYear">
          <Form.Label>Year</Form.Label>
          <Form.Control name="y" type="number" placeholder="Year" defaultValue={year} />
        </Form.Group>

        <Button variant="outline-primary" type="submit" block>
          Search
        </Button>
        <Button variant="outline-secondary" type="button" block disabled>
          I'm Feeling Lucky
        </Button>
      </Form>
    </Card.Body>
  </Card>
)

export { SearchForm }

interface ISearchForm {
  title?: string
  year?: string
}

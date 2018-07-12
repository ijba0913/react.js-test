import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Container, Button, Segment } from 'semantic-ui-react'

const topFive = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"]

export default class HomeView extends Component {
  render() {
    return (
      <Container textAlign='center' style={{ paddingTop: '2rem' }} >
        <Segment>Top 5 GitHub Users</Segment>
        {topFive.map((user, i) => (
          <div>
            <Button key={i} as={Link} to={`/person/${user}`}
              style={{ width: '300px', marginBottom: '20px' }}
              size='big' primary>
              {user}
            </Button>
          </div>
        )
        )}
      </Container>
    )
  }
}

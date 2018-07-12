import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Container, Button, Loader, Image, Card, Dimmer } from 'semantic-ui-react'

export default class PersonView extends Component {
  componentDidMount() {
    console.log('pathname', this.props.pathname.substring(8))
    this.props.fetchPersonDetails(this.props.pathname.substring(8))
  }

  render() {
    return (
      <Container style={{paddingTop: '2rem'}}>
        {this.props.loading ?
          <Dimmer active>
            <Loader />
          </Dimmer>
          : <Card>
              <Image src={this.props.person.avatar_url}/>
              <Card.Content>
                <Card.Header>{this.props.person.login}</Card.Header>
                <Card.Meta>
                  <span>{this.props.person.location}</span>
                </Card.Meta>
              </Card.Content>
          </Card>
        }
      </Container>
    )
  }
}

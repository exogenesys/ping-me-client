import './Home.css'
import React, {Component} from "react";
import {Container, Header, Button, Icon, Segment} from 'semantic-ui-react'
import Layout from './Layout'
import PropTypes from 'prop-types'
import {connect} from "react-redux";

class HomePage extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  getStarted() {
    this
      .context
      .router
      .history
      .push('/channel/exhibitions-in-delhi-ncr')
  }

  render() {

    const mobile = false;

    return (
      <Layout>
        <Segment
          textAlign='center'
          style={{
          minHeight: 700,
          padding: '1em 0em'
        }}
          vertical
          className={'home-image'}>
          <Container text>
            <Header
              as='h1'
              content='PingMe'
              inverted
              className={'home-heading'}
              style={{
              fontSize: mobile
                ? '2em'
                : '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: mobile
                ? '1.5em'
                : '3em'
            }}/>
            <Header
              as='h2'
              content='connect with your industry'
              inverted
              className={'home-subheading'}
              style={{
              fontSize: mobile
                ? '1.5em'
                : '1.7em',
              fontWeight: 'normal',
              marginTop: mobile
                ? '0.5em'
                : '1.5em'
            }}/>
            <Button primary size='huge' onClick={() => this.getStarted()}>
              Get Started
              <Icon name='right arrow'/>
            </Button>
          </Container>

        </Segment>
      </Layout>
    )
  }
}

export default HomePage
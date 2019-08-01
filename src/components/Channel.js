import './Channel.css'
import React, { Component } from "react";
import {
    Container,
    Grid,
    Header,
    Button,
    Label,
} from 'semantic-ui-react'
import { connect } from "react-redux";
import Layout from './Layout';

class Channel extends Component {

  render() {
    return (
      <Layout>
        <Container>
          <div className="header-image">
          </div>
        </Container>
        <Container>
          <Grid>
          <Grid.Column width={16}>
            <Header as='h1'>Notify Me About the Exhibitions at Pragati Event</Header>
            <Label>
              Ping Frequency
              <Label.Detail>Once A Month</Label.Detail>
            </Label>
            <div className="channel-discription">
              <p>We will drop you an email notifying about all the exhibitions at Pragati Maidan.</p>
            </div>
            <Button color={"teal"} size={"big"} fluid>I'd like to Register</Button>
          </Grid.Column>
          </Grid>
        </Container>    
      </Layout>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default Channel;

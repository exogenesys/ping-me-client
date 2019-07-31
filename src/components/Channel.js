import './Channel.css'
import React, { Component } from "react";
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Button,
    Label,
    Icon,
    Item,
    Image,
    List,
    Menu,
    Segment,
} from 'semantic-ui-react'
import { connect } from "react-redux";

class Channel extends Component {

  render() {
    return (
        <div>
        <Menu fixed='top'>
          <Container>
            <Menu.Item as='a' header>
              {/* <Image size='mini' src='/public/img/nothing.png' style={{ marginRight: '1.5em' }} /> */}
              ping me
            </Menu.Item>    
          </Container>
        </Menu>
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
      </div>
    
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default Channel;

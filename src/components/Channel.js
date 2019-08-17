import './Channel.css';
import React, {Component, createRef} from 'react';
import {Container, Grid, Header, Button, Label} from 'semantic-ui-react';
import {connect} from 'react-redux';
import Layout from './Layout';
import {openSignUpModal, subscribeChannel, unSubscribeChannel, getChannelState} from '../actions';

class Channel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channelId: 't9NNVbV2uBnMbLl1ZDIj',
    };


    if (this.props.auth) {
      this.props.getChannelState(this.state.channelId, this.props.auth);
    }
  }


    componentWillUpdate(nextProps) {
      if (this.props.auth != nextProps.auth) {
        this.props.getChannelState(this.state.channelId, nextProps.auth);
      }
    }


  handleRegister() {

    if (this.props.auth) {
      if (this.props.subscription == 'ready' || !this.props.subscription) {
        this
          .props
          .subscribeChannel(this.state.channelId);
      } else if (this.props.subscription == 'complete') {
        this
          .props
          .unSubscribeChannel(this.state.channelId);
      }
    } else {
      this.props.openSignUpModal();
    }
  }

  render() {
    let ButtonText;
    let ButtonColor;
    let ButtonLoading;
    if (this.props.subscription == 'complete') {
      ButtonText = 'Cancel Subscription';
      ButtonColor = 'pink';
      ButtonLoading = false;
    } else if (this.props.subscription == 'loading') {
      ButtonText = 'Please Wait...';
      ButtonColor = 'grey';
      ButtonLoading = true;
    } else if (this.props.subscription == 'error') {
      ButtonText = 'Something went wrong. Retry!';
      ButtonColor = 'red';
      ButtonLoading = false;
    } else if (this.props.subscription == 'ready' || !this.props.subscription) {
      ButtonText = 'Subscribe to Notifications';
      ButtonColor = 'teal';
      ButtonLoading = false;
    }

    return (
      <Layout>
        <Container>
          <div className="header-image"/>
        </Container>
        <Container>
          <Grid>
            <Grid.Column width={16}>
              <Header as="h1">Notify Me About the Exhibitions at Pragati Event</Header>
              <Label>
                Ping Frequency
                <Label.Detail>Once A Month</Label.Detail>
              </Label>
              <div className="channel-discription">
                <p>We will drop you an email notifying about all the exhibitions at Pragati Maidan.</p>
              </div>
              <Button
                loading={ButtonLoading}
                color={ButtonColor}
                size="big"
                fluid
                onClick={() => this.handleRegister()}>{ButtonText}</Button>
            </Grid.Column>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = ({auth, subscription}) => ({auth, subscription});

export default connect(mapStateToProps, {openSignUpModal, subscribeChannel, unSubscribeChannel, getChannelState})(Channel);

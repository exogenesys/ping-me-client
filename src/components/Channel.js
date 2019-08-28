import './Channel.css';

import React, {Component} from 'react';
import {Container, Grid, Header, Button, Label, List, Accordion, Icon} from 'semantic-ui-react';
import ChannelCarousel from "./ChannelCarousel";
import {connect} from 'react-redux';
import Layout from './Layout';
import {openSignUpModal, subscribeChannel, unSubscribeChannel, getChannelState} from '../actions';

class Channel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channelId: 't9NNVbV2uBnMbLl1ZDIj',
      activeIndex: -1
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

  showIndustries = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }


  render() {

    const { activeIndex } = this.state

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
      ButtonText = 'Click to Subscribe for Notifications';
      ButtonColor = 'teal';
      ButtonLoading = false;
    }

    const industryListOne = [
      'Education & Training',
      'Business Services',
      'IT & Technology',
      'Medical & Pharma',
      'Science & Research',
      'Arts & Crafts',
      'Industrial Engineering',
      'Food & Beverages',
      'Wellness, Health & Fitness',
      'Entertainment & Media',
    ]

    const industryListTwo = [
      'Agriculture & Forestry',
      'Building & Construction',
      'Fashion & Beauty',
      'Apparel & Clothing',
      'Banking & Finance',
      'Auto & Automotive',
      'Power & Energy',
      'Environment & Waste',
      'Logistics & Transportation',
      'Electric & Electronics'
    ]

    const industryListThree = [
      'Home & Office',
      'Security & Defense',
      'Travel & Tourism',
      'Baby, Kids & Maternity',
      'Animals & Pets',
      'Packing & Packaging',
      'Hospitality',
      'Telecommunication',
      'Miscellaneous'
    ]
    const industryLists = [industryListOne, industryListTwo, industryListThree].map((industryList) => {
      return industryList.map(industry => <List.Item> {industry} </List.Item>
      )
    })

    return (
      <Layout>
        <Container>
          <ChannelCarousel/>
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
                <p>We will drop you an email once a month notifying about all the exhibitions in the Delhi NCR region.</p>
                <Accordion>
                  <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.showIndustries}
                  >
                  <Icon name='dropdown' />
                  Industries Covered
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 0}>
                    <Grid>
                      <Grid.Column width={4}>
                      <List relaxed >
                        {industryLists[0]}
                      </List>
                      </Grid.Column>
                      <Grid.Column width={4}>
                      <List relaxed>
                        {industryLists[1]}
                      </List>
                      </Grid.Column>
                      <Grid.Column width={4}>
                      <List relaxed>
                        {industryLists[2]}
                      </List>
                      </Grid.Column>
                    </Grid>
                  </Accordion.Content>
                </Accordion>
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

import './Channel.css';

import React, {Component, createRef} from 'react';
import {Container, Grid, Header, Button, Label, List, Accordion, Icon, Statistic, Sticky, Ref, Responsive, Segment} from 'semantic-ui-react';
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

    const industries = [
      [
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
    ], [
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
    ], [
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
    ];

    const industryLists = industries.map((industryList) => {
      return industryList.map(industry => <List.Item> {industry} </List.Item>
      )
    })

    const relevantNumbers = (
      <Grid columns='equal' centered className={'relevantNumbers'}> 
        <Grid.Column textAlign='center'>
        <Statistic>
          <Statistic.Value>2</Statistic.Value>
          <Statistic.Label>Emails Per Month</Statistic.Label>
        </Statistic>
        </Grid.Column>
        <Grid.Column textAlign='center'>
        <Statistic>
          <Statistic.Value>550</Statistic.Value>
          <Statistic.Label>Number of Subscibers</Statistic.Label>
        </Statistic>
        </Grid.Column>
      </Grid>
    )

    const subscribeChannelButton = (
      <Button
        loading={ButtonLoading}
        color={ButtonColor}
        size="big"
        fluid
        onClick={() => this.handleRegister()}>{ButtonText}
      </Button>
    )

    const StickyContextRef = createRef()

    return (
      <Layout>
        <Container>
          <ChannelCarousel/>
        </Container>
        <Container>
          <Grid stackable>
            <Grid.Row reversed>
            <Grid.Column width={10}>
              <Header size='huge'>Notify Me About the Exhibitions & Trade in Delhi NCR</Header>
              <Responsive
              {...Responsive.onlyMobile}>
                {relevantNumbers}
                {subscribeChannelButton}
              </Responsive>
              <div className="channel-content">
                <div className={'channel-discription'}>

                  <p className={'channel-discrption-para'}>
                    I know what you’re thinking—trade shows?! How old school. With endless rows of booths, stacks of pamphlets, and thousands of people crowding the aisles, trade shows don’t exactly have a reputation for being trendy.
                  </p>

                  <p className={'channel-discrption-para'}>
                  When employees attend trade shows, morale is boosted, new contacts are made, skills are improved through educational seminars, and hopefully, sales leads are generated. 
                  </p>

                  <p className={'channel-discrption-para'}>
                  Here are seven reasons why your startup shouldn’t ignore the power of trade shows:
                  </p>

                  <Header as='h3'>
                  Forge business relationships
                  </Header> 

                  <p className={'channel-discrption-para'}>
                  Turn on that trade show charm and build new relationships that exist offline. Trade show floors are flooded with CEOs, C-suite executives, investors, and customers. You never know the power of one great new contact, so remember to engage in meaningful conversations with everyone you meet.
                  </p>

                  <Header as='h3'>
                  Highly targeted leads
                  </Header> 

                  <p className={'channel-discrption-para'}>
                  A pre-qualified customer is one who has traveled, spent money, brought a friend, or made an actionable investment to participate. Trade shows are swarming with people who have opted into the experience, and 84% of them have the power to recommend, specify and/or make real purchasing decisions. The trade show floor is the ideal place to engage with customers who actually care about learning more about the companies that are exhibiting.
                  </p>

                  <Header as='h3'>
                  Competitor analysis
                  </Header> 

                  <p className={'channel-discrption-para'}>
                  As trade shows offer a great opportunity to introduce new products and services, you also can use the experience to become more aware of how your competitors are positioning their products. Also, it’s important to be at the same shows as your competition in order to be considered a viable alternative for potential customers.
                  </p>

                  <Header as='h3'>
                  Getting a lot of people to use your product
                  </Header> 

                  <p className={'channel-discrption-para'}>
                  Watch and learn, literally. Trade shows offer a unique opportunity for you to see how attendees interact with your product and hear the questions they ask, so you can get a deeper understanding of your ideal customer. Use the trade show experience to gain insight into new features to add to your product, to see how your customers use your product, and to get valuable testimonials and feedback.
                  </p>

                  <Header as='h3'>
                  Raise Brand Awareness
                  </Header> 

                  <p className={'channel-discrption-para'}>
                  Industry influences and bloggers walk trade show floors to gain insight into the best, brightest, and most up-and-coming companies and trends. Cold emails to influences may never be opened, but an interesting booth and a clever sales hook may spark a genuine conversation with a press representative, giving you an even higher return on your marketing spend than you imagined.
                  </p>
                </div>
                <Accordion>
                  <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.showIndustries}
                  >
                  <Header as='h3'>
                  Click here to see Industries Covered
                  <Icon name='dropdown' />
                  </Header>
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
            </Grid.Column>
            <Grid.Column width={6}>
            <Responsive
              {...Responsive.onlyComputer}>
                {relevantNumbers}
                {subscribeChannelButton}
              </Responsive>
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = ({auth, subscription}) => ({auth, subscription});

export default connect(mapStateToProps, {openSignUpModal, subscribeChannel, unSubscribeChannel, getChannelState})(Channel);

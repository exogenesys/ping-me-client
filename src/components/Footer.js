import React from 'react'
import { 
    Container,
    Grid,
    List,
    Header,
    Segment
} from 'semantic-ui-react'

const Footer = () => {
    return(
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
        <Grid divided inverted stackable>
            <Grid.Row>
            <Grid.Column width={3}>
                <Header inverted as='h4' content='Support' />
                <List link inverted>
                <List.Item as='a'>Mail Us</List.Item>
                </List>
            </Grid.Column>
            <Grid.Column width={7}>
                <Header as='h4' inverted>
                &copy; 2019 Ping Me
                </Header>
                <p>
                a place to explore notifications
                </p>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        </Container>
        </Segment>    
        )
}        

export default Footer



import React, { Component } from 'react'
import { 
    Menu,
    Container
} from 'semantic-ui-react'

import PropTypes from 'prop-types'


class TopBar extends Component {

    static contextTypes = {
        router: PropTypes.object
      };
    
      componentWillUpdate(nextProps) {
        if (nextProps.auth) {
          this.context.router.history.push("/");
        }
      }

    render(){
        return(
            <Menu fixed='top'>
            <Container>
            <Menu.Item as='a' header>
                {/* <Image size='mini' src='/public/img/nothing.png' style={{ marginRight: '1.5em' }} /> */}
                ping me
            </Menu.Item>    
            </Container>
            </Menu>    
        )
    }
}

export default TopBar

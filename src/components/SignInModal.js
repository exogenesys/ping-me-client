import React, { Component } from 'react';
import {
  Button, Header, Icon, Modal, Container,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { signIn, closeSignUpModal } from '../actions';


class SignInModal extends Component {
  componentWillUpdate(nextProps) {
    return nextProps.signUpModal !== this.props.signUpModal;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.props.closeSignUpModal();
    }
  }

  render() {
    return (
      <Modal
        open={this.props.signUpModal}
        onClose={this.props.closeSignUpModal}
        size="small"
      >
        <Header icon="sign in" content="Sign Up for PingMe" textAlign="center" />
        <Modal.Content image>
          <Modal.Description>
            <Container textAlign="center">
              <Header>Not using PingMe? Sign up, get alerts about things you'd love to hear about.</Header>
              <Button color="red" size="big" onClick={this.props.signIn}>
                <Icon name="google" />
                {' '}
Google Sign
              </Button>
            </Container>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

function mapStateToProps({ auth, signUpModal }) {
  return { auth, signUpModal };
}

export default connect(mapStateToProps, { signIn, closeSignUpModal }, null, { forwardRef: true })(SignInModal);

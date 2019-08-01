import './Channel.css'
import React, { Component } from "react";
import {
    Container,
    Grid,
    Header,
    Button,
    Label,
    Divider,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import TopBar from './TopBar'
import Footer from './Footer'
import PropTypes from 'prop-types'
import { connect } from "react-redux";

class Layout extends Component {

  state = {}


  render() {
    const { children } = this.props

    return (
        <div>
        <TopBar/>
        {children}
        <Footer />
        </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default Layout;

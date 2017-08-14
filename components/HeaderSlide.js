import React, { Component } from 'react';
import { Slide, Heading, Text } from 'spectacle';

class HeaderSlide extends Component {
  componentWillEnter(cb) {
    this.refs.slide.componentWillEnter(cb)
  }

  componentWillAppear(cb) {
    this.refs.slide.componentWillAppear(cb)
  }

  componentWillLeave(cb) {
    this.refs.slide.componentWillLeave(cb)
  }

  render() {
    const { title, subtitle, text } = this.props;
    return (
      <Slide ref='slide' bgColor='secondary' textColor='primary' transition={['slide']}>
        <Heading size={3} textColor='grey' caps>{title}</Heading>
        <Heading size={6} textColor='grey'>{subtitle}</Heading>
        <Text>{text}</Text>
      </Slide>
    );
  }
}

export default HeaderSlide;

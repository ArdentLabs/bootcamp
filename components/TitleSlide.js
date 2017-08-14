import React, { Component } from 'react';
import { Slide, Heading, Code } from 'spectacle';
import Emoji from './Emoji';

class TitleSlide extends Component {
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
    const { title, emoji, subtitle } = this.props;
    return (
      <Slide ref='slide' transition={['zoom']}>
        <Heading size={1} fit textColor='secondary'>
          {title} <Emoji type={emoji} />
        </Heading>
        {subtitle}
      </Slide>
    );
  }
}

export default TitleSlide;

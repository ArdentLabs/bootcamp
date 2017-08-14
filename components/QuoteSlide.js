import React, { Component } from 'react';
import { Slide, Heading, BlockQuote, Quote } from 'spectacle';

class QuoteSlide extends Component {
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
    const { title, quote, ...rest } = this.props;
    return (
      <Slide ref='slide' bgColor='secondary' textColor='primary' {...rest}>
        <Heading size={6} textColor='grey' caps>{title}</Heading>
        <BlockQuote>
          <Quote>{quote}</Quote>
        </BlockQuote>
      </Slide>
    );
  }
}

export default QuoteSlide;

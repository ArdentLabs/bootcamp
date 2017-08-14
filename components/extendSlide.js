import React, { Component } from 'react';

const extendSlide = Slide => {
  return class ExtendedSlide extends Component {
    constructor(props) {
      super(props);
      this.slide = null;
    }

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
      return (
        <Slide
          ref='slide'
          {...this.props}
        />
      );
    }
  };
}

export default extendSlide;

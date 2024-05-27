import { Component } from 'react';

class Carousel extends Compoonent {
  constructor(props) {
    super(props);
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  state = {
    active: 0,
  };

  handleClickImage(e) {
    this.setState({
      active: e.target.dataset.index,
    });
  }

  render() {
    const { active } = this.state;
    const { image } = this.props;

    return (
      <div className="grid grid-cols-2">
        <img src={images[active]} alt="car" className="rounded-md" />
        <div className=""></div>
      </div>
    );
  }
}

export default Carousel;

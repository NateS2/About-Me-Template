import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Image } from "semantic-ui-react";

class PhotoCarousel extends Component {
  state = { images: [], imageSRC: "", count: 0 };

  async componentWillReceiveProps(newProps) {
    // console.log("New Props on the hero", newProps);

    await this.setState({ images: newProps.images, title: newProps.title });
    // console.log("did await", this.state);
    // this.changeHeroImage();
  }

  changeHeroImage = () => {
    // do whatever you like here
    var images = this.state.images; // IMAGES;
    var count = this.state.count;
    var a = this;
    var url = "";

    if (count >= images.length) {
      count = 0;
    }
    images.map(function(image, index) {
      if (index == count) {
        url = image.url;
      }
    });
    count++;
    this.setState({ imageSRC: url, count: count });
  };

  returnImages = () => {
    var images = this.state.images;
    return images.map(image => {
      return (
        <div>
          <Image src={image.url} />
        </div>
      );
    });
  };

  returnCarousel = () => {
    const images = this.state.images;

    if (images.length === 0) {
      return null;
    }

    if (images.length === 1) {
      return <Image src={images[0].url} />;
    } else if (images.length > 1) {
      return (
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={10000}
          showStatus={false}
          dynamicHeight={true}
        >
          {this.returnImages()}
        </Carousel>
      );
    }
  };

  render() {
    return this.returnCarousel();
  }
}

export default PhotoCarousel;

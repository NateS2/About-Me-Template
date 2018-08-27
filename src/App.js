import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import zupage from "zupage";
import PhotoCarousel from "./PhotoCarousel";
import { Image, Header, Container, Grid } from "semantic-ui-react";

class App extends Component {
  state = { post: { body: "", images: [], creator: {} } };

  async componentDidMount() {
    // const post = await zupage.getPost('4122d340-7bdb-4996-8400-f3d582d84280');
    const post = await zupage.getCurrentPost();
    this.setState({ post });
    console.log("Response!", post);
  }

  imageTagCreater = images => {
    return images.map(image => {
      return <Image src={image.url} key={image.id} fluid />;
    });
  };

  render() {
    const { images, body } = this.state.post;
    return (
      <div className="background">
        <Grid
          stackable
          columns={2}
          verticalAlign="middle"
          centered
          className="GridBackground"
        >
          <Grid.Column width={7}>
            <PhotoCarousel images={images} />
          </Grid.Column>
          <Grid.Column width={7}>
            <Container>{body}</Container>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;

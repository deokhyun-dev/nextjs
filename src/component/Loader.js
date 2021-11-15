import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const Loading = () => (
  <>
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>
  </>
);

export default Loading;

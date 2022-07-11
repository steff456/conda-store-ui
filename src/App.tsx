import * as React from "react";
import "../style/index.css";
import { ChannelsEdit, ChannelsList, Dependencies } from "./components";

const App = () => {
  const channelsList = ["conda-store", "default", "conda forge"];
  const dependencies = [
    {
      id: 3685,
      channel: {
        id: 2,
        name: "https://conda.anaconda.org/conda-forge",
        last_update: null
      },
      build: "pyhd8ed1ab_0",
      license: "Apache-2.0",
      sha256:
        "4da0fe03babc950532513e9165dbc337a663880352392f496992776608dd77ca",
      name: "asttokens",
      version: "2.0.5",
      summary:
        "The asttokens module annotates Python abstract syntax trees (ASTs) with the positions of tokens and text in the source code that generated them."
    },
    {
      id: 3673,
      channel: {
        id: 2,
        name: "https://conda.anaconda.org/conda-forge",
        last_update: null
      },
      build: "pyh9f0ad1d_0",
      license: "BSD-3-Clause",
      sha256:
        "ee62d6434090c1327a48551734e06bd10e65a64ef7f3b6e68719500dab0e42b9",
      name: "backcall",
      version: "0.2.0",
      summary: "Specifications for callback functions passed in to an API"
    }
  ];

  return (
    <>
      <h1>Hello World</h1>
      <ChannelsList channelList={channelsList} />
      <ChannelsEdit channelsList={channelsList} />
      <Dependencies dependencies={dependencies} />
    </>
  );
};

export default App;

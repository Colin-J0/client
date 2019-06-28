import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { graphql, ApolloProvider } from "react-apollo";
import gql from "graphql-tag"



const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const channelsListQuery = gql`{
  users {
    id,name
  }
}`;



const ChannelsList = ({ data: { loading, error, users } }) => {
  if (loading) {
    return <p> Loading... </p>;
  }

  if (error) {
    return <p> {error.message} </p>;
  }

  return (
    <ul>
      {users.map(c => (
        <li key={c.id}>
          <p>{c.id}</p>
          <p>{c.name}</p>

        </li>
      ))}
    </ul>
  );
};
const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          {/* {ChannelsListWithData()} */}
          <ChannelsListWithData ></ChannelsListWithData>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;

import { useHelloQuery } from "generated/graphql";
import React from "react";

const App: React.FC = () => {
  const { data, loading } = useHelloQuery();

  if (loading) {
    return <div>loading...</div>;
  } else {
    return <div>{JSON.stringify(data?.hello)}</div>;
  }
};

export default App;

import { useUsersQuery } from "generated/graphql";
import React from "react";

const App: React.FC = () => {
  const { data, loading } = useUsersQuery();

  if (loading || !data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data.users.map((user) => (
        <div key={user.id}>
          {user.id},{user.username}
        </div>
      ))}
    </div>
  );
};

export default App;

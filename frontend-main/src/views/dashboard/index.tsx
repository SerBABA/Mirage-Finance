import { useLogoutMutation, useUsersQuery } from "generated/graphql";
import React from "react";
import { RouteComponentProps } from "react-router";

export const Dashboard: React.FC<RouteComponentProps> = ({ history }) => {
  const { data, loading } = useUsersQuery();
  const [logout] = useLogoutMutation({ fetchPolicy: "network-only" });

  if (loading || !data) {
    return <div>loading...</div>;
  }

  const handleLogout = async () => {
    await logout()
      .then((data) => {
        console.log(data);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {user.id},{user.username}
          </li>
        ))}
      </ul>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Dashboard;

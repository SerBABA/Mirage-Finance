import { useLogoutMutation, useUsersQuery } from "generated/graphql";
import React from "react";

export const Dashboard: React.FC = () => {
  const { data, loading } = useUsersQuery();
  const [logout] = useLogoutMutation();

  if (loading || !data) {
    return <div>loading...</div>;
  }

  const handleLogout = async () => {
    await logout()
      .then((data) => {
        console.log(data);
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

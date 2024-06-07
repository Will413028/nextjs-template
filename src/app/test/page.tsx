import { notFound } from "next/navigation";

interface User {
  userId: string;
  firstname: string;
}

interface Users {
  "Templating example": string;
  users: Array<User>;
  id: number;
  name: string;
}

export default async function User() {
  const response = await fetch("http://localhost:3001/users");

  const res = await response.json();

  const renderedUsers = res.users.map((user: User) => (
    <li key={user.userId}>{user.firstname}</li>
  ));

  if (!res) return notFound();

  return (
    <div>
      <ul>{renderedUsers}</ul>
    </div>
  );
}

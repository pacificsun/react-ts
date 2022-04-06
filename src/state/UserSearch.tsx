import { useState } from "react";

const users = [
  { name: "Suraj", age: 20 },
  { name: "Aditay", age: 20 },
  { name: "Rojan", age: 20 },
];

export const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(
    undefined
  );
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Search</button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

import { useState } from "react";
const User = ({ name, location }) => {
  const [count,setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <button type="submit">
        count:{count}
      </button>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h4>Contact:devjyotimukherjee.17@gmail.com</h4>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  );
};
export default User;

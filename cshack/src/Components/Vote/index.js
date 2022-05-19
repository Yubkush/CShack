import React, { useState } from "react";
import Typography from "@mui/material/Typography";

const Vote = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increment}>▲</button>
      <Typography sx={{ fontWeight: "bold", marginBottom: 0 }} gutterBottom>
        {count}
      </Typography>
      <button onClick={decrement}>▼</button>
      
    </div>

  );
};

export default Vote;

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

const Vote = ({count}) => {
  const [votes, setVotes] = useState(count);

  const increment = () => {
    setVotes(votes + 1);
  };

  const decrement = () => {
    setVotes(votes - 1);
  };

  return (
    <div>
      {/* <button onClick={increment}>▲</button> */}
      <BiUpvote onClick={increment} size="1.5em"/>
      <Typography sx={{ fontWeight: "bold", marginBottom: 0 }} gutterBottom>
        {votes}
      </Typography>
      {/* <button onClick={decrement}>▼</button> */}
      <BiDownvote onClick={decrement} size="1.5em"/>
      
    </div>

  );
};

export default Vote;

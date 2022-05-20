import * as React from "react";
import Typography from "@mui/material/Typography";
import { BiCommentDetail } from "react-icons/bi";

export default function CommentCount({ count }) {
  return (
    <div>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {count}
      </Typography>
      <BiCommentDetail size="1.5em"/>
    </div>
  );
}

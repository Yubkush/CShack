import * as React from "react";
import Typography from "@mui/material/Typography";

export default function IdeaContent({ catg, title, nunu }) {
  return (
    <div>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {catg}
      </Typography>
      <Typography variant="body2">{nunu}</Typography>
    </div>
  );
}

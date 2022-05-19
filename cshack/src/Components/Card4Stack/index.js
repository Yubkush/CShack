import * as React from "react";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CardContentNoPad = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

export default function Problem({ catg , title,nunu }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContentNoPad >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {catg}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
         {nunu}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContentNoPad>
      <CardActions>
        <Grid container justifyContent="center">
          <Button variant="contained">Upvote</Button> 
        </Grid>
      </CardActions>
    </Card>
  );
}

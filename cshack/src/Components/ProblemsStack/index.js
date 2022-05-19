import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Problem from "../Card4Stack";
import {Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import { styled } from "@mui/material/styles";





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProblemsStack() {
  return (
    <Box sx={{ width: "90%" }}>
      <Stack spacing={2}>
        <Item> <Problem catg={"Blind"} title={"poop my eyes"} nunu={"poopy poop"}/> </Item>
        <Item> <Problem catg={"fdfdf"} title={'i eat only from boats now'} nunu={"boat"}/> </Item>
        <Item> <Problem catg={"3"} title={"sarai or sary"} nunu = {"i walk alone #shilo"}/> </Item>
      </Stack>
    </Box>
  );
}

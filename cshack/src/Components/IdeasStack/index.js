import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Idea from "../Idea";
import { styled } from "@mui/material/styles";





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function IdeasStack() {
  return (
    <Box sx={{ width: "90%" }}>
      <Stack spacing={2}>
      <Item> <Idea catg={"Blind"} title={"poop my eyes"} nunu={"When i poop i cant see when to stop wiping. please help me with creating an app that connects me with people that can tell me if i have wiped enough. help me to create a better world and a whiter panties "}/> </Item>
        <Item> <Idea catg={"fdfdf"} title={'i eat only from boats now'} nunu={"boat"}/> </Item>
        <Item> <Idea catg={"3"} title={"sarai or sary"} nunu = {"i walk alone #shilo"}/> </Item>
        <Item> <Idea catg={"yuval filmus"} title={"hearing impared"} nunu = {"please help me to create microphone"}/> </Item>
        <Item> <Idea catg={"yuval filmus"} title={"hearing impared"} nunu = {"please help me to create microphone"}/> </Item>
        <Item> <Idea catg={"3"} title={"sarai or sary"} nunu = {"i walk alone #shilo"}/> </Item>
        <Item> <Idea catg={"3"} title={"sarai or sary"} nunu = {"i walk alone #shilo"}/> </Item>
        <Item> <Idea catg={"Blind"} title={"poop my eyes"} nunu={"When i poop i cant see when to stop wiping. please help me with creating an app that connects me with people that can tell me if i have wiped enough. help me to create a better world and a whiter panties "}/> </Item>
        <Item> <Idea catg={"Blind"} title={"poop my eyes"} nunu={"When i poop i cant see when to stop wiping. please help me with creating an app that connects me with people that can tell me if i have wiped enough. help me to create a better world and a whiter panties "}/> </Item>
      </Stack>
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Idea from "../Idea";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function IdeasStack() {
  const ideasCollectionRef = collection(db, "ideas");
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const getIdeas = async () => {
      const data = await getDocs(ideasCollectionRef);
      setIdeas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getIdeas();
  }, []);

  return (
    <Box sx={{ width: "75%" }}>
      <Stack spacing={2}>
        {ideas.map((idea) => {
          let maxNumber = 45;
          let randomNumber = Math.floor((Math.random() * maxNumber) + 1);
          return (
            <Item>
              <Idea
                catg={idea.catg}
                title={idea.ideaName}
                nunu={idea.description}
                commentCount={randomNumber}
                votes={idea.votes}
              />
            </Item>
          );
        })}
      </Stack>
    </Box>
  );
}

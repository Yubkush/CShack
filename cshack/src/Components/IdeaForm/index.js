import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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

export default function IdeaForm() {
  const [open, setOpen] = React.useState(false);

  const [ideaName, setIdeaName] = useState("");
  const [catg, setCatg] = useState("");
  const [description, setDescription] = useState([]);
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(0);
  const ideasCollectionRef = collection(db, "ideas");
  const [ideas, setIdeas] = useState([]);

  const createIdea = async () => {
    await addDoc(ideasCollectionRef, {
      ideaName: ideaName,
      catg: catg,
      description: description,
      votes: Number(votes),
      comments: comments,
    });
  };

  useEffect(() => {
    const getIdeas = async () => {
      const data = await getDocs(ideasCollectionRef);
      setIdeas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getIdeas();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseCancel = () => {
    setOpen(false);
  };

  const handleCloseSubmit = () => {
    setOpen(false);
    createIdea();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Tell Us about your amazing idea
      </Button>
      <Dialog open={open} onClose={handleCloseCancel}>
        <DialogTitle>Submit Idea</DialogTitle>
        <DialogContent>
          <DialogContentText>null</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Idea Name"
            type="ideaName"
            fullWidth
            variant="standard"
            value={ideaName}
            onChange={(e) => setIdeaName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Enter category"
            type="catg"
            fullWidth
            variant="standard"
            value={catg}
            onChange={(e) => setCatg(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="description"
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCancel}>Cancel</Button>
          <Button onClick={handleCloseSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Vote from '../Vote';
import IdeaContent from '../IdeaContent';
import CommentCount from '../CommentCount';

const ItemLeft = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  boxShadow: 'none',
  width:"86%",
}));
const ItemCenter = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default function Idea({ catg, title, nunu, commentCount, votes}) {
  return (
    <div>      
      <Stack
        direction="row"
        justifyContent="flex-start"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <ItemCenter><Vote count={votes}/> </ItemCenter>
        <ItemLeft><IdeaContent catg={catg} title={title} nunu={nunu} /></ItemLeft>
        <ItemCenter><CommentCount count={commentCount}/></ItemCenter>
      </Stack>
    </div>
  );
}

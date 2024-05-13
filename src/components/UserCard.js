import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserCard() {
  return (
    <Card sx={{ width: 265 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Ninad Dayanand Samant
        </Typography>
        <Typography variant="h5" component="div">
          react@gmail.com
        </Typography>
        <br />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          D.O.B - 09/01/2000
        </Typography>
        <Typography variant="body2">
          summary
          <br />
          <Button size="small">View</Button>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add</Button>
        <Button size="small">Update</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}

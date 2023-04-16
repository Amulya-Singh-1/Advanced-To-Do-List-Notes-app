import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FaTimes } from 'react-icons/fa'
import { Grid } from '@mui/material';
import '../App.css'

export default function Cards( {task, onDelete, onToggle } ) { 

  return (
    <Card style={{display:'inline-block', backgroundColor:'bisque' }} lg={{width: 600}} md={{width: 600}} sx={{ maxWidth: 345 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {task.text[0]}
          </Avatar>
          
        }
        title= {task.text} 
        subheader
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {task.day}
        </Typography>
      </CardContent>
      <CardContent>
          <Grid container>
            <Grid md-6 lg-6 sm-6>
              <IconButton  className={`task ${task.reminder && 'reminder'}`}
                  onDoubleClick={() => onToggle(task.id)} >
              <FavoriteIcon />
            </IconButton>
            </Grid>
            <Grid>
              <FaTimes fontSize='large'
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(task.id)}
              />
            </Grid>
          </Grid>
        </CardContent>

        
    </Card>   
  );
}

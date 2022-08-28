import React, { useState } from 'react';
import { styled } from '@mui/material/styles';


import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
    Typography,
    Grid,
    Box
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

//More section animation
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

//
const Cards = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
    <Card sx={{ m: 2, backgroundColor: "secondary.light"}}>
      <CardHeader
        title={props.title}
        subheader={props.subheader}
      />
      <CardMedia
        component="img"
        height="400"
        image={props.image}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" paragraph>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton 
          aria-label="github repo" 
          href={props.githubRepo}
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="github repo" 
          href={props.deployedApp}
          target="_blank"
        >
          <InsertLinkIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>
            Details: {props.details}
          </Typography>
          <Typography paragraph>
            Responsibilities: {props.responsibilities}
          </Typography>
          <Typography paragraph>
            Technologies Used: {props.technologies}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
  );
}

export default Cards;
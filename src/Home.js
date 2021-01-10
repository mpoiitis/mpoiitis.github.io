import React from "react"
import Appbar from 'components/Appbar.js';
import { HomeHero } from 'components/Hero.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from "@material-ui/core";
import { faUser } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.h6.fontSize,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(8),
      
    },  
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(16),
    }
  },
  main: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  secondary: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
  darkMain: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
  },
  darkSecondary: {
    color: theme.palette.secondary.dark,
    fontWeight: 'bold',
  },
}));

function Home(props) {
  const classes = useStyles();

  const title = "Marinos Poiitis"
  const paragraph = "Hello! I am Marinos, a Ph.D. candidate studying Graph Representation Learning with Graph Neural Networks in Aristotle University of Thessaloniki, Greece. I have working experience on Network and Data Mining as well as Machine Learning and Web Development. "

  return (
    <React.Fragment>
      <CssBaseline />
      <Appbar title={title} icon={faUser} />
      <HomeHero title={title} paragraph={paragraph} />
      <main className={classes.root}>
        <Grid container fixed spacing={3}>
          <Grid item sm={12} md={6} lg={6}>
            <Paper>
              I am a graduate of Aristotle University of Thessaloniki,Greece.<br /> I have studied computer science and I got my Master of Science in Web and Data Science.
              </Paper>
          </Grid>
          <Grid item md={6} lg={6}>
          </Grid>

          <Grid item md={6} lg={6}>
          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <Paper>
              A lot of stuff is going on right ?!?<br />  In fact, currently  I am a Ph.D. candidate researching <span className={classes.main}>Graph Representation Learning</span> using Graph Neural Networks... <br /> though I am eager to learn even more and advance my understanding of the state-of-the-art methods!
              </Paper>
          </Grid>

          <Grid item sm={12} md={6} lg={6}>
            <Paper>
              In reality, I am trying to be a <span className={classes.darkSecondary}>data scientist</span>...<br />  I am currently a machine learning engineer/data analyst or better a data freak!
              </Paper>
          </Grid>
          <Grid item md={6} lg={6}>
          </Grid>

          <Grid item md={6} lg={6}>
          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <Paper>
              Basically? It's all about creating, understanding and being a part of something bigger than you.<br />  <span className={classes.secondary}>Analyzing data</span> leads to useful insights.<br />  Data can help us eliminate major problems regarding health, privacy, equality.<br />  Its applications are countless !
              </Paper>
          </Grid>

          <Grid item sm={12} md={6} lg={6}>
            <Paper>
              But really, contributing and helping in the <span className={classes.darkMain}>development of society</span> is what really matters.<br />  People nowadays interact through social media, forming networks so I am investigating these structures.
              </Paper>
          </Grid>
          <Grid item md={6} lg={6}>
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  )
}

export default Home;
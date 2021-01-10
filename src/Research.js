import React from "react"
import Appbar from 'components/Appbar.js';
import { Hero } from 'components/Hero.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { faDna } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Project from 'components/Project.js';
import diffusion from 'images/diffusion.png';
import attrGraph from 'images/attrGraph.png';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const works = [
  {
    number: 1,
    title: 'On the Aggression Diffusion Modeling and Minimization in Online Social Networks',
    info: 'What are the characteristics of aggressive behavior in Social Media? Does cyberbullying spreads in a specific pattern from user to user? In this work, we model online aggression and we investigate ways to minimize its negative influence.',
    image: diffusion,
    url: 'https://arxiv.org/abs/2005.10646'
    // url: '/research/aggression'
  },
  {
    number: 2,
    title: 'TRIAGE: Temporal Twitter attribute graph patterns',
    info: "What are the patterns describing Twitter users' posting behavior? Are there any specific attributes indicating an inherent anomaly for either users or attributes? We answer these questions by identifying temporal behavioral patterns, modeling temporal evolution and detecting irregularities.",
    image: attrGraph,
    url: 'https://dl.acm.org/doi/abs/10.1145/3405962.3405998'
    // url: '/research/triage'
  }
];

function Research(props) {
  const classes = useStyles();

  const title = "Research"
  const paragraph = "Research is my passion! I am interested in Graph Neural Networks and their applications on Graph Representation Learning, Information Diffusion and Epidemics as well as Network and Data Mining"

  return (
    <React.Fragment>
      <CssBaseline />
      <Appbar title={title} icon={faDna} />
      <Hero title={title} paragraph={paragraph} />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {works.map((work) => (
              <Grid item key={work.number} xs={12} sm={6} md={6}>
                <Project title={work.title} info={work.info} url={work.url} image={work.image} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  )
}

export default Research;
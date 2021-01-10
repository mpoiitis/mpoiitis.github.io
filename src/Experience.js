import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Appbar from 'components/Appbar.js';
import { Hero } from 'components/Hero.js';
import Project from 'components/Project.js';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import laptop from 'images/laptop.jpg';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  primaryMain: {
    color: theme.palette.primary.main
  }
}));

const projects = [
  {
    number: 1,
    title: "LifeChamps",
    info: "Data Engineering \nEdge Analytics \nBatch/Stream Processing",
    date: "January 2020 - ongoing",
    url: "https://lifechamps.eu/"
  },
  {
    number: 2,
    title: "Heart",
    info: "Data Science \nNon-Intrusive Load Monitoring \nNeural Networks",
    date: "June 2020 - ongoing",
    url: "https://datalab-new.csd.auth.gr/projects/heart/"
  },
  {
    number: 3,
    title: "ClinApp",
    info: "Business Intelligence \nAnalytics",
    date: "June 2020 - ongoing",
    url: "https://clinapp.gr/"
  },
  {
    number: 4,
    title: "TTLS",
    info: "Data Science \nPredictive Analytics \nFront-end Web Development",
    date: "March 2019 - September 2020",
    url: "https://ttls.gr/?lang=en"
  },
  {
    number: 5,
    title: "Encase",
    info: "Data Science",
    date: "September 2019 - December 2019",
    url: "https://encase.socialcomputing.eu/"
  },
  {
    number: 6,
    title: "PlasticTwist",
    info: "Data Visualization \nFront-end Web Development \nTwitter Analysis",
    date: "July 2019 - October 2019",
    url: "https://ptwist.eu/"
  },
  {
    number: 7,
    title: "Online S3",
    info: "Data Visualization \nFront-end Web Development \nBack-end Web Development",
    date: "May 2017 - August 2017",
    url: "https://www.onlines3.eu/"
  }];

const skills = [
  {
    number: 1,
    title: 'Network Mining',
    percentage: 90
  },
  {
    number: 2,
    title: 'Social Network Analysis',
    percentage: 90
  },
  {
    number: 3,
    title: 'Graph Representation Learning',
    percentage: 70
  },
  {
    number: 4,
    title: 'Data Mining',
    percentage: 70
  },
  {
    number: 5,
    title: 'Information Diffusion',
    percentage: 60
  },
  {
    number: 6,
    title: 'Sentiment Analysis',
    percentage: 60
  },
];

const techSkills = [
  {
    number: 1,
    title: 'Front-end Web Development',
    percentage: 80
  },
  {
    number: 2,
    title: 'REST API Development',
    percentage: 80
  },
  {
    number: 3,
    title: 'Single Page Applications',
    percentage: 70
  },
  {
    number: 4,
    title: 'Back-end Web Development',
    percentage: 60
  },
  {
    number: 5,
    title: 'Software Engineering',
    percentage: 60
  },
  {
    number: 6,
    title: 'Data Visualization',
    percentage: 50
  },
];

const technologies = [
  {
    number: 1,
    title: 'Python',
    color: 'primary'
  },
  {
    number: 2,
    title: 'Tensorflow',
    color: 'primary'
  },
  {
    number: 3,
    title: 'PyTorch',
    color: 'primary'
  },
  {
    number: 4,
    title: 'Spark',
    color: 'primary'
  },
  {
    number: 5,
    title: 'NoSQL',
    color: 'primary'
  },
  {
    number: 6,
    title: 'Java/Scala',
    color: 'primary'
  },
  {
    number: 7,
    title: 'React.js',
    color: 'secondary'
  },
  {
    number: 8,
    title: 'Flask',
    color: 'secondary'
  },
  {
    number: 9,
    title: 'HTML5',
    color: 'secondary'
  },
  {
    number: 10,
    title: 'CSS3',
    color: 'secondary'
  },
  {
    number: 11,
    title: 'PHP',
    color: 'secondary'
  },
  {
    number: 12,
    title: 'Wordpress',
    color: 'secondary'
  },
];

function Experience() {
  const classes = useStyles();

  const title = "Experience & Skills"
  const paragraph = "I have contributed in various European Horizon 2020, Marie Curie and national projects. Mainly, I work as a data scientist, but I have also developed web development and software engineering skills to complement my work."
  return (
    <React.Fragment>
      <CssBaseline />
      <Appbar title={title} icon={faCode} />
      <Hero title={title} paragraph={paragraph} />
      <main>
        <Typography gutterBottom variant="h3">
          Projects
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item key={project.number} xs={12} sm={6} md={4}>
                <Project title={project.title} info={project.info} date={project.date} url={project.url} image={laptop} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Typography gutterBottom variant="h3">
          Skills
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={6} md={6} lg={6}>
              {skills.map((skill) => (
                <React.Fragment>
                  <Grid container spacing={4}>
                    <Grid item key={skill.number} xs sm md>
                      <span style={{ fontWeight: 'bold' }}>{skill.title}
                      <BorderLinearProgress variant="determinate" value={skill.percentage} /></span> 
                    </Grid>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              {techSkills.map((skill) => (
                <React.Fragment>
                  <Grid container spacing={4}>
                    <Grid item key={skill.number} xs sm md>
                      <span style={{ fontWeight: 'bold' }}>{skill.title}</span>
                      <BorderLinearProgress variant="determinate" value={skill.percentage} />
                    </Grid>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Container>
        <Typography gutterBottom variant="h3">
          Technologies
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {technologies.map((tech) => (
              <Grid item key={tech.number} xs={2}>
                <Chip label={tech.title} clickable color={tech.color} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Experience;
import React from "react"
import Appbar from 'components/Appbar.js';
import { Hero } from 'components/Hero.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import linkedin from 'images/linkedin.jpg';
import github from 'images/github.jpg';
import scholar from 'images/scholar.jpg';
import email from 'images/email.jpg';
import Container from '@material-ui/core/Container';
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const images = [
  {
    url: linkedin,
    title: 'LinkedIn',
    width: '40%',
    link: "https://www.linkedin.com/in/marinos-poiitis/"
  },
  {
    url: github,
    title: 'Github',
    width: '40%',
    link: "https://github.com/mpoiitis"
  },
  {
    url: scholar,
    title: 'Google Scholar',
    width: '40%',
    link: "https://scholar.google.com/citations?user=lHI7-XoAAAAJ&hl=el&oi=ao"
  },
  {
    url: email,
    title: 'Email',
    width: '40%',
    link: "mailto:marinospoet@gmail.com"
  },
];

const useStyles = makeStyles((theme) => ({
  image: {
    position: 'relative',
    height: 200,
    margin: '2%',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

function Contact(props) {
  const classes = useStyles();

  const title = "Contact"
  const paragraph = "Contact me through any of the below media. Use LinkedIn to have a look at my experience, Github for code tracking, Google Scholar for my latest research works and email for direct communication"

  return (
    <React.Fragment>
      <CssBaseline />
      <Appbar title={title} icon={faPhone}/>
      <Hero title={title} paragraph={paragraph} />
      <main>
        <Container>
          {images.map((image) => (
            <ButtonBase
              focusRipple
              key={image.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width,
              }}
            >
              <a href={image.link}>
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
              </a>
            </ButtonBase>
          ))}
        </Container>
      </main>
    </React.Fragment>
  )
}

export default Contact;
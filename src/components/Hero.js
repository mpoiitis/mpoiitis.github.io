import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import melogo from 'images/melogo.png';

const useStyles = makeStyles((theme) => ({
    image: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          width: "100%",
          height: "100%",
        },
    },
    cardMedia: {
        paddingTop: '81.25%',
        borderRadius: '16%',
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 1, 0, 1),
          },  
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(8, 0, 6),
        },
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    wrapText: {
        whiteSpace: 'pre-wrap'
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    }
}));

function Hero(props) {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.wrapText}>
                    {props.paragraph}
                </Typography>
            </Container>
        </div>
    )
}

const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob(["files/cv_poiitis.pdf"],    
                {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "files/cv_poiitis.pdf";
    document.body.appendChild(element);
    element.click();
  }
  
function HomeHero(props) {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={0} sm={4} md={4} lg={4} className={classes.image}>   
                        <CardMedia
                            className={classes.cardMedia}
                            image={melogo}
                            title="Image of myself"
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={8}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            {props.title}
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.wrapText}>
                            {props.paragraph}
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={downloadFile}>
                                        Download Resume
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export {Hero, HomeHero};
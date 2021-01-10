import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import SchoolIcon from '@material-ui/icons/School';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
    footerIcons: {
        maxWidth: 400,
    }
}));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Marinos Poiitis
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <footer className={classes.footer}>
                <Grid container spacing={1} justify="center">
                    <Grid item xs={12}>
                        <Typography variant="h6" align="center" gutterBottom color="primary">
                            Go social!
                        </Typography>
                    </Grid>
                    <Grid container className={classes.footerIcons}>
                        <Grid item xs={3}>
                            <Link href="https://www.linkedin.com/in/marinos-poiitis/">
                                <LinkedInIcon color='secondary'/>
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="https://github.com/mpoiitis">
                                <GitHubIcon color='secondary'/>
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="https://scholar.google.com/citations?user=lHI7-XoAAAAJ&hl=el&oi=ao">
                                <SchoolIcon color='secondary'/>
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="mailto:marinospoet@gmail.com">
                                <EmailIcon color='secondary'/>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Copyright />
                    </Grid>
                </Grid>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    buttonCentered: {
        justifyContent: 'center'
    },
    wrapText: {
        whiteSpace: 'pre-wrap'
    }
}));

function Project(props) {
    const classes = useStyles();
    const renderDate = () => {
        return props.date ? <Typography variant="body2" color="textSecondary"> {props.date} </Typography> : null
    }
    const renderButton = () => {
        return props.date ?
            <Button variant="outlined" size="small" color="primary" target="_blank" href={props.url}>
                Project Website
        </Button> :
            <Button variant="outlined" size="small" color="primary" href={props.url}>
                Learn More
        </Button>
    }

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={props.image}
                    title="Project Image"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" color="secondary">
                        {props.title}
                    </Typography>
                    <Typography className={classes.wrapText} color="textPrimary" gutterBottom>
                        {props.info}
                    </Typography>
                    {renderDate()}
                </CardContent>
                <CardActions className={classes.buttonCentered}>
                    {renderButton()}
                </CardActions>
            </Card>
        </React.Fragment>
    )
}

export default Project;
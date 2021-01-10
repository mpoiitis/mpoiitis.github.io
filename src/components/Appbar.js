import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
}));

function Appbar(props){
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="relative">
                <Toolbar>
                    <FontAwesomeIcon icon={props.icon} className={classes.icon}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Appbar;

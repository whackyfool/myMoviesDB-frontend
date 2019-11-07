import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
	Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    navBarWrapper: {
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url("https://justpaste.it/img/b1eb62a8a21fb1a9dfaabf200db6fa06.jpg")',
        backgroundPositionY: 'bottom',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        boxShadow: 'none',
        clipPath: 'polygon(100% 0, 100% 80%, 0% 100%, 0 0)',
        textShadow: '5px 5px 10px #111'
    },
    navBarToolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navButton: {
        marginLeft: '1.5em'
    },
    navTitle: {
        textAlign: 'left',
        marginLeft: '10vw',
        marginTop: '5vw'
    },
    navlogo: {
        marginTop: '4vh'
    },
    navh2: {
        wordSpacing: '3px'
    },
    navh6: {
        marginTop: '3vw',
        fontWeight: '600'
    },
    discover: {
        width: '10%',
        marginTop: '4vw',
        color: 'darkred',
        fontWeight: '600'
    },
    link: {
        textDecoration: 'none',
        color: 'darkred',
        '&:hover &:focus &:visited &:link &:active': {
            textDecoration: 'none',
            color: 'darkred',
        }
    }
}));

const NavBar = (props) => {
    const classes = useStyles();

    return(
        <div style={{filter: 'drop-shadow(2px 2px 10px darkred)'}}>
            <AppBar position="static" className={classes.navBarWrapper}>
                <Toolbar className={classes.navBarToolbar}>
                    <img src={require("../logo.png")} className={classes.navlogo} height='75px' width='75px'/>
                    <div>
                        <Link to="/Login" className={classes.link}>
                            <Button type="submit" variant="contained" color="default" className={classes.navButton}>
                                Log In
                            </Button>
                        </Link>
                        <Link to="/SignUp" className={classes.link}>
                            <Button type="submit" variant="contained" color="secondary" className={classes.navButton}>
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </Toolbar>
                <div className={classes.navTitle}>
                    <Typography variant="h3" color="inherit" className={classes.navh2}>
                        MARK YOUR FAVOURITE MOVIES !!
                    </Typography>
                    <Typography variant="h6" color="inherit" className={classes.navh6}>
                        Create a free account to bookmark your favourite movies. Login anytime to get back your list.
                    </Typography>
                    <Link to={props.url} className={classes.link}>
                        <Button type="submit" variant="contained" color="default" className={classes.discover}>
                            {props.nextAction}
                        </Button>
                    </Link>
                </div>
            </AppBar>
        </div>
    )
}
export default NavBar;
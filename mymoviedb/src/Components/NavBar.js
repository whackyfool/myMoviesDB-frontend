import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    navBarWrapper: {
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url("https://justpaste.it/img/b1eb62a8a21fb1a9dfaabf200db6fa06.jpg")',
        backgroundPositionY: 'bottom',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
        boxShadow: 'none',
        '&:after': {
            left: '0',
            width: '100%',
            bottom: '0',
            content: '" "',
            position: 'absolute',
            borderLeft: '100vw solid transparent',
            borderBottom: '80px solid #ffffff',
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2) inset, 0px 4px 5px 0px rgba(0,0,0,0.14) inset, 0px 1px 10px 0px rgba(0,0,0,0.12) inset'
        },
        fontFamily: 'roboto',
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
        marginTop: '2vw'
    },
    navlogo: {
        marginTop: '4vh'
    },
    navh6: {
        marginTop: '3vw'
    },
    discover: {
        width: '10%',
        marginTop: '4vw',
        color: 'darkred',
        fontWeight: '600'
    }
}));

const NavBar = () => {
    const classes = useStyles();

    return(
        <div>
            <AppBar position="static" className={classes.navBarWrapper}>
                <Toolbar className={classes.navBarToolbar}>
                    <img src={require("../logo.png")} className={classes.navlogo} height='75px' width='75px'/>
                    <div>
                        <Button type="submit" variant="contained" color="default" className={classes.navButton}>
                            Log In
                        </Button>
                        <Button type="submit" variant="contained" color="secondary" className={classes.navButton}>
                            Sign Up
                        </Button>
                    </div>
                </Toolbar>
                <div className={classes.navTitle}>
                    <Typography variant="h2" color="inherit">
                        Mark your favourite movies !!
                    </Typography>
                    <Typography variant="h6" color="inherit" className={classes.navh6}>
                        Create a free account to bookmark your favourite movies. Login anytime to get back your list.
                    </Typography>
                    <Button type="submit" variant="contained" color="default" className={classes.discover}>
                        Discover
                    </Button>
                </div>
            </AppBar>
        </div>
    )
}
export default NavBar;
import React from 'react';
import SignUp from '../Components/SignUp.js'
import NavBar from '../Components/NavBar.js'
import Footer from '../Components/Footer.js'
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import {
	Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    cardswrapper: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        padding: '10px',
        marginTop: '5vh',
        marginBottom: '5vh'
    }
}))

const Discover = () => {
    const classes = useStyles();
    return (
        <div>
            <NavBar nextAction="HOME" url="/"/>
            <div className={classes.cardswrapper}>
                <MyCard/>
                <MyCard/>
                <MyCard/>
                <MyCard/>
                <MyCard/>
                <MyCard/>
            </div>
            <Footer/>
        </div>
    )
}

const cardStyles = makeStyles(theme => ({
    MuiPostCardone: {
        width: '80%',
        transition: '0.3s',
        maxWidth: '304',
        margin: '8vh',
        boxShadow: '0 0 20px 0 rgba(0,0,0,0.12)',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-7px)',
          boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
        }
    },
    MuiCardMediaroot: {
        paddingTop: '56.25%',
        position: 'relative',
        '&:after': {
            content: '" "',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            borderBottom: '32px solid #ffffff',
            borderLeft: '400px solid transparent',
        }
    },
    MuiCardContentroot: {
        textAlign: 'justify',
        padding: '2vw'
        /*padding: spacing(3),*/
    },
    MuiTypographyheading: {
        fontWeight: 'bold',
    },
    MuiTypographysubheading: {
        lineHeight: '1.8',
    },
    MuiCardActionsroot: {
        /*padding: spacing(0, 3, 3),*/
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2vw',
        paddingTop: '0',
        alignItems: 'center',
    }
}));

const MyCard = () => {
    const classes = cardStyles()

    return (
        <Card className={classes.MuiPostCardone}>
        <CardMedia
            className={classes.MuiCardMediaroot}
            image={
            'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/avengersendgame-redposter-frontpage-700x310.jpg'
            }
        >
        </CardMedia>
        <CardContent className={classes.MuiCardContentroot}>
            <Typography
            className={classes.MuiTypographyheading}
            variant={'h5'}
            gutterBottom
            >
            Avengers: Infinity War
            </Typography>
            <Typography className={classes.MuiTypographysubheading} variant={'title'}>
            As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy…
            </Typography>
        </CardContent>
        <CardActions className={classes.MuiCardActionsroot}>
            <Typography variant={'h6'}>
                March 8, 2016
            </Typography>
            <div>
            <IconButton>
                <Icon>share</Icon>
            </IconButton>
            <IconButton>
                <Icon>favorite_border</Icon>
            </IconButton>
            </div>
        </CardActions>
        </Card>
    )
}

export default Discover
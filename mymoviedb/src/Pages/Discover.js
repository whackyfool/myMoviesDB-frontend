import React, { useState ,useEffect} from 'react';
import * as api from '../api';
import { isAuthed } from "../tokenUtils";
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
import { func } from 'prop-types';

const useStyles = makeStyles(theme => ({
    cardswrapper: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '5500px',
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    mainheader: {
        textAlign: 'center',
        color: 'darkred',
        textShadow: '0 0 10px rgba(200,0,0,0.25)',
    }
}))

function Discover() {
    const classes = useStyles();

    const [results, setResults] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);
    const [favMovies, setfavmovies] = useState([])
    const [personID, serpersonid] = useState(isAuthed())
    
    useEffect(() => {
        fetchData();
    }, [personID]);
    
    
    const fetchData = () => {
        const url = "https://api.themoviedb.org/3/movie/top_rated?api_key={your key}&language=en-US&page=1";
        return fetch(url)
            .then(response => response.json())
            .then(parsedJSON => setResults(parsedJSON.results))
            .then(
                async event => {
                    try {
                        const data = await api.getMovies()
                        var l = (data.data).length
                        setfavmovies(() => {
                            var arr = [];
                            for( var i=0; i<l; i++) {
                                arr.push((data.data)[i].mid)
                            }
                            console.log(arr)
                            return arr;
                        })
                    } catch (error) {
                        console.log(error.response);
                    }
                }
            )
            .catch(error => console.log(error));
    }
      
    return (
        <div>
            <NavBar nextAction="HOME" url="/"/>
            <h1 className={classes.mainheader}>Mark your favourite movies !!</h1>
            <div className={classes.cardswrapper}>
                <MyCard data={results[0]} favlist={favMovies}/>
                <MyCard data={results[1]} favlist={favMovies}/>
                <MyCard data={results[2]} favlist={favMovies}/>
                <MyCard data={results[3]} favlist={favMovies}/>
                <MyCard data={results[4]} favlist={favMovies}/>
                <MyCard data={results[5]} favlist={favMovies}/>
                <MyCard data={results[6]} favlist={favMovies}/>
                <MyCard data={results[7]} favlist={favMovies}/>
                <MyCard data={results[8]} favlist={favMovies}/>
                <MyCard data={results[9]} favlist={favMovies}/>
                <MyCard data={results[10]} favlist={favMovies}/>
                <MyCard data={results[11]} favlist={favMovies}/>
                <MyCard data={results[12]} favlist={favMovies}/>
                <MyCard data={results[13]} favlist={favMovies}/>
                <MyCard data={results[14]} favlist={favMovies}/>
                <MyCard data={results[15]} favlist={favMovies}/>
                <MyCard data={results[16]} favlist={favMovies}/>
                <MyCard data={results[17]} favlist={favMovies}/>
                <MyCard data={results[18]} favlist={favMovies}/>
                <MyCard data={results[19]} favlist={favMovies}/>
            </div>
            <Footer/>
        </div>
    )
}

const cardStyles = makeStyles(theme => ({
    MuiPostCardone: {
        width: '27%',
        transition: '0.3s',
        maxWidth: '304',
        height: 'auto',
        margin: '3%',
        boxShadow: '0 0 20px 0 rgba(200,0,0,0.25)',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-7px)',
          boxShadow: '0 4px 20px 0 rgba(200,0,0,0.25)',
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
        padding: '2vw'
        /*padding: spacing(3),*/
    },
    MuiTypographyheading: {
        fontWeight: 'bold',
        letterSpacing: '0.1em',
        marginBottom: '20px',
        color: 'darkred'
    },
    MuiTypographysubheading: {
        lineHeight: '1.8',
        textAlign: 'justify',
        letterSpacing: '0.15em',
        wordSpacing: '0.1em'
    },
    MuiCardActionsroot: {
        /*padding: spacing(0, 3, 3),*/
        display: 'flex',
        justifyContent: 'space-between',
        color: 'darkerd',
        padding: '2vw',
        paddingTop: '0',
        alignItems: 'center',
    }
}));

const MyCard = (props) => {
    const classes = cardStyles()

    const [isFavClicked, setisfavclicked] = useState(false);
    const [flag, setflag] = useState(true);

    const trim = (str) => {
        if(str.length > 250) 
            str = str.substring(0,250) + "...";
        return str;
    }

    const isFav = () => {
        for(var i=0;i<20;i++) {
            for(var j=0;j<props.favlist.length;j++) {
                if(flag == true && props.favlist[j] == props.data.id) {
                    return true;
                }
            }
            return false;
        }
    }

    let favIcon;
    if(isFav() || isFavClicked) {
        favIcon = <Icon style={{color: 'red'}}>favorite</Icon>
    }
    else {
        favIcon = <Icon>favorite_border</Icon>
    }


    return (
        <Card className={classes.MuiPostCardone}>
        <CardMedia
            className={classes.MuiCardMediaroot}
            image={
            'https://image.tmdb.org/t/p/w533_and_h300_bestv2/' + props.data.backdrop_path
            }
        >
        </CardMedia>
        <CardContent className={classes.MuiCardContentroot}>
            <Typography
            className={classes.MuiTypographyheading}
            variant={'h5'}
            gutterBottom
            >
            {props.data.title}
            </Typography>
            <Typography className={classes.MuiTypographysubheading} variant={'subtitle2'}>
            {props.data.overview}
            </Typography>
        </CardContent>
        <CardActions className={classes.MuiCardActionsroot}>
            <Typography variant={'h6'}>
                {"Rating: " + props.data.vote_average}
            </Typography>
            <div>
            <IconButton>
                <Icon>share</Icon>
            </IconButton>
            <IconButton onClick={async event => {
                try {
                    if(flag==true && isFav()==true)
                        setflag(false);
                    else
                        setisfavclicked(!isFavClicked);
                    await api.markFavourite(props.data.id);
                } catch (error) {
                    console.log(error.response);
                }
            }}>
                {favIcon}
            </IconButton>
            </div>
        </CardActions>
        </Card>
    )
}

export default Discover

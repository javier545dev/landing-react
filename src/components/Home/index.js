import React from 'react';
import holding from '../../assets/Holding-Phone.png'
import frame from '../../assets/Frame2.png'
import port from '../../assets/Lagggom.png'
import logo from '../../assets/Lagom.svg'
import { makeStyles } from '@material-ui/core/styles';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CallMadeIcon from '@material-ui/icons/CallMade';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from "clsx"

const useStyles = makeStyles({
    itemText: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 45,
        marginTop: 45,
        '@media screen and (max-width: 400px)': {
            marginBottom: 10,
            marginTop: 10,
        },
    },
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
    },
    containerChild: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        '@media screen and (max-width: 400px)': {
          flexDirection: "column"  
        },
    },
    containerDiv: {
        flex: 1,
    },
    containerOther: {
        display: "flex",
        flexDirection: "row",
        width: "50%",
        '@media screen and (max-width: 400px)': {
          flexDirection: "column",  
          width: "100%",
        },
        '@media (min-width: 900) and (max-width: 1080px)': {
            flexDirection: "column",
          },
    },
    containerImg: {
        width: "100%"
    },
    containerText: {
        flexDirection: "column",
        justifyContent: "center",
        display: "flex",
        padding: 20,
        '@media screen and (max-width: 400px)': {
            padding: 25,
        },
    },
    borderLinear: {
        width: "100%",
        borderBottom: "2px solid black"
    },
    iconOpen: {
        cursor: "pointer",
      },
    iconColor: {
        color: "black",
    },
    fontW: {
        fontWeight: 700,
        fontSize: 30,
    },
    fontWG: {
        fontWeight: 700,
        fontSize: 30,
        color: "gray",
        '@media screen and (max-width: 400px)': {
            color: "black"
        },
    },
    logo: {
        width: 100,
    },
    bar: {
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        padding: "20px 0",
        borderBottom: "3px solid",
        margin: "0 20px",
    },
    h1:{
        height: "50%",
        display: "flex",
        alignItems: "center",
        padding: 70,
        "& > h1": {
            fontWeight: "800"
        },
        fontSize: 30,
        '@media screen and (max-width: 400px)': {
            fontSize: 20,
        },
    },
    iconCall:{
        color: "gray",
        '@media screen and (max-width: 400px)': {
            color: "black"
        },
    }
});

export default function Home({toggleDrawer}) {
    const matches = useMediaQuery('(max-width:400px)');
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.containerChild}>
                <div style={{order: matches? 2 : 1}} className={classes.containerDiv}>
                    <img className={classes.containerImg} src={holding} alt="holding-phone"/>
                </div>
                <div style={{order: matches? 1 : 2}} className={clsx(classes.containerDiv)}>
                    <div className={classes.bar}>
                        <img className={classes.logo} src={logo} alt="logo" />
                        <DehazeIcon onClick={toggleDrawer(true)} fontSize={'large'} color="primary" classes={{colorPrimary: classes.iconColor}} className={classes.iconOpen}/>
                    </div>
                    <div className={classes.h1}>
                        <h1>Digital products lovingly made with a human touch.</h1>
                    </div>
                </div>
            </div>
            <div className={classes.containerChild}>
                <div className={clsx(classes.containerDiv, classes.containerText)}>
                    <div className={classes.itemText}>
                        <h2 className={classes.fontW}>Dribbble</h2>
                        <CallMadeIcon/>
                    </div>
                    <span className={classes.borderLinear}/>
                    <div className={classes.itemText}>
                        <h2 className={classes.fontWG}>Twitter</h2>
                        <CallMadeIcon color="primary" classes={{colorPrimary: classes.iconColorCall}} className={classes.iconCall}/>
                    </div>

                </div>
                <div className={classes.containerOther}>
                    <img className={classes.containerImg} src={frame} alt="frame"/>
                    <img className={classes.containerImg} src={port} alt="port"/>
                </div>
            </div>
        </div>
    )
}
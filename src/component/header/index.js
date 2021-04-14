import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { Paper } from '@material-ui/core';






const drawerWidth = 240;//240 defautl




//main function
export default function Header(props) {


  //style
  const useStyles = makeStyles((theme) => ({


    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
       
      height:"calc(100vh - 56px)",
      width:"100%",
      marginTop:"56px",
      overflow:"auto",
      paddingTop:0,
      paddingBottom:0,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
      "@media (min-width: 600px)":{
        height:"calc(100vh - 64px)",
        marginTop:"64px",

      }

    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    appBar: {

      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    hide: {
        display: 'none',
    },
    appBarShift: {
        
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    paperasbody:{
      padding:0,
      margin:0,
      boxShadow:"none",
      height:"100vh",
      width:"100%",
      border:"none",
      borderRadius:0,
      overflow:"auto"
      
    }

  }));


  //style
  const classes = useStyles();
  const theme = useTheme();




  //states 
  const [width, setWidth]   = useState(window.innerWidth);
  const [open, setOpen] =  useState(width > theme.breakpoints.values.md );


  // all functions of resize screen drawer open or close
  useEffect(() => {
      window.addEventListener("resize",()=>setWidth(window.innerWidth));
      return () => window.removeEventListener("resize", ()=> setWidth(window.innerWidth));
  }, []);

  useEffect(()=>{
      (width < theme.breakpoints.values.md )  & open    &&  setOpen(!open);
      (width > theme.breakpoints.values.md )  & !open   &&  setOpen(!open);
  },[width])


  //drawer open function
  const handleDrawer  = () => {
      setOpen(!open);
  };


 

  return (

    <Paper className={classes.paperasbody} >
    <div className={classes.root}>
        
      <Topbar css={classes} drawerWidth={drawerWidth} drawerOpen={open}  handleDrawer={handleDrawer} value={props.value} ></Topbar>
      <Sidebar css={classes} drawerWidth={drawerWidth} drawerOpen={open} handleDrawer={handleDrawer} value={props.value}></Sidebar>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
         
          {/* <div className={classes.drawerHeader} /> */}
          {props.children}
       </main>

    </div>
    </Paper>
  );


}

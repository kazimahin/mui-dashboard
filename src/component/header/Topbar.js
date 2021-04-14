 
import React  from 'react';
import clsx from 'clsx';
import { makeStyles,   } from '@material-ui/core/styles'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';
import MenuComp from './comp/menu.topbar';
import {Link} from "react-router-dom";


//style
const style = makeStyles(theme=>({
  avatar:{
    backgroundColor:"skyblue",
    marginRight:"15px",
    
 },
 name:{
   flexGrow:1,
   textDecoration:"none",
   color:theme.palette.primary.contrastText
 }
}))





//main function
function Topbar(props) {


  //style
  const innerStyle = style()
  const classes ={ ...props.css, ...innerStyle}


 
  return (
       <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.drawerOpen,
        })}
      >

        <Toolbar>
              
          {/* sidebar collaps icon  */}
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, props.drawerOpen && classes.hide)}
          >
            <MenuIcon /> 
          </IconButton>
          
          {/* logo */}
          <Avatar component={Link } to={props.namelogo_link} src={props.value.logo}  className={classes.avatar}>N</Avatar>

          {/* name */}
          <Typography component={Link}  to={props.value.namelogo_link} className={classes.name} variant="h6" noWrap>
            {props.value.name}
          </Typography>


              
      


          {/* right menu  */}

          {
            props.value.othermenu.map((value,key)=>{
              return <MenuComp key={key} value={value}  ></MenuComp>
            })
          }
          <MenuComp   value={props.value.menu}  ></MenuComp>



        </Toolbar>
      
      </AppBar>
 
    );
}

export default Topbar;
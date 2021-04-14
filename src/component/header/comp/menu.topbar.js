import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from "react-router-dom"
 



//style
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  link:{
      textDecoration:"none",
      color:theme.palette.text.primary
  }
}));





//MAIN FUNCTION
export default function MenuListComposition(props) {



  //STYLE
  const classes = useStyles();


  //functions
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

 

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  //--------end of functions






  return (
      <div className={classes.root}>
 
        <div
          ref={anchorRef}
          onClick={handleToggle}
        >
          {props.value.button}
        </div>



        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList  id="menu-list-grow"  >
                    {
                        props.value.list.map((value,key)=>{
                            return(
                                     <MenuItem exact   component={NavLink}  to={value.link} style={{padding:"0px"}} key={key} onClick={handleClose}>{value.value}</MenuItem>
                                    //  activeClassName="Mui-selected"
                            )
                        })
                    }
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
  );
}

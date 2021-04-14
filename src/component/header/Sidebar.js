import React  from 'react';
import Drawer from '@material-ui/core/Drawer'; 
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'; 
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {NavLink } from 'react-router-dom'



const style = makeStyles(theme=>({
  tabpanel_padding:{
      "& .MuiBox-root":{
      padding:"0px"
     }
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

}))





//all functions for tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
//---------close of all tab functions



//main function start
function Sidebar(props) {

    //style
    const innerclasses = style()
    const classes = {...props.css,...innerclasses}




    //state and function for tab
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    //--------end state and function for tab





    //nav bar open function dash and web
    const [navopen, setnavOpen] = React.useState(false);
    const [navopen2, setnavOpen2] = React.useState(false);
    const handleClick = (e) => {
      setnavOpen({[e]:!navopen[e]});
    };
    const handleClick2 = (e) => {
      setnavOpen2({[e]:!navopen2[e]});
    };
    //---------close nav function





    return (
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
        >

          {/* top navigation and sidebar collaps button */}
          <div style={{display:"flex",alignItems:"flex-end",  }} className="MuiToolbar-regular">
            <div style={{flexGrow:1 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon label tabs example"
              >
                {props.value.links_name.web && 
                <Tab {...a11yProps(0)}  style={{minWidth:"80px"}}   
                  label={
                    <div style={{display:"flex",alignItems:"center"}}>
                      {props.value.links_name.web.icon}
                      <span style={{maxWidth:"43px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>  
                        {props.value.links_name.web.name}
                      </span>
                    </div>
                  }  
                  title={props.value.links_name.web.name} 
                />
                } 
                {props.value.links_name.dash && 
                <Tab {...a11yProps(1)} style={{minWidth:"80px"}}   
                  label={
                    <div style={{display:"flex",alignItems:"center"}}>
                      {props.value.links_name.dash.icon}
                      <span style={{maxWidth:"43px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>  
                        {props.value.links_name.dash.name} 
                      </span>
                    </div>
                  }
                  title={props.value.links_name.dash.name} 

                />
                  }
              </Tabs>
            </div>  

            <div style={{marginBottom:"5px"}}  >
                <IconButton   onClick={props.handleDrawer}>
                    <ChevronLeftIcon />  
                </IconButton>
            </div>  
          </div>
          {/*--------------- end of top navigation  */}


          <Divider />

          {/* list start  */}
          <div style={{height:" calc(100vh - 65px)", overflow: "auto"}}>

            <TabPanel  className={classes.tabpanel_padding} value={value} index={0}>
              <List>
                  { props.value.links.web.map((value1,key)=>{

                        if(value1.read){
                        if(Array.isArray(value1.link)){
                        return(
                          <>
                            <ListItem  button onClick={e=>handleClick(key)} id={key} >
                                <ListItemIcon>
                                {value1.icon}
                                </ListItemIcon>
                                <ListItemText primary={value1.name} />
                                {navopen[key]   ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>

                            <Collapse style={{background:"rgb(140 140 140 / 8%)"}} in={navopen[key]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                  {
                                    value1.link.map((value2,key2)=>{ 
                                      if(value2.read){
                                      return(
                                        <ListItem exact activeClassName="Mui-selected"  component={NavLink} to={value2.link} key={key2} button className={classes.nested}>
                                          <ListItemIcon>
                                            {value2.icon}
                                          </ListItemIcon>
                                          <ListItemText primary={value2.name} />
                                        </ListItem>
                                      )
                                      }
                                    })
                                  }
                                </List>
                            </Collapse>
                          </>
                      )
                      }else{
                        return(
                          <ListItem exact activeClassName="Mui-selected"  component={NavLink} to={value1.link}  button key={key}>
                            <ListItemIcon>{value1.icon}</ListItemIcon>
                            <ListItemText   primary={value1.name} />
                          </ListItem>
                        )
                      }
                      }

                    })
                
                  }
              </List>
            </TabPanel>


            
            {

              props.value.links.dash && 
              <TabPanel  className={classes.tabpanel_padding} value={value} index={1}>
              <List>
                  { props.value.links.dash.map((value1,key)=>{

                    
                      if(value1.permission.read){
                      if(Array.isArray(value1.link)){
                        return(
                          <>
                            <ListItem button onClick={e=>handleClick2(key)} id={key} >
                                <ListItemIcon>
                                  {value1.icon}
                                </ListItemIcon>
                                <ListItemText primary={value1.name} />
                                {navopen2[key]   ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>

                            <Collapse style={{background:"rgb(140 140 140 / 8%)"}} in={navopen2[key]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                  {
                                    value1.link.map((value2,key2)=>{ 
                                      if(value2.permission.read){
                                      return(
                                        <ListItem  exact activeClassName="Mui-selected"  component={NavLink} to={value2.link} key={key2}  button className={classes.nested}>
                                          <ListItemIcon>
                                            {value1.icon}
                                          </ListItemIcon>
                                          <ListItemText primary={value2.name} />
                                        </ListItem>
                                      )
                                      }
                                    })
                                  }
                                </List>
                            </Collapse>
                          </>
                      )
                      }else{
                        return(
                          <ListItem exact component={NavLink} to={value1.link} activeClassName="Mui-selected" button key={key}>
                            <ListItemIcon>{value1.icon}</ListItemIcon>
                            <ListItemText   primary={value1.name} > </ListItemText>
                          </ListItem>
                        )
                      }
                      }

                    })
                
                  }
              </List>
            </TabPanel>
            }
            

          </div>
          {/* ------------list end */}
         
        </Drawer>
         

    );
}

export default Sidebar;
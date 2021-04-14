import {  IconButton } from "@material-ui/core"

import LanguageIcon from '@material-ui/icons/Language';
import DashboardIcon from '@material-ui/icons/Dashboard';

  const value = {

    
    name:"Name of Your Web site",
    logo:"https://edukasyon-production.s3.amazonaws.com/uploads/school/avatar/13589/Apas_Integrated_Senior_High_School.jpg",
    namelogo_link:"/",

    menu:{
      button:<IconButton style={{margin:"0  0 0 20px "}}><i  className="fas fa-ellipsis-v " style={{fontSize:"21px"}}></i></IconButton>, 
      list:[
        {value:<div style={{padding:"15px"}}>Dashbord</div> , link:"/"},
        {value:<div style={{padding:"15px"}}>Login</div> , link:"/login"},
        {value:<div style={{padding:"15px"}}>Log OUt</div>, link:"/logout"}
      ]
    },

    
    othermenu:[
      {
        button:<IconButton ><i  className="fas fa-bell " style={{fontSize:"21px" }}></i></IconButton>, 
        list:[
          {value:<div style={{padding:"15px"}}>helow how are ou</div> , link:"/"},
          {value:<div style={{padding:"15px"}}>lorem cholen keno</div> , link:"/login"},
          {value:<div style={{padding:"15px"}}>Log OasdfadUt</div>, link:"/logout"}
        ]
      },
      {
        button:<IconButton><i  className="fas fa-envelope " style={{fontSize:"21px"}}></i></IconButton>,
        list:[
          {value:<div style={{padding:"15px"}}>Dash adf asdf fda dfbord</div> , link:"/"},
          {value:<div style={{padding:"15px"}}>adf asdf asdf asdf sdaf sd fasdf </div> , link:"/login"},
          {value:<div style={{padding:"15px"}}>Log a sdfas fasd fasdf asdfOUt</div>, link:"/logout"}
        ]
      },
    ],


    //if you remote dash from this list dash menu will remove
    links_name:{
        web:{
            name:"weba", // name mostly 4 words
            icon:<LanguageIcon  style={{marginRight:"8px"}} fontSize="small" ></LanguageIcon>
        },
        dash:{
            name:"dash",
            icon:<DashboardIcon  style={{marginRight:"8px"}} fontSize="small" ></DashboardIcon>
        }
    },


    links:{

       dash:[
        {
          name:"Dashbord" ,
          icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>, 
          permission:{
            read:true, // if read false, it will not show
          },
          link:"/d/" ,
        },
        {
          name:"Dashbord2" ,
          icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>, 
          permission:{
            read:false,
          },
          link:"/d/" ,
        },
        {
          name:"User" ,
          icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>, 
          permission:{
            read:true,
          },
          link:[
            {
              name:"Admin" , 
              icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>, 
              permission:{
                read:true,
              },
              link:"/d/user/admin"  ,
            },
            {
              name:"Teacher" , 
              icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>, 
              permission:{
                read:true,
              },
              link:"/d/user/teacher"  ,
             },
            {
              name:"Student" , 
              icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>, 
              permission:{
                read:true,
                write:true
              },
              link:"/d/user/student"  ,
            },
          ]
        },
        {
          name:"Academic",
          icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>,
          permission:{
            read:true,
          },
          link:[
            {
              name:"Class",
              icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>,
              permission:{
                read:true,
              },
              link:"/d/academic/class"
            },
            {
              name:"Subject",
              icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>,
              permission:{
                read:true,
              },
              link:"/d/academic/subject"
            },
            {
              name:"Syllabus",
              icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>,
              permission:{
                read:true,
              },
              link:"/d/academic/syllabus"
            }
          ]
        }
      
      ],
      web:[
        {
          name:"Login" ,
          icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>, 
          read:true,
          link:"/login" 
        },
         
        {
          name:"Academic w",
          icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>,
          read:true,
          link:[
            {
              name:"Class w",
              icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>,
              read:true,
              link:"/classw"
            },
            {
              name:"Subject w",
              icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>,
              read:true,
              link:"/subjectw"
            },
            {
              name:"Syllabus w ",
              icon:<i  className="fas fa-envelope " style={{fontSize:"21px"}}></i>,
              read:true,
              link:"/syllabusw"
            }
          ]
        }

      ],
    },



  }

export default value
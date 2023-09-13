import React from 'react';
import { Outlet } from 'react-router-dom';
import AboutClass from './AboutClass';

// const About = () => {
//   return (
//     <div>
//         <h1>Welcome to About Page</h1>
//         <Outlet />   
//         <AboutClass name="Sam" />
//     </div>
//   )
// }

class About extends React.Component{

  constructor(props){
    super(props);
    console.log("parent Constructor")
  }

  componentDidMount(){
    console.log("parent ComponentDitMount")
  }

  render(){
    console.log("parent Render")
    return(
      <div>
        <h1>Welcome to About Page</h1>
        { <Outlet />  } 
        { <AboutClass name="Sam" /> }
    </div>
    )
  }
}

export default About;
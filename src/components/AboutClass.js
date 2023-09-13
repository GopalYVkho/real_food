import React from "react";
class AboutClass extends React.Component{
    constructor(props){
        super(props);
        this.state = (
            {
                user_info: {
                    name : "Dummmy Name",
                    location : "Dummy Location",
                }
            }
        )
        // console.log("Child constructor")

    }

    async componentDidMount(){
        const api_fetch = await fetch("https://api.github.com/users/GopalYVkho");
        const json = await api_fetch.json();
        this.setState({
            user_info : json
        })
        // this.timer = setInterval(()=>{
        //     console.log("intervel");
        // },1000);
        // console.log("Child ComponentDidMount")
    }

    componentDidUpdate(){
        // console.log("Child Update")
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
        // console.log("Child Unmount")
    }

    render(){
        // console.log("Child Render") 
        return(
            <div>
                {/* <h4>Welcome To Class Based Component</h4> */}
                {/* <h5>{this.state.user_info.name}</h5> */}
                <img src={this.state.user_info.avatar_url} alt="image" />
            </div>
        );
    }
} 

export default AboutClass;
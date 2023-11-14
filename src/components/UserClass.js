import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : {
        name:"Dummy Name",
        location:"Swang Colliery Dist :Bokaro"
      }
    }
  
  }
  async componentDidMount() {
    // console.log("child Did Mount");
    // API call:github user api
    const data = await fetch('https://api.github.com/users/Djm2023');
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo:json
    })
  }
  render() {
    console.log("child render");
    const {name , location ,bio } = this.state.userInfo
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>bio:{bio}</h3>
        <h4>Contact:devjyotimukherjee.17@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;

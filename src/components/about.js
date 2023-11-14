const About = () => {
  return (
    <div className="outer w-full">
      <div className="main flex justify-center items-center mt-24 w-full">
        <div className="left inline-block text-center w-3/5">
          <div className="text">
          <h1 id="one" className="text-5xl font-bold text-gray-400 font-serif"> Welcome to </h1>
          <h1 id="two" className="text-5xl font-bold mt-3 text-gray-400 font-serif"> The world of </h1>
          <h1 id="three" className="text-6xl w-3/4 mt-3 ml-32 rounded-lg text-center font-bold bg-gold text-white font-serif"> Tasty & Fast Food </h1>
          <h2 className="text-2xl font-bold font-serif mt-10 ">&ldquo; Kill Your Hunger By Ordering Food<span className="text-gold">Tastic</span> Healthy Meal &rdquo;</h2>
          </div>
        </div>
        <div className="right w-2/5">
          <div className="image w-full">
            <img className="w-full" src={require("../../Images/burger-foodtastic.jpg")}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

/**Let us use class based component  */
// import User from "./user";
// import UserClass from "./UserClass";
// import { Component } from "react";

// class About extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent constructor");
//   }
//   componentDidMount(){
//     // console.log("Parent Component Did Mount");
//   }
//   render() {
//     console.log("Parent Render")
//     return (
//       <div>
//         <h1>About</h1>
//         <h3>This is Namaste React Web series</h3>
//         <User
//           name={"Devjyoti M"}
//           location={"Swang Colliery Dist:Bokaro Jharkhand"}
//         />
//         <h1>Below is class based component</h1>
//         <UserClass
//           name={"Devjyoti Mukherjee from Class"}
//           location={"Swang Colliery Dist:Bokaro Jharkhand"}
//         />
//       </div>
//     );
//   }
// }

// const About = () => {
//   return(
//     <div>
//       <h1>About</h1>
//       <h3>This is Namaste React Web series</h3>
//       <User name={"Devjyoti M"} location={"Swang Colliery Dist:Bokaro Jharkhand"}/>
//       <h1>Below is class based component</h1>
//       <UserClass name={"Devjyoti Mukherjee from Class"} location={"Swang Colliery Dist:Bokaro Jharkhand"}/>
//     </div>
//   );
// }
// export default About;

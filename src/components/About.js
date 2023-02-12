import { Outlet } from "react-router-dom";

const About=()=>{
    return(
        <>
            <h1>Hello, User</h1>
            <p>This is a food app</p>
            <Outlet/>
        </>
    )
}

export default About;
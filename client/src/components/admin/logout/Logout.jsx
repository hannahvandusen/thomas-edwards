import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap';


function Logout({setToken}) {

    const navigate = useNavigate();

    const signout = () => {
        localStorage.removeItem("token");
        setToken("");
    }

    const style = {
        float: "right",
        margin: "1em",
        backgroundColor: "#ffcd51", 
        color: "black"
    }
    return (
    <>
        <Button
            onClick={signout}
            style={style}
        >Logout</Button>
    </>
    )
}

export default Logout
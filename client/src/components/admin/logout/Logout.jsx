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
        margin: "1em"
    }
    return (
    <>
        <Button
            onClick={signout}
            color="primary"
            style={style}
            outline
        >Logout</Button>
    </>
    )
}

export default Logout
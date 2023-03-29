import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Logout(setToken) {

    const navigate = useNavigate();

    const style = {
        float: 'right',
        margin: '.5em'

    }

    const signout = () => {
        localStorage.removeItem('token'); // clears our localstorage
        setToken(''); // sets our state to an empty string
        navigate('/'); // routes us back to Auth
    }
  return (
    <>
        <Button
        onClick={signout}
        style={style}
        color="danger"
        outline
        >Logout </Button>
    </>
  )
}

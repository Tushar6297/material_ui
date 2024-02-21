import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Password } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};





export default function User() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [username, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")
    let navigate = useNavigate();

    function handleLogin() {
        if (username === "tushar" && password === "1111") {
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            navigate('/order_table')

        }
        else {
            alert("plzz enter valid username or password")
        }

    }

    return (
        <div>
            <Button onClick={handleOpen}></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2> User Login Form</h2>
                    <input type='text' placeholder='Enter username' className='form-control text-white' onChange={(e) => setUserName(e.target.value)}></input><br />
                    <input type='text' placeholder='Enter Password' className='form-control text-white' onChange={(e) => setPassword(e.target.value)}></input><br />
                    <button className='btn btn-danger' style={{ marginLeft: "130px" }} onClick={handleLogin}>Login</button>

                </Box>
            </Modal>
        </div>
    );
}
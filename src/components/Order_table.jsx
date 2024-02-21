import { Margin } from '@mui/icons-material';
import { Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material';
import axios from 'axios'

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Order_table() {
    let navigate = useNavigate();

    const [OrderData, setOrderData] = useState([])
    function getOrderData() {
        axios.get("https://65b0d5dad16d31d11bdd5af2.mockapi.io/ordertable")
            .then((res) => {
                console.log(res.data);
                setOrderData(res.data)
            })
    }

    React.useEffect(() => {
        getOrderData();

    }, [])

    // here working removedata function to remove data from order table
    function Removedata(e, id) {
        e.preventDefault();
        axios.delete("https://65b0d5dad16d31d11bdd5af2.mockapi.io/ordertable/" + id)
            .then((res) => {
                console.log(res.data);
                getOrderData()

            })

    }

    function userlogout() {
        localStorage.clear();
        navigate("/")
    }
    function getBill(){
        navigate("/billing_format")
    }
    return (
        <>
            <Navbar /><br />
            <Link to={"/"}>
                <Button color="secondary" className='ms-1'>
                    Back to Home
                </Button></Link>  <br />

            <h2 className="fst-italic text-decoration-underline">Order Table:</h2>


            <TableContainer >
                <Table aria-label="collapsible table">
                    <TableHead className='bg-success' >
                        <TableRow >

                            <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "20px" }} >Sr.no</TableCell>
                            <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "20px" }} >Title</TableCell>
                            <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "20px" }} >MRP</TableCell>
                            <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "20px" }} >Price</TableCell>
                            <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "20px" }} >Quantity</TableCell>
                            <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "20px" }} >FinalPrice</TableCell>
                            <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "20px" }}>Image</TableCell>
                            <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "20px" }} >Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            // here get data is rotating in map() function..and access in table 
                            OrderData.map((eachdata, i) => {
                                return (

                                    <TableRow align='right' key={1}  >

                                        <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "20px" }}> {i + 1} </TableCell>


                                        <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "17px" }} > {eachdata.name} </TableCell>
                                        <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "17px" }}> {eachdata.mrp} /-</TableCell>

                                        <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "17px" }}> {eachdata.price} /- </TableCell>
                                        <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "17px" }}> {eachdata.quantity}</TableCell>

                                        <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "17px" }}> {eachdata.finalPrice} /-</TableCell>
                                        <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "17px" }}> <img src={eachdata.image} style={{ width: "100px" }} /> </TableCell>
                                        <TableCell align='center' sx={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "17px" }}>
                                            <Button align="center" className='bg-danger text-white' startIcon={<DeleteIcon />} onClick={(e) => Removedata(e, eachdata.id)}>  Delete </Button>

                                        </TableCell>

                                    </TableRow>

                                )
                            })
                        }

                    </TableBody>
                </Table><br />
                <Box className="d-flex justify-content-between mb-5">

                    <Button variant="contained" className='bg-success ms-4' onClick={getBill}>
                        Get Bill
                    </Button>
                    <Button align="center" className='bg-danger text-white' style={{ marginRight: "40px" }} onClick={userlogout}> Logout </Button>

                </Box>
            </TableContainer>

        </>
    )
}

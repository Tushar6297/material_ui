import React, { useState, useEffect, useRef } from 'react';
import { Container, Paper, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Box, Button } from '@mui/material';
import axios from 'axios';

import { useReactToPrint } from "react-to-print";


// Import the CSS file

const Bill = () => {
    const [bill, setBill] = useState([]);

    useEffect(() => {
        // Use an async function to fetch data
        const fetchData = async () => {
            try {
                const response = await axios.get("https://65b0d5dad16d31d11bdd5af2.mockapi.io/ordertable");
                setBill(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getTotal = () => {
        return bill.reduce((total, item) => total + item.quantity * item.price, 0);
    }

    // crete variable for storing customer name and currentdate
    let customerName = localStorage.getItem("username");
    let currentDate = new Date().toJSON().slice(0, 10);

    const componentPDF = useRef();


    const generatePdf = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: "bill",
        onafterprint: () => alert("Data saved in pdf")


    });

    return (
        <Container>




            <Paper elevation={3} className="bill-container">
                <h2 className='text-center text-decoration-underline'>Invoice Form </h2>
                <div ref={componentPDF} style={{ width: "100%" }}>

                    <Typography>
                        <Box>
                            <b className='text-decoration-underline fs-5' >Customer Name:</b> {customerName} <br /><br />
                            <b className='text-decoration-underline fs-5'>Date:</b> {currentDate}

                        </Box>

                    </Typography>

                    <hr />
                    <TableContainer component={Paper} >
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell >Sr.No</TableCell>
                                    <TableCell>Product Name</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    bill.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.price}Rs.</TableCell>
                                            <TableCell>{item.quantity}</TableCell>
                                            <TableCell>{item.quantity * item.price}Rs.</TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>



                    <Typography variant="h6" style={{ marginTop: '20px' }} className='d-flex justify-content-between'>
                        Total: {getTotal()}.Rs
            
            </Typography>
            </div>
            <Button variant='contained' color='primary' onClick={generatePdf}>Print</Button>



        </Paper>
        </Container >
    );
};

export default Bill;

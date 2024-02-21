import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Delete } from '@mui/icons-material';

export default function Add_to_card() {

    const [newCart, setNewCart] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();

    // state for quantity incerement
    const [count, setCount] = useState(1);
    let Alltotal = newCart.price * count;

    let UserLocalData = localStorage.getItem("username")



    // data post into ordertable api--------
    // previous data stored in order variable thats why we pass order variable in api
    function orderSubmit() {
        if (UserLocalData) {

            let order = {
                name: newCart.name,
                category: newCart.category,
                price: newCart.price,
                mrp: newCart.mrp,
                image: newCart.image,
                finalPrice: Alltotal,
                quantity: count
            }
            axios.post("https://65b0d5dad16d31d11bdd5af2.mockapi.io/ordertable", order)
                .then((res) => {
                    console.log(res.data);

                })

            navigate('/order_table')


        } else {
            navigate('/user_login')
            let order = {
                name: newCart.name,
                category: newCart.category,
                price: newCart.price,
                mrp: newCart.mrp,
                image: newCart.image,
                finalPrice: Alltotal,
                quantity: count
            }
            axios.post("https://65b0d5dad16d31d11bdd5af2.mockapi.io/ordertable", order)
                .then((res) => {
                    console.log(res.data);

                })


        }


    }


    // data get and rotating in my shopping card
    function getCart() {
        axios.get("https://65b0d5dad16d31d11bdd5af2.mockapi.io/addproducts/" + id)
            .then((res) => {
                console.log(res.data);
                setNewCart(res.data)
            })
    }

    useEffect(() => {
        if (id) {
            getCart();
        }

    }, [])


    // qunatity Decrement function

    function Decrement() {

        if (count > 1) {
            setCount(preveCount => preveCount - 1)

        }

    }

    // qunatity incerment function

    function Increment() {

        if (count < 10) {
            setCount(preveCount => preveCount + 1)

        }


    }
    return (
        <>

            {/* <Dashboard /> */}
            <div className="container mt-5 bg-light">

                <div className="row ">

                    <div className="col-lg-6">
                        <CardMedia

                            component="img"
                           className='img-fluid'
                        

                            image={newCart.image}

                        />

                    </div>


                    <div className="col-lg-6 text-center fs-2 fw-bold mt-5"  >

                        <CardContent className='fs-5 fw-bold' >
                            <br />
                            <b className='fs-2'>{newCart.name} </b> <br /><br />
                            CATEGORY :- {newCart.category} <br />
                            MRP :- <strike> ₹{newCart.mrp}</strike> <br />
                            price :-  ₹{Alltotal} <br /><br />

                            <hr />
                            <Box>


                                <Button variant="outlined" color='success' onClick={Decrement}>-</Button>

                                <Button variant="outlined" color='success'>{count}</Button>

                                <Button variant="outlined" color='success' onClick={Increment}>+</Button>

                            </Box>
                            <br />


                            <button onClick={orderSubmit} className='btn btn-danger'>ORDER NOW</button>

                        </CardContent>

                    </div>

                </div>
            </div>
            <br /><br />

        </>
    )
}

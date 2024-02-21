import { Margin } from '@mui/icons-material';
import { Button, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material';
import axios from 'axios'

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import {usercontext} from '../context/Usestate'


export default function Products() {
  // let navigate = useNavigate();

  // here received data, store in new state (newData)
  // const [newData, setNewData] = useState([])

  const states = useContext(usercontext)
const newData =states.newData
const setNewData =states.setNewData
  

  // in Add_Product componet receive data here
  function getData(e) {
    axios.get("https://65b0d5dad16d31d11bdd5af2.mockapi.io/addproducts")
      .then((res) => {
        console.log(res.data);
        setNewData(res.data)
      })

  }
  // here one time execute GetData() function
  useEffect(() => {
    getData();
  }, [])

  // here working delete product function also deleted product in mock api
  function handleDelete(e, id) {
    e.preventDefault();
    axios.delete("https://65b0d5dad16d31d11bdd5af2.mockapi.io/addproducts/" + id)
      .then((res) => {
        console.log(res.data);
        // here calling GetData() function for reloading page
        getData();
      })

  }

  // function handleUpdate( id) {
  //   // e.preventDefault();
  //   navigate("/admin/add_products/" + id)

  // }
  return (
    <>
      
        <Table aria-label="collapsible table">
          <TableHead  className='bg-success'>
            <TableRow >
              <TableCell align='center' sx={{fontFamily:"inherit", fontWeight:"bold", fontSize:"20px"}} >Sr.no</TableCell>
              <TableCell align='center' sx={{fontFamily:"inherit", fontWeight:"bold", fontSize:"20px"}} >Title</TableCell>
              <TableCell align='center' sx={{fontFamily:"inherit", fontWeight:"bold", fontSize:"20px"}} >Category</TableCell>
              <TableCell align='center' sx={{fontFamily:"inherit", fontWeight:"bold", fontSize:"20px"}} >Price</TableCell>
              <TableCell align='center' sx={{fontFamily:"inherit", fontWeight:"bold", fontSize:"20px"}}>MRP</TableCell>
              <TableCell align='center' sx={{fontFamily:"inherit", fontWeight:"bold", fontSize:"20px"}}>Image</TableCell>
              <TableCell align='center' sx={{fontFamily:"inherit", fontWeight:"bold", fontSize:"20px"}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              // here get data is rotating in map() function..and access in table 
              newData.map((eachdata, i) => {
                return (

                  <TableRow align='right' key={1} >

                    <TableCell  align='center' > {i + 1} </TableCell>
                    <TableCell align='center' > {eachdata.name} </TableCell>
                    <TableCell align='center' > {eachdata.category} </TableCell>
                    <TableCell align='center' > {eachdata.price} </TableCell>
                    <TableCell align='center' > {eachdata.mrp} </TableCell>
                    <TableCell align='center' > <img src={eachdata.image} className='w-25'/> </TableCell>
                    <TableCell align='center'  >
                      <Stack direction="row" spacing={1}>

                        {/* edit button */}
                      <Link to={"/admin/add_products/" + eachdata.id}>
                        <Button variant="contained">
                        EDIT
                        </Button>
                      </Link>
                      {/* Delete button */}
                      <Button onClick={(e) => handleDelete(e, eachdata.id)} variant="contained">
                        DELETE

                      </Button>

                      </Stack>
                    
                    </TableCell>

                  </TableRow>






                )
              })
            }

          </TableBody>
        </Table>
     
    </>
  )
}

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Label } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Add_product() {

  let navigate = useNavigate()
  let { id } = useParams();

  const [data, setData] = React.useState({
    name: "",
    category: "",
    price: "",
    mrp: "",
    image: "",
    description: ""
  })


  function handleChange(e) {
    setData({ ...data, [e.target.id]: e.target.value });

  }

    function handleSubmit() {

      // console.log(data);
      if (id === undefined) {
        axios.post("https://65b0d5dad16d31d11bdd5af2.mockapi.io/addproducts", data)
          .then((res) => {
            console.log(res.data);
            navigate('/admin/products')

          })
      } else {
        axios.put("https://65b0d5dad16d31d11bdd5af2.mockapi.io/addproducts/" + id, data)
          .then((res) => {
            console.log(res.data);
            navigate('/admin/products')


          })
      }



  }

  function EditData() {

    axios.get("https://65b0d5dad16d31d11bdd5af2.mockapi.io/addproducts/" + id)
      .then((res) => {
        console.log(res);
        setData({
          name: res.data.name,
          category: res.data.category,
          price: res.data.price,
          mrp: res.data.mrp,
          image: res.data.image,
          description: res.data.description
        })
      })
  }
  React.useEffect(() => {
    if (id) {
      EditData();
    }
  }, [])



  return (
    <>
      <h1>Product From:</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}  >

              <TextField fullWidth label="Product Title:" id="name" value={data.name} onChange={handleChange} />
            </Box>
          </div>


          <div className="col-lg-6">
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}  >

              <TextField fullWidth label="Product Category:" id="category" value={data.category} onChange={handleChange} />
            </Box>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
                marginTop: "25px "
              }}  >

              <TextField fullWidth label="Product Price:" id="price" value={data.price} onChange={handleChange} />
            </Box>

          </div>

          <div className="col-lg-3">
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
                marginTop: "25px "
              }}  >

              <TextField fullWidth label="Product MRP:" id="mrp" value={data.mrp} onChange={handleChange} />
            </Box>

          </div>

          <div className="col-lg-6">
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
                marginTop: "25px "
              }}  >
              <TextField fullWidth label="Image:" id="image" type='text' value={data.image} onChange={handleChange} />
            </Box>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Box
              sx={{
                width: "100%",
                maxWidth: '100%',
                marginTop: "25px "
              }}  >

              <TextField fullWidth label="Product Description:" id="description" value={data.description} onChange={handleChange} type='text' />
            </Box>
          </div>
        </div><br />

        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={(e) => handleSubmit(e)}>Submit</Button>
        </Stack>
      </div>




    </>
  );
}


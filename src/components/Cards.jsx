import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import {usercontext} from '../context/Usestate'



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Cards() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const states = React.useContext(usercontext)
    const image = states.image
    const setImage = states.setImage
    console.log(image);


    // for create state to store product data
    // const [image, setImage] = React.useState([]);


    // for access data form products
    function imageData() {
        axios.get("https://65b0d5dad16d31d11bdd5af2.mockapi.io/addproducts")
            .then((res) => {
                console.log(res.data);
                setImage(res.data)
            })

    }
  


    // Add-to-card  function----------
    function handleAdd(eachdata) {
        var existingData = localStorage.getItem("name1");
        if (existingData) {
            existingData = JSON.parse(existingData);
    
            let isProductAlreadyAdded = false;
    
            for (let i = 0; i < existingData.length; i++) {
                if (existingData[i].id === eachdata.id) {
                    isProductAlreadyAdded = true;
                    break;
                }
            }
    
            if (isProductAlreadyAdded) {
                alert("Product is already added to the cart!");
            } else {
                existingData.push(eachdata);
    
                localStorage.setItem("name1", JSON.stringify(existingData));
    
                console.log(JSON.parse(localStorage.getItem("name1")));
            }
        } else {
            localStorage.setItem("name1", JSON.stringify([eachdata]));
    
            console.log(JSON.parse(localStorage.getItem("name1")));
        }

    location.reload()
       
    };
    React.useEffect(() => {
        imageData();
    }, [])

    return (

        <div className="container" >
            <div className="row">
                {
                    image.map((eachdata) => {
                        return (
                            <div className="col-lg-4 col-sm-6 mt-5">


                                <Card sx={{ maxWidth: 345 }}>
                                    <div className='d-flex'>

                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500], padding: "27px" }} aria-label="recipe">
                                                    <h5><b><i>Nike</i></b></h5>
                                                </Avatar>
                                            }



                                        // subheader="September 14, 2016"
                                        />

                                        <h4 className='mt-4'><b><i>{eachdata.name}</i></b></h4>
                                    </div>

                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={eachdata.image}
                                        className='img-fluid'
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {eachdata.description}
                                        </Typography>
                                    </CardContent>
                                    <h5 className='mt-3 ms-5'><i> MRP: <del>{eachdata.mrp}</del> Rs. </i></h5>
                                    <h5 className='mt-3 ms-5'><i> PRICE:  {eachdata.price} Rs.</i></h5>


                                    <CardActions disableSpacing>
                                        <Button onClick={(e) => handleAdd(eachdata)} variant="contained" color="primary" sx={{ marginLeft: "40px" }} >
                                            Add To Card
                                        </Button>
                                        <Link to={"/add_to_card/" + eachdata.id}>
                                            <Button variant="contained" color="primary" className='ms-4'>
                                                Buy now
                                            </Button></Link>
                                    </CardActions>

                                </Card>
                            </div>


                        )
                    })

                }

            </div>
        </div>

    );
}

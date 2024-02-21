import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = ['MEN', 'WOMENS', 'ABOUT',];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

import { usercontext } from '../context/Usestate'
import { List } from '@mui/material';

// login code-----
function Navbar() {

    const states = React.useContext(usercontext)
    const name = states.name
    const pass = states.pass

    // const [name, setName] = React.useState("");
    // const [pass, setPass] = React.useState("");
    let navigate = useNavigate();

    function handleSubmit() {

        if (name === "tushar" && pass === "tushar") {
            localStorage.setItem("name", name);
            localStorage.setItem("pass", pass);
            navigate("/admin")
            location.reload();

        }
        else {
            alert("errrrrrrrrrrrrrrr")
        }
    }

    // badge count----------

    var count = 0
    let local = JSON.parse(localStorage.getItem("name1"));

    if (local === null) {
        count = 0

    } else {
        count = local.length;

    }



    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    // badge icon-------
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'red' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Nike
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/* {
                            pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                    
                                    
                                </MenuItem>
                            ))} */}

                            <List sx={{ width: "100px", marginTop: "10px", textAlign: "center" }}>
                                {/* <Link to={"/"}> <Typography> Home</Typography></Link>
                                <Link to={'/men'}> <Typography> MEN</Typography></Link>
                                <Link to={"/women"}> <Typography> WOMEN</Typography></Link> */}
                               <Button>HOME</Button>
                               <Button>MEN</Button>
                               <Button>WOMEN</Button>
                               <Button>ABOUT</Button>


                            </List>
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Nike
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Link to={"/"}><Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button></Link>
                        {/* <Link to={"/men"}><Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            MEN
                        </Button></Link>
                        <Link to={"/women"}>
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                WOMENS
                            </Button></Link>


                        <Link to={"/about"}>
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                ABOUT
                            </Button>
                        </Link> */}

                        <Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            MEN
                            </Button>

                            <Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                          WOMEN
                            </Button>
                            <Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                          About
                            </Button>



                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        <IconButton aria-label="cart" className='me-5'>
                            <StyledBadge badgeContent={count} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>


                        <button  type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Admin Login
                        </button>

                        {/* <!-- Modal --> */}
                        <div className="modal fade " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content bg-light text-dark text-center">

                                    <form className='m-5'>
                                        {/* <!-- Email input --> */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label ">Enter Your Name:</label>
                                            <input type="text" id="form2Example1" className="form-control text-white" onChange={(e) => states.setName(e.target.value)} />

                                        </div>

                                        {/* <!-- Password input --> */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form2Example2" >Password</label>
                                            <input type="text" id="form2Example2" className="form-control text-white" onChange={(e) => states.setPass(e.target.value)} />

                                        </div>



                                        <button type="button" className="btn btn-primary btn-block mb-4" onClick={(e) => handleSubmit(e.target.value)} >Login </button>

                                        {/* <!-- Register buttons --> */}
                                        <div className="text-center">

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
}
export default Navbar;
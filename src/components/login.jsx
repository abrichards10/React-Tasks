import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();
    const [isSidebarOpen] = useState(false);

    const handleSubmit = () => {
        // TODO: This is where you would store the login info in a db if needed
        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // // LOG THE EMAIL AND PASSWORD
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });
        navigate("/login_demo")
    };

    // TODO remove, this demo shouldn't need to reset the theme.
    const defaultTheme = createTheme({
        palette: {
            primary: {
                main: "#6e588f",
            },
            secondary: {
                main: "#6e588f",
            },
        },
        }
    );

    const openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    };

    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "10px";
        document.getElementById("main").style.marginLeft = "10px";
    };

    function Copyright(props: any) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                    {/*TODO: Change to my Website*/}
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (
        <div>
            <div className={`App ${isSidebarOpen ? 'open' : ''}`}>
                <div id="mySidebar" className="sidebar">
                    <div className="close-button" onClick={closeNav}>&times;</div>
                    <div className="My-Stuff">
                        <Link to="/">My-Stuff</Link>
                    </div>
                    <div className="Account-columns">
                        <div className="Account-name">
                            <Link to="/login">[Name]</Link>
                        </div>
                        <div className="Account-pic">
                            <Link to="/login"><img src={logo} alt="logo" width={40} height={40}/></Link>
                        </div>
                    </div>
                    <Link to="/projects">Projects</Link>
                    <Link to="/settings">Settings</Link>
                </div>
            </div>
        <div id="main">
            <button className="open-button" onClick={openNav}>&#9776;</button>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    {/*<Link href="/forgot_password" variant="body2" to={"/forgot_password"}>*/}
                                    {/*    Forgot password?*/}
                                    {/*</Link>*/}
                                </Grid>
                                <Grid item>
                                    {/*<Link href="/sign_up" variant="body2" to={"/sign_up"}>*/}
                                    {/*    {"Don't have an account? Sign Up"}*/}
                                    {/*</Link>*/}
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{mt: 8, mb: 4}}/>
                </Container>
            </ThemeProvider>
        </div>
        </div>
    );
};

export default Login;

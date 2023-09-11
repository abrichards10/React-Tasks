import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import {createTheme} from "@mui/material/styles";

export function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const defaultTheme = createTheme({
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

export const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
};

export const closeNav = () => {
    document.getElementById("mySidebar").style.width = "10px";
    document.getElementById("main").style.marginLeft = "10px";
};
import React from "react"
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
} from "@mui/material"
import { PhotoCamera } from "@mui/icons-material"
import Navbar from "./components/Navbar"

function App() {
    return (
        <>
            <CssBaseline>
                <Navbar></Navbar>
            </CssBaseline>
        </>
    )
}

export default App

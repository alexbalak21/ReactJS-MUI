import React from "react"
import {
    AppBar,
    Button,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material"
import { CatchingPokemon } from "@mui/icons-material"

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="logo"
                >
                    <CatchingPokemon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    PokemonApp
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Photos</Button>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Others</Button>
                    <Button color="inherit">Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

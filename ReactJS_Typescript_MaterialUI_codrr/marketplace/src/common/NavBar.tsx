import { AppBar, Box, Container, Toolbar, Typography, Button, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NavBar: React.FC = () => {

    const navigate = useNavigate()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid 
                            container 
                            direction="row" 
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography>yomdev</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <Button 
                                        variant="contained"
                                        onClick={() => navigate("/login")}
                                    >
                                        Login</Button>
                                    <Button variant="outlined">Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
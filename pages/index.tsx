import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
//import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";
import { Divider } from "@mui/material";
import {
  LocationOn,
  ThumbUp,
  Comment,
  MoreHoriz,
  Delete,
  Edit,
  Favorite,
  Send,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            eFuse
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8, backgroundColor: "lavender" }} maxWidth="md">
          {/* End hero unit */}
          <Grid container direction="column" spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12}>
                <Paper elevation={3}>
                  <Grid container direction="column" sx={{ pt: 1, px: 2 }}>
                    <Grid container>
                      <Avatar
                        alt="User Avatar"
                        src="https://source.unsplash.com/random"
                        sx={{ width: 56, height: 56 }}
                      />
                      <Grid item xs direction="column" sx={{ pl: 2 }}>
                        <Typography sx={{ fontWeight: 800 }}>
                          Patrick Shuff
                        </Typography>
                        <Grid container sx={{ color: "blue" }}>
                          <LocationOn sx={{ fontSize: "1rem" }} />
                          <Typography
                            sx={{ fontSize: "0.80rem", fontWeight: 600 }}
                          >
                            OH, USA
                          </Typography>
                        </Grid>

                        <Typography
                          sx={{
                            fontSize: "0.65rem",
                            fontWeight: 500,
                            color: "gray",
                          }}
                        >
                          1 minute ago
                        </Typography>
                      </Grid>
                      <MoreHoriz />
                    </Grid>
                    <Typography sx={{ py: 2 }}>
                      Testing the new posts / comments
                    </Typography>
                    <Typography sx={{ color: "gray", py: 2 }}>
                      0 Likes . 0 Comments
                    </Typography>
                  </Grid>
                  <Divider />
                  <Grid
                    container
                    direction="column"
                    sx={{ p: 1, color: "gray", backgroundColor: "ghostwhite" }}
                  >
                    <Grid>
                      <Button startIcon={<ThumbUp />} color="inherit">
                        Like
                      </Button>
                      <Button startIcon={<Comment />} color="inherit">
                        Comment
                      </Button>
                    </Grid>
                    <Grid container sx={{ p: 2 }}>
                      <Avatar
                        alt="User Avatar"
                        src="https://source.unsplash.com/random"
                      />
                      <Grid item xs sx={{ ml: 2 }}>
                        <OutlinedInput
                          placeholder="Please enter text"
                          size="small"
                          multiline
                          fullWidth
                          sx={{ borderRadius: "50px" }}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="save comment"
                                // onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                              >
                                <Send />
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container sx={{ p: 2 }}>
                      <Avatar
                        alt="User Avatar"
                        src="https://source.unsplash.com/random"
                      />
                      <Grid item xs sx={{ ml: 2 }}>
                        <Paper
                          elevation={0}
                          sx={{ backgroundColor: "lavender", p: 2 }}
                        >
                          <Grid container>
                            <Grid item xs direction="column" sx={{ pl: 2 }}>
                              <Typography sx={{ fontWeight: 800 }}>
                                Patrick Shuff
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "0.80rem",
                                  color: "blue",
                                  fontWeight: 600,
                                }}
                              >
                                Professional-Student
                              </Typography>
                              <Typography>
                                This is what a comment looks like!
                              </Typography>
                              <Grid container sx={{ color: "gray" }}>
                                <Typography sx={{ py: 2 }}>
                                  0 Likes |
                                </Typography>
                                <Button
                                  startIcon={<Favorite />}
                                  color="inherit"
                                >
                                  Like
                                </Button>
                                <Typography sx={{ py: 2 }}>|</Typography>
                                <Button startIcon={<Edit />} color="inherit">
                                  Edit
                                </Button>
                                <Typography sx={{ py: 2 }}>|</Typography>
                                <Button startIcon={<Delete />} color="inherit">
                                  Delete
                                </Button>
                              </Grid>
                            </Grid>
                            <Typography
                              sx={{
                                fontSize: "0.65rem",
                                fontWeight: 500,
                                color: "gray",
                              }}
                            >
                              1 minute ago
                            </Typography>
                          </Grid>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

//export default Home

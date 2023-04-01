import * as React from 'react';
import news from "./newsletter.jpg"



import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Stack, Typography } from '@mui/material';




const theme = createTheme({
    status: {
        danger: "#C9D6DF",
    },
    palette: {
        primary: {
            main: "#F0F5F9",
            dark: "#1E2022",
            contrastText: "#52616B"
        },
        secondary: {
            main: "#C9D6DF",
            dark: "red"
        }
    },
    typography: {
        fontFamily: 'Poison',

    },
});




const SectionSeven = () => {
    return (


        <ThemeProvider theme={theme}>
            <Box
                style={{
                    backgroundImage: `url(${news})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    display: 'flex',
                    flexDirection: "column",
                    height: "100vh",
                    alignItems: "center",
                    justifyContent: "center"

                }}>
                <Box>
                    <Stack
                        spacing={2}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Box sx={{
                            height: "240px",
                            width: "1079px",
                            padding: "10px"

                        }}>
                            <Typography
                                sx={{
                                    fontSize: "100px",
                                    fontWeight: 400,
                                    lineHeight: "120px",
                                    textAlign: 'center',
                                    color: theme.palette.primary.main,
                                }}>
                                JOIN OUR

                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "100px",
                                    fontWeight: 400,
                                    lineHeight: "120px",
                                    textAlign: 'center',
                                    color: theme.palette.primary.main,
                                }}>

                                NEWSLETTER
                            </Typography>

                        </Box>
                        <Box
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: "73px",
                                width: "536px",
                                border: "1px solid",
                                borderColor: theme.palette.primary.main,
                                padding: "10px"

                            }}>
                            <Button
                                variant="text"
                                style={{
                                    width: "231px",
                                    height: "48px"
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: "40px",
                                        fontWeight: 400,
                                        lineHeight: "48px",
                                        textAlign: 'center',
                                        color: theme.palette.primary.main,
                                    }}>

                                    JOIN NOW
                                </Typography></Button>
                        </Box>
                    </Stack>
                </Box>
            </Box >
        </ThemeProvider >
    )
}

export default SectionSeven
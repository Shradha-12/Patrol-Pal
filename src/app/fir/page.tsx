'use client'
import React, { useState } from 'react';
import { Container, Grid, Button, TextField, Box, Link, Typography, AppBar, Toolbar, } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import image from '../../assets/header.jpeg';
import Image from 'next/image'

type FormValue = {
    string: string
}
const FIRForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<FormValue>()
    const [data, setData] = useState({ email: '', password: '' })
    const onSubmit: SubmitHandler<FormValue> = (data: any) => {
        console.log("final data", data)
    }
    // const handleSubmit = e => {
    //         e.preventDefault();
    //         // Handle form submission, e.g., send data to backend
    //       };
    const handleForgotPassword = () => {
        // Handle forgot password action here
        // For example, navigate to the forgot password page
    }

    const handleSignUp = () => {
        // Handle sign-up action here
        // For example, navigate to the sign-up page
    }

    const handleGoogleSignIn = () => {
        // Handle Google sign-in action here
    }

    return (<div className="flex flex-col ml-64 mt-[60px] p-10 border">
        <div className="   ">
            <div className='flex flex-row justify-between '>

                <div className='flex flex-col items-center'>

                    <div className="bg-color ">

                        <AppBar position="static" style={{ backgroundColor: '#17193b' }}>
                            <Toolbar>
                                <Image alt="" src={image} height={58} width={200} />
                                <Typography variant="body1" sx={{ mr: 2, color: 'white' }} style={{ margin: 'auto' }}>
                                    आपातकालीन नंबर : 112 &nbsp; गरिमा हेल्पलाइन : 1090 &nbsp; चाइल्ड हेल्पलाइन : 1098 &nbsp; एम्बुलेंस नंबर : 108 &nbsp; साइबर क्राइम हेल्पलाइन : 1930 &nbsp; राज्य केन्द्रीकृत कॉल सेंटर नं. : 181 &nbsp; &nbsp;
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Container fixed>
                            <div className="form-wrapper bg-[#17193b] w-[600px] px-[30px] pb-[20px]   rounded-2xl my-[100px] mx-auto">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} lg={12} md={12}>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <Box component="span" sx={{ p: 2, color: '#1d395d', textAlign: 'left' }}>
                                                <h1 style={{ color: 'white', textAlign: 'center' }}>File FIR</h1>
                                            </Box>
                                            <Box>
                                                <TextField fullWidth
                                                    label="Name"
                                                    placeholder="Enter Name"
                                                    InputLabelProps={{ style: { color: 'white' } }}
                                                    inputProps={{ style: { color: 'white' } }}
                                                    {
                                                    ...register("string", {
                                                        required: "Name is required"
                                                    })
                                                    }
                                                />
                                                {/* {
                                        errors.email && (
                                            <p className='error-msg'>{errors.email.message}</p>
                                        )
                                    } */}
                                                <TextField fullWidth
                                                    label="Address"
                                                    type="text"
                                                    placeholder='address'
                                                    InputLabelProps={{ style: { color: 'white' } }}
                                                    inputProps={{ style: { color: 'white' } }}
                                                    {
                                                    ...register("string", {
                                                        required: "address is required",
                                                        minLength: {
                                                            value: 10,
                                                            message: "address Should be at least 10 characters"
                                                        }
                                                    })
                                                    }
                                                    style={{ marginTop: '20px' }} />
                                                {/* {
                                        errors.password && (
                                            <p className='error-msg'>{errors.password.message}</p>
                                        )
                                    } */}
                                                <TextField fullWidth
                                                    label="Mobile Number"
                                                    type="string"
                                                    placeholder='Number'
                                                    InputLabelProps={{ style: { color: 'white' } }}
                                                    inputProps={{ style: { color: 'white' } }}
                                                    {
                                                    ...register("string", {
                                                        required: "Mobile Number is required",
                                                        minLength: {
                                                            value: 10,
                                                            message: "Mobile Number Should be at least 10 characters"
                                                        }
                                                    })
                                                    }
                                                    style={{ marginTop: '20px' }} />

                                                <TextField fullWidth
                                                    label="Incident Description"
                                                    type="textArea"
                                                    multiline
                                                    rows={4}
                                                    placeholder='incidentDescription'
                                                    InputLabelProps={{ style: { color: 'white' } }}
                                                    inputProps={{ style: { color: 'white' } }}
                                                    {
                                                    ...register("string", {
                                                        required: "Please Provide Incident Description",
                                                        minLength: {
                                                            value: 10,
                                                            message: "Mobile Number Should be at least 10 characters"
                                                        }
                                                    })
                                                    }
                                                    style={{ marginTop: '20px' }} />

                                                <Button style={{ marginTop: '20px', backgroundColor: 'red' }} type="submit" fullWidth variant="contained">Submit</Button>
                                                {/* <Link href="#" onClick={handleForgotPassword} style={{ marginTop: '10px', display: 'block', textAlign: 'center' }}>Forgot Password?</Link>
                                    <p style={{ marginTop: '10px', textAlign: 'center' }}>Don't have a sign-up account? <Link href="#" onClick={handleSignUp}>Sign up now!</Link></p>
                                    <Button onClick={handleGoogleSignIn} style={{ marginTop: '20px' }} fullWidth variant="contained">Sign in with Google</Button> */}
                                            </Box>

                                        </form>
                                    </Grid>

                                </Grid>
                            </div>
                        </Container>
                    </div>


                </div>
            </div>
        </div>
    </div>

    )

}
export default FIRForm;
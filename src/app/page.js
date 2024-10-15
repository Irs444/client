"use client"
import React from 'react';
import { Box, Button, Card, FormControl, FormLabel, Grid2, Link, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';


const style = {

  backgroundColor: '#d32f2f',
  color: "white",
  fontWeight: "bold",
  '&:hover': {
    backgroundColor: '#c62828',
  }
}

const page = () => {

 const router = useRouter()

  const loginForm = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit: async(values, {resetForm}) => {
      console.log(values);
      resetForm()

      const res = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers:{
          "Content-Type":'application/json'
        }
      })
      
      if(res.status === 200){
        const data = await res.json()
        console.log(data);
        alert("User loggedIn Successfully")
        router.push("/main/book")
        
      }
    }
  })
  return (
    <div>
      <Grid2 container>
        <Grid2 item size={{ lg: 12, md: 12, sm: 12, xs: 12 }} sx={{ backgroundColor: "gray", display: "flex", justifyContent: "center", alignItems: 'center', height: '100vh' }}>
          <Card sx={{ width: "30%", backgroundColor: "white", padding: "40px" }}>
            <Typography variant='h4' component="h1">SignIn</Typography>


            <Box component="form" sx={{ display: "flex", flexDirection: "column" }} onSubmit={loginForm.handleSubmit}>

              <FormControl sx={{my:3}}>
                <FormLabel>Email</FormLabel>
                <TextField size='small' type='text' color='red' id='email' value={loginForm.values.email} onChange={loginForm.handleChange} />
              </FormControl>

              <FormControl sx={{mb:3}}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <FormLabel>Password</FormLabel>
                  <Link href="" variant='body1' sx={{color:"#ef5350", textDecoration:"none"}}>Forget Password</Link>
                </Box>
                <TextField size='small' type='password' color='red' id='password' value={loginForm.values.password} onChange={loginForm.handleChange}/>
              </FormControl>

              <Button type='submit' size='small' sx={style}>SignIn</Button>

            </Box>


          </Card>
        </Grid2>

      </Grid2>
    </div>
  )
}

export default page
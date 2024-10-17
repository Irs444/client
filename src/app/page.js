"use client"
import React from 'react';
import { Box, Button, Card, FormControl, FormLabel, Grid2, Link, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import "./page.module.css"
import useStyles from './style';

const style = {

  backgroundColor: '#d32f2f',
  color: "white",
  fontWeight: "bold",
  '&:hover': {
    backgroundColor: '#c62828',
  }
}

const page = () => {

  const classes = useStyles()

  const router = useRouter()

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm()

      const res = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": 'application/json'
        }
      })

      if (res.status === 200) {
        const data = await res.json()
        console.log(data);
        alert("User loggedIn Successfully")
        router.push("/main/book")

      }
    }
  })
  return (
    <div>
      <Grid2 container className={classes.container}>
        <Grid2 container size={12} spacing={3} >
          <Grid2 item size={{ lg: 6, md: 6, sm: 12, xs: 12 }} sx={{ backgroundColor: "red" }}>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Grid2>
          <Grid2 item size={{ lg: 6, md: 6, sm: 12, xs: 12 }} >
            <Card className={classes.card} elevation={3}>
              <Typography variant='h4' className={classes.heading} >Sign in</Typography>
              <Box component="form" className={classes.box} onSubmit={loginForm.handleSubmit}>
                <FormControl className={classes.form} >
                  <FormLabel className={classes.label}>Email</FormLabel>
                  <TextField className={classes.text} size='small' type='text' color='red' id='email' value={loginForm.values.email} onChange={loginForm.handleChange} />
                </FormControl>
                <FormControl className={classes.form1} >
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <FormLabel >Password</FormLabel>
                    <Link href="" variant='body1' >Forget Password</Link>
                  </Box>
                  <TextField sx={{ width: "100%" }} size='small' type='password' color='red' id='password' value={loginForm.values.password} onChange={loginForm.handleChange} />
                </FormControl>
                <Box className={classes.btn}>
                  <Button className={classes.btn_text}  type='submit' size='small'>Sign in</Button>
                </Box>
              </Box>
            </Card>
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  )
}

export default page
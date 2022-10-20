import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Button, Typography, TextField } from '@mui/material'

const SearchExercises = () => {

  const [search, setSearch] = useState('')

  const handleSearch = async() => {
    if(search) {
      //const exercisesData = await fetchData();
    }

  }


  return (
    <Stack alignItems='center' mt='37px' justifyCenter='center' p='20px'>
      <Typography fontWeight={700} sx={{fontSize:{ lg :'44px', xs: '30px'}}} mb='50px'
      textAlign='center' >
        Awesome Exercise You <br/> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
        sx={{
          input:{
            fontWeight: '700px',
            border: 'none',
            borderRadius: '4px'
          },
          width:{ lg: '800px', xs: '350px'},
          backgroundColor:'3fff',
          borderRadius: '40px'
        }}
        height='76px'
        value={search}
        onChange={(e)=> setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercises'
        type='text'
        />
        <Button className='search-btn'
        sx={{
          bgcolor:'#FF2625',
          color: '#fff',
          textTransform:'none',
          width: { lg: '175px', xs: '80px'},
          fontSize: { lg: '20px', xs: '14px'},
          height: '56px',
          position : 'absolute',
          right: '0'
        }}
        onClick={handleSearch}
        >
          Search
        </Button>

      </Box>

    </Stack>
  )
}

export default SearchExercises
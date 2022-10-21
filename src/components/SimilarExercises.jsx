import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{ mt: { lg:'100px', xs:'0'}}}>
      <Typography>
        Exercises that target the same muscle group
      </Typography>

    </Box>
  )
}

export default SimilarExercises
import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography} from '@mui/material'
import { exerciseOptions, fetchData} from '../utils/fetchData';


const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);

  const URL = 'https://exercisedb.p.rapidapi.com/exercises';

  const handleSearch = async () => {
      if (search) {
        const exerciseData = await fetchData(URL, exerciseOptions);

        //console.log(exerciseData);

        const searchedExercises = exerciseData.filter( (exercise) => 
          exercise.name.toLowerCase().includes(search) || 
          exercise.target.toLowerCase().includes(search) || 
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        );

        setSearch('');
        setExercises(searchedExercises);
      }

  }

  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography 
      fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '30px'} }}
      mb="50px"
      textAlign="center">
        Awesome Exercises You<br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
          <TextField 
            sx={{
              input: {
                fontWeight: "700",
                border: 'none', 
                borderRadius: '4px'
              },
              width: { lg: '800px', xs: '350px'},
              backgroundColor: '#fff',
              borderRadius: '40px'
            }}
            height="76px" 
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"/>
            <Button className="search-btn" 
            sx={{
              bgcolor: '#ff2625',
              color: '#fff',
              textTransform: 'none',
              width: { lg: '175px', xs: '80px'},
              height: '56px',
              position: 'absolute',
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

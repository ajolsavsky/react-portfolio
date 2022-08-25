import React from "react";
import {
   Box,
   Grid,
   Container,
   Typography
} from '@mui/material';
import Cards from '../components/Cards'
import portfolioData from "../data/portfolioData";


function portfolioPage() {
    return (
        <>
        <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
        ><Typography variant="h2" sx={{color: 'primary.dark'}}>Portfolio</Typography></Grid>
        <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '50vh' }}
        >

                {portfolioData.map((data) => {
                    return <Cards key={data.id} {...data} />
                })}
        </Grid>
        </>
    )
}

export default portfolioPage;
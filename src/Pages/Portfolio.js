import React from "react";
import {
   Box,
   Grid
} from '@mui/material';
import Cards from '../components/Cards'
import portfolioData from "../data/portfolioData";


function portfolioPage() {
    return (
        <>
        <Box>
            <Grid>
                {portfolioData.map((data, i) => {
                    return <Cards key={i} {...data} />
                })}
            </Grid>
        </Box>
        </>
    )
}

export default portfolioPage;
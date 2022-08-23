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
                {portfolioData.map((data) => {
                    return <Cards key={data.id} {...data} />
                })}
            </Grid>
        </Box>
        </>
    )
}

export default portfolioPage;
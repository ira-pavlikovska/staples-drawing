import React from 'react';
import {Box} from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Header from "../components/Header";
import Shapes from "../components/Shapes";


const Item = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
}));


export default function DrawingContainer() {


    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Item>
                        <Header />
                    </Item>
                </Grid>
                <Grid xs={2}>
                    <Item><Shapes></Shapes></Item>
                </Grid>
                <Grid xs={10}>
                    <Item>
                        drawing canvas
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

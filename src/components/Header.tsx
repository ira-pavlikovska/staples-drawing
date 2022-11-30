import React from "react";
import {Link as RouterLink} from "react-router-dom";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function Header() {
    return (
        <Box
            sx={{
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                    ml: 2,
                },
            }}
            onClick={preventDefault}
        >
            <Link component={RouterLink} to='/'>Home</Link>
            <Link component={RouterLink} to='/logout'>Logout</Link>
        </Box>
    )
}

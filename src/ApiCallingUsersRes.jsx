import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


function ApiCallingUsersRes() {

    const [list, setList] = useState([])
    const [no, setNo] = useState(0)

    useEffect(() => {
        console.log("test")
        dataView();
    }, [])

    function dataView() {
        axios.get('https://jsonplaceholder.typicode.com/users?_limit=5') //limit display only 10 records
            .then((res) => {
                console.log(res.data);
                setList(res.data);

            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <Container maxWidth="xl">
                <Box>
                    <Typography variant='h5' align='center' sx={{ textDecoration: 'underline', mt: 4, fontWeight: 'bold' }}>JSONPlaceholder comes with Users resources</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        {/* <Button variant="contained" sx={{ my: 2 }} onClick={() => setNo(no + 1)}>Click</Button> */}
                        <Button variant='contained' sx={{ my: 2 }} onClick={() => setNo(no + 1)}>Click</Button>
                    </Box>
                    <TableContainer>
                        <Table sx={{ minWidth: 650, border: '1px solid gray' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center' sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Username</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Website</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Company</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {list.map((i, index) => (
                                    <TableRow
                                        key={i.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='center' component="th" scope="row">
                                            {i.id}
                                        </TableCell>
                                        <TableCell>{i.name}</TableCell>
                                        <TableCell>{i.username}</TableCell>
                                        <TableCell>{i.email}</TableCell>
                                        <TableCell>{i.address.street},{i.address.suite},
                                            {i.address.city},{i.address.zipcode},<br />
                                            Geo: Lat {i.address.geo.lat}, Lng {i.address.geo.lng}
                                        </TableCell>
                                        <TableCell>{i.phone}</TableCell>
                                        <TableCell>{i.website}</TableCell>
                                        <TableCell>{i.company.name},{i.company.catchPhrase},{i.company.bs}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </>
    )
}

export default ApiCallingUsersRes

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


function ApiCallingGetProject() {
    const [list, setList] = useState([])
    const [no, setNo] = useState(0)
    const token = "wEyqnV7rzghA70Se"

    useEffect(()=> {
        console.log("test");
        DataView();
    },[no])

    function DataView() {
        axios.get('https://generateapi.techsnack.online/api/project', {
                headers:{
                    Authorization: token
                }
            })
            
            .then((res) => {
                console.log(res.data.Data);
                setList(res.data.Data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <Container maxWidth="sm">
                <Box>
                    <Typography variant='h5' align='center' sx={{ textDecoration: 'underline', mt: 4, fontWeight: 'bold' }}>Postman Products resources</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='contained' sx={{ my: 2 }} onClick={() => setNo(no + 1)}>Click</Button>
                    </Box>
                    <TableContainer>
                        <Table sx={{ border: '1px solid gray' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center' sx={{ fontWeight: 'bold' }}>Id</TableCell>
                                    <TableCell align='center' sx={{ fontWeight: 'bold' }}>Username</TableCell>
                                    <TableCell align='center' sx={{ fontWeight: 'bold' }}>Password</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {list.map((i, index) => (
                                    <TableRow
                                        key={i.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='center'>{index+1}</TableCell>
                                        <TableCell align='center'>{i.username}</TableCell>
                                        <TableCell align='center'>{i.password}</TableCell>
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

export default ApiCallingGetProject

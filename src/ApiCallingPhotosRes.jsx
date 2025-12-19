import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function ApiCallingPhotosRes() {

    const [list, setList] = useState([])
    const [no,setNo] = useState(0)

    useEffect(()=>{
        console.log("test");
        dataView();
    },[no])

    function dataView(){
         axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10') //limit display only 10 records
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
            <Container maxWidth="lg">
                <Box>
                    <Typography variant='h5' align='center' sx={{ textDecoration: 'underline', mt: 4, fontWeight: 'bold' }}>JSONPlaceholder comes with Photos resources</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='contained' sx={{my:2}} onClick={() => setNo(no+1)}>Click</Button>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650, border: '1px solid gray' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center' sx={{ fontWeight: 'bold' }}>AlbumID</TableCell>
                                    <TableCell align='center' sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Url</TableCell>
                                    {/* <TableCell sx={{ fontWeight: 'bold' }}>ThumbnailUrl</TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {list.map((i, index) => (
                                    <TableRow
                                        key={i.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='center' component="th" scope="row">
                                            {i.albumId}
                                        </TableCell>
                                        <TableCell align='center'>{i.id}</TableCell>
                                        <TableCell>{i.title}</TableCell>
                                        <TableCell>
                                            <img src={i.url} alt={i.title} style={{width:50,height:'50',objectFit:'cover'}}/>
                                        </TableCell>
                                         {/* <TableCell>
                                            <img src={i.thumbnailUrl} alt={i.title} style={{width:50,height:50,objectFit:'cover'}}/>
                                        </TableCell> */}
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

export default ApiCallingPhotosRes

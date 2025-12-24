import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer, toast,Bounce } from 'react-toastify';

function ApiCallingDelEmp() {

    const [list, setList] = useState([])
    const [no, setNo] = useState(0)
    const [editId,setEditId] = useState(null)
    const token = "wEyqnV7rzghA70Se"

    useEffect(() => {
        console.log("test");
        dataView();
    }, [no])

    function dataView() {
        axios.get('https://generateapi.techsnack.online/api/employee', {
            headers: {
                Authorization: token //get data
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

    // delete data

    const deleteData = (id) => {

        // console.log(id);    
        //  axios.delete('https://generateapi.techsnack.online/api/employee/' + id)
        axios.delete(`https://generateapi.techsnack.online/api/employee/${id}`, {      // using `` than ${id} work
            headers: {
                Authorization: token
            }
        })
            .then(() => {
                // console.log("Success");
                toast.success('Employee deleted successfully') //using display the msg
                dataView()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //update data

    const editData = (id) =>{
        console.log(id);
        axios.put(`https://generateapi.techsnack.online/api/employee/ ${id}`,{
            headers:{
                Authorization: token
            }
        })
        .then(()=>{
            // console.log("Success");
            toast("Updated Successfully")
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <>
            <Container maxWidth="md">
                <Box>
                    <Typography variant='h5' align='center' sx={{ textDecoration: 'underline', mt: 4, fontWeight: 'bold' }}>Postman Employee resources</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='contained' sx={{ my: 2 }} onClick={() => setNo(no + 1)}>Click</Button>
                    </Box>
                    <TableContainer>
                        <Table sx={{ border: '1px solid gray' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center' sx={{ fontWeight: 'bold' }}>Id</TableCell>
                                    <TableCell align='center' sx={{ fontWeight: 'bold' }}>Profile</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Date of Joining</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {list.map((i, index) => (
                                    <TableRow
                                        key={i.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='center'>{index + 1}</TableCell>
                                        <TableCell align='center'>
                                            <img src={i.profile} alt="" width={40} height={40} style={{ borderRadius: 50 }} />
                                        </TableCell>
                                        <TableCell>{i.name}</TableCell>
                                        <TableCell align='center'>{i.phone}</TableCell>
                                        <TableCell>{i.email}</TableCell>
                                        {/* using ?.split("T")[0] is only display date not time*/}
                                        <TableCell>{i.doj?.split("T")[0]}</TableCell>
                                         <TableCell>
                                            <Button variant='contained'
                                                onClick={() => { editData(i._id) }}
                                                sx={{
                                                    bgcolor: 'green',
                                                    textTransform: 'capitalize',
                                                    mr:1
                                                }}>
                                                <EditIcon
                                                    sx={{
                                                        fontSize: 16,
                                                        mr: 0.5
                                                    }} />
                                                Edit
                                            </Button>
                                            <Button variant='contained'
                                                onClick={() => { deleteData(i._id) }}
                                                sx={{
                                                    bgcolor: 'red',
                                                    textTransform: 'capitalize'
                                                }}>
                                                <DeleteIcon
                                                    sx={{
                                                        fontSize: 16,
                                                        mr: 0.5
                                                    }} />
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Bounce}
                    />
                </Box>
            </Container>
        </>
    )
}

export default ApiCallingDelEmp

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Card, CardContent, Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


function ApiCallingDJsonUsers() {

    const [list, setList] = useState([])
    const [no, setNo] = useState(0)

    useEffect(() => {
        console.log("test");
        dataView()
    }, [no])

    function dataView() {
        axios.get('https://dummyjson.com/users?_limit=5') //limit display only 5 records
            .then((res) => {
                console.log(res.data.users);
                setList(res.data.users);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <Container maxWidth="xl">
                <Box>
                    <Typography variant='h5' align='center' sx={{ textDecoration: 'underline', mt: 4, fontWeight: 'bold' }}>DummyJSON Users resources</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        {/* <Button variant="contained" sx={{ my: 2 }} onClick={() => setNo(no + 1)}>Click</Button> */}
                        <Button variant='contained' sx={{ my: 2 }} onClick={() => setNo(no + 1)}>Click</Button>
                    </Box>
                    <TableContainer>
                        <Table sx={{ border: '1px solid gray' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center' sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>FirstName</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>LastName</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>MiddleName</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Gender</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Username</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Password</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Birthdate</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Bloodgroup</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Height</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>width</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>EyeColor</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Hair</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>IP</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>MacAddress</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>University</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Bank</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Company</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Ein</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>SSN</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>UserAgent</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Crypto</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Role</TableCell>
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
                                        <TableCell>{i.firstName}</TableCell>
                                        <TableCell>{i.lastName}</TableCell>
                                        <TableCell>{i.maidenName}</TableCell>
                                        <TableCell>{i.age}</TableCell>
                                        <TableCell>{i.gender}</TableCell>
                                        <TableCell>{i.email}</TableCell>
                                        <TableCell>{i.phone}</TableCell>
                                        <TableCell>{i.username}</TableCell>
                                        <TableCell>{i.password}</TableCell>
                                        <TableCell>{i.birthDate}</TableCell>
                                        <TableCell>
                                            <img src={i.image} alt="" height={80} width={80} style={{ objectFit: 'cover' }} />
                                        </TableCell>
                                        <TableCell>{i.bloodGroup}</TableCell>
                                        <TableCell>{i.height}</TableCell>
                                        <TableCell>{i.weight}</TableCell>
                                        <TableCell>{i.eyeColor}</TableCell>
                                        <TableCell>
                                            <Card variant="outlined" sx={{ minWidth: 120, border: 0 }}>
                                                <CardContent sx={{ p: 1 }}>
                                                    <Typography variant="body2">
                                                        <b>Color:</b> {i.hair.color}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>Type:</b> {i.hair.type}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </TableCell>
                                        <TableCell>{i.ip}</TableCell>
                                        <TableCell>
                                            <Card variant="outlined" sx={{ minWidth: 200, border: 0 }}>
                                                <CardContent sx={{ p: 1 }}>
                                                    <Typography variant="body2">
                                                        <b>Address:</b> {i.address.address}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>City: </b> {i.address.city}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>State: </b> {i.address.state}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>StateCode: </b>{i.address.stateCode}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>PostalCode: </b> {i.address.postalCode}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>coordinates: </b><br /> Lat {i.address.coordinates.lat},<br /> Lng {i.address.coordinates.lng}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>Country: </b> {i.address.country}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </TableCell>
                                        <TableCell>{i.macAddress}</TableCell>
                                        <TableCell>{i.university}</TableCell>
                                        <TableCell>
                                            <Card variant="outlined" sx={{ minWidth: 150, border: 0 }}>
                                                <CardContent sx={{ p: 1 }}>
                                                    <Typography variant="body2">
                                                        <b>CardExpires:</b> {i.bank.cardExpire}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>CardNumber: </b> {i.bank.cardNumber}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>CardType: </b> {i.bank.cardType}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>Currency: </b> {i.bank.currency}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>IBAN: </b> {i.bank.iban}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </TableCell>
                                        <TableCell>
                                            {/* outer card address */}
                                            <Card variant="outlined" sx={{ minWidth: 250, border: 0 }}>
                                                <CardContent sx={{ p: 1 }}>
                                                    <Typography variant="body2">
                                                        <b>Depatment:</b> {i.company.department}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>Name: </b> {i.company.name}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>Title: </b> {i.company.title}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>Address: </b>
                                                        {/* inner card address */}
                                                        <Card variant="outlined" sx={{ p: 0, border: 0 }}>
                                                            <CardContent>
                                                                <Typography variant="body2">
                                                                    <b>Address:</b> {i.company.address.address}
                                                                </Typography>
                                                                <Typography variant="body2">
                                                                    <b>City:</b> {i.company.address.city}
                                                                </Typography>
                                                                <Typography variant="body2">
                                                                    <b>State: </b> {i.company.address.state}
                                                                </Typography>
                                                                <Typography variant="body2">
                                                                    <b>StateCode: </b>{i.company.address.stateCode}
                                                                </Typography>
                                                                <Typography variant="body2">
                                                                    <b>PostalCode: </b> {i.company.address.postalCode}
                                                                </Typography>
                                                                <Typography variant="body2">
                                                                    <b>coordinates: </b><br /> Lat {i.company.address.coordinates.lat},<br /> Lng {i.company.address.coordinates.lng}
                                                                </Typography>
                                                                <Typography variant="body2">
                                                                    <b>Country: </b> {i.company.address.country}
                                                                </Typography>
                                                            </CardContent>
                                                        </Card>
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </TableCell>
                                        <TableCell>{i.ein}</TableCell>
                                        <TableCell>{i.ssn}</TableCell>
                                        <TableCell>{i.userAgent}</TableCell>
                                        <TableCell>
                                            <Card variant="outlined" sx={{ minWidth: 150, border: 0 }}>
                                                <CardContent sx={{ p: 1 }}>
                                                    <Typography variant="body2">
                                                        <b>Coin:</b> {i.crypto.coin}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>Wallet: </b> {i.crypto.wallet}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>Network: </b> {i.crypto.network}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </TableCell>
                                        <TableCell>{i.role}</TableCell>
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

export default ApiCallingDJsonUsers

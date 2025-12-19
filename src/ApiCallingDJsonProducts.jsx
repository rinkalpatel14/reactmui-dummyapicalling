import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Card, CardContent, Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function ApiCallingDJsonProducts() {


    const [list, setList] = useState([])
    const [no, setNo] = useState(0)

    useEffect(() => {
        console.log("test");
        dataView();
    }, [no])

    function dataView() {
        axios.get('https://dummyjson.com/products?_limit=5') //limit display only 5 records 
            .then((res) => {
                console.log(res.data.products);
                setList(res.data.products);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <Container maxWidth="xl">
                <Box>
                    <Typography variant='h5' align='center' sx={{ textDecoration: 'underline', mt: 4, fontWeight: 'bold' }}>DummyJSON Products resources</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='contained' sx={{ my: 2 }} onClick={() => setNo(no + 1)}>Click</Button>
                    </Box>
                    <TableContainer>
                        <Table sx={{ border: '1px solid gray' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center' sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', minWidth: 350 }}>Description</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Dis/Per(%)</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Rating</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Stock</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Tags</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Brand</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>SKU</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Weight</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Dimensions</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>WarrantyInformation</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>ShippingInformation</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>AvailabilityStatus</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Reviews</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>ReturnPolicy</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>MinimumOrderQuantity</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Meta</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Images</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Thumbnail</TableCell>
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
                                        <TableCell>{i.title}</TableCell>
                                        <TableCell>{i.description}</TableCell>
                                        <TableCell>{i.category}</TableCell>
                                        <TableCell>{i.price}</TableCell>
                                        <TableCell>{i.discountPercentage}</TableCell>
                                        <TableCell>{i.rating}</TableCell>
                                        <TableCell>{i.stock}</TableCell>
                                        <TableCell>
                                            {i.tags.map((tag, idx) => (
                                                <Typography key={idx} variant="body2">
                                                    {tag}
                                                </Typography>
                                            ))}
                                        </TableCell>
                                        <TableCell>{i.brand}</TableCell>
                                        <TableCell>{i.sku}</TableCell>
                                        <TableCell>{i.weight}</TableCell>
                                        <TableCell>
                                            <Card variant="outlined" sx={{ minWidth: 120, border: 0 }}>
                                                <CardContent sx={{ p: 1 }}>
                                                    <Typography variant="body2">
                                                        <b>Width:</b> {i.dimensions.width}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>Height: </b> {i.dimensions.height}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>Depth: </b> {i.dimensions.depth}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </TableCell>
                                        <TableCell>{i.warrantyInformation}</TableCell>
                                        <TableCell>{i.shippingInformation}</TableCell>
                                        <TableCell>{i.availabilityStatus}</TableCell>
                                        <TableCell>
                                            <Card variant="outlined" sx={{ minWidth: 350, border: 0 }}>
                                                <CardContent sx={{ p: 1 }}>
                                                    {i.reviews.map((review, idx) => (
                                                        <Typography key={idx} variant="body2">
                                                            <Typography variant="body2">
                                                                <b>Rating: </b> {review.rating}
                                                            </Typography>
                                                            <Typography variant="body2">
                                                                <b>Comment: </b> {review.comment}
                                                            </Typography>
                                                            <Typography variant="body2">
                                                                <b>Date: </b> {review.date}
                                                            </Typography>
                                                            <Typography variant="body2">
                                                                <b>ReviewerName: </b> {review.reviewerName}
                                                            </Typography>
                                                            <Typography variant="body2">
                                                                <b>ReviewerEmail: </b> {review.reviewerEmail}
                                                            </Typography>
                                                            <br />
                                                        </Typography>
                                                    ))}
                                                </CardContent>
                                            </Card>
                                        </TableCell>
                                        <TableCell>{i.returnPolicy}</TableCell>
                                        <TableCell>{i.minimumOrderQuantity}</TableCell>
                                        <TableCell>
                                            <Card variant="outlined" sx={{ minWidth: 300, border: 0 }}>
                                                <CardContent sx={{ p: 1 }}>
                                                    <Typography variant="body2">
                                                        <b>CreatedAt:</b> {i.meta.createdAt}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>UpdatedAt:</b> {i.meta.updatedAt}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>Barcode:</b> {i.meta.barcode}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <b>QrCode:</b>
                                                        <img src={i.meta.qrCode} alt="" style={{ width: '100', height: '100', objectFit: 'cover' }} />
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </TableCell>
                                        <TableCell>
                                            {i.images.map((image, idx) => (
                                                <Typography key={idx} variant="body2">
                                                   <img src={image} alt=""  style={{width:300 ,height:300,objectFit:'cover'}}/>
                                                </Typography>
                                            ))}
                                        </TableCell>
                                        <TableCell>
                                            <img src={i.thumbnail} alt="" style={{width:300 ,height:300,objectFit:'cover'}} />
                                        </TableCell>
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

export default ApiCallingDJsonProducts

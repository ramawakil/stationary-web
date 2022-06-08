import React, {useEffect, useState} from 'react';
import {makeStyles} from "@mui/styles";
import {Avatar, Box, Container, IconButton, Paper} from "@mui/material";
import AppText from "./AppText";
import DeleteIcon from '@mui/icons-material/Delete';


const useStyles = makeStyles(({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        backgroundColor: '#fafafa',
        padding: 50,
        margin: 20,
        borderRadius: '5px',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
    },
    image: {
        objectFit: 'contain',
        objectPosition: 'center',
        borderRadius: '50%',
        border: '1px solid theme.palette.grey[300]',
        backgroundColor: '#ccc',
        '&:hover': {
            cursor: 'pointer',
            border: '1px solid #000',
        }
    },
}))


function AppUploadImage({width = 100, height = 100, title}) {

    const classes = useStyles();

    const [images, setImages] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => {
            newImageUrls.push(URL.createObjectURL(image))
        });
        setImageUrls(newImageUrls);

    }, [images]);

    const handleRemoveImage = (index) => {
        setImages([]);
        setImageUrls([]);
    }


    const onImageChange = (e) => {
        setImages([...e.target.files]);
    }

    console.log(imageUrls);

    return (
        <>
            <AppText variant="h6">{title}</AppText>
            <Container maxWidth='sm' sx={{
                mx: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 2
            }} component={Paper}>
                {
                    imageUrls.map(imageSrc => (
                        <Box key={imageSrc}>
                            <Avatar className={classes.image} src={imageSrc} sx={{width: width, height: height}}/>
                        </Box>
                    ))
                }
                {(imageUrls.length > 0) && (<IconButton onClick={handleRemoveImage}>
                    <DeleteIcon color='danger' />
                </IconButton>)}
                <input type="file" accept='images/*' name="file" onChange={onImageChange}/>
            </Container>
        </>
    );
}


export default AppUploadImage;
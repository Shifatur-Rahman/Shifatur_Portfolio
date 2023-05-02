import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "react-bootstrap";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./ImgGallery.css"

const ImgGallery = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const handleImageClick = (item) => {
    setSelectedImage(item);
  };
  const handleDialogClose = () => {
    setSelectedImage(null);
  };


  return (
    <>
      <Container style={{ marginTop: "5rem" }}>
        <h2 className="mainTitle">Recent and Upcoming Events</h2>

        <ImageList
          // sx={{ width: "100%", height: "auto" }}
          variant="woven"
          cols={5}
          gap={8}
        >
          {itemData.map((item) => (
            <ImageListItem
              onClick={() => handleImageClick(item)}
            >
              <div className="galleryImg">
                <img
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </ImageListItem>
          ))}
        </ImageList>

        <Dialog open={Boolean(selectedImage)} onClose={handleDialogClose}>
          <DialogTitle>{selectedImage?.title}</DialogTitle>
          <DialogContent>
            <IconButton
              sx={{ position: "absolute", top: 0, right: 0 }}
              onClick={handleDialogClose}
            >
              <CloseIcon />
            </IconButton>
            <img className="zoomImage"
              src={`${selectedImage?.img}?w=500&fit=crop&auto=format`}
              srcSet={`${selectedImage?.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
              alt={selectedImage?.title}
              // style={{ width: "500px", height: "400px" }}
            />
          </DialogContent>
        </Dialog>

      </Container>
    </>
  );
};

export default ImgGallery;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
];

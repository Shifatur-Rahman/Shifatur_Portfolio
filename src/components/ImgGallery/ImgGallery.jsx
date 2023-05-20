import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "react-bootstrap";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import gallery1 from "../../asset/images/gallery/gallery1.jpg";
import gallery4 from "../../asset/images/gallery/gallery4.jpg";
import gallery5 from "../../asset/images/gallery/gallery5.jpg";
import gallery6 from "../../asset/images/gallery/gallery6.jpg";
import gallery7 from "../../asset/images/gallery/gallery7.jpg";
import gallery8 from "../../asset/images/gallery/gallery8.jpg";
import gallery9 from "../../asset/images/gallery/gallery9.jpg";
import gallery10 from "../../asset/images/gallery/gallery10.jpg";
import gallery11 from "../../asset/images/gallery/gallery11.jpg";
import gallery12 from "../../asset/images/gallery/gallery12.jpg";
import gallery13 from "../../asset/images/gallery/gallery13.jpg";
import gallery14 from "../../asset/images/gallery/gallery14.jpg";
import gallery15 from "../../asset/images/gallery/gallery15.jpg";
import gallery16 from "../../asset/images/gallery/gallery16.jpg";
import gallery17 from "../../asset/images/gallery/gallery17.jpg";
import gallery18 from "../../asset/images/gallery/gallery18.jpg";
import "./ImgGallery.css";
import Spinner from "../Spinner/Spinner.jsx";

const ImgGallery = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const handleImageClick = (item) => {
    setSelectedImage(item);
  };
  const handleDialogClose = () => {
    setSelectedImage(null);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2600);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Container style={{ marginTop: "5rem" }}>
          {/* <h2 className="mainTitle">Recent and Upcoming Events</h2> */}

          <ImageList
            className="ImageGallery"
            sx={{ width: "100%", height: "auto", overflow: "hidden" }}
            variant="woven"
            cols={4}
            gap={6}
          >
            {itemData.map((item) => (
              <ImageListItem onClick={() => handleImageClick(item)}>
                <div
                  // data-aos="fade-down"
                  // data-aos-anchor="#example-anchor"
                  // data-aos-offset="500"
                  // data-aos-duration="500"
                  className="galleryImg"
                >
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
              <img
                className="zoomImage"
                src={`${selectedImage?.img}?w=500&fit=crop&auto=format`}
                srcSet={`${selectedImage?.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
                alt={selectedImage?.title}
              />
            </DialogContent>
          </Dialog>
        </Container>
      )}
    </>
  );
};

export default ImgGallery;

const itemData = [
  {
    img: gallery1,
    title: "Dhaka International Trade Fair",
  },

  {
    img: gallery4,
    title: "Customers Visit Our Showroom ",
  },
  {
    img: gallery14,
    title: "Customer Satisfiction",
  },
  {
    img: gallery9,
    title: "Talukder Plastic",
  },
  {
    img: gallery5,
    title: "uPVC Factory",
  },
  {
    img: gallery6,
    title: "Factory",
  },
  {
    img: gallery7,
    title: "Our Production",
  },
  {
    img: gallery8,
    title: "Goods are ready",
  },

  {
    img: gallery10,
    title: "Storage",
  },
  {
    img: gallery17,
    title: "Machine",
  },
  {
    img: gallery11,
    title: "uPVC Machine",
  },
  {
    img: gallery12,
    title: "uPVC Factory",
  },
  {
    img: gallery13,
    title: "Raw Materials",
  },
  {
    img: gallery16,
    title: "Jashore Depot",
  },
  {
    img: gallery15,
    title: "Our Goods",
  },
  {
    img: gallery18,
    title: "Our Benches",
  },
];

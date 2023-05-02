import React,{ useState, useEffect }  from 'react'
import "./Portfolio.css"
import portfolioItems from "./PortfolioImgApi";
import { Container } from '@mui/material';
import { Row,Col } from 'react-bootstrap';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = ( ) => {
    const [category, setCategory] = useState("all");
    const [activeCategory, setActiveCategory] = useState('all');

    const handleCategory = (e) => {
      setCategory(e.target.value);
      setActiveCategory(e.target.value);
    };
  
    
    const isActive = (category) => {
      return category === activeCategory ? 'active' : '';
    };

    const [selectedImage, setSelectedImage] = React.useState("");

    const handleImageClick = (item) => {
      setSelectedImage(item);
      console.log(item)
    };

    const handleDialogClose = () => {
      setSelectedImage(null);
    };

    useEffect(() => {
      AOS.init({
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        duration: 1500, // values from 0 to 3000, with step 50ms
       // disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        // once: false, // whether animation should happen only once - while scrolling down
        // mirror: false, // whether elements should animate out while scrolling past them
        // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        // animatedClassName: 'aos-animate', // class applied on animation
        // initClassName: 'aos-init', // class applied after initialization
        // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      });
    }, []);

  return (
    <>
    <Container>
    <Row>
    <Col xs={12} md={12} lg={12}>
      {/* <div data-aos='fade-right' className="filter-buttons"> */}
      <div className="filter-buttons">
        <button value="all" onClick={handleCategory}  className={isActive('all')}>
          ALL
        </button>
        
        <button value="upvc" onClick={handleCategory} className={isActive('upvc')}>
          UPVC
        </button>
       
        <button value="lged" onClick={handleCategory}  className={isActive('lged')}>
          LGED
        </button>
        
        <button value="plastic" onClick={handleCategory} className={isActive('plastic')}>
          PLASTIC
        </button>
       
        <button value="corporate plastic" onClick={handleCategory} className={isActive('corporate plastic')}>
         CORPORATE PLASTIC
        </button>
       
        <button value="office furniture" onClick={handleCategory} className={isActive('office furniture')}>
         OFFICE FURNITURE
        </button>
        </div>
        </Col>
    
      <div className="portfolio-grid" >
        {portfolioItems
          .filter((item) => {
            if (category === "all") {
              return true;
            } else {
              return item.category === category;
            }
          })

          .map((item) => (
            // data-aos='zoom-in'
            <div className="portfolio-item" key={item.id} onClick={() => handleImageClick(item.imgSrc)}>
             <img 
             src={item.imgSrc}
             alt={item.title}
             style={{ cursor: "pointer" }} />
              <div style={{marginTop:"12px"}}> 
              {item.title && <p className='itemTitle'><strong>Name :  </strong>{item.title}</p>}
              {item.code && <p className='itemTitle'><strong>Code :  </strong>{item.code}</p>}
              {item.size && <p className='itemTitle'><strong>Size :  </strong>{item.size}</p>}
              </div>
            </div>
  
          ))
          }  
      </div>

      <Dialog open={Boolean(selectedImage)} onClose={handleDialogClose}>
          <DialogContent>
            <IconButton
              sx={{ position: "absolute", top: 0, right: 0 }}
              onClick={handleDialogClose}
            >
              <CloseIcon />
            </IconButton>
            <img
               className="zoomImage"
               src={selectedImage}
                srcSet={
                 selectedImage &&
                `${selectedImage}?w=500&fit=crop&auto=format&dpr=2 2x`
                 }
/>
          </DialogContent>
        </Dialog>

    </Row>
    </Container>
    </>
  )
}

export default Portfolio;

import React from 'react';
import ImageGallery from './components/ImageGallery';
import img1 from "../src/assets/1.jpg";
import img2 from "../src/assets/2.jpg";
import img3 from "../src/assets/3.jpg";
import img4 from "../src/assets/4.jpeg";
import img5 from "../src/assets/5.jpg";
import img6 from "../src/assets/6.jpg";
import img7 from "../src/assets/7.jpg";



const images = [
  { url: img1,emlink:'https://momento360.com/e/u/05be7cedbaa740d5befd4dc041c9ba68?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 1' },
  { url: img2,emlink:'https://momento360.com/e/u/a885e633ee1e405db1ee8e9ddcf25804?utm_campaign=embed&utm_source=other&heading=-11.25&pitch=2.83&field-of-view=75&size=medium&display-plan=true', alt: 'Image 2' },
  { url: img3,emlink:'https://momento360.com/e/u/e344b60e5f554f4a85635d1480c624cf?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 3' },
  { url: img4,emlink:'https://momento360.com/e/u/7ac62332641c4eee9769a3d80fa18902?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 4' },
  { url: img5,emlink:'https://momento360.com/e/u/a1646f0e1a0a494ebe68f3e917c177a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 5' },
  { url: img6,emlink:'https://momento360.com/e/u/a1646f0e1a0a494ebe68f3e917c177a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 6' },
  { url: img7,emlink:'https://momento360.com/e/u/a1646f0e1a0a494ebe68f3e917c177a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 6' }

];

function App() {
  return (
    <div className="App">
      
      {/* <ImageGallery images={images} /> */}
      <ImageGallery images={images} visibleCount={3}/>
    </div>
  );
}

export default App;

import React from 'react';
import "../App.css"
import ImageSlider from './ImageSlider';
import Content from './Content';

const Home = () => {

  return(
    <div className="fadeInUp-animation ">
    <ImageSlider/>
    <Content/>
    </div>
  )

}

export default Home;
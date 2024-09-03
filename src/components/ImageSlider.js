
import React, { useEffect, useState } from 'react'

const ImageSlider = () => {

    const [imageIndex,setImageIndex]=useState(0)
    const imageList=[
        'https://e0.pxfuel.com/wallpapers/403/833/desktop-wallpaper-famous-high-resolution-car-high-quality-car.jpg',
        'https://www.mad4wheels.com/img/free-car-images/mobile/20555/bugatti-chiron-super-sport-golden-era-2023-thumb.jpg',
        'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D',
        'https://e0.pxfuel.com/wallpapers/293/569/desktop-wallpaper-awesome-nice-car-for-high-resolution-cars-really-nice-cars.jpg'        
    ]

    useEffect(() => {
        const intervalId = setInterval(()=>{
            setImageIndex((imageIndex)=>(imageIndex+1)%imageList.length)
            console.log(imageIndex)
        },3000)
        return () => clearInterval(intervalId);
      }, []);

  return (
    <div className='slider-container'>
        <img src={imageList[imageIndex]} className='image imagefadeAnim' />
        <div className='slider-heading'>
             Auto Accessories by Bharat Auto Industries
        </div>        
    </div>
  )
}

export default ImageSlider
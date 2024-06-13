
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { search } from '../../lib/api';

const Slider = () => {

    const [videos, setVideos] = useState([]);

    // useEffect(() => {
    //     fetch("https://my-json-server.typicode.com/rogermfdev/json-server/videos")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setVideos(data);
    //         });

    // }, []);

    useEffect(() =>{
        search('/videos', setVideos);
    }, []);

    
  return (
    <section className='p-4'>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className=""
      >{videos.map((video, index) => (
        <SwiperSlide key={index} className=' '>
            <img src={video.thumbnail}  />
        </SwiperSlide>
      ))
      }
       
      </Swiper>
    </section>
  );
}

export default Slider;
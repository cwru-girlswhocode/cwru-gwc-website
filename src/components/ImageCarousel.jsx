// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './ImageCarousel.css';

// import groupPic from '../pictures/group-photo.jpeg'

// // import required modules
// import { Parallax, Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         style={{
//           '--swiper-navigation-color': '#fff',
//           '--swiper-pagination-color': '#fff',
//         }}
//         speed={600}
//       //   parallax={true}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Parallax, Pagination, Navigation]}
//         className="mySwiper"
//         slidesPerView={1}
//       //   spaceBetween={10}
//       //   breakpoints={{
//       //    640: {
//       //      slidesPerView: 2,
//       //      spaceBetween: 20,
//       //    },
//       //    768: {
//       //      slidesPerView: 4,
//       //      spaceBetween: 40,
//       //    },
//       //    1024: {
//       //      slidesPerView: 5,
//       //      spaceBetween: 50,
//       //    },
//       //  }}
//       >
//         <div
//           slot="container-start"
//          //  className="parallax-bg"
//          //  style={{
//          //    'background-image':
//          //      'url(https://swiperjs.com/demos/images/nature-1.jpg)',
//          //  }}
//          //  data-swiper-parallax="-23%"
//         ></div>
//         <SwiperSlide>
//          <img src={groupPic} style={{width: 'fit-content'}}/>
//           <div className="title" data-swiper-parallax="-300">
//             Slide 1
//           </div>
//           <div className="subtitle" data-swiper-parallax="-200">
//             Subtitle
//           </div>
//           <div className="text" data-swiper-parallax="-100">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//               dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//               laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//               Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//               Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
//               ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
//               tincidunt ut libero. Aenean feugiat non eros quis feugiat.
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="title" data-swiper-parallax="-300">
//             Slide 2
//           </div>
//           <div className="subtitle" data-swiper-parallax="-200">
//             Subtitle
//           </div>
//           <div className="text" data-swiper-parallax="-100">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//               dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//               laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//               Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//               Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
//               ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
//               tincidunt ut libero. Aenean feugiat non eros quis feugiat.
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="title" data-swiper-parallax="-300">
//             Slide 3
//           </div>
//           <div className="subtitle" data-swiper-parallax="-200">
//             Subtitle
//           </div>
//           <div className="text" data-swiper-parallax="-100">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//               dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//               laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//               Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//               Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
//               ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
//               tincidunt ut libero. Aenean feugiat non eros quis feugiat.
//             </p>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// Import Swiper React components
import React from "react";
import Slider from "react-slick";

export default function ImageCarousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
/**
 * .container {
  padding: 40px;
  background: #419be0;
}

.slick-slide img {
  margin: auto;
}
 */
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    </div>
  );
}


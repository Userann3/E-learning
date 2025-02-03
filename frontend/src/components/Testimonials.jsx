import React from 'react';
// Import Swiper styles and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className='max-w-[1500px] mx-auto mt-20 px-4'>
      {/* Heading Section */}
      <div className='flex flex-col justify-center items-center text-center'>
        <span className='text-[#257a43] text-2xl'>Student Testimonial</span>
        <span className='text-3xl md:text-5xl mt-3'>
          Feedback From <span className='text-[#257a43]'>Student</span>
        </span>
      </div>

      {/* Swiper Slider */}
      <div className='mt-10'>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center py-6 px-4 rounded-lg border border-gray-300'>
              <div className='rounded-full p-2 border border-[#257a43]'>
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-06.jpg"
                  alt=""
                  className='rounded-full w-24 h-24 object-cover'
                />
              </div>
              <div className='text-center mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, accusantium. Quam earum nemo excepturi omnis aliquid at deserunt quasi dolore dolorum. Voluptatem iure, illum totam ipsam excepturi numquam optio dicta, doloremque, similique tempore quidem maiores facere placeat minima mollitia nisi. Iusto velit temporibus excepturi dolores repellat neque quos nemo natus!
              </div>
              <div className='flex flex-col items-center mt-5'>
                <span className='text-2xl md:text-3xl text-[#257a43]'>Mick Alexander</span>
                <span>Product Designer, USA</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center py-6 px-4 rounded-lg border border-gray-300'>
              <div className='rounded-full p-2 border border-[#257a43]'>
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-06.jpg"
                  alt=""
                  className='rounded-full w-24 h-24 object-cover'
                />
              </div>
              <div className='text-center mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, accusantium. Quam earum nemo excepturi omnis aliquid at deserunt quasi dolore dolorum. Voluptatem iure, illum totam ipsam excepturi numquam optio dicta, doloremque, similique tempore quidem maiores facere placeat minima mollitia nisi. Iusto velit temporibus excepturi dolores repellat neque quos nemo natus!
              </div>
              <div className='flex flex-col items-center mt-5'>
                <span className='text-2xl md:text-3xl text-[#257a43]'>Mick Alexander</span>
                <span>Product Designer, USA</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center py-6 px-4 rounded-lg border border-gray-300'>
              <div className='rounded-full p-2 border border-[#257a43]'>
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-07.jpg"
                  alt=""
                  className='rounded-full w-24 h-24 object-cover'
                />
              </div>
              <div className='text-center mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, praesentium facere dicta nihil doloribus laudantium vitae! Adipisci, aspernatur non quos impedit, sed sint, fugit ad ab odio minus velit nobis laudantium nam. Ex dolores, veniam non repellendus saepe veritatis pariatur ipsa quaerat perspiciatis, repudiandae dicta impedit harum vero error quidem.
              </div>
              <div className='flex flex-col items-center mt-5'>
                <span className='text-2xl md:text-3xl text-[#257a43]'>Mick Alexander</span>
                <span>Product Designer, USA</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex flex-col justify-center items-center py-6 px-4 rounded-lg border border-gray-300'>
              <div className='rounded-full p-2 border border-[#257a43]'>
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-07.jpg"
                  alt=""
                  className='rounded-full w-24 h-24 object-cover'
                />
              </div>
              <div className='text-center mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, praesentium facere dicta nihil doloribus laudantium vitae! Adipisci, aspernatur non quos impedit, sed sint, fugit ad ab odio minus velit nobis laudantium nam. Ex dolores, veniam non repellendus saepe veritatis pariatur ipsa quaerat perspiciatis, repudiandae dicta impedit harum vero error quidem.
              </div>
              <div className='flex flex-col items-center mt-5'>
                <span className='text-2xl md:text-3xl text-[#257a43]'>Mick Alexander</span>
                <span>Product Designer, USA</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex flex-col justify-center items-center py-6 px-4 rounded-lg border border-gray-300'>
              <div className='rounded-full p-2 border border-[#257a43]'>
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-07.jpg"
                  alt=""
                  className='rounded-full w-24 h-24 object-cover'
                />
              </div>
              <div className='text-center mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, praesentium facere dicta nihil doloribus laudantium vitae! Adipisci, aspernatur non quos impedit, sed sint, fugit ad ab odio minus velit nobis laudantium nam. Ex dolores, veniam non repellendus saepe veritatis pariatur ipsa quaerat perspiciatis, repudiandae dicta impedit harum vero error quidem.
              </div>
              <div className='flex flex-col items-center mt-5'>
                <span className='text-2xl md:text-3xl text-[#257a43]'>Mick Alexander</span>
                <span>Product Designer, USA</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
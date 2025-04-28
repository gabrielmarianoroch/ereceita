'use client'

import * as React from "react"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import {Pagination} from 'swiper/modules'
import Image from 'next/image';

export default function Carrosselv2() {
    return (
        <div className='w-full max-w-2x1 mx-auto'>
            <Swiper 
                slidesPerView={1}
                pagination={{clickable: true}}
                modules={[Pagination]}
                className='rounded-x1 shadow-md'
            >

            <SwiperSlide>
                <div className="w-[300px] h-[300px]">
                <Image src="/receita-1.jpg" alt='comida' className="w-full h-auto rounded-x1" width={40} height={40}></Image>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[300px] h-[300px]">
                <Image src="/receita-2.jpg" alt='comida' className="w-full h-auto rounded-x1 "width={40} height={40}></Image>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[300px] h-[300px]">
                <Image src="/receita-3.jpg" alt='comida' className="w-full h-auto rounded-x1"width={30} height={30}></Image>
                </div>
            </SwiperSlide>



                
            </Swiper>

        </div>
    );
}
"use client"

import Button from "@/components/button";
import Container from "@/components/container";
import CardRoadmap from "@/components/roadmap/card";
import Text from "@/components/text";
import { roadmap } from "@/models/dummy/dummyRoadmap";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react'

const Roadmap = () => {
    return (
        <>
            <Container>
                <div className="absolute h-[708px] flex justify-end ml-20 lg:ml-64 -mt-20 sm:h-screen w-[70%] xxl:w-[55%] -z-50">
                    <Image src="/images/grid.svg" alt="Background Hero" fill className="object-bottom object-cover" />
                </div>
                <div className="w-full flex justify-center">
                    <Text variant="subtitle">Roadmap</Text>
                </div>
            </Container>
            <div className="w-full pl-8 lg:pl-16 lg:-mt-10">
                <div className="rounded-l-full h-2 bg-grey-primary flex flex-row items-center">
                    <div className="h-full rounded-l-full bg-purple-300 w-[65%] sm:w-[70%] lg:w-[85%]" />
                    <div className="text-white rounded-full px-1 lg:px-2 py-1 bg-purple-300 border-4 border-dark-primary text-xs lg:text-sm">Lorem ipsum</div>
                </div>
            </div>
            <Container>
                <Swiper
                    className="mySwiper lg:mt-0 mt-5"
                    breakpoints={{
                        1275: {
                            slidesPerView: 3.5,
                            spaceBetween: 20
                        },
                        952: {
                            slidesPerView: 2.5,
                            spaceBetween: 10
                        },
                        716: {
                            slidesPerView: 2.5,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 2.5,
                            spaceBetween: 10
                        },
                        500: {
                            slidesPerView: 2.5,
                            spaceBetween: 5
                        },
                        300: {
                            slidesPerView: 1.5,
                            spaceBetween: 5
                        }
                    }}
                >
                    {
                        roadmap.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <CardRoadmap
                                        name={item.name}
                                        list={item.list}
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Container>
        </>
    );
}

export default Roadmap;
import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { kurtaData } from '../Data/KurtaData';
import ItemCard from './ItemCard';

const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
};

const items = kurtaData.slice(0, 10).map((item) => (
    <div className='flex justify-center'>
        <ItemCard item={item} />
    </div>
))

const ItemsCarousel = ({ title }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <div className='relative border p-5 border-black/10'>
            <h1 className='ps-3 pb-5 font-bold text-xl'>{title}</h1>
            <AliceCarousel
                items={items}
                responsive={responsive}
                disableButtonsControls
                onSlideChanged={syncActiveIndex}
                activeIndex={activeIndex}
                disableDotsControls
            />
            {activeIndex !== 0 && <button className='absolute top-[50%] text-3xl' onClick={slidePrev}>
                <FaCircleArrowLeft />
            </button>}
            <button className='absolute top-[50%] right-0 text-3xl' onClick={slideNext}>
                <FaCircleArrowRight />
            </button>
        </div>);
};

export default ItemsCarousel;
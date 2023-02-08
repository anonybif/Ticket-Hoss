import React from 'react';
import '../styles/carousel.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from "react-bootstrap";
import { MdOutlineQrCode } from 'react-icons/md';
import { ImTrophy } from 'react-icons/im';

export default function Carousel() {
    const slider = React.useRef(null);
    const settings = {
        centerMode: true,
        centerPadding: '11px',
        infinite: true,
        autoplay: false,
        arrows: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    };

    return (
        <div className='carousel-bg'>

            <div className='carousel-container'>
                <div className='title'>
                    <h1>Download App to Purchase</h1>
                </div>
                <Slider ref={slider} {...settings} className='carousel'>
                    <div className='btns'>
                        <Button><MdOutlineQrCode className='btn-icon' /> Annual Tickets</Button>
                    </div>
                    <div className='btns'>
                        <Button><MdOutlineQrCode className='btn-icon' /> Season Pass</Button>
                    </div>
                    <div className='btns'>
                        <Button><ImTrophy className='btn-icon' /> Membership</Button>
                    </div>
                </Slider>
                <div className='subtitle'>
                    <h1>Tickets available in the events below</h1>
                </div>
            </div>
        </div>
    )
}

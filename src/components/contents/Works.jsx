import React from "react";

import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Works = () => {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint:1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint:700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
    <>
        <section id="works">
            <h2 className="main-title">WORKS</h2>
            <p className="container center">Webサイトを中心としたデジタルコンテンツ制作を得意としています。</p>
            <Wrapper>
            <Slider {...settings}>
                <section>
                    <img src="/img/dummy.jpg" alt=""/>
                    <p>私たちはWeb制作のプロです。Webサイトを中心としたデジタルコンテンツ制作を得意としています。</p>
                </section>
                <section>
                    <img src="/img/dummy.jpg" alt=""/>
                    <p>私たちはWeb制作のプロです。Webサイトを中心としたデジタルコンテンツ制作を得意としています。</p>
                </section>
                <section>
                    <img src="/img/dummy.jpg" alt=""/>
                    <p>私たちはWeb制作のプロです。Webサイトを中心としたデジタルコンテンツ制作を得意としています。</p>
                </section>
                <section>
                    <img src="/img/dummy.jpg" alt=""/>
                    <p>私たちはWeb制作のプロです。Webサイトを中心としたデジタルコンテンツ制作を得意としています。</p>
                </section>
                <section>
                    <img src="/img/dummy.jpg" alt=""/>
                    <p>私たちはWeb制作のプロです。Webサイトを中心としたデジタルコンテンツ制作を得意としています。</p>
                </section>
                <section>
                    <img src="/img/dummy.jpg" alt=""/>
                    <p>私たちはWeb制作のプロです。Webサイトを中心としたデジタルコンテンツ制作を得意としています。</p>
                </section>
                <section>
                    <img src="/img/dummy.jpg" alt=""/>
                    <p>私たちはWeb制作のプロです。Webサイトを中心としたデジタルコンテンツ制作を得意としています。</p>
                </section>

                </Slider>
            </Wrapper>
        </section>
    </>
  );
}
export default Works;

const Wrapper = styled.div`
   width: 100%;
   overflow: hidden;
   margin-top: 30px;
   margin-bottom: 70px;

   @media screen and (min-width: 768px) {
       margin-bottom: 150px;
   }

   section {
       padding: 20px;
   }
   p {
       margin-top: 20px;
   }
`

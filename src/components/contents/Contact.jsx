import React from "react";

import styled from 'styled-components';

const Contact = () => {
    return (
    <>
        <section id="contact">
            <h2 className="main-title">CONTAACT</h2>
            <p className="center">お仕事の依頼、活動内容にご興味のある方は下記フォームよりお問い合わせください。</p>
            <div>
                <div className="container">
                    <Wrapper>

                    </Wrapper>
                </div>
            </div>
        </section>
    </>
  );
}
export default Contact;

const Wrapper = styled.div`
    margin-bottom: 80px;
    @media screen and (min-width: 768px) {
        margin-bottom: 150px;
    }

    section {
        line-height: 2;

        @media screen and (min-width: 768px) {
          display: flex;
        }

        & +  section {
            margin-top: 30px;
            @media screen and (min-width: 768px) {
                margin-top: 50px;
            }
        }
    }
    section:nth-child(odd){
        @media screen and (min-width: 768px) {
            flex-direction: row-reverse;
             .panel{
                &__img{
                    padding-right: 50px;
                    padding-left: 0;
                }
            }
        }

    }

    .panel{

        h3 {
            font-size: 2rem;
            margin-bottom: 10px;
            text-align: center;
            @media screen and (min-width: 768px) {
              text-align: left;
            }
        }
        &__main{
            margin-bottom: 20px;

            @media screen and (min-width: 768px) {
                width: 50%;
                margin-bottom: 0;
            }
        }
        &__img {
            display: block;
            margin-left: -30px;
            margin-right: -30px;

            img {
                width: 100%;
            }
            @media screen and (min-width: 768px) {
                padding-left: 50px;
                width: 50%;
            }
        }
    }
`

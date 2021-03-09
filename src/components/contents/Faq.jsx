import React from "react";

import styled from 'styled-components';

const Faq = () => {
    return (
    <>
        <section id="faq">
            <h2 className="main-title">FAQ</h2>
            <div className="container">
                <Wrapper>
                    <dl>
                        <dt>ここに質問が入ります。</dt>
                        <dd>ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。</dd>
                        <dt>ここに質問が入ります。</dt>
                        <dd>ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。</dd>
                        <dt>ここに質問が入ります。</dt>
                        <dd>ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。</dd>
                        <dt>ここに質問が入ります。</dt>
                        <dd>ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。</dd>
                        <dt>ここに質問が入ります。</dt>
                        <dd>ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。</dd>
                    </dl>
                </Wrapper>
            </div>
        </section>
    </>
  );
}
export default Faq;

const Wrapper = styled.div`
    padding-bottom: 50px;

    @media screen and (min-width: 768px) {
        display: flex;
        margin-bottom: 70px;
    }

    dl {
        margin-top: 30px;
        line-height: 2;
        font-size: 1.6rem;

        @media screen and (min-width: 768px) {
            font-size: 1.8rem;
        }
    }

    dt {
         position: relative;
        margin-bottom: 20px;
        padding-left: 40px;
        @media screen and (min-width: 768px) {
            padding-left: 60px;
        }


        font-size: 1.8rem;
        @media screen and (min-width: 768px) {
            font-size: 2rem;

        }

        &::before {
             left: 0;
            position: absolute;
            content: 'Q';
            color: #202443;
            font-size: 2rem;
            line-height: 1;
            width: 40px;
            display: block;

            @media screen and (min-width: 768px) {
                font-size: 4rem;
                width: 60px;
            }
        }
    }

    dd {
        position: relative;
        margin-bottom: 40px;
        padding-left: 40px;

        @media screen and (min-width: 768px) {
            padding-left: 60px;
        }

        &::before {
            left: 0;
            position: absolute;
            content: 'A';
            font-weight: bold;
            color: #E20E4F;
            font-size: 2rem;
            width: 40px;
            line-height: 1;
            display: block;

            @media screen and (min-width: 768px) {
                width: 60px;
                font-size: 4rem;
            }
        }
    }


`

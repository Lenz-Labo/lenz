import React from "react";

import styled from 'styled-components';

const Message = () => {
    return (
    <>
        <section id="message" className="black">
            <div className="container">
                <Wrapper>
                    <picture>
                        <img src="/img/dummy.jpg" alt=""/>
                    </picture>
                    <div class="content-main">
                        <h2>Lenz はこうして生まれました</h2>
                        <p>フィリピン人の平均年齢は24歳。人口も右肩上がりで若い労働力が豊富。<br />優秀な人材が豊富とよく謳われています。</p>
                        <p>気づいたことはフィリピンは「想像以上に貧しい」ということ。<br />フィリピンの失業率はコロナ禍で最大約50%に達したと言われています。<br />ITでもっと雇用を産みたい。そんな思いからLenzは生まれました。</p>
                    </div>
                </Wrapper>
            </div>
        </section>
    </>
  );
}
export default Message;

const Wrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;

    @media screen and (min-width: 768px) {
        display: flex;
        padding-top: 70px;
        padding-bottom: 70px;
    }

    p {
        line-height: 2;
        font-size: 1.6rem;

        @media screen and (min-width: 768px) {
            font-size: 1.8rem;
        }
    }

    picture {
        display: block;
        margin:0 auto 40px;


        @media screen and (min-width: 768px) {
            width: 30%;
            margin-bottom: 0;
        }

        img {
            margin-right: 20px;
            width: 100%;
            display: block;
        }
    }

    .content-main {
        @media screen and (min-width: 768px) {
            width: 70%;
            padding-left: 40px;
        }
    }

    h2 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1.2em;

        @media screen and (min-width: 768px) {
            font-size: 2.2rem;
        }
    }

    p ~ p{
        margin-top: 1em;
    }
`

import React from "react";

import styled from 'styled-components';

const Activity = () => {
    return (
    <>
        <section id="activity">
            <h2 className="main-title">OUR ACTIVITY</h2>
            <div className="container">
                <Wrapper>
                    <section className="panel">
                    <div className="panel__main">
                        <h3>NGOと企業をつなぐ</h3>
                        <p>日本には日々もったいないが生まれています。<br/>たとえばお洋服リサイクルサービスがありますが、わずかなシミや穴のせいで廃棄処分されてしまうそうです。<br/>フィリピン・セブ島の貧困層の子どもたちは不衛生な場所でほぼ裸で過ごします。1着でもあれば病気や怪我を防ぐことができます。<br/>捨てられてしまうお洋服をわずかな支援で子どもたちに届けられたら素敵だと思いませんか？<br/>現地フィリピンにいる私たちだからできることをやっています。</p>
                        </div>
                        <picture className="panel__img">
                            <img src="./img/dummy.jpg" alt=""/>
                        </picture>
                    </section>
                    <section className="panel">
                        <div className="panel__main">
                         <h3>YouTubeなどで情報発信</h3>
                        <p>私たちの得意なことはWebで情報発信をすること。<br/>ブログやメディアで海外生活やITに関して情報発信しています。</p>
                        </div>
                        <picture className="panel__img">
                            <img src="./img/dummy.jpg" alt=""/>
                        </picture>

                    </section>
                </Wrapper>
            </div>
        </section>
    </>
  );
}
export default Activity;

const Wrapper = styled.div`
    margin-bottom: 80px;
    margin-top: 20px;

    @media screen and (min-width: 768px) {
        margin-bottom: 150px;
        margin-top: 50px;
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

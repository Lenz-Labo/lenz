import React from "react";

import styled from 'styled-components';

const Members = () => {
    return (
    <>
        <section id="members" className="black">
            <h2 className="main-title pt-lg">MEMBERS</h2>
            <p className="center container">主なLenzのメンバーをご紹介いたします。</p>
                <Wrapper>
                    <section className="panel">
                    <picture className="panel__img">
                        <source srcSet="/img/dummy.jpg" media="(max-width: 798px)" />
                        <img src="/img/dummy.jpg" alt=""/>
                        </picture>
                        <div className="panel__main">
                            <p className="name">Yuki Suzuki</p>
                            <p className="roll">Photographer ・動画クリエーター</p>
                            <p className="intro">ダミー文が入ります。ダミー文が入ります。ダミー文が入ります。ダミー文が入ります。ダミー文が入ります。ダミー文が入ります。ダミー文が入ります。</p>
                        </div>

                        </section>
                        <section className="panel">
                        <picture className="panel__img">
                            <source srcSet="/img/dummy.jpg" media="(max-width: 798px)" />
                            <img src="/img/dummy.jpg" alt=""/>
                        </picture>
                        <div className="panel__main">
                            <p className="name">Yuriko Kamimori</p>
                            <p className="roll">フロントエンドエンジニア。</p>
                            <p className="intro">ダミー文が入ります。ダミー文が入ります。ダミー文が入ります。ダミー文が入ります。ダミー文が入ります。ダミー文が入ります。ダミー文が入ります。</p>
                            </div>


                    </section>
                </Wrapper>
        </section>
    </>
  );
}
export default Members;

const Wrapper = styled.div`
    margin-top: 50px;
    padding-bottom: 80px;
    margin-bottom: 70px;

    @media screen and (min-width: 768px) {
        margin-bottom: 100px;
        margin-top: 60px;
        padding-bottom: 150px;
    }
    section {
        line-height: 2;

        @media screen and (min-width: 768px) {
          display: flex;
          flex-wrap: wrap;
        }

        & +  section {
            margin-top: 40px;
            @media screen and (min-width: 768px) {
                margin-top: 50px;
            }
        }
    }
    section:nth-child(even){
        @media screen and (min-width: 768px) {
            flex-direction: row-reverse;

            .panel{
                &__img{
                    padding-right: 0;
                    padding-left: 50px;
                }
            }
        }
         @media screen and (min-width: 1020px) {
            flex-direction: row-reverse;

            .panel{
                &__main{
                    > * {
                        margin-left: calc(100% - 510px);
                         margin-right: 0;
                    }
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
            padding: 0 20px;

            .name {
                text-align: center;
                font-size: 1.7rem;
                letter-spacing: .1em;

                @media screen and (min-width: 768px) {
                  text-align: left;
                  font-size: 1.8rem;
                }
            }
            .roll {
                text-align: center;
                margin-bottom: 10px;

                @media screen and (min-width: 768px) {
                  text-align: left;
                }
            }

            @media screen and (min-width: 768px) {
                width: 50%;
                margin-bottom: 0;
            }

            @media screen and (min-width: 1020px) {
                & > * {
                    margin-right: calc(100% - 510px);
                }
            }

        }
        &__img {
            display: block;
            box-sizing: border-box;
            margin-bottom: 10px;
            text-align: center;

            img {
                width: 250px;
            }
            @media screen and (min-width: 768px) {
                img {
                    width: 100%;
                    object-fit: cover;
                    height: 100%;
                }
                padding-right: 50px;
                margin-left: 0;
                margin-right: 0;
                height: 200px;
                width: 50%;
            }
        }
    }
`

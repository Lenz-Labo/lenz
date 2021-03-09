import React from "react";

import styled from 'styled-components';

const Feature = () => {
    return (
    <>
        <Wrapper>
            <section id="feature">
                <h2 className="main-title">FEATURE</h2>
                <section>
                    <div className="panel">
                        <h3>ワクワクすることを徹底的にします</h3>
                        <p>仕事も遊びも人生の一部。常にどうやったら楽しみながら仕事できるかを考えています。</p>
                    </div>
                </section>
                <section>
                   <div className="panel">
                        <h3>フィリピンという立地を生かしサービスを提供します</h3>
                        <p>フィリピンは日本に比べ物価が安いです。そのため品質を維持しつつコストカットが可能です。</p>
                   </div>
                </section>
                <section>
                    <div class="panel">
                        <h3>フィリピンにITで雇用を生む</h3>
                        <p>フィリピンにITで雇用を生むためにLenzは生まれました。人材育成に力を入れ、次世代のIT人材の育成に力を注ぎます。</p>
                    </div>
                </section>
            </section>
        </Wrapper>
     </>
  );
}
export default Feature;

const Wrapper = styled.div`
    counter-reset:num;
    line-height: 1.8;

    margin-bottom: 80px;
    @media screen and (min-width: 768px) {
        margin-bottom: 150px;
    }

    #feature {
        section {
            position: relative;

            &::before {
                position: absolute;
                z-index: -1;
                content: '';
                height: 2px;
                width: 50%;
                left: 0;
                top: 25px;
                display: block;
                background: #202443;

                @media screen and (min-width: 768px) {
                    top: 40px;
                }
            }
        }
        section:nth-of-type(2) {
            position: relative;
            &::before {
                content: '';
            }
            .panel {
                padding-left: calc(10% + 30px);
                @media screen and (min-width: 768px) {
                    padding-left: calc(10% + 50px);
                }
            }
        }
        section:nth-of-type(3) {
            .panel {
                padding-left: calc(20% + 30px);
                @media screen and (min-width: 768px) {
                    padding-left: calc(20% + 50px);
                }
            }
        }
    }

    .panel {
      counter-increment: num;
      max-width: 1020px;
      margin: 0 auto 50px;
      padding: 0 30px;

      @media screen and (min-width: 768px) {
          padding: 0 50px;

      }

      h3 {
            background: #fff;
            display: flex;
            align-items: center;
            font-size: 1.8rem;
            margin-bottom: 10px;
            position: relative;

            &::after {
                position: absolute;
                content: '';
                width: 80px;
                height: 2px;
                left: -30px;
                width: 30px;
                display: block;
                background: #E20E4F;
                top: 25px;

                @media screen and (min-width: 768px) {
                    left: -80px;
                    width: 80px;
                    top: 40px;
                }
            }
            @media screen and (min-width: 768px) {
                font-size: 2rem;
            }
            &::before {
                line-height: 1;
                width: 1em;
                content: counter(num);
                color: #202443;
                font-size: 5rem;
                padding-left: 10px;

                @media screen and (min-width: 768px) {
                    font-size: 8rem;
              }
          }
      }

      @media screen and (min-width: 768px) {
          margin:0 auto 70px;
    }
  }
`

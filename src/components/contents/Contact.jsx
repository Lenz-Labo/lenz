import React, { useState } from "react";

import styled from 'styled-components';

const Contact = () => {
    return (
        <>
            <section id="contact">
                <h2 className="main-title">CONTACT</h2>
                <p className="center">お仕事の依頼、活動内容にご興味のある方は下記フォームよりお問い合わせください。</p>
                <Wrapper>
                    <div className="container sm">
                        <dl>
                            <dt>Name（名前）<span>必須</span></dt>
                            <dd>
                                <input type="text" name="name" placeholder="山田 太郎"/>
                            </dd>
                            <dt>Mail Address（メールアドレス）<span>必須</span></dt>
                            <dd>
                                <input type="email" name="mail" placeholder="example@gmail.com"/>
                            </dd>
                            <dt>Message（ご依頼・質問内容）<span>必須</span></dt>
                            <dd>
                                <textarea rows="10" name="message" placeholder="200文字以内"></textarea>
                            </dd>
                        </dl>
                        <p className="checkbox"><input type="checkbox" id="agreement"/><label for="agreement">下記プライバシーポリシーに同意の上、送信する。</label></p>
                        <div className="privacy-policy">
                            <h3>プライバシーポリシー</h3>
                            <h4>個人情報の利用目的</h4>
                           <p>
                                Lenz（以下、当サイト）では、メールでのお問い合わせ、メールマガジンへの登録などの際に、名前（ハンドルネーム）、メールアドレス等の個人情報をご登録いただく場合がございます。
                                これらの個人情報は質問に対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
                           </p>
                           <h4>個人情報の第三者への開示</h4>
                            <p>当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。</p>

                            <ul>
                                <li>本人のご了解がある場合</li>
                                <li>法令等への協力のため、開示が必要となる場合</li>
                            </ul>
                            <h4>個人情報の開示、訂正、追加、削除、利用停止</h4>
                            <p>ご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。</p>
                            <h4>アクセス解析ツールについて</h4>
                            <p>当サイトでは、Googleによるアクセス解析ツール「<a href="https://marketingplatform.google.com/about/analytics/" target="_blank">Googleアナリティクス</a>」を利用しています。</p>
                            <p>このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しては、詳しくは<a href="https://www.google.com/analytics/terms/jp.html">Google アナリティクス サービス利用規約</a>をご確認ください。</p>
                            <h4>当サイトのコンテンツ・情報について</h4>
                            <p>当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。</p>
                            <p>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
                            <h4>プライバシーポリシーの変更について</h4>
                            <p>当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。</p>

                            <p>修正された最新のプライバシーポリシーは常に本ページにて開示されます。</p>
                        </div>
                        <button type="button" disabled>SEND</button>
                    </div>
                </Wrapper>
            </section>
        </>
    );
}
export default Contact;

const Wrapper = styled.div`
    margin-top: 30px;
    padding-top: 30px;
    background: #161617;
    padding-bottom: 50px;
    color: #fff;

    @media screen and (min-width: 768px) {
        padding-top: 50px;
        padding-bottom: 150px;
        padding-bottom: 30px;
        margin-top: 50px;
    }

    dl {
        dt {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            span {
                font-size: 1rem;
                color: #E20E4F;
                border: 1px solid #E20E4F;
                padding: 3px 10px;
                border-radius: 20px;
            }
        }

        dd {
            margin-bottom: 20px;

            @media screen and (min-width: 768px) {
                margin-bottom: 30px;

            }
            textarea,
            input[type="email"],
            input[type="text"] {
                outline: none;
                box-sizing: border-box;
                display: block;
                width: 100%;
                line-height: 1.8;
                border: none;
                padding: 15px 10px;
                font-family: "Roboto Mono", monospace, "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "メイリオ", sans-serif;
            }
        }


    }
    .checkbox {
        position: relative;
        padding-left: 30px;
        input[type="checkbox"] {
            display: none;

            &:checked + label {
                &::after {
                    opacity: 1;
                }
            }
            & + label {

                &::before {
                    left: 0;
                    top: 0;
                    position: absolute;
                    content: '';
                    display: block;
                    width: 20px;
                    height: 20px;
                    background: #fff;
                }
                &::after {
                    left: 4px;
                    top: -3px;
                    position: absolute;
                    content: '';
                    display: block;
                    width: 10px;
                    height: 16px;
                    border-right: #E20E4F solid 2px;
                    border-bottom: #E20E4F solid 2px;
                    transform: rotate(45deg);
                    opacity: 0;
                    transition: .3s;
                }
            }
        }
    }

    .privacy-policy {
        margin-top: 15px;
        height: 150px;
        overflow: scroll;
        margin-bottom: 30px;
        padding: 20px 30px;
        background: #fff;
        color: #161617;
        line-height: 1.8;

        h3 {
            font-size: 1.8rem;
        }

        h4 {
           &~ h4 {
                margin-top: 20px;
            }
        }

        @media screen and (min-width: 768px) {
            margin-bottom: 80px;
        }
    }

    button {
        background: #fff;
        border: none;
        width: 100%;
        display: block;
        font-family: "Roboto Mono', monospace", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "メイリオ", sans-serif;
        font-weight: bold;
        letter-spacing: 0.1em;
        font-size: 2rem;
        outline: none;
        padding: 15px;
        position: relative;

        &:disabled {
            opacity: 0.5;
            pointer-events: none;
        }

        @media screen and (min-width: 768px) {
            font-size: 2.3rem;
            padding: 20px;
        }
        &::before {
            position: absolute;
            left: -2px;
            top: -2px;
            content: '';
            display: block;
            width: 20px;
            height: 20px;
            border-left: 2px solid #E20E4F;
            border-top: 2px solid #E20E4F;
            transition: .3s;
            @media screen and (min-width: 768px) {
              width: 30px;
              height: 25px;
            }
        }
        &::after {
            position: absolute;
            right: -2px;
            bottom: -2px;
            content: '';
            display: block;
            width: 20px;
            height: 20px;
            border-right: 2px solid #E20E4F;
            border-bottom: 2px solid #E20E4F;
            transition: .3s;

            @media screen and (min-width: 768px) {
                width: 30px;
                height: 25px;
            }
        }

        &:hover {
            transition: .3s;
            cursor: pointer;
            color: #E20E4F;

            &::after {
                bottom: 3px;
                right: 3px;
                width: 100%;
                height: 100%;
            }
            &::before {
                left: 3px;
                top: 3px;
                width: 100%;
                height: 100%;
            }
        }
    }
`

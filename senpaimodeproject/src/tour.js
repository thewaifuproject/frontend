import React from 'react';
import { Col, Row } from 'reactstrap';
import './tour.css'
import './swiper.css'

import * as Tools from './dist/tools'

const steps = [
    {
        selector: '#nothing',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('auction');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">Hey there! My name is Chain.</div>
                            <a class="blog-slider__button" onClick={() => goTo(1)}>Nice to meet you!</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        selector: '#nothing',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('auction');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">I’m here to explain how you can get your waifus!</div>
                            <a class="blog-slider__button" onClick={() => goTo(2)}>Hellye!</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#nothing',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('auction');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">You can skip the tutorial. But I don’t recommend it, what I will explain is SUPER important, plus, just letting you know, I’m an awesome teacher.</div>
                            <a class="blog-slider__button" onClick={() => goTo(3)}>Teach me Sensei</a>
                            <p class="blog-slider__button skipbutton" onClick={() => close()}>Skip</p>
                            <br /><br /><br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#nothing',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('auction');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">Alright! Let’s start with the basics.</div>
                            <a class="blog-slider__button" onClick={() => goTo(4)}>...</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#nothing',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('auction');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">This machine you are using right now it’s called ei COMPUTER. Repeat after me: C-O-M-P… wait.</div>
                            <a class="blog-slider__button" onClick={() => goTo(5)}>C-O-M-P… wait?</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#nothing',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('auction');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">That may have been too basic. Sorry.</div>
                            <a class="blog-slider__button" onClick={() => goTo(6)}>...</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#waifusOnAuciton',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('auction');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">Now for real, this is the Auction screen.</div>
                            <a class="blog-slider__button" onClick={() => goTo(7)}>Woah</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#waifusOnAuciton',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('auction');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">In here, you can see all the waifus that are being auctioned today. They change every 24h, so make sure to check it out frequently!</div>
                            <a class="blog-slider__button" onClick={() => goTo(8)}>Gottit</a>
                            <br /><br /><br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#colcard',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('auction');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="./chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">Once you have seen your <strike>fap</strike> fav waifu, it’s time to take Auction!</div>
                            <a class="blog-slider__button" onClick={() => goTo(9)}>...</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
        action: () => {
            Tools.disableTutorial('auction');
        },
    },
    {
        selector: '#buttontourjs',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('auction');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">To do so, press the “BID” bottom. I love how friendly user this website is.</div>
                            <a class="blog-slider__button" onClick={() => close()}>...</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    }
]

const stepsWaifuDetail = [
    {
        selector: '#bidcont',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">Perfect! This is where things get interesting.</div>
                            <a class="blog-slider__button" onClick={() => goTo(1)}>...</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidcont',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">In here, you can see her picture, her name and her bio. Too bad her sizes don’t appear, but I’m sure you already know them.</div>
                            <a class="blog-slider__button" onClick={() => goTo(2)}>Me? No way…</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">Oh? Whats this?</div>
                            <a class="blog-slider__button" onClick={() => goTo(3)}>Is this..?</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">Yes, this is where you can bid and get your waifus. Yay!</div>
                            <a class="blog-slider__button" onClick={() => goTo(4)}>Cool!</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">This Auction is called a “Blind Auction”. As I don’t want to bore you and make this tutorial super long, I’ll only explain the basics.</div>
                            <a class="blog-slider__button" onClick={() => goTo(5)}>Yes, please.</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">The complex stuff is all in the FAQ. You are welcome.</div>
                            <a class="blog-slider__button" onClick={() => goTo(6)}>Thanks!</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">So, in the Blind Auction, your bid, and the bid of the other users, are a complete secret.</div>
                            <a class="blog-slider__button" onClick={() => goTo(7)}>*gasp*</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">To assure that privacy, two bids are done:</div>
                            <a class="blog-slider__button" onClick={() => goTo(8)}>...</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidreal',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">One “real”</div>
                            <a class="blog-slider__button" onClick={() => goTo(9)}>...</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidfake',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">And another one “fake”</div>
                            <a class="blog-slider__button" onClick={() => goTo(10)}>...</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidtimer',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">Here you have the timer until the Auction finishes.</div>
                            <a class="blog-slider__button" onClick={() => goTo(11)}>...</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">IMPORTANT: The fake bid has to be bigger than the real bid.</div>
                            <a class="blog-slider__button" onClick={() => goTo(12)}>Noted.</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">ALSO IMPORTANT: Once the bid has been done, you have to return here tomorrow to do the “Reveal”.</div>
                            <a class="blog-slider__button" onClick={() => goTo(13)}>Also noted.</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">I don’t like spoilers, so that part will have to wait until you have done your first bid!</div>
                            <a class="blog-slider__button" onClick={() => close()}>Alright.</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ close, goTo, inDOM }) => (
            <div className="blog-slider">
                <a class="close-thik" onClick={()=>{Tools.disableTutorial('bid');close();}}>✖</a>
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className='box'>
                                <img src="chain.jpg" />
                                <div className='title'>Chain</div>
                                <div className="prepare_wave">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__content">
                            <div class="blog-slider__text" id="dialog">See you soon!</div>
                            <a class="blog-slider__button" onClick={() => close()}>See ya!</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
]


export { steps, stepsWaifuDetail };
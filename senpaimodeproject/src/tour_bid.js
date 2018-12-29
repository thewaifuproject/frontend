import React from 'react';
import { Col, Row } from 'reactstrap';
import './tour.css'
import './swiper.css'

const stepsBeforeReveal = [
    {
        selector: '#nothing',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                            <div class="blog-slider__text" id="dialog">I’m back! Looks like you already did your first bid.</div>
                            <a class="blog-slider__button" onClick={() => goTo(1)}>Yes!</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        selector: '#nothing',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                            <div class="blog-slider__text" id="dialog">Let me teach you what are the next steps to get your waifu.</div>
                            <a class="blog-slider__button" onClick={() => goTo(2)}>...</a>
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
                            <div class="blog-slider__text" id="dialog">You know the drill, you can skip this tutorial, but I would recommend not to. It’s super important info, it is a short one plus you won’t hear my jokes.</div>
                            <a class="blog-slider__button" onClick={() => goTo(3)}>I’m here for the jokes.</a>
                            <p class="blog-slider__button skipbutton" onClick={() => close()}>Skip</p>
                            <br/><br/><br/><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#nothing',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                            <div class="blog-slider__text" id="dialog">Awww, thanks! Let’s begin then.</div>
                            <a class="blog-slider__button" onClick={() => goTo(4)}>...</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#nothing',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                            <div class="blog-slider__text" id="dialog">Once the bid is done, and the bidding period ends, you have to “reveal” your bid.</div>
                            <a class="blog-slider__button" onClick={() => goTo(5)}>. . .</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#nothing',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                            <div class="blog-slider__text" id="dialog">What does that mean? Simple: Since the bidding period ends, you have 24h to go to “History bid” and press the “Reveal All” button.</div>
                            <a class="blog-slider__button" onClick={() => goTo(6)}>Easy peasy</a>
                            <br/><br/><br/><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#waifusOnAuciton',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                            <div class="blog-slider__text" id="dialog">It is SUPER IMPORTANT (note the caps) you don’t forget. If you do, the money you bid will end up in the deepest and most darkest part of the internet.</div>
                            <a class="blog-slider__button" onClick={() => goTo(7)}>Oh no.</a>
                            <br/><br/><br/><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#waifusOnAuciton',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                            <div class="blog-slider__text" id="dialog">Oh yes. They will be together with all the dead memes. Scary, right?</div>
                            <a class="blog-slider__button" onClick={() => goTo(8)}>I’ll have nightmares tonight…</a>
                            <br/><br/><br/><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#colcard',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                            <div class="blog-slider__text" id="dialog">Guess what happens if you were the one to win the bid, the dead memes will get to know your waifu.</div>
                            <a class="blog-slider__button" onClick={() => goTo(9)}>Please no.</a>
                            <br/><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#buttontourjs',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                            <div class="blog-slider__text" id="dialog">We both don’t want that, so remember: Once after the bidding period ends, you have another 24h to press the “Reveal all”. Follow this easy steps and no bid deal at all.</div>
                            <a class="blog-slider__button" onClick={() => goTo(10)}>...</a>
                            <br/><br/><br/><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidcont',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                            <div class="blog-slider__text" id="dialog">I’ll come back once you press the “Reveal all” button… Don’t forget.</div>
                            <a class="blog-slider__button" onClick={() => goTo(11)}>I won’t</a>
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
                        <div class="blog-slider__text" id="dialog">Perfect. Bye!</div>
                        <a class="blog-slider__button" onClick={() => close()}>Bye</a>
                    </div>
                </div>
            </div>
        </div>
        ),
    }
]

const stepsAfterReveal = [
    {
        selector: '#bidcont',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                            <div class="blog-slider__text" id="dialog">Hey! You did it!</div>
                            <a class="blog-slider__button" onClick={() => goTo(1)}>Of course!</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        selector: '#bidcont',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                        <div class="blog-slider__text" id="dialog">Good. This last tutorial is super short so what are you going to do?</div>
                        <a class="blog-slider__button" onClick={() => goTo(2)}>Continue tutorial</a>
                        <a class="blog-slider__button" onClick={() => goTo(2)}>Continue tutorial</a>
                    </div>
                </div>
            </div>
        </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                        <div class="blog-slider__text" id="dialog">Nice! Now that you have revealed your bid,  and after this bidding period ends, you will know if you got your waifu. I can’t wait for the results to come out!</div>
                        <a class="blog-slider__button" onClick={() => goTo(3)}>Yeah, me neither.</a>
                        <br/><br/><br/><br/><br/>
                    </div>
                </div>
            </div>
        </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                        <div class="blog-slider__text" id="dialog">To check if you won, you have to go to “History bid”, scroll down and BOOM!</div>
                        <a class="blog-slider__button" onClick={() => goTo(4)}>...</a>
                    </div>
                </div>
            </div>
        </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                        <div class="blog-slider__text" id="dialog">If you got it, claim it. If you did not, you get back your bid. Better luck next time, I guess…</div>
                        <a class="blog-slider__button" onClick={() => goTo(5)}>I will get it 105% sure</a>
                        <br/><br/><br/>
                    </div>
                </div>
            </div>
        </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                        <div class="blog-slider__text" id="dialog">Keep up that spirit! Go you!</div>
                        <a class="blog-slider__button" onClick={() => goTo(6)}>...</a>
                    </div>
                </div>
            </div>
        </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                        <div class="blog-slider__text" id="dialog">Sight It’s time to say goodbye, I have taught you everything you need to know.</div>
                        <a class="blog-slider__button" onClick={() => goTo(7)}>Is this... a goodbye?</a>
                    </div>
                </div>
            </div>
        </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                        <div class="blog-slider__text" id="dialog">Yes, it is… But don’t worry, it’s not like we won’t see each other anymore.</div>
                        <a class="blog-slider__button" onClick={() => goTo(8)}>...</a>
                    </div>
                </div>
            </div>
        </div>
        ),
    },
    {
        selector: '#bidreal',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                        <div class="blog-slider__text" id="dialog">I am 24/7 in WaifuChain’s discord server. I know you know that I know that you want to see me again, so I took the time to add a button to join, here it goes.</div>
                        <a class="blog-slider__button" onClick={() => goTo(9)}>Thanks!</a>
                        <a class="blog-slider__button" href="https://discordapp.com/invite/ykrT4bw" target="__blank">Discord</a>
                        <br/><br/><br/><br/><br/>
                    </div>
                </div>
            </div>
        </div>
        ),
    },
    {
        selector: '#bidfake',
        content: ({ goTo, inDOM }) => (
            <div className="blog-slider">
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
                        <div class="blog-slider__text" id="dialog">Now for real, see you!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <a class="blog-slider__button" onClick={() => goTo(10)}>C-O-M-P-U-T-E-R</a>
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
                        <div class="blog-slider__text" id="dialog">Hey! It looks you really got the basics!</div>
                        <a class="blog-slider__button" onClick={() => close()}>...</a>
                    </div>
                </div>
            </div>
        </div>
        ),
    }
]


export { stepsBeforeReveal, stepsAfterReveal };
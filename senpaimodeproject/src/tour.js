import React from 'react';
import { Col, Row } from 'reactstrap';

const steps = [
    {
        selector: '#nothing',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>Hey there! My name is Chain.</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(1)}>Nice to meet you!</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#nothing',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>I’m here to explain how you can get your waifus!</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(2)}>Hellye!</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#nothing',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>You can skip the tutorial. But I don’t recommend it, what I will explain is SUPER important, plus, just letting you know, I’m an awesome teacher.</Col>
                </Row>
                <Row>
                    <Col><button>Skip</button></Col>
                    <Col><button onClick={() => goTo(3)}>Teach me Sensei</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#nothing',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>Alright! Let’s start with the basics.</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(4)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#nothing',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>This machine you are using right now it’s called ei COMPUTER. Repeat after me: C-O-M-P… wait.</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(5)}>C-O-M-P… wait?</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#nothing',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>That may have been too basic. Sorry.</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(6)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#waifusOnAuciton',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>Now for real, this is the Auction screen.</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(7)}>Next</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#waifusOnAuciton',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>In here, you can see all the waifus that are being auctioned today. They change every 24h, so make sure to check it out frequently!</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(8)}>Next</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#colcard',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>Once you have seen your <strike>fap</strike> fav waifu, it’s time to bid!</Col>
                </Row>
                <Row>
                <Col></Col>
                    <Col><button onClick={() => goTo(9)}>Next</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#buttontourjs',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>To do so, press the “BID” bottom. I love how friendly user this website is.</Col>
                </Row>
            </div>
        ),
    }
]

const stepsWaifuDetail = [
    {
        selector: '#bidcont',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>Perfect! This is where things get interesting.</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(1)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#bidcont',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>In here, you can see her picture, her name and her bio. Too bad her sizes don’t appear, but I’m sure you already know them.</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(2)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>Oh? Whats this?</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(3)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>Yes, this is where you can bid and get your waifus. Yay!</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(4)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>This Auction is called a “Blind Auction”. As I don’t want to bore you and make this tutorial super long, I’ll only explain the basics. </Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(5)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>The complex stuff is all in the FAQ. You are welcome.</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(6)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>So, in the Blind Action, your bid, and the bid of the other users, are a complete secret. </Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(7)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>To assure that privacy, two bids are done: </Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(8)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#bidreal',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>One “real”</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(9)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#bidfake',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>And another one “fake”</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(10)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#bidtimer',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>Here you have the timer until the Auction finishes.</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(11)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>IMPORTANT: The fake bid has to be bigger than the real bid.</Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(12)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>ALSO IMPORTANT: Once the bid has been done, you have to return here tomorrow to do the “Reveal”. </Col>
                </Row>
                <Row>
                    <Col><button onClick={() => goTo(13)}>...</button></Col>
                </Row>
            </div>
        ),
    },
    {
        selector: '#bidpanel',
        content: ({ goTo, inDOM }) => (
            <div>
                <Row>
                    <Col xs="3"><img src="https://waifuchain.moe/favicon.ico" /></Col>
                    <Col>I don’t like spoilers, so that part will have to wait until you have done your first bid!</Col>
                </Row>{/*TODO close on button click && design*/}
            </div>
        ),
    },
]


export {steps, stepsWaifuDetail};
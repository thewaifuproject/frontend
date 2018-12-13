import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Roadmap.css'

class Roadmap extends Component {

    render() {
        return (
            <div>
                <Container>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(88, 70, 120)', color: '#fff' }}
                         
                        >
                            <h3 className="vertical-timeline-element-title">Contract launch</h3>
                            <h4 className="vertical-timeline-element-subtitle">BETA LAUNCH</h4>
                            <p>
                            Contract launch on Rinkeby and official launch of webapp and browser extensions
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(88, 70, 120)', color: '#fff' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">Discord bot</h3>
                            <h4 className="vertical-timeline-element-subtitle">Beta</h4>
                            <p>
                            Discord bot creation
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(162, 162, 162)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Waifubot</h3>
                            <h4 className="vertical-timeline-element-subtitle">Discord</h4>
                            <p>
                            Chat with waifu on discord private message, featuring state-of-the art AI networks forced to watch whole anime series non-stop
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(162, 162, 162)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Fighting Waifu</h3>
                            <h4 className="vertical-timeline-element-subtitle">Discord Game (Pokemon like)</h4>
                            <p>
                            Launch of the first competitive waifu strategy battle game
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            iconStyle={{ background: 'rgb(162, 162, 162)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Waifu Voice AI</h3>
                            <h4 className="vertical-timeline-element-subtitle">Discord Bot</h4>
                            <p>
                            Enhance the waifu AI chatbot by adding the original voice of each individual waifu. Call your waifus not the hotline!
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            iconStyle={{ background: 'rgb(162, 162, 162)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Beta</h3>
                            <h4 className="vertical-timeline-element-subtitle"></h4>
                            <p>
                            END OF BETA PROGRAMME
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(255,215,0)', color: '#fff' }}
                        />
                    </VerticalTimeline>
                </Container>
            </div>
        )
    }
}

export default Roadmap;


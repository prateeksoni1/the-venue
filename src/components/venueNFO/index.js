import React from 'react';

import iconCalendar from '../../resources/images/icons/calendar.png'
import iconLocation from '../../resources/images/icons/location.png'

import Zoom from 'react-reveal/Zoom';

const VenueNFO = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon" style={{
                                        background: `url(${iconCalendar})`
                                    }}></div>
                                    <div className="vn_title">
                                        Event Date & Time
                                    </div>
                                    <div className="vn_desc">
                                        30 July, 2018
                                        @ 10.00 pm
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div className="vn_icon" style={{
                                        background: `url(${iconLocation})`
                                    }}></div>
                                    <div className="vn_title">
                                        Event Location
                                    </div>
                                    <div className="vn_desc">
                                        Delhi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    
                </div>
            </div>
        </div>
    );
};

export default VenueNFO;
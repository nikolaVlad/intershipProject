// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { Wrapper } from './LogosBarElements';

import { FaPlaystation, FaXbox } from 'react-icons/fa';


function LogosBar() {
    return (
        <Wrapper>
            <div>
                <FaPlaystation style={{ margin: '3px 10px' }} /> PS 4
            </div>
            <div>
                <FaXbox style={{ margin: '3px 10px' }} /> XBOX ONE
            </div>
            <div>
                <span style={{ margin: '0px 5px' }}> PC </span> GAMMER
            </div>
            <div>
                {' '}
                <b> Wii </b>
            </div>
            <div>
                <FaPlaystation style={{ margin: '3px 10px' }} /> PS3
            </div>
            <div>
                <FaXbox style={{ margin: '3px 10px' }} /> XBOX 360
            </div>
        </Wrapper>
    );
}

export default LogosBar;

import React, { useEffect, useRef } from 'react';
import PropsTypes from 'prop-types';
import {
    GaleryItem,
    GaleryRowPlace,
    ScrollButton,
    Wrapper,
} from './GaleryRowElements';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function GaleryRow({ items }) {
    let galeryWrapper = useRef();

    useEffect(() => {
        galeryWrapper.current.scrollLeft = 0;
    }, [items]);

    function setGalleryScroll(back) {
        if (back) {
            return (galeryWrapper.current.scrollLeft -=
                galeryWrapper.current.offsetWidth);
        }

        return (galeryWrapper.current.scrollLeft +=
            galeryWrapper.current.offsetWidth);
    }

    return (
        <GaleryRowPlace>
            <Wrapper ref={galeryWrapper}>
                {items.map((el, index) => {
                    return <GaleryItem key={index}>{el.value}</GaleryItem>;
                })}
            </Wrapper>

            <div style={{ position: 'absolute', top: '40%', left: '0' }}>
                <ScrollButton onClick={() => setGalleryScroll('back')}>
                    <MdKeyboardArrowLeft />
                </ScrollButton>
            </div>

            <div style={{ position: 'absolute', top: '40%', right: '0' }}>
                <ScrollButton onClick={() => setGalleryScroll()}>
                    <MdKeyboardArrowRight />
                </ScrollButton>
            </div>
        </GaleryRowPlace>
    );
}

GaleryRow.propTypes = {
    items: PropsTypes.array,
};

export default GaleryRow;

/* eslint-disable no-unused-vars */
import React from 'react';
import {
    ActionPlace,
    BodyPlace,
    HeadingPlace,
    ModalWrapper,
    Wrapper,
    ModalForm,
    BtnAccept,
    BtnCancel,
    EsicBtn,
    BackgroundWrapper,
} from './ModalElements';
import PropTypes from 'prop-types';
import {TiTimes} from 'react-icons/ti'



const Modal = ({
    children,
    accessBtnText,
    closeBtnText,
    onAccess,
    onClose,
    isOpen,
    name ,
    dialogVariant
}) => {
    return (
        <ModalWrapper className={!isOpen && 'hidden'} id = {name}>
            <Wrapper>
                <BackgroundWrapper onClick={() => onClose()}>
                </BackgroundWrapper>
                <ModalForm>
                    <HeadingPlace>
                        <EsicBtn onClick={() => onClose()}><TiTimes /></EsicBtn>
                    </HeadingPlace>

                    <BodyPlace>
                        <div>{children}</div>
                    </BodyPlace>

                    {dialogVariant && <ActionPlace>
                        <BtnAccept onClick={() => onAccess()}>
                            {' '}
                            {accessBtnText}{' '}
                        </BtnAccept>
                        <BtnCancel onClick={() => onClose()}>
                            {' '}
                            {closeBtnText}{' '}
                        </BtnCancel>
                    </ActionPlace>
                    }
                </ModalForm>
            </Wrapper>
        </ModalWrapper>
    );
};

Modal.propTypes = {
    children: PropTypes.any,
    accessBtnText: PropTypes.string,
    closeBtnText: PropTypes.string,
    onAccess: PropTypes.func,
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
    dialogVariant : PropTypes.bool,
    name : PropTypes.string
};

export default Modal;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EyeBtn, StyledInput, Wrapper } from './InputElements';
import {RiErrorWarningLine} from 'react-icons/ri'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


const Input = ({ type, placeholder, error, message, style, value, onChange, name }) => {

   
    const [isShownPassword, setIsShownPassword] = useState(false);
    let Eye = (isShownPassword && AiFillEyeInvisible) || AiFillEye;





    return (
        <Wrapper>
            {type.toLowerCase() !== 'password' ? (
                <StyledInput
                    className={error && 'failed'}
                    type={type || 'text'}
                    placeholder={placeholder}
                    style={style}
                    value={value}
                    onChange={onChange}
                    name={name}
                />
            ) : (
                <div style={{ position: 'relative' }}>
                    <StyledInput
                        className={error && 'failed'}
                        type={!isShownPassword ? 'password' : 'text'}
                        placeholder={placeholder}
                        style={style}
                        value={value}
                        onChange={onChange}
                        name={name}
                        passwordVariant
                    />
                    <EyeBtn>
                        <Eye
                            onClick={() => setIsShownPassword(!isShownPassword)}
                        />
                    </EyeBtn>
                </div>
            )}

            <small style={style}>
                {error && (
                    <div>
                        
                        <RiErrorWarningLine color='gray' /> {message}{' '}
                    </div>
                )}
            </small>
        </Wrapper>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.any,
    message: PropTypes.string,
    name: PropTypes.string.isRequired,
    style: PropTypes.object,
    value : PropTypes.any,
    onChange : PropTypes.func
};

export default Input;

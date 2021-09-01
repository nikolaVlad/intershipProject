/* eslint-disable react/prop-types */
import React from 'react';
import { Range, getTrackBackground } from 'react-range';

const STEP = 1;
const COLORS = ['gray', 'orange', 'gray', 'gray', 'gray'];

class PriceRangeSlider extends React.Component {
    state = {
        values: this.props.range,
    };

    updateValues = (values) => {
        this.setState({ values }, () => {
            this.props.onUpdateValues(values);
        });
    };

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                }}
            >
                <Range
                    values={this.state.values}
                    step={STEP}
                    min={this.props.MIN}
                    max={this.props.MAX}
                    onChange={this.updateValues}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                height: '40px',
                                display: 'flex',
                                width: '100%',
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: '3px',
                                    width: '100%',
                                    borderRadius: '4px',
                                    background: getTrackBackground({
                                        values: this.state.values,
                                        colors: COLORS,
                                        min: this.props.MIN,
                                        max: this.props.MAX,
                                    }),

                                    alignSelf: 'center',
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props, index, isDragged }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '22px',
                                width: '22px',
                                borderRadius: '20px',
                                backgroundColor: '#FFF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 2px 6px #AAA',
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '-28px',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    fontFamily:
                                        'Arial,Helvetica Neue,Helvetica,sans-serif',
                                    padding: '4px',
                                    borderRadius: '4px',
                                }}
                            >
                                {`${this.state.values[index]}€`}
                            </div>
                            <div
                                style={{
                                    height: '2px',
                                    width: '10px',
                                    backgroundColor: isDragged
                                        ? 'gray'
                                        : '#CCC',
                                }}
                            />
                        </div>
                    )}
                />
            </div>
        );
    }
}

export default PriceRangeSlider;

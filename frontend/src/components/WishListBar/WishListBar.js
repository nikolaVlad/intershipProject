import React from 'react';
import styled from 'styled-components';
import WishListStore from '../../stores/WishListStore';

function WishListBar() {
    return (
        <Wraper>
            <div>
                <div>Num of products : </div>

                <div style={{ color: 'orange' }}>
                    {WishListStore.WishListProducts.length}
                </div>
            </div>

            <div>
                <EmptyBtn onClick={() => WishListStore.removeWishListProduct()}>
                    Empty wish list
                </EmptyBtn>
            </div>
        </Wraper>
    );
}

const Wraper = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    background-color: #303030;
    opacity: 0.8;

    * {
        display: flex;
        padding: 20px 15px;

        opacity: 1;
    }
`;

const EmptyBtn = styled.button`
    background-color: transparent;
    color: white;
    border: 1px solid gray;
    border-radius: 7px;
    width: 200px;
    justify-content: center;

    &:hover {
        background-color: #7d7d7d;

        opacity: 0.9;
    }
`;

export default WishListBar;

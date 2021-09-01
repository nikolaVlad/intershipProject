import { observer } from 'mobx-react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { productsRoute } from '../../config/defaultRoutes';
import CartStore from '../../stores/CartStore';
import { primaryColor } from '../Common/GlobalStyles';
import ProductComponent from '../ProductComponent/ProductComponent';
import ShopingCartBar from '../ShopingCartBar/ShopingCartBar';
import Pagination from 'react-js-pagination';
import { useHistory } from 'react-router-dom';


const ShopingCart = observer(() => {
    let allCartProducts = CartStore.CartProductsList;

    const[offset, setOffset] = useState(0)
    const[activePage, setActivePage] = useState(1);
    const PERPAGE = 8;
    const history = useHistory();

    function handlePageChange(pageNumber)
    {
        setActivePage(pageNumber);
        setOffset((pageNumber - 1) * PERPAGE);
        scrollTo(0 , 0);
    }



    if (allCartProducts.length < 1) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img
                    width='500px'
                    src='https://www.99fashionbrands.com/wp-content/uploads/2020/12/empty_cart-1200x900.png'
                />
                <CatalogButton onClick = {() => history.replace(`/${productsRoute}`)}>
                    <span style = {{color : 'white' }}>
                        View the catalog products...
                    </span>
                </CatalogButton>
            </div>
        );
    }

    return (
        <div>
            <div style={{ color: `${primaryColor}`, marginBottom: '20px' }}>
                <Header>
                    <h3>My cart</h3>
                </Header>
            </div>
            <ShopingCartBar />

            <div style={{ marginTop: '-50px' }}>
                {allCartProducts.slice(offset , PERPAGE * activePage).map((product) => {
                    return (
                        <ProductComponent
                            key={product.id}
                            product={product}
                            onSingleCategoryClick={null}
                            cartVariant
                        />
                    );
                })}
            </div>

            <Pagination
                activePage={activePage}
                itemsCountPerPage={PERPAGE}
                totalItemsCount={allCartProducts.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                linkClass='LinkClassPagination'
                innerClass='pagination'
                hideDisabled
            />
        </div>
    );
});

let CatalogButton = styled.button`
    font-size: medium;
    background-color: darkcyan;
    border: none;
    padding: 20px;
    border-radius: 10px;
`;

const Header = styled.div`
    background-color: #383838;
    padding: 20px 0px;
    color: orange;
    text-align: center;
    margin: 20px 0px;
`;

export default ShopingCart;

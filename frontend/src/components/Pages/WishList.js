import { observer } from 'mobx-react';
import React, {useState} from 'react';
import styled from 'styled-components';
import WishListStore from '../../stores/WishListStore';
import ProductComponent from '../ProductComponent/ProductComponent';
import WishListBar from '../WishListBar/WishListBar';
import Pagination from 'react-js-pagination';


const WishList = observer(() => {
    let allWLProducts = WishListStore.WishListProducts;

    const[offset, setOffset] = useState(0)
    const[activePage, setActivePage] = useState(1);
    const PERPAGE = 8;


    function handlePageChange(pageNumber)
    {
        setActivePage(pageNumber);
        setOffset((pageNumber - 1) * PERPAGE);
        scrollTo(0 , 0);
    }

    

    if (allWLProducts.length < 1) {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'gray',
                }}
            >
                Your Wish List is empty!
            </div>
        );
    }

    return (
        <div>
            <div >
                <div>
                <Header>
                    <h3>My wish list </h3>
                </Header>
                </div>
                <WishListBar />

                <div style = {{ marginTop: '-50px' }} >
                    {allWLProducts?.slice(offset , PERPAGE * activePage).map((product) => {
                        return (
                            <ProductComponent
                                product={product}
                                key={product.id}
                                onSingleCategoryClick={null}
                            />
                        );
                    })}
                </div>

                <Pagination
                activePage={activePage}
                itemsCountPerPage={PERPAGE}
                totalItemsCount={allWLProducts.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                linkClass='LinkClassPagination'
                innerClass='pagination'
                hideDisabled
            />


            </div>
        </div>
    );
});

const Header = styled.div`
    background-color: #383838;
    padding: 20px 0px;
    color: orange;
    text-align: center;
    margin: 20px 0px;
`;

export default WishList;

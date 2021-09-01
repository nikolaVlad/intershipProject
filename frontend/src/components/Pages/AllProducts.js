import React, { useEffect, useState } from 'react';
import ProductComponent from '../ProductComponent/ProductComponent';
import FilterBar from '../FilterBar/FilterBar';
import LoadingComponent from '../Common/LoadingComponent/LoadingComponent';
import FilterCategoryStore from '../../stores/FilterCategoryStore';
import PriceFilterStore from '../../stores/PriceFilterStore';
import { observer } from 'mobx-react';
import PaginationStore from '../../stores/PaginationStore';
import ProductsStore from '../../stores/ProductsStore';
import applySearchFilter from '../../utils/applySearchFilter';
import SearchFilterStore from '../../stores/SearchFilterStore';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import { VscSearchStop } from 'react-icons/vsc';

const AllProducts = observer(() => {
    // All products
    const [products, setProducts] = useState('');

    // Function for show produuct with filters, orders and pagination
    function getProductList() {
        let filteredProducts = products;

        filteredProducts = applyGenreFilters(filteredProducts);

        filteredProducts = applyPriceFilters(filteredProducts);

        filteredProducts = applySearchFilter(
            filteredProducts,
            SearchFilterStore.keywords
        );

        PaginationStore.setPagePerCount(filteredProducts.length);

        return filteredProducts.slice(
            PaginationStore.offset,
            PaginationStore.perPage * PaginationStore.activePage
        );
    }

    function onSingleCategoryClick(categoryName) {
        FilterCategoryStore.setFilterCategoryItem(categoryName, true);
        window.scrollTo(0, 0);
        PaginationStore.SetFirstPage();
    }

    // Function for convert product price from string to number
    function getProductPrice(product) {
        if (!product.price.startsWith('Free')) {
            return parseFloat(
                product.price
                    .slice(0, product.price.indexOf('$'))
                    .replace(',', '.')
            );
        }
        return 0;
    }

    // Function for check product genre and filter genre from categoryFilterList
    function checkFilterGenre(genreList, filterGenreList) {
        for (let genre of genreList) {
            for (let filter of filterGenreList) {
                if (genre === filter) {
                    return true;
                }
            }
        }

        return false;
    }

    // Function for applying genre filters on products
    function applyGenreFilters(products) {
        let filteredProductsByGenre = products;
        if (FilterCategoryStore.filterCategory.length > 0) {
            filteredProductsByGenre = filteredProductsByGenre.filter(
                (product) => {
                    if (
                        checkFilterGenre(
                            product.genre,
                            FilterCategoryStore.filterCategory
                        )
                    ) {
                        return product;
                    }
                }
            );
        }
        return filteredProductsByGenre;
    }

    // Function for applying price filters on products
    function applyPriceFilters(products) {
        let filteredProductByPrice = products;

        filteredProductByPrice = filteredProductByPrice.filter((product) => {
            if (
                getProductPrice(product) >= PriceFilterStore.priceFilters.min &&
                getProductPrice(product) <= PriceFilterStore.priceFilters.max
            ) {
                return product;
            }
        });

        return filteredProductByPrice;
    }

    // Function for handling page change
    function handlePageChange(pageNumber) {
        PaginationStore.setActivePage(pageNumber);
        PaginationStore.setOffset((pageNumber - 1) * PaginationStore.perPage);
        scrollTo(0, 0);
    }

    useEffect(async () => {
        let data = [...(await ProductsStore.getAllProduct())];
        setProducts(data);
    }, []);


    return (
        <div>
            {!products ? (
                <LoadingComponent />
            ) : (
                <>
                    <FilterBar products={products} />
                    {getProductList().map((product) => {
                        return (
                            <ProductComponent
                                product={product}
                                key={product.id}
                                onSingleCategoryClick={onSingleCategoryClick}
                            />
                        );
                    })}

                    {(!(getProductList().length === 0) && (
                        <Pagination
                            activePage={PaginationStore.activePage}
                            itemsCountPerPage={PaginationStore.perPage}
                            totalItemsCount={PaginationStore.pagePerCount}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                            linkClass='LinkClassPagination'
                            innerClass='pagination'
                            hideDisabled
                        />
                    )) || (
                        <NoResultDiv>
                            <div>
                                <VscSearchStop />
                            </div>
                            No results found.
                        </NoResultDiv>
                    )}
                </>
            )}
        </div>
    );
});

const NoResultDiv = styled.div`
    color: gray;
    font-size: 35px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 55vh;
    align-items: center;
`;

export default AllProducts;

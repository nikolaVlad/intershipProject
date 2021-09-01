import React, { useEffect, useState } from 'react';
import { primaryColor } from '../Common/GlobalStyles';
import { FilterButton } from '../FilterBar/FilterBarElements';
import PropTypes from 'prop-types';
import FilterCategoryStore from '../../stores/FilterCategoryStore';
import PaginationStore from '../../stores/PaginationStore';

const FiltersGroup = ({ products }) => {
    // List of all categories
    const [categoryList, setCategoryList] = useState([]);

    // Function fot get all categories for all products
    function getAllCategories() {
        if (localStorage.getItem('productCategories')) {
            setCategoryList(
                localStorage.getItem('productCategories').split(',').sort()
            );
            return;
        }

        let categories = [];

        let data = products;

        for (let el of data) {
            categories = categories.concat(el.genre);
        }

        categories = [...new Set(categories)];

        localStorage.setItem('productCategories', categories);

        getAllCategories();
    }

    useEffect(() => {
        getAllCategories();
    }, []);

    // Function when user click on button for category filter
    function onClickCategoryHandler(categoryName) {
        PaginationStore.SetFirstPage();
        FilterCategoryStore.setFilterCategoryItem(categoryName);
    }

    // Function for check category on onClick - for button filter style
    function isSelected(categoryName) {
        return FilterCategoryStore.filterCategory.indexOf(categoryName) > -1;
    }

    return (
        <>
            {categoryList.map((el, index) => {
                return (
                    <FilterButton
                        to='#'
                        bg={(isSelected(el) && primaryColor) || 'transparent'}
                        hoverbg={primaryColor}
                        key={index}
                        onClick={() => onClickCategoryHandler(el)}
                    >
                        {el}
                    </FilterButton>
                );
            }) || 'Loading categories. . .'}
        </>
    );
};

FiltersGroup.propTypes = {
    products: PropTypes.array,
};

export default FiltersGroup;

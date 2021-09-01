import React, { useEffect, useState } from 'react'
import { FilterMenu, LeftSide, RightSide, Wrapper } from './FilterBarElements'
import PriceRangeSlider from '../PriceRangeSlider/PriceRangeSlider';
import FiltersGroup from '../FiltersGroup/FiltersGroup';
import PropTypes from 'prop-types';
import PriceFilterStore from '../../stores/PriceFilterStore';
import PaginationStore from '../../stores/PaginationStore';

const FilterBar = ({products}) => 
{

    const[maxPrice , setMaxPrice] = useState(0);


    useEffect(() =>
    {
        getMaxPrice();

        if(PriceFilterStore.priceFilters.max <= 0)
        {
            PriceFilterStore.setMaxPriceFilter(localStorage.getItem('maxPrice'));
        }

      
    }, [])

    function getMaxPrice()
    {
        if(localStorage.getItem('maxPrice'))
        {
            return setMaxPrice(localStorage.getItem('maxPrice'));
        }

       
        let prices = [];
      
        let data = products;

        for(let el of data)
        {
            prices = prices.concat(el.price);
        }

        prices = [...new Set(prices)];

        prices = prices.filter( price => !price.startsWith('Free')); 

        prices = prices.map((price) =>
        {
            return parseFloat(price.slice(0 , price.indexOf('$')).replace(',', '.'));
        })

        localStorage.setItem('maxPrice' , Math.ceil(Math.max(...prices)));

        return getMaxPrice();
       
    }

    // Function for set min and max price values on store
    function onUpradeValuesHandler(values)
    {
        PriceFilterStore.setMinPriceFilter(values[0]);
        PriceFilterStore.setMaxPriceFilter(values[1]);

        // Set the first page.
        PaginationStore.SetFirstPage();
    }



    return (
        <Wrapper>
            <LeftSide>
                <FilterMenu>
                    <FiltersGroup products={products} />
                </FilterMenu>
            </LeftSide>

            <RightSide>
                {maxPrice > 0 && (
                    <PriceRangeSlider
                        name={'myRanger'}
                        MIN={0}
                        range={[PriceFilterStore.priceFilters.min , (PriceFilterStore.priceFilters.max === 0 ? maxPrice : PriceFilterStore.priceFilters.max) ]}
                        MAX={maxPrice}
                        onUpdateValues={onUpradeValuesHandler}
                    />
                )}
            </RightSide>
        </Wrapper>
    );
}


FilterBar.propTypes = {
    products : PropTypes.array,
    onUpdatePriceRangerValues : PropTypes.func,
    onChangeCategoryList : PropTypes.func
}


export default FilterBar

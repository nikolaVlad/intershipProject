import React from 'react';
import { IconPlace, SearchInput, Wrapper } from './SearchBarElements';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';
import SearchFilterStore from '../../../stores/SearchFilterStore';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import PaginationStore from '../../../stores/PaginationStore';

const SearchBar = observer(({ style, iconColor, textColor, bgIconColor }) => {
  
    let history = useHistory();

    function onSearchHandler() {
        history.replace('/products');
        PaginationStore.SetFirstPage();
    }

    return (
        <Wrapper style={style}>
            <SearchInput
                value = {SearchFilterStore.keywords}
                color={textColor}
                placeholder='Search...'
                type='search'
                onKeyUp={(e) => {
                    e.key === 'Enter' && onSearchHandler();
                }}
                onChange={(e) =>
                    {
                        SearchFilterStore.setKeywords(e.target.value);
                        PaginationStore.SetFirstPage();
                    }}
            />
            <IconPlace bgColor={bgIconColor} color={iconColor}>
                <BiSearchAlt2 />
            </IconPlace>
        </Wrapper>
    );
});

SearchBar.propTypes = {
    style: PropTypes.object,
    iconColor: PropTypes.string,
    textColor: PropTypes.string,
    bgIconColor: PropTypes.string,
};

export default SearchBar;

import FilterStore from '../stores/FilterCategoryStore';
import PaginationStore from '../stores/PaginationStore';
import PriceFilterStore from '../stores/PriceFilterStore';
import SearchFilterStore from '../stores/SearchFilterStore';

const restoreProductFilters = () => {
    SearchFilterStore.setKeywords('');
    PaginationStore.SetFirstPage();
    PriceFilterStore.setMaxPriceFilter(localStorage.getItem('maxPrice'));
    PriceFilterStore.setMinPriceFilter(0);
    FilterStore.resetFilterCategory();
};

export default restoreProductFilters;

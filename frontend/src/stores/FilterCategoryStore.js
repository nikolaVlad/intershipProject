import { action, makeObservable, observable } from 'mobx';

class Filters {
    @observable filterCategory = [];

    constructor() {
        makeObservable(this);
    }

    @action setFilterCategoryItem(categoryName, isSingleCategory) {
        if (isSingleCategory) {
            this.filterCategory = [categoryName];
            return;
        }

        if (this.filterCategory.indexOf(categoryName) > -1) {
            this.filterCategory = this.filterCategory.filter((el) => {
                return el != categoryName;
            });
            return;
        }
        this.filterCategory = [...this.filterCategory, categoryName];
    }

    @action resetFilterCategory() {
        this.filterCategory = [];
    }
}

let FilterStore = new Filters();

export default FilterStore;

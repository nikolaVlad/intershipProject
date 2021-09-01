import { action, makeObservable, observable } from 'mobx';

class SearchFilter 
{
    @observable keywords = '';

    constructor() {
        makeObservable(this);
    }

    @action setKeywords(keywords) 
    {
        this.keywords = keywords;
    }

    
}

let SearchFilterStore = new SearchFilter();
export default SearchFilterStore;
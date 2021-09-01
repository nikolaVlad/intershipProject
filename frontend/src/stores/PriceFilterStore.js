import { action, makeObservable, observable } from "mobx";

class PriceFilters 
{
    @observable priceFilters = {
        min : 0,
        max : 0
    }

    constructor()
    {
        makeObservable(this);
    }


    @action setMinPriceFilter(value)
    {
        this.priceFilters.min = value;
    }

    @action setMaxPriceFilter(value)
    {
        this.priceFilters.max = value;
    }


   
}

let PriceFilterStore = new PriceFilters();

export default PriceFilterStore;
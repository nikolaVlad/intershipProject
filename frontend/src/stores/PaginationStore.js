import { action, makeObservable, observable } from "mobx";

class Pagination
{
    constructor()
    {
        makeObservable(this);
    }

    @observable offset = 0;
    @observable perPage = 8;
    @observable pagePerCount = 0;
    @observable activePage = 1;


    @action setOffset(value)
    {
        this.offset = value;    
    }


    @action setPagePerCount(value)
    {
        this.pagePerCount = value;
    }

    @action setActivePage(value)
    {
        this.activePage = value;
    }

    @action SetFirstPage()
    {
        this.setOffset(0);
        this.setActivePage(1);
    }
  
}

let PaginationStore = new Pagination();
export default PaginationStore;
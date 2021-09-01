import { action, makeObservable, observable } from "mobx";

class Auth 
{

    @observable isLogged = false;

    constructor() {
        makeObservable(this);
    }

    @action setIsLogged(value)
    {
        this.isLogged = value;
    }

}

export default new Auth();

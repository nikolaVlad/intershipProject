import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import  onLogout  from '../../utils/events/onLogout';


const LogOut = () => {

    const history = useHistory();

    useEffect(() =>
    {
        onLogout();
        return history.replace('/log-in');
    }, []);


    return null;
}

export default LogOut

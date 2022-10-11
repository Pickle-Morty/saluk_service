import {useNavigate} from 'react-router-dom';


export const useHome = () => {

    let navigate = useNavigate();
    const home = navigate('/');
    
    return home;
};

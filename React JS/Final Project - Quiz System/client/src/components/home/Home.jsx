import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { isStudent, isTeacher } from '../../common/constants';

import HomePublic from './HomePublic';
import HomeStudent from './HomeStudent';
import HomeTeacher from './HomeTeacher';

function Home() {
    const { isAuthenticated, role } = useContext(AuthContext);

    if (!isAuthenticated || !role) {
        return <HomePublic />;
    } else {
        if (isStudent(role)) {
            return <HomeStudent />;
        } 
        
        if (isTeacher(role)) {
            return <HomeTeacher />;
        }
    }
}

export default Home;
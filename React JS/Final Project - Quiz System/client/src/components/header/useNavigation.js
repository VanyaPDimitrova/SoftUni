import { useContext } from 'react';

import { isStudent, isTeacher } from '../../common/constants';
import { AuthContext } from '../../context/AuthContext';

function useNavigation() {
    const { isAuthenticated, role } = useContext(AuthContext);
    const nav = {
        public: [
            {name: 'Home' , href: '/'},
            {name: 'Contacts' , href: '/contacts'},
        ],
        student: [
            {name: 'Home' , href: '/'},
            {name: 'Categories' , href: '/categories'},
            {name: 'Solve quiz' , href: '/quiz/solve'},
            {name: 'Leaderboard' , href: '/leaderboard'},
            {name: 'History' , href: '/history'},
        ],
        teacher: [
            {name: 'Home' , href: '/'},
            {name: 'Categories' , href: '/categories'},
            {name: 'Create a quiz' , href: '/quizzes/create'},
            {name: 'View Quiz' , href: '/quizzes/view'},
        ]
    };

    if (!isAuthenticated || !role) {
        return nav.public;
    } else {
        if (isStudent(role)) {
            return nav.student;
        } 
        
        if (isTeacher(role)) {
            return nav.teacher;
        }
    }
}

export default useNavigation;

import { isStudent, isTeacher } from '../../common/constants';

function useNavigation(user) {
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

    if (!user) {
        return nav.public;
    } else {
        if (isStudent(user)) {
            return nav.student;
        } 
        
        if (isTeacher(statusbar)) {
            return nav.teacher;
        }
    }
}

export default useNavigation;

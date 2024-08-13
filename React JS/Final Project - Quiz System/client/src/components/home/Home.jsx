import HomePublic from './HomePublic';
import HomeStudent from './HomeStudent';
import HomeTeacher from './HomeTeacher';

function Home({ user }) {
    if (!user) {
        return <HomePublic />;
    } else {
        if (isStudent(user)) {
            return <HomeStudent />;
        } 
        
        if (isTeacher(statusbar)) {
            return <HomeTeacher />;
        }
    }
}

export default Home;
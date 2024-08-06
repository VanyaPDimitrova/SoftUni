import OurTeam from './OurTeam';
import { Link, Route, Routes } from 'react-router-dom';
import Mission from './Mission';
import Contacts from './Contacts';

const navigation = [
    { name: 'Our Team', href: 'team' },
    { name: 'Contact Us', href: 'contacts' },
    { name: 'Our Mission', href: 'mission' },
];

/* In App.jsx path needed to be with /* et the end
    <Route path='/about/*' element={<About />} />
*/

function About() {
    return (
        <>
            <nav className="pt-20 flex items-center justify-between p-6 lg:px-8">
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link 
                            key={item.name}
                            to={item.href} 
                            className='text-sm font-semibold leading-6 text-gray-900'
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>

            <Routes>
                <Route path='/mission' element={<Mission /> } />
                <Route path='/contacts' element={<Contacts /> } />
                <Route path='/team' element={<OurTeam /> } />
            </Routes>
        </>
    );
}

export default About;

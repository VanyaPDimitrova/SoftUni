import { Link, Outlet } from 'react-router-dom';

const navigation = [
    { name: 'Our Team', href: 'team' },
    { name: 'Contact Us', href: 'contacts' },
    { name: 'Our Mission', href: 'mission' },
];

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

            <Outlet />
        </>
    );
}

export default About;

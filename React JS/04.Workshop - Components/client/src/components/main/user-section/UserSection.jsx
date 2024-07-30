import { useEffect, useState } from 'react';
import TablePagination from './TablePagination';
import TableSearchBar from './TableSearchBar';
import TableWrapper from './table/TableWrapper';

const baseUrl = 'http://localhost:3030/jsonstore';

function UserSection() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/users`)
        .then(res => res.json())
        .then(data => setUsers(Object.values(data)))
        .catch(err => console.log(err));
    }, []);

    // useEffect(() => {
    //     (async function getUsers() {
    //         try {
    //             const response = await fetch(`${baseUrl}/users`);
    //             const result = await response.json();
    //             const data = Object.values(result);
    
    //             setUsers(data);
    //         } catch(err) {
    //             console.log(err);
    //         }
    //     })();
    // }, []);


    return (
        <>
            <section className="card users-container">

                <TableSearchBar />

                <TableWrapper users={users} />

                {/* <!-- New user button  --> */}
                <button className="btn-add btn">Add new user</button>

                <TablePagination />
            </section>
        </>
    );
}

export default UserSection;

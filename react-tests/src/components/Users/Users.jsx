import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	const loadUsers = async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		setUsers(response.data);
	};

	useEffect(() => {
		loadUsers().finally(() => setLoading(false));
	}, []);

	const createUserList = () => {
		return (
			<ul className='userlist'>
				{users.map(user => (
					<li key={user.id}>
						<Link to={`/users/${user.id}`} data-testid='user-item'>
							{user.name}
						</Link>
					</li>
				))}
			</ul>
		);
	};

	return <>{loading ? <span> Загрузка...</span> : createUserList()}</>;
};

export default Users;

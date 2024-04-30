import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserForTest from './UserForTest';

const UsersForTest = () => {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	const loadUsers = async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		setTimeout(() => {
			setUsers(response.data);
		}, 1000);
	};

	useEffect(() => {
		loadUsers().finally(() => setLoading(false));
	}, []);

	const onDelete = id => setUsers(users.filter(user => user.id !== id));

	const createUserList = () => {
		return (
			<section className='content'>
				<ul className='userlist' id='users-list'>
					{users.map(user => (
						<li key={user.id}>
							<UserForTest user={user} onDelete={() => onDelete(user.id)} />
						</li>
					))}
				</ul>
			</section>
		);
	};

	return <>{loading ? <span id='users-loading'> Загрузка...</span> : createUserList()}</>;
};

export default UsersForTest;

import React from 'react';

function UserForTest({ user, onDelete }) {
	return (
		<div>
			{user.name}
			<button type='button' onClick={onDelete} id='user-delete'>
				Delete
			</button>
		</div>
	);
}

export default UserForTest;

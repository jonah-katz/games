function getCurrentUser() {
	return fetch("/users/get_current_user",{
		credentials: 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	})
	.then(checkStatus)
	.then(parseJSON)
}

function signup(signup_params, cb) {
	return fetch("/users", {
		credentials: 'include',
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(signup_params)
	})
	.then(checkStatus)
	.then(parseJSON)
	.then(cb);
}

function login(login_params, cb) {
	return fetch("/users/sign_in", {
		credentials: 'include',
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(login_params)
	})
	.then(checkStatus)
	.then(parseJSON)
	.then(cb);
}

function otherUsers(cb) {
	return fetch("/api/users", {
		credentials: 'include'
	})
	.then(checkStatus)
	.then(parseJSON)
	.then(cb);
}

function challenge(challenged_id) {
	return fetch("/api/challenge", {
		credentials: 'include',
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(challenged_id)
	})
}

function games(cb) {
	return fetch("/api/games", {
		credentials: 'include',
	})
	.then(checkStatus)
	.then(parseJSON)
	.then(cb);
}

function loadGame(game_id, cb) {
	return fetch("/api/game/" + game_id, {
		credentials: 'include'
	})
	.then(checkStatus)
	.then(parseJSON)
	.then(cb);
}

function updateBoard(game_id, piece, location) {
	return fetch("/api/move", {
		credentials: 'include',
		method: "PUT",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({game_id, piece, location})
	})
}

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}
	const error = new Error(`HTTP Error ${response.statusText}`);
	error.status = response.statusText;
	error.response = response;
	console.log(error);
	throw error;
}

function parseJSON(response) {
	return response.json();
}

const Client = { login, otherUsers, challenge, games, loadGame, updateBoard, signup, getCurrentUser };
export default Client;
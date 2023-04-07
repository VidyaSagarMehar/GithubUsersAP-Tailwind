const getuser = () => {
	let input = document.getElementById('search').value;
	let name = document.getElementById('name');
	let bio = document.getElementById('bio');
	let email = document.getElementById('email');
	let blog = document.getElementById('blog');

	// request to get user profile
	fetch(`https://api.github.com/users/${input}`)
		.then((res) => res.json())
		.then((data) => {
			name.innerHTML = data.name;
			bio.innerHTML = data.bio;
			email.innerHTML = data.email;
			blog.innerHTML = data.blog;
			document.getElementById('img').src = data.avatar_url;
		})
		.catch((err) => console.log(err));

	// request to get  Repositories
	fetch(`https://api.github.com/users/${input}/repos`)
		.then((res) => res.json())
		.then((data) => {
			Array.from(data).forEach((repo) => {
				const para = document.createElement('p');
				para.innerHTML = repo.name;
				document.getElementById('repoList').appendChild(para);
			});
		})
		.catch((err) => console.log(err));
};

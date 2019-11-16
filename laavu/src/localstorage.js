const localSto = {
	saveState: (id, state) => {
		localStorage.setItem(id, JSON.stringify(state));
		console.log('saved', JSON.stringify(state))
	},
	loadState: (id) => {
		const raw = localStorage.getItem(id);
		console.log('loaded', raw);
		if (!raw) return null; // don't set state, defaults will kick in
		return JSON.parse(raw)
	}
};

export default localSto;
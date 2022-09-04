import { error } from '@sveltejs/kit';

const size = 10
const url = `https://api.landings.bee-seller.com/products_api/products?page=1&pageSize=${size}&country=UY`

export const load = async ({ locals }) => {
	// locals.userid comes from src/hooks.js
	const response = await fetch(url);
	if (response.status > 299) {
		// user hasn't created a todo list.
		// start with an empty array
		return {
			productos: []
		};
	}

	let data = []
	if (response.status === 200) {
		data = await response.json()
		// console.log(data)
		
		return {
			products: data.products.filter( el => (
				Array.isArray(el.images)
			))
		};
	}

	throw error(response.status);
};



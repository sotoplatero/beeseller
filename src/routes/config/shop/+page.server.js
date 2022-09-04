import { error } from '@sveltejs/kit';
import { api } from './api';

const size = 25
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

		return {
			products: data.products.filter( el => (
				Array.isArray(el.images) && !!el.images[0]
			))
		};
	}

	throw error(response.status);
};



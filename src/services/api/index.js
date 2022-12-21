const API = process.env.NEXT_PUBLIC_API_URL;

const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
	auth: {
		login: `${API}/${VERSION}/auth/login`,
		profile: `${API}/${VERSION}/auth/profile`,
	},
	products: {
<<<<<<< HEAD
		allproducts: `${API}/${VERSION}/products/`,
=======
		allProducts: `${API}/${VERSION}/products`,
>>>>>>> 733350906c88aea82acda082481e04f78e51c4ad
		getProduct: (id) => `${API}/${VERSION}/products/${id}`,
		getProducts: (limit, offset) => `${API}/${VERSION}/products?limit=${limit}&offset=${offset}`,
		updateProducts: (id) => `${API}/${VERSION}/products/${id}/`,
		deleteProducts: (id) => `${API}/${VERSION}/products/${id}/`,
	},
	categories: {
		getCategoriesList: `${API}/${VERSION}/categories/`,
		addCategory: `${API}/${VERSION}/categories/`,
		getCategoryItems: (id) => `${API}/${VERSION}/categories/${id}/products/`,
		updateCategory: (id) => `${API}/${VERSION}/categories/${id}/`,
	},
	files: {
		addImage: `${API}/${VERSION}/files/upload/`,
	},
};

export default endPoints;

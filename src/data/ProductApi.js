import _ from 'lodash';
import axios from 'axios'

let currentID = new Date().getTime();
const _clone = function (item) {
	return JSON.parse(JSON.stringify(item));
};

export default class ProductApi {
	static getAllProducts(cb) {
		axios.get('http://localhost:3000/products')
			.then(response => cb(response.data))
			.catch(error => { throw error })
	}

	static saveProduct(product, cb) {
		currentID = currentID + 1
		product.id = currentID;
		axios.post('http://localhost:3000/products', product)
			.then(response => cb(response.data))
			.catch(error => { throw error })
		return _clone(product);
	}

	static deleteProduct(id, cb) {
		axios.delete(`http://localhost:3000/products/${id}`)
			.then(response => cb(response.data))
			.catch(error => { throw error })
	}

	static getProductById(id, cb) {
		axios.get(`http://localhost:3000/products/${id}`)
			.then(response => cb(response.data))
			.catch(error => { throw error })
	}
	static updateProduct(product) {
		axios.put(`http://localhost:3000/products/${product.id}`, product)
	}

	static updateProductViews(product) {
		axios.put(`http://localhost:3000/products/${product.id}`, product)
	}

	static deleteProducts(idArray, cb) {
		idArray.forEach(id => this.deleteProduct(id, () => { }))
	}
}

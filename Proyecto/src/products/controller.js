const CreateError = require('http-errors');
const debug = require('debug')('app:module-products-controller');
const { ProductsService } = require('./services');
const { Response } = require('../common/response');

module.exports.ProductsController = {
    getProducts: async(req, res) => {
        try {
            let products = await ProductsService.getAll();
            Response.success(res, 200, 'Lista de productos', products)
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    getProduct: async(req, res) => {
        try {
            const { params: { id } } = req;
            let product = await ProductsService.getById(id);
            if (!product) {
                Response.error(res, new CreateError.NotFound());
            } else {
                Response.success(res, 200, `Producto ${id}`, product)
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    createProduct: async(req, res) => {
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new CreateError.BadRequest());
            } else {
                const insertedId = await ProductsService.create(body);
                Response.success(res, 201, 'Producto agrgador', insertedId);
            }

        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
};
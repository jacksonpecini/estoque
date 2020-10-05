const ProductController = require('./controller/ProductController');

module.exports = (app) => {

    // Products
    app.get('/api/product', ProductController.get)
    app.post('/api/product', ProductController.insert)
    app.put('/api/product', ProductController.update)
    app.delete('/api/product', ProductController.delete)
}
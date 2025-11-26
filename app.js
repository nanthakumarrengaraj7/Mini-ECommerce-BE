const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors')
const products = require('./routes/product');
const orders = require('./routes/order');
const connectDatabase = require('./config/connectDatabase');
dotenv.config({ path: path.join(__dirname, 'config', '.env') });

const app = express();

app.use(express.json())
app.use(cors());

app.use('/api/products', products);
app.use('/api/orders', orders);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist', 'frontend', 'browser')));
    app.get(/.*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'frontend', 'dist', 'frontend', 'browser', 'index.html'))
    });
}

connectDatabase();                                                                                  


app.listen(process.env.PORT, () => {
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})
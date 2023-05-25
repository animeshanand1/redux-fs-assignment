const express = require('express');
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv');
const User = require('./models/userSchema');
const { signup, login } = require('./controllers/SignupController');
const { uploadProduct, getProducts } = require('./controllers/productController');
const Product = require('./models/productSchema');
const {  data } = require('./DATA');
const Bambora = require('bambora-node');

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config()
const PORT=process.env.PORT || 5000





const bambora = new Bambora({
  merchantId:process.env.merchantId,
  apiKey: process.env.api_key,
  
});


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database!');
    
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


  // Define routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/signup',signup)
app.post('/login',login)
app.post('/newproduct',uploadProduct)
app.get('/allproducts',getProducts)
app.post('/payments', async (req, res) => {
  // Retrieve payment details from the request
  const { amount, cardNumber, expiryMonth, expiryYear, cvv } = req.body;

  // Process payment using Bambora client
  try {
    const result = await bamboraClient.processPayment({
      amount,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
    });

    // Handle success response
    res.json(result);
    console.log(result);
  } catch (error) {
    // Handle error response
    res.status(500).json({ error: 'Payment processing failed' });
  }
});


// Start the server
app.listen(PORT, () => {
  
  // Product.insertMany(data)
  console.log(`Server is running on port ${PORT}`);
});

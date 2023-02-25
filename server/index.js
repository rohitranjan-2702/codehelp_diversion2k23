const express=require('express');
const cors=require('cors');
const errorMiddleware = require("./middleware/errorMiddleware");
const connection = require("./database/db");
require("dotenv").config();
const teacherRoute=require("./routes/teacherRoute");
const userRoute = require("./routes/userRoutes");
// FOR PAYMENT GATWAY

const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')
const bodyParser = require('body-parser')






const port=3001;

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


app.get("/", (req, res) => {
    res.send("hello!!!!");
});

app.use("/teacher", teacherRoute);
app.use("/user", userRoute);

app.use(errorMiddleware);


//Payment gatway start
app.use(cors())
app.use(bodyParser.json())

const razorpay = new Razorpay({
	key_id: 'rzp_test_35zy3Hqp4Jtv6M',
	key_secret: '0LDDihu5S8UgdBS4o6KvL4Fj'
})

app.get('/', (req, res) => {
	res.send('hello')
})

app.post('/verification', (req, res) => {
	// do a validation
	const secret = '12345678'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})

app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount = 499
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})




connection();

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
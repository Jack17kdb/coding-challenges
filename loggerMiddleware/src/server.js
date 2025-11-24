import express from 'express';
import loggerMiddleware from './middleware/loggerMiddleware.js';

const app = express();
const PORT = 5000;
app.use(express.json());

app.use(loggerMiddleware);

app.get("/", (req, res) => {
	res.status(200).json({message: "Welcome to my express server!"})
});

app.listen(PORT, () => {
	console.log("Server listening on port: ", PORT)
});

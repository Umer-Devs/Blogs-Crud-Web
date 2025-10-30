import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb } from './database/index.js';
import { router } from './routes/user.routes.js';

dotenv.config({ path: './.env' });

const app = express();

app.use(cors());
app.use(express.json());


app.use('/', router);


// app.get('/', (req, res) => {
//   res.send('Hello, my backend is running after a long time!');
// });


connectDb();


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});

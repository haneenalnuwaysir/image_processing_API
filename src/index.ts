import express from 'express';
import route from './routers/indexRoute';

const app = express();
const port = 3000;

app.use('/api', route);

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
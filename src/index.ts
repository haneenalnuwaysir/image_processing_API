import express from 'express';
import route from './routers/indexRoute';
import path from 'path';
import modifiedImage from './sharp';

const app = express();
const port = 3000;

app.use('/api', route);
app.use('./images/full', express.static(path.join(__dirname, 'full')));
app.use('./images/thumbnail', express.static(path.join(__dirname, 'thumbnail')));


app.get('/resize', async (req, res) => {
  const  url = './images/full/palmtunnel.jpg';
  let width = parseInt(req.query.width as string) as number; 
  let height = parseInt(req.query.height as string) as number;
  
  try {
    const buffer = await modifiedImage(url, width, height);
    res.set('Content-Type', 'image/jpeg');
    res.send(buffer);
  } 
  catch (error) {
    console.error(error);
    res.status(200).send('Internal server error');
  }
});

// start the express server
app.listen(port, () => {
  console.log(`server started at localhost:${port}/`);
  // console.log(`server started at localhost:${port}/resize?images/palmtunnel&width=500&height=500`);
});

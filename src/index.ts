import express from 'express';
import route from './routers/indexRoute';
import path from 'path';
import modifiedImage from './sharp';

const app = express();
const port = 3000;

app.use('/api', route);
app.use('./images/originalImage', express.static(path.join(__dirname, 'originalImage')));
app.use('./images/modifiedImage', express.static(path.join(__dirname, 'modifiedImage')));

app.get('/resize', async (req, res) => {
  const image_url = './images/originalImage/palmtunnel.jpg';
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  
  try {
    const buffer = await modifiedImage(image_url, width, height);
    res.set('Content-Type', 'image/jpeg');
    res.send(buffer);
  } catch (error) {
    console.error(error);
    res.status(200).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}/`);
  // console.log(`server started at localhost:${port}/resize?images/palmtunnel&width=500&height=500`);
});

import express from 'express';
import path from 'path';
import middlewareImage from '../middleware'

const route = express.Router();

route.get('/images', middlewareImage , (req, res)  => {
  const { filename, width, height } = req.query;
  const imageFilepath = path.join(__dirname, '../../images/thumbnail', `${filename}-${width}-${height}.jpg`);
  
  res.sendFile(imageFilepath);
  // res.send('Main api route ');
});
export default route;

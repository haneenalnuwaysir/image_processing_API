import express from 'express';
import path from 'path';
import modifiedImage from './sharp';
import fs from 'fs';

const fileExists = (file: string) => {
  try{
    fs.accessSync(file, fs.constants.F_OK)
    return true;
  } catch(err) {
    return false;
  }
};

type Query = {
  filename: string
  width: string
  height: string
}

interface Request {
  query: Query
}

const middlewareImage = async (req: Request, res: express.Response, next: express.NextFunction) => {
  const { filename } = req.query;
  const width = parseInt(req.query.width,  10);
  const height = parseInt(req.query.height, 10);

  const pathOfFull = path.join(__dirname, '../images/full', `${filename}.jpg`);
  const pathOfThumbnail = path.join(__dirname, '../images/thumbnail', `${filename}-${width}-${height}.jpg`);

  
  const fullImageExists = fileExists(pathOfFull);
  const thumbnailImageExists = fileExists(pathOfThumbnail);

  if (fullImageExists === false) {
    res.statusCode = 400;
    return res.end(console.log(`Image "${filename}" does not exist`));
  }

  if (thumbnailImageExists === true) {
    next();
  } else {
    await modifiedImage(filename, width, height);
    next();
  }
}

export default middlewareImage;
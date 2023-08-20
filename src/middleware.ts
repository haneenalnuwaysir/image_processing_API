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

const middlewareImage = async (req: Request, res: express.Response, next: express.NextFunction ) => {
  const { filename } = req.query;
  const width = parseInt(req.query.width ,10);
  const height = parseInt(req.query.height , 10);

  const pathOfFull = path.join(__dirname, '../images/full', `${filename}.jpg`);
  const pathOfThumbnail = path.join(__dirname, '../images/thumbnail', `${filename}-${width}-${height}.jpg`);

  
  const fullImageExists = fileExists(pathOfFull);
  const thumbnailImageExists = fileExists(pathOfThumbnail);

  if ( !fullImageExists || !width || !height) {
    return res.status(400).json({error: 'Missing required parameters'});
    // let errorMessage = `Image with file name: ${filename} does not exist. `;
    // if (!width || !height) {
      //  errorMessage += `Invalid input parameters : width: ${width} , height: ${height}`;
    
    // }
    // res.statusCode = 400;
    // return res.end(errorMessage);
  }  

  if (thumbnailImageExists === true) {
    console.log(`Your Previous modification of the image from file thumbnail ${pathOfThumbnail}`);
    next();
    } else {
      await modifiedImage(filename, width, height , "jpg");
      console.log(`Your new thumbnail image at ${pathOfThumbnail}`);
      next();
    }

  
}

export default middlewareImage;
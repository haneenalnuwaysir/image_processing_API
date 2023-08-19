import sharp from 'sharp';
import path from 'path';


const modifiedImage = async ( filename: string, width: number,height: number ) => {
  const pathOfFull = path.join(__dirname, '../images/full', `${filename}.jpg`);
  const pathOfThumbnail = path.join(__dirname, '../images/thumbnail', `${filename}-${width}-${height}.jpg`);

  await sharp(pathOfFull)
     .resize(width, height)
     .toFile(pathOfThumbnail);

}
export default modifiedImage;

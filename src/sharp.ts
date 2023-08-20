import sharp from 'sharp';
import path from 'path';


const modifiedImage = async ( filename: string, width: number,height: number  ,ext: string): Promise<boolean> => {
    try  {
    const pathOfFull = path.join(__dirname, '../images/full', `${filename}.jpg`);
    const pathOfThumbnail = path.join(__dirname, '../images/thumbnail', `${filename}-${width}-${height}.jpg`);

    await sharp(pathOfFull)
      .resize(width, height)
      .toFile(pathOfThumbnail);
      return true;
    } catch(error)
    {
        return false;
    }

}
export default modifiedImage;

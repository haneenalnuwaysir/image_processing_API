import sharp from 'sharp';

const modifiedImage = async (
  image_url: string,
  width: number,
  height: number
): Promise<Buffer> => {
  const buffer = await sharp(image_url).resize(width, height).toBuffer();
  await sharp(buffer).toFile('./images/modifiedImage/palmtunnel_modified.jpg');
  return buffer;
};
export default modifiedImage;
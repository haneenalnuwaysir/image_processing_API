import sharp from 'sharp';

const modifiedImage = async (
  url: string,
  width: number,
  height: number
): Promise<Buffer> => {
  const buffer = await sharp(url).resize(width, height).toBuffer();
  await sharp(buffer).toFile('./images/thumbnail/palmtunnel_modified.jpg');
  return buffer;
};
export default modifiedImage;

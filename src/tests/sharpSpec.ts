import fs from 'fs';
import path from 'path' ;
import modifiedImage from '../sharp';
 


describe('Test the image sharp function', () => {
    const filename = 'palmtunnel';
    const width = 200;
    const height = 200;
    const fullImage = path.join(__dirname, '../../images/full', `${filename}.jpg`);
    const thumbnailImage = path.join(__dirname, '../../images/thumbnail', `${filename}-${width}-${height}.jpg`);

    it('Should expect full image to exist', (done) => {
    fs.access(fullImage, (err) => {
        expect(err).toBeNull();
        done();
    });
    });

    it('Should expect thumbnail image to exist', async () => {
      await modifiedImage(filename, width, height , "jpg");
      expect(fs.existsSync(thumbnailImage)).toBeTruthy();  
      })
})


  
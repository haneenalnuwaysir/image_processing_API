import fs from 'fs';

it('Should expect original image to exist', (done) => {
  fs.access('./images/originalImage/palmtunnel.jpg', (err) => {
    expect(err).toBeNull();
    done();
  });
});

it('Should expect modified image to exist', (done) => {
  fs.access('./images/modifiedImage/palmtunnel_modified.jpg', (err) => {
    expect(err).toBeNull();
    done();
  });
});
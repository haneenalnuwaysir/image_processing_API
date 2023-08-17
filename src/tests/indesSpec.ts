import fs from 'fs';

it('Should expect full image to exist', (done) => {
  fs.access('./images/full/palmtunnel.jpg', (err) => {
    expect(err).toBeNull();
    done();
  });
});

it('Should expect thumbnail image to exist', (done) => {
  fs.access('./images/thumbnail/palmtunnel_modified.jpg', (err) => {
    expect(err).toBeNull();
    done();
  });
});

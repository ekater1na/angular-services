import {CapitalizePipe} from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should replace first letter to uppercase', () => {
    const pipe = new CapitalizePipe();
    const value = 'gdn-0011';

    const val = pipe.transform(value);

    expect(val).toEqual('Gdn-0011');
  })
});

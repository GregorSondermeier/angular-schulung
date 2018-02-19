import { GenderPipe } from './gender.pipe';

describe('Gender', () => {
  it('create an instance', () => {
    const pipe = new GenderPipe();
    expect(pipe).toBeTruthy();
  });
});

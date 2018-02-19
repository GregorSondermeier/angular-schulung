import { PersonHeigtPipe } from './person.height.pipe';

describe('PersonHeigtPipe', () => {
  it('create an instance', () => {
    const pipe = new PersonHeigtPipe();
    expect(pipe).toBeTruthy();
  });
});

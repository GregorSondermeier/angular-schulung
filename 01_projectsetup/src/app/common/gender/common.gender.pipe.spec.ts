import { GspCommonGenderPipe } from "./common.gender.pipe";

describe('Gender', () => {
  it('create an instance', () => {
    const pipe = new GspCommonGenderPipe();
    expect(pipe).toBeTruthy();
  });
});

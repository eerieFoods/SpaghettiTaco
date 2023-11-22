import { ChatnamePipe } from './chatname.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new ChatnamePipe();
    expect(pipe).toBeTruthy();
  });
});

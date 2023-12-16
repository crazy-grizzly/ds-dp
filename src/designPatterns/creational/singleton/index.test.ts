import { Singleton } from '.';


describe('Singleton', () => {
  it('should be a singleton', () => {
    const instance1 = Singleton.getInstance({ a: 1, b: 2 });
    const instance2 = Singleton.getInstance({ a: 3, b: 4 });

    expect(instance1 === instance2).toBe(true);
    expect(instance1.data).toEqual({ a: 1, b: 2 });
  });
});

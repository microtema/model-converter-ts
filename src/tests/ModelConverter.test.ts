import { ModelConverter } from '../index';

describe('ModelConverter', () => {
  let sut: ModelConverter<any, any, any>;

  beforeEach(() => {
    sut = new ModelConverter();
  });

  test('convert', () => {
    expect(sut.convert({ foo: 'bar' })).toEqual({ foo: 'bar' });
  });

  test('update will override', () => {
    const target = { foo: 'xxx' };

    sut.update(target, { foo: 'bar' });

    expect(target).toEqual({ foo: 'bar' });
  });

  test('update with merge', () => {
    const target = { foo: 'bar', other: 2 };

    sut.update(target, { foo: 'bar' });

    expect(target).toEqual({ foo: 'bar', other: 2 });
  });
});

import { ModelConverter } from '../index';

test('Default ModelConverter', () => {

  const sut = new ModelConverter();

  expect(sut.convert({foo:'bar'})).toEqual({foo:'bar'});

});

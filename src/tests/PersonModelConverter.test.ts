import { ModelConverter } from '../index';

class PersonModelConverter extends ModelConverter<any, any, any> {
  update(target: any | null, source: any, meta?: any): void {
    super.update(target, source, meta);
  }
}

describe('ModelConverter', () => {
  let sut: PersonModelConverter;

  beforeEach(() => {
    sut = new PersonModelConverter();
  });

  test('convert', () => {
    expect(sut.convert(null)).toEqual(null);
  });

  test('convertList', () => {
    expect(sut.convertList([])).toEqual([]);
  });
});

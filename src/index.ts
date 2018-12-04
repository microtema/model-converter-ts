/**
 * S source generic type
 * T target generic type
 * M meta generic type
 */
export class ModelConverter<S, T, M> {
  /**
   * Convert source to target.
   * If source is null or undefined
   * return null.
   *
   * @param source may null or undefined
   * @param meta may null or undefined
   * @return new instance of target or null
   */
  public convert(source: S, meta?: M): T | null {
    if (!source) {
      return null;
    }

    const target = {} as T;

    this.update(target, source);

    return target;
  }

  /**
   *
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object.
   *
   * @param target may null or undefined
   * @param source may null or undefined
   * @param meta may null or undefined
   */
  public update(target: T | null, source: S, meta?: M): void {
    if (!source) {
      return;
    }

    Object.assign(target, source);
  }

  /**
   *
   * @param sources may null or undefined
   * @param meta may null or undefined
   *
   * @return Array never null
   */
  public convertList(sources: S[], meta?: M): T[] {
    if (sources === null || sources === undefined || sources.length === 0) {
      return [];
    }

    return sources.map(it => this.convert(it, meta)) as T[];
  }
}

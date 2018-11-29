export class ModelConverter<S, T, M> {

    /**
     *
     * @param source may null or undefined
     */
    public convert(source: T, meta?: M): T | null {

        if (source === null || source === undefined) {
            return null;
        }

        return {...source as any} as T;
    }

    /**
     *
     * @param sources may null or undefined
     */
    public convertList(sources: T[], meta?: M): T[] {

        if (sources === null || sources === undefined || sources.length === 0) {
            return [];
        }

        return sources.map((it) => this.convert(it, meta)) as T[];
    }
}

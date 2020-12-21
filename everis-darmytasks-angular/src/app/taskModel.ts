export class Task {
    public id: number;
    public description: string;
    public status: string;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
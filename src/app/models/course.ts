export class Course {
    code: string;
    name: string;
    credits: number;
    type: string;
    offered:
    {
        fall: boolean;
        winter: boolean;
        spring: boolean;
        summer: boolean;
    }
    prereqs: Array<string>;
}

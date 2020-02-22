export interface Course {

    getCode(): string;
    getCredits(): number;
    isOffered(semesterOrTerm: string): boolean;
    getPrereqs(): Array<string>;

}

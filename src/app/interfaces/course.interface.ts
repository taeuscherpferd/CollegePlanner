export interface ICourse {
    getCode(): string;
    getCredits(): number;
    isOffered(semesterOrTerm: string): boolean;
    getPrereqs(): Array<string>;
}

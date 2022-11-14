interface IState {

    //Assignments
    get_Assignments(): IAssignment[]
    get_Assignment(id:string): IAssignment
    create_Assignment(id:string): Status
    remove_assigment():void

    //Submissions
    get_Submissions(assignmentID:string): ISubmission[]
    create_Submission(assignmentId: string, studentId: string, files: IStudentFile ): Status
    remove_Submission(submissionID: string, assignmentName: string):void

    //Instructors
    get_Instructors(): IInstructor[]
    get_Instructor(): IInstructor
    create_Instructor(name:string, id:string): IInstructor[]
    remove_Instructor(id:string): Status;

    //Students
    get_Students(): IStudent[]
    create_Student(): IStudent[]
    remove_Student(): IStudent[]
}

interface IAssignment{
    getName(): string;
    getCreator(): IInstructor
    getAllSubmissions(): ISubmission[]
    computeSimilarityWarnings(strategy :IContentSimiliratyDetectionStrategy, thisAssignment: IAssignment): ISimilarityWarning[]
}

interface IContentSimiliratyDetectionStrategy{
    computeSimilarityWarnings(assignment: IAssignment): ISimilarityWarning[]
}

interface ISimilarityWarning{
    getSubmissionsInvolved(): ISubmission
}

interface IInstructor{
    getId():string
    getName(): string
}

interface ISubmission {
    getStudent(): IStudent;
    getFiles(): IStudentFile
}

interface IStudent{
    getId():string
    getName(): string
}

interface IStudentFile{
    getChildren(): IStudentFile[];
    getContent(): string
    getName(): string
}
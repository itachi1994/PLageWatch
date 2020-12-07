import IASTGenerator from "../ASTGenerator/IASTGenerator";
import IFilePathGetter from "../FilePathGetter/IFilePathGetter";
import IPlagDetector from "../PlagDetector/IPlagDetector";
import * as babel from "@babel/core"
import { SubmissionCode, SubmissionMap } from "../Types/PlagResultType";

interface IDetectorFactory {
    makeFilePathGetter(): IFilePathGetter;
    makeASTGenerator(filePaths: Array<string>): IASTGenerator;
    makePlagDetector(submission1: Array<babel.Node>, submission2: Array<babel.Node>, file1NameMap: SubmissionMap, file2NameMap: SubmissionMap, fileSubmission1: SubmissionCode, fileSubmission2: SubmissionCode): IPlagDetector;
}
export default IDetectorFactory;
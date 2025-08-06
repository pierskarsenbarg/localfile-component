import * as pulumi from "@pulumi/pulumi";
export declare function getFile(args: GetFileArgs, opts?: pulumi.InvokeOptions): Promise<GetFileResult>;
/**
 * A collection of arguments for invoking getFile.
 */
export interface GetFileArgs {
    filename: string;
}
/**
 * A collection of values returned by getFile.
 */
export interface GetFileResult {
    readonly content: string;
    readonly contentBase64: string;
    readonly contentBase64sha256: string;
    readonly contentBase64sha512: string;
    readonly contentMd5: string;
    readonly contentSha1: string;
    readonly contentSha256: string;
    readonly contentSha512: string;
    readonly filename: string;
    readonly id: string;
}
export declare function getFileOutput(args: GetFileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFileResult>;
/**
 * A collection of arguments for invoking getFile.
 */
export interface GetFileOutputArgs {
    filename: pulumi.Input<string>;
}

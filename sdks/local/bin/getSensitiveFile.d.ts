import * as pulumi from "@pulumi/pulumi";
export declare function getSensitiveFile(args: GetSensitiveFileArgs, opts?: pulumi.InvokeOptions): Promise<GetSensitiveFileResult>;
/**
 * A collection of arguments for invoking getSensitiveFile.
 */
export interface GetSensitiveFileArgs {
    filename: string;
}
/**
 * A collection of values returned by getSensitiveFile.
 */
export interface GetSensitiveFileResult {
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
export declare function getSensitiveFileOutput(args: GetSensitiveFileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSensitiveFileResult>;
/**
 * A collection of arguments for invoking getSensitiveFile.
 */
export interface GetSensitiveFileOutputArgs {
    filename: pulumi.Input<string>;
}

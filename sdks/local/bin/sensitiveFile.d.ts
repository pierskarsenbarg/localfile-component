import * as pulumi from "@pulumi/pulumi";
export declare class SensitiveFile extends pulumi.CustomResource {
    /**
     * Get an existing SensitiveFile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SensitiveFileState, opts?: pulumi.CustomResourceOptions): SensitiveFile;
    /**
     * Returns true if the given object is an instance of SensitiveFile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SensitiveFile;
    /**
     * Sensitive Content to store in the file, expected to be a UTF-8 encoded string. Conflicts with `content_base64` and
     * `source`. Exactly one of these three arguments must be specified.
     */
    readonly content: pulumi.Output<string | undefined>;
    /**
     * Sensitive Content to store in the file, expected to be binary encoded as base64 string. Conflicts with `content` and
     * `source`. Exactly one of these three arguments must be specified.
     */
    readonly contentBase64: pulumi.Output<string | undefined>;
    /**
     * Base64 encoded SHA256 checksum of file content.
     */
    readonly contentBase64sha256: pulumi.Output<string>;
    /**
     * Base64 encoded SHA512 checksum of file content.
     */
    readonly contentBase64sha512: pulumi.Output<string>;
    /**
     * MD5 checksum of file content.
     */
    readonly contentMd5: pulumi.Output<string>;
    /**
     * SHA1 checksum of file content.
     */
    readonly contentSha1: pulumi.Output<string>;
    /**
     * SHA256 checksum of file content.
     */
    readonly contentSha256: pulumi.Output<string>;
    /**
     * SHA512 checksum of file content.
     */
    readonly contentSha512: pulumi.Output<string>;
    /**
     * Permissions to set for directories created (before umask), expressed as string in [numeric
     * notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`.
     */
    readonly directoryPermission: pulumi.Output<string>;
    /**
     * Permissions to set for the output file (before umask), expressed as string in [numeric
     * notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`.
     */
    readonly filePermission: pulumi.Output<string>;
    /**
     * The path to the file that will be created. Missing parent directories will be created. If the file already exists, it
     * will be overridden with the given content.
     */
    readonly filename: pulumi.Output<string>;
    /**
     * Path to file to use as source for the one we are creating. Conflicts with `content` and `content_base64`. Exactly one of
     * these three arguments must be specified.
     */
    readonly source: pulumi.Output<string | undefined>;
    /**
     * Create a SensitiveFile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SensitiveFileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SensitiveFile resources.
 */
export interface SensitiveFileState {
    /**
     * Sensitive Content to store in the file, expected to be a UTF-8 encoded string. Conflicts with `content_base64` and
     * `source`. Exactly one of these three arguments must be specified.
     */
    content?: pulumi.Input<string>;
    /**
     * Sensitive Content to store in the file, expected to be binary encoded as base64 string. Conflicts with `content` and
     * `source`. Exactly one of these three arguments must be specified.
     */
    contentBase64?: pulumi.Input<string>;
    /**
     * Base64 encoded SHA256 checksum of file content.
     */
    contentBase64sha256?: pulumi.Input<string>;
    /**
     * Base64 encoded SHA512 checksum of file content.
     */
    contentBase64sha512?: pulumi.Input<string>;
    /**
     * MD5 checksum of file content.
     */
    contentMd5?: pulumi.Input<string>;
    /**
     * SHA1 checksum of file content.
     */
    contentSha1?: pulumi.Input<string>;
    /**
     * SHA256 checksum of file content.
     */
    contentSha256?: pulumi.Input<string>;
    /**
     * SHA512 checksum of file content.
     */
    contentSha512?: pulumi.Input<string>;
    /**
     * Permissions to set for directories created (before umask), expressed as string in [numeric
     * notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`.
     */
    directoryPermission?: pulumi.Input<string>;
    /**
     * Permissions to set for the output file (before umask), expressed as string in [numeric
     * notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`.
     */
    filePermission?: pulumi.Input<string>;
    /**
     * The path to the file that will be created. Missing parent directories will be created. If the file already exists, it
     * will be overridden with the given content.
     */
    filename?: pulumi.Input<string>;
    /**
     * Path to file to use as source for the one we are creating. Conflicts with `content` and `content_base64`. Exactly one of
     * these three arguments must be specified.
     */
    source?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SensitiveFile resource.
 */
export interface SensitiveFileArgs {
    /**
     * Sensitive Content to store in the file, expected to be a UTF-8 encoded string. Conflicts with `content_base64` and
     * `source`. Exactly one of these three arguments must be specified.
     */
    content?: pulumi.Input<string>;
    /**
     * Sensitive Content to store in the file, expected to be binary encoded as base64 string. Conflicts with `content` and
     * `source`. Exactly one of these three arguments must be specified.
     */
    contentBase64?: pulumi.Input<string>;
    /**
     * Permissions to set for directories created (before umask), expressed as string in [numeric
     * notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`.
     */
    directoryPermission?: pulumi.Input<string>;
    /**
     * Permissions to set for the output file (before umask), expressed as string in [numeric
     * notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`.
     */
    filePermission?: pulumi.Input<string>;
    /**
     * The path to the file that will be created. Missing parent directories will be created. If the file already exists, it
     * will be overridden with the given content.
     */
    filename: pulumi.Input<string>;
    /**
     * Path to file to use as source for the one we are creating. Conflicts with `content` and `content_base64`. Exactly one of
     * these three arguments must be specified.
     */
    source?: pulumi.Input<string>;
}

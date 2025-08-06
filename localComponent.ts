import * as pulumi from "@pulumi/pulumi";
import * as local from "@pulumi/local";

interface LocalComponentArgs {
    isSensitive: pulumi.Input<boolean>,
    content: pulumi.Input<string>,
    fileName?: pulumi.Input<string>
}

export class LocalComponent extends pulumi.ComponentResource {
    constructor(name: string, args: LocalComponentArgs, opts?: pulumi.ComponentResourceOptions) {
        super("x:index:localComponent", name, args, opts);


        const filename: pulumi.Input<string> = args.fileName ?? "sensitivefile.txt";

        if(args.isSensitive) {
            const file = new local.SensitiveFile(`${name}`, {
                content: args.content,
                filename: filename
            }, {parent: this})
        } else {
            const file = new local.File(`${name}`, {
                content: args.content,
                filename: filename
            }, {parent: this})
        }

        this.registerOutputs();
    }
}
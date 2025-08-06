import * as pulumi from "@pulumi/pulumi";
import * as sigsci from "@pulumi/sigsci";

interface SigSciComponentArgs {
    shortName: pulumi.Input<string>,
    displayName: pulumi.Input<string>
}

export class SigSciComponent extends pulumi.ComponentResource {
    constructor(name:string, args: SigSciComponentArgs, opts?: pulumi.ComponentResourceOptions) {
        super("x:index:SigSci", name, args, opts);

        const site = new sigsci.Site(`${name}`, {
            shortName: args.shortName,
            displayName: args.displayName,
            blockDurationSeconds: 86400,
            agentLevel: "block",
            clientIpRules: ["X-Client-IP"]
        }, {parent: this})

        this.registerOutputs();
    }
}
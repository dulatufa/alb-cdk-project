import * as cdk from 'aws-cdk-lib';

export class MyStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Add your stack resources here (ALB, EC2, etc.)
  }
}

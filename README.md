# ALB CDK Project

This project implements an Application Load Balancer (ALB) with two EC2 instances behind it, using the AWS Cloud Development Kit (CDK) in TypeScript. The purpose of this project is to automate the deployment of infrastructure resources following the assignment requirements.

## Features
- Application Load Balancer (ALB) to distribute traffic
- Two EC2 instances configured with security groups
- Subnets and VPC configuration
- Automatically generated CloudFormation template

## Assignment Description
This project fulfills the following requirements:
- Use AWS CDK to implement the infrastructure as code.
- Create an ALB, two EC2 instances, target groups, and security groups.
- Use TypeScript to define resources and generate a CloudFormation template.
- Ensure security groups allow HTTP and SSH access.

## Prerequisites
- AWS CLI configured with access to an AWS account
- Node.js installed
- AWS CDK installed globally (`npm install -g aws-cdk`)

## Project Structure
```plaintext
├── bin/
│   └── app.ts        # Entry point for the CDK application
├── lib/
│   └── my-stack.ts   # CDK Stack defining resources
├── node_modules/     # Project dependencies
├── cdk.json          # CDK configuration
├── package.json      # Node.js project configuration
├── tsconfig.json     # TypeScript configuration
├── synthesized-template.yaml # Synthesized CloudFormation template

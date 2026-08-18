# SafeX CI/CD Starter Kit - Setup Guide

This guide helps you add a working CI/CD pipeline to your own web app in under an hour, with no prior CI/CD experience needed.

## What You Get

- An automated pipeline that builds, tests, and deploys your app on every push to `main`
- A safety gate that blocks deployment if tests fail
- A rollback process documented for when something goes wrong

## Prerequisites

Before you begin, make sure you have:

- A GitHub repository for your web app (public or private)
- A Node.js project with a `package.json` file that includes a `start` script
- A basic test script that exits with code 0 on success and code 1 on failure
- 15-20 minutes of uninterrupted time


## Installation Steps

1. In your project's root folder, create a folder path: `.github/workflows`

2. Inside that folder, create a file named `ci-cd.yml`

3. Copy the pipeline configuration from this repository's `.github/workflows/ci-cd.yml` file into your new file

4. Make sure your `package.json` has a `start` script (to run your app) and a `test` script (to run your tests) - the pipeline calls both of these by name

5. Commit and push your changes to the `main` branch

6. Go to the "Actions" tab in your GitHub repository to watch the pipeline run automatically


 ## How the Safety Gate Works

The pipeline runs your tests before deployment. If any test fails (exits with a non-zero code), the pipeline stops immediately and the deploy step never runs. This means broken code can never reach production through this pipeline.

To test this yourself: intentionally break a test in your app and push to `main`. You will see the pipeline fail at the test step, and the deploy step will be skipped.


## If Something Goes Wrong (Rollback)

If a deployment causes issues in production:

1. Identify the last commit that was working correctly
2. Revert to that commit (`git revert` or redeploy the previous stable version)
3. Push the revert - this will trigger the pipeline again with the stable code
4. Confirm the app is stable before investigating the root cause

For a full checklist of rollback steps, see the accompanying Deployment Runbook Checklist.


## Notes

- This pipeline is intentionally simple so it can be adapted to any Node.js project. It does not include advanced features like staging environments or notifications - those can be added as needed.
- Estimated setup time: 15-30 minutes for a developer already familiar with Git.

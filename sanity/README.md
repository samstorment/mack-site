
## Important Note!

Sanity projects use yarn package manager

## Add Sanity Cli Globally

Should only have to do this once

```
npm install -g @sanity/cli
```

## Start Dev

```
# open at http://localhost:3333
sanity start
```

## Publish Changes

Ran this initially to deploy our remote studio. Run this again everytime you change the Schema locally and want to update the deployed version.

```
sanity deploy
```

## Start Fresh With Existing Project

Create new sanity codebase referencing an existing project if one exists. The newly generated codebase will not retain any of your schema info, but will automatically be setup to use the project you choose.

```
npx -y @sanity/cli init --template empty
```
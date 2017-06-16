# ServerlessTaskApi
Task Api written using Serverless

## Running

(temporary)
After pulling the repo, create a file `secretInfo.ts` in the `src` directory.
Add the following:
```
export const host = <host>;
export const user = <user>;
export const password = <password>;
export const database = <database>;
```

Install dependencies and run:
```
npm install
sls webpack serve
```

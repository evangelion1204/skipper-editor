import { exec } from 'child_process';

const PATH = '~/go/src/github.com/zalando/skipper/cmd/skipper';

export const handler = (error, stdout, stderr) => { 
    console.log(error, stdout);
}

export function start() {
    exec(`${PATH}/skipper`, handler);
}
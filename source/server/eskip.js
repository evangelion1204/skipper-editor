import { exec } from 'child_process';
import util from 'util';

const asyncExec = util.promisify(exec);

export async function parseEskip(content) {
    const { stdout } = await asyncExec(`echo '${content}' | ./eskip print -json`);

    return stdout;
}

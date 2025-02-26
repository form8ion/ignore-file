import {promises as fs} from 'node:fs';
import {EOL} from 'node:os';

export default async function writeIgnoreFile({projectRoot, name, ignores}) {
  await fs.writeFile(`${projectRoot}/.${name}ignore`, [...new Set(ignores)].join(EOL));
}

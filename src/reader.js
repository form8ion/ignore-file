import {promises as fs} from 'node:fs';
import {EOL} from 'node:os';

export default async function readIgnoreFile({projectRoot, name}) {
  const ignoreContent = await fs.readFile(`${projectRoot}/.${name}ignore`, 'utf-8');

  return ignoreContent.split(EOL);
}

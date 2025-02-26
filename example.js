// #### Import
// remark-usage-ignore-next 3
import stubbedFs from 'mock-fs';
import any from '@travi/any';
import {EOL} from 'node:os';
import {exists, read, write} from './lib/index.js';

// remark-usage-ignore-next
stubbedFs({'.tool-nameignore': any.listOf(any.word).join(EOL)});

// #### Execute

const projectRoot = process.cwd();
const toolName = 'tool-name';

await exists({projectRoot, name: toolName});

await read({projectRoot, name: toolName});

await write({projectRoot, name: toolName, ignores: ['foo/', 'bar.js']});

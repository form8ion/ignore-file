// #### Import
// remark-usage-ignore-next 3
import stubbedFs from 'mock-fs';
import any from '@travi/any';
import {EOL} from 'node:os';
import {read} from './lib/index.js';

// remark-usage-ignore-next
stubbedFs({'.tool-nameignore': any.listOf(any.word).join(EOL)});

// #### Execute

const projectRoot = process.cwd();

await read({projectRoot, name: 'tool-name'});

import {fileExists} from '@form8ion/core';

import {describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';

import ignoreFileExists from './existence-checker.js';

vi.mock('@form8ion/core');

describe('ignore file existence checker', () => {
  const projectRoot = any.string();
  const toolName = any.word();

  it('should return `true` if the ignore file exists', async () => {
    when(fileExists).calledWith(`${projectRoot}/.${toolName}ignore`).thenResolve(true);

    expect(await ignoreFileExists({projectRoot, name: toolName})).toBe(true);
  });

  it('should return `false` if the ignore file exists', async () => {
    when(fileExists).calledWith(`${projectRoot}/.${toolName}ignore`).thenResolve(false);

    expect(await ignoreFileExists({projectRoot, name: toolName})).toBe(false);
  });
});

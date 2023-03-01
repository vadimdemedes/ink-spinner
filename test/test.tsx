import process from 'node:process';
import React from 'react';
import {render} from 'ink-testing-library';
import spinners from 'cli-spinners';
import test from 'ava';
import delay from 'delay';
import Spinner from '../source/index.js';

test('render spinner', async t => {
	const spinner = spinners.dots;
	const {frames, unmount} = render(<Spinner />);

	await delay(spinner.frames.length * spinner.interval);
	unmount();

	const uniqueFrames = [...new Set(frames)];

	if (process.env['CI'] && uniqueFrames[uniqueFrames.length - 1] === '\n') {
		uniqueFrames.pop();
	}

	t.deepEqual(uniqueFrames, spinner.frames);
});

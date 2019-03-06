import React from 'react';
import {render} from 'ink-testing-library';
import spinners from 'cli-spinners';
import test from 'ava';
import delay from 'delay';
import Spinner from '.';

test('render spinner', async t => {
	const spinner = spinners.dots;
	const {frames, unmount} = render(<Spinner/>);

	await delay(spinner.frames.length * spinner.interval);
	unmount();

	const uniqueFrames = [...new Set(frames)];

	t.deepEqual(uniqueFrames, spinner.frames);
});

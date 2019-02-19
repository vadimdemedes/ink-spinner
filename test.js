import React from 'react';
import {render} from 'ink';
import {spy} from 'sinon';
import spinners from 'cli-spinners';
import test from 'ava';
import delay from 'delay';
import Spinner from '.';

test('render spinner', async t => {
	const stream = {
		columns: 100,
		write: spy()
	};

	const spinner = spinners.dots;
	const app = render(<Spinner/>, {
		stdout: stream,
		debug: true
	});

	await delay(spinner.frames.length * spinner.interval);
	app.unmount();

	const allFrames = stream.write.args.map(args => args[0]);
	const frames = [...new Set(allFrames)];

	t.deepEqual(frames, spinner.frames);
	t.pass();
});

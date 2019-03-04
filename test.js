import EventEmitter from 'events';
import React from 'react';
import {render} from 'ink';
import {spy} from 'sinon';
import spinners from 'cli-spinners';
import test from 'ava';
import delay from 'delay';
import Spinner from '.';

test('render spinner', async t => {
	const stdout = {
		columns: 100,
		write: spy()
	};

	const stdin = new EventEmitter();
	stdin.setRawMode = () => {};
	stdin.setEncoding = () => {};
	stdin.pause = () => {};

	const spinner = spinners.dots;
	const app = render(<Spinner/>, {
		stdout,
		stdin,
		debug: true
	});

	await delay(spinner.frames.length * spinner.interval);
	app.unmount();

	const allFrames = stdout.write.args.map(args => args[0]);
	const frames = [...new Set(allFrames)];

	t.deepEqual(frames, spinner.frames);
	t.pass();
});

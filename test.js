import {h, build, Text} from 'ink';
import renderToString from 'ink/lib/render-to-string';
import {stub} from 'sinon';
import spinners from 'cli-spinners';
import test from 'ava';
import Spinner from '.';

test('render', t => {
	let component;

	const setRef = ref => {
		component = ref;
	};

	const spinner = spinners.dots;
	let tree;

	for (let frame = 0; frame < spinner.frames.length; frame++) {
		tree = build(<Spinner ref={setRef}/>, tree);
		t.is(renderToString(tree), spinner.frames[frame]);

		component.setState({
			frame: frame + 1
		});
	}
});

test('pass props to <Text>', t => {
	const spinner = spinners.dots;

	const actual = build(<Spinner green/>);
	const expected = build(<Text green>{spinner.frames[0]}</Text>);

	t.is(renderToString(actual), renderToString(expected));
});

test('spin', t => {
	stub(Spinner.prototype, 'setState');

	let component;

	const setRef = ref => {
		component = ref;
	};

	build(<Spinner ref={setRef}/>);

	const spinner = spinners.dots;

	let frame = 1;
	let i = 0;

	while (i < spinner.frames.length * 2) {
		component.switchFrame();

		t.deepEqual(component.setState.getCall(i).args[0], {frame});
		component.state = {frame};

		frame = frame === spinner.frames.length - 1 ? 0 : frame + 1;
		i++;
	}
});

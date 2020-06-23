import * as React from "react";
import Spinner = require(".");
import { render } from "ink";

render(
	<>
		<Spinner type="dots" />
		<Spinner green italic />
		<Spinner hex="#fefefe" />
		<Spinner rgb={[255, 100, 2]} />
	</>
);

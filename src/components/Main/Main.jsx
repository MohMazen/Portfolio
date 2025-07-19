import React, {Component} from 'react';

const translate = {
	fr: {
		titre: "Étudiant en Informatique",
	},
	en: {
		titre: "Computer Science Student",
	},
	ar: {
		titre: "طالب في علوم الحاسوب",
	},
}

class Main extends Component {
	render() {
		return (
			<div>
				<p className="fs-5 text-center text-uppercase">Mohamed-Mazen Chaabane</p>
			</div>
		);
	}
}

export default Main;
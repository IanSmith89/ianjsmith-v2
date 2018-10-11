import React from 'react';
import { observer } from 'mobx-react';
import PrintProjectHeader from '../../components/PrintProjectHeader';

@observer
export default class ChebuaHut extends React.Component {
	render() {
		const { project } = this.props;

		return (
			<PrintProjectHeader
				images={[
					{
						alt: "we'll be back",
						src: 'cheba-hut-cover.jpg'
					},
					{
						alt: 'grand opening',
						src: 'cheba-hut-jump.jpg'
					},
					{
						alt: 'intern',
						src: 'cheba-hut-intern.jpg'
					},
					{
						alt: 'brews',
						src: 'cheba-hut-brews.jpg'
					}
				]}
				project={project}
				showDetails
			/>
		);
	}
}

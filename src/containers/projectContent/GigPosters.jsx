import React from 'react';
import { observer } from 'mobx-react';
import PrintProjectHeader from '../../components/PrintProjectHeader';
import FullImage from '../../components/FullImage';
import TextListCard from '../../components/TextListCard';
import StripedImageList from '../../components/StripedImageList';
import TextListDark from '../../components/TextListDark';
import TextListLight from '../../components/TextListLight';
import ImageList from '../../components/ImageList';

@observer
export default class GigPosters extends React.Component {
	render() {
		const { project } = this.props;

		return (
			<PrintProjectHeader
				images={[
					{
						alt: 'mimicking birds',
						src: 'posters-cover.jpg'
					},
					{
						alt: 'alex dang',
						src: 'posters-alex-dang.jpg'
					},
					{
						alt: 'elephant wrecking ball',
						src: 'posters-elephant-wrecking-ball.jpg'
					},
					{
						alt: 'reptar',
						src: 'posters-reptar.jpg'
					},
					{
						alt: 'ugly architect',
						src: 'posters-ugly-architect.jpg'
					},
					{
						alt: 'vinyl williams',
						src: 'posters-vinyl-williams.jpg'
					},
					{
						alt: 'harpoon the whale',
						src: 'posters-harpoon.jpg'
					}
				]}
				project={project}
			/>
		);
	}
}

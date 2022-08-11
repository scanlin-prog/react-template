import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Blogs from '../elements/Blogs';
import { posts } from '../../utils/utils.js';
import Pagination from '../elements/Pagination';

const propTypes = {
	...SectionTilesProps.types
}

const defaultProps = {
	...SectionTilesProps.defaults
}

const BlogList = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {

	const outerClasses = classNames(
		'testimonial section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'testimonial-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const tilesClasses = classNames(
		'tiles-wrap',
		pushLeft && 'push-left'
	);

	const sectionHeader = {
		title: 'Refreshing news for developers and designers'
	};

	return (
		<section
			{...props}
			className={outerClasses}
		>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>

						<Blogs posts={posts} />
						<Pagination />

					</div>
				</div>
			</div>
		</section>
	);
}

BlogList.propTypes = propTypes;
BlogList.defaultProps = defaultProps;

export default BlogList;
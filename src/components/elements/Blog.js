import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/css/elements/Blog.css';
import BlogTags from './BlogTags';
import PublicationData from './PublicationData';

function Blog(props) {

	const history = useHistory();

	function handleClick() {
		history.push('/blog-post')
		window.scrollTo(0, 0);
	}

	return (
		<div className="blog">
			<div className="blog__image">
				<img src={props.post.image} alt="blog_image" onClick={handleClick} />
			</div>
			<BlogTags tags={props.post.tags} />
			<h3 className="blog__title" onClick={handleClick}>{props.post.title}</h3>
			<p className="blog__text">
				{props.post.text}
			</p>
			<PublicationData user={props.post.user} />
		</div>
	)
}

export default Blog;
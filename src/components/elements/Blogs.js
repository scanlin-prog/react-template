import React from 'react';
import '../../assets/css/elements/Blogs.css';
import Blog from './Blog';

function Blogs(props) {
	return (
		<div className="blogs-container">
			{
				props.posts.map((post, i) => {
					return (
						<Blog key={i} post={post} />
					)
				})
			}
		</div>
	)
}

export default Blogs;
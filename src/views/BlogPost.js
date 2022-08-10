import React from 'react';
import '../assets/css/views/BlogPost.css';
import { posts } from '../utils/utils.js';
import user00 from '../assets/images/user-00.png';
import MainImage from '../assets/images/main-image.png';
import articleImage from '../assets/images/news-inner-image.png';
import Blogs from '../components/elements/Blogs';
import PublicationData from '../components/elements/PublicationData';
import BlogTags from '../components/elements/BlogTags';
import ArticleContent from '../components/sections/ArticleContent';
import Cta from '../components/sections/Cta';


function BlogPost() {

	return (
		<>
			<article className="blog-post">
				<div className="blog-post-header">
					<h1 className="blog-post-header__title">Designing a functional workflow at home.</h1>
					<p className="blog-post-header__subtitle">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
					<div className="blog-post-header__container">
						<PublicationData user={{ userImage: user00, username: 'Chris Solerieu', date: 'Jan 19, 2020' }} />
						<BlogTags tags={['Product', 'Engineering']} />
					</div>
				</div>

				<img src={MainImage} className="blog-post-image reveal-from-bottom" alt="image_main" />

				<ArticleContent articleImage={articleImage} />

				<div className="blogs">
					<h2 className="blogs-header">More from Open PRO</h2>
					<Blogs posts={posts} />
				</div>

			</article>
			<Cta split />
		</>
	)
}

export default BlogPost;
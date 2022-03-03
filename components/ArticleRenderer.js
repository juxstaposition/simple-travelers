import React from "react";
import ArticleText from './ArticleText';
import PageHeader from './PageHeader';
import ArticleSectionHeader from './ArticleSectionHeader';
import ArticleImage from './ArticleImage';

const KeysToComponentMap = {
	p: ArticleText,
	h2: PageHeader,
	h3: ArticleSectionHeader,
	img: ArticleImage,
};


function ArticleRenderer(config,idx, textAreaWidth) {
	if (typeof KeysToComponentMap[config.component] !== "undefined") {
		return React.createElement(
			KeysToComponentMap[config.component],
			{
				key: idx,
				src: config.src,
				text: config.text,
				class: config.class,
				name: config.name,
				type: config.type,
				idx: idx,
				width: textAreaWidth 
			},
			config.children
			// (typeof config.children === "string"
			// 	? config.children
			// 	: config.children.map((item,idx) => ArticleRenderer(item,idx))),
		);
	}
}
  
  export default ArticleRenderer;
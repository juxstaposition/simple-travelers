import React from "react";
import ArticleLink from "./ArticleLink";
import ArticleSimpleText from "./ArticleSimpleText";

const KeysToComponentMap = {
    link: ArticleLink,
    simpleText: ArticleSimpleText
};


function TextRenderer(config,idx) {
	if (typeof KeysToComponentMap[config.component] !== "undefined") {
		return React.createElement(
			KeysToComponentMap[config.component],
			{
				key: idx,
				src: config.src,
                text: config.text,
				class: config.class,
				name: config.name,
                url: config.url,
				type: config.type
			},
		);
	}
}
  
  export default TextRenderer;
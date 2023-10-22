import { ContentDetail } from "@/types";
import React, { FC } from "react";

const ContentDetail: FC<ContentDetail> = ({ title, content }) => {
	return (
		<div>
			<p className="text-lg font-normal leading-tight capitalize">{title}</p>
			<p className="text-lg font-bold leading-none">{content}</p>
		</div>
	);
};

export default ContentDetail;

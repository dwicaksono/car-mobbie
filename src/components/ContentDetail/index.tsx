import { ContentDetailProp } from '@/types';
import React, { FC } from 'react';

const ContentDetail: FC<ContentDetailProp> = ({ title, content }) => {
  return (
    <>
      <p className="text-lg font-normal leading-tight capitalize">{title}</p>
      <p className="text-lg font-bold leading-none">{content}</p>
    </>
  );
};

export default ContentDetail;

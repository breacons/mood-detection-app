import React from 'react';
import { BACKEND_URL } from '../../config';

export const VideoFeed = () => {
  return <img src={`${BACKEND_URL}/video-feed`} width="100%" style={{ borderRadius: 12, objectFit:'cover', height: 500, objectPosition:'center center' }} />;
};

export default VideoFeed;

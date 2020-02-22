import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import './styles.scss';

import Icon from '../icon'
import DownloadIcon from '../../assets/icons/download.svg';

type DownloadCardProps = {
  videoUrl: string,
  linkToDownload: string,
}

const DownloadCard: FunctionComponent<DownloadCardProps> = ({ videoUrl, linkToDownload }): ReactElement => {
  const [videoThumbnailLink, setVideoThumbnailLink] = useState('');

  useEffect(() => {
    const { videoId } = videoUrl.match(/v=(?<videoId>.+)/).groups;
    const videoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    setVideoThumbnailLink(videoThumbnail)
  }, [videoUrl, setVideoThumbnailLink]);
  
  return (
    <a href={linkToDownload} className="download">
      <img src={videoThumbnailLink} className="download__video-thumbnail" />
      <span className="download__icon">
        <Icon src={DownloadIcon} />
      </span>
    </a>
  )
}

export default DownloadCard;

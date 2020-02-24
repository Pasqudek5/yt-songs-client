import React, { FC, ReactElement, useEffect, useState } from 'react';
import './styles.scss';

import Icon from '../icon'
import Flex from '../flex'
import DownloadIcon from '../../assets/icons/download.svg';

type ModalCardProps = {
  onClick: () => void,
  videoUrl: string,
  linkToDownload: string,
}

const Modal: FC<ModalCardProps> = ({ onClick, videoUrl, linkToDownload }): ReactElement => {
  const [videoThumbnailLink, setVideoThumbnailLink] = useState('');

  useEffect(() => {
    const { videoId } = videoUrl.match(/v=(?<videoId>.+)/).groups;
    const videoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    setVideoThumbnailLink(videoThumbnail)
  }, [videoUrl, setVideoThumbnailLink]);
  
  return (
    <Flex
      center
      className="modal"
      onClick={onClick}
    >
      <a
        href={linkToDownload}
        className="modal__card"
      >
        <img src={videoThumbnailLink} className="modal__video-thumbnail" />
        <span className="modal__icon">
          <Icon src={DownloadIcon} />
        </span>
      </a>
    </Flex>
  )
}

export default Modal;

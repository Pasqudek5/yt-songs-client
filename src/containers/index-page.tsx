import { FC, useState, FormEvent, ReactElement } from 'react';

import * as Constants from '../constants';
import { isUrlValid } from '../utils';
import API from '../services/api';

interface ChildrenProps {
  videoUrl: string;
  setVideoUrl: (value: string) => void;
  extention: string;
  extentions: string[];
  setExtention: (value: string) => void;
  errorMessage: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  linkToDownload: string;
  handleSubmit: (event: FormEvent) => void;
}

type IndexPageContainerProps = {
  children: (props: ChildrenProps) => ReactElement;
}

const IndexPageContainer: FC<IndexPageContainerProps> = ({ children }) => {
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=rLlOYNaWrYE');
  const [extention, setExtention] = useState(Constants.DEFAULT_EXTENTION);
  const [linkToDownload, setLinkToDownload] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleSubmit = async (event) => {
    setErrorMessage('');
    event.preventDefault();

    if (!isUrlValid(videoUrl)) {
      setErrorMessage('Invalid link to video.');
      return;
    }

    const payload = {
      url: videoUrl,
      extention
    }
    try {
      const { link } = await API.convertVideo(payload);
      setLinkToDownload(link);
      setIsModalOpen(true);
    } catch ({ response: { data: { error } } }) {
      setErrorMessage(error);
    }
  }
  
  return children({
    videoUrl,
    setVideoUrl,
    extention,
    extentions: Constants.EXTENTIONS,
    setExtention,
    errorMessage,
    isModalOpen,
    setIsModalOpen,
    linkToDownload,
    handleSubmit
  });
}

export default IndexPageContainer;

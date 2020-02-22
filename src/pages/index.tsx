import React, { useState, ReactElement } from 'react'
import '../styles/global.scss';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/Header'

import Form from '../components/form';
import Input from '../components/input';
import Button from '../components/button';
import Select from '../components/select'
import Icon from '../components/icon'
import Flex from '../components/flex'
import DownloadCard from '../components/download-card'

import Download from '../assets/icons/download.svg';

import { isUrlValid } from '../utils';

import API from '../services/api';

const options = ['mp3', 'mp4']

const IndexPage = (): ReactElement => {
  const [formData, setFormData] = useState({});
  const [videoUrl, setVideoUrl] = useState('');
  const [extention, setExtention] = useState(options[0]);
  const [linkToDownload, setLinkToDownload] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const iconRight = () => (
    <Flex row>
      <Select
        name="extention"
        options={options}
        onChange={setExtention}
        value={extention}
      />
      <Button
        onClick={() => {}}
        color="accent"
        type="submit"
      >
        <Icon src={Download} />
      </Button>
    </Flex>
  )
  
  return (
    <>
      <SEO title="YT Songs" />
      <Header />
      <Layout>
        <Form onSubmit={() => {}}>
          <div className="p-l-3 m-b-4">
            <p>Convert YouTube video easily.</p>
            <p className="small">
              it's <u className="text--white">free</u> and it will be!
            </p>
          </div>
          <Input
            placeholder="Link..."
            name="url"
            value={videoUrl}
            onChange={setVideoUrl}
            error={errorMessage}
            iconRight={iconRight()}
          />
        </Form>
        {videoUrl && linkToDownload && 
          <DownloadCard videoUrl={videoUrl} linkToDownload={linkToDownload} />
        }
      </Layout>
    </>
  );
}

export default IndexPage

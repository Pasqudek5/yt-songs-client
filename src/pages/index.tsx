import React, { FC, ReactElement } from 'react'
import '../styles/global.scss';

import IndexPageContainer from '../containers/index-page';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/Header'
import Form from '../components/form';
import Input from '../components/input';
import Button from '../components/button';
import Select from '../components/select'
import Icon from '../components/icon'
import Flex from '../components/flex'
import Modal from '../components/modal'

import Download from '../assets/icons/download.svg';

const IndexPage: FC = (): ReactElement => {

  const iconRight = ({
    extentions,
    setExtention,
    extention
  }) => (
    <Flex row>
      <Select
        name="extention"
        options={extentions}
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
      <IndexPageContainer>
        {({
          videoUrl,
          setVideoUrl,
          extention,
          extentions,
          setExtention,
          errorMessage,
          isModalOpen,
          setIsModalOpen,
          linkToDownload,
          handleSubmit
        }) => (
            <Layout>
              <Form onSubmit={handleSubmit}>
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
                  iconRight={iconRight({
                    extentions,
                    setExtention,
                    extention
                  })}
                />
              </Form>
              {isModalOpen && videoUrl && linkToDownload &&
                <Modal
                  videoUrl={videoUrl}
                  linkToDownload={linkToDownload}
                  onClick={() => setIsModalOpen(false)}
                />
              }
            </Layout>
          )}
      </IndexPageContainer>
    </>
  );
}

export default IndexPage

import { FidgetSpinner } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';
import React from 'react';

export const Loader = () => {
  return (
    <>
      <LoaderWrapper>
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={['#ff0000', '#00ff00', '#0000ff']}
          backgroundColor="#F4442E"
        />
      </LoaderWrapper>
    </>
  );
};

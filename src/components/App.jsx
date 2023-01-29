import { fetchImages } from './Helper/Api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Wrapper } from './App.styled';
import { Toaster, toast } from 'react-hot-toast';
import { Loader } from './Loader/Loader';
import React, { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [modalURL, setModalURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false);
  useEffect(() => {
    if (search !== '') {
      setIsLoading(true);
      fetchImages(search, page)
        .then(images => {
          const { hits, totalHits } = images;
          if (hits.length) {
            setImages(prev => [...prev, ...hits]);
            setIsActiveButton(true);
            if (totalHits < page * 12) {
              setIsActiveButton(false);
            }
          } else toast.error(`any pictures weren't found`);
        })
        .catch(er => {
          toast.error(`something is wrong, try again`);
        })
        .finally(() => setIsLoading(false));
    }
  }, [page, search]);

  const updateSearch = searchArg => {
    if (search === searchArg) toast.error(`you have alredy found ${searchArg}`);
    else {
      setSearch(searchArg);
      setPage(1);
      setImages([]);
    }
  };
  const updatePage = () => {
    setPage(prev => prev + 1);
  };
  const toggleModal = url => {
    setModal(!modal);
    setModalURL(url);
  };

  return (
    <Wrapper>
      <Toaster position="top-center" reverseOrder={false} />
      <Searchbar updateSearch={updateSearch} />
      <ImageGallery showModal={toggleModal} images={images} />
      {isLoading && <Loader />}
      {isActiveButton && !isLoading && <Button updatePage={updatePage} />}
      {modal && <Modal toggleModal={toggleModal} modalURL={modalURL} />}
    </Wrapper>
  );
};

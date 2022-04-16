import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnSearch, ContainerSearch, ContentBar, ContentInput } from './style';

export const SearchBar = (props) => {
  const navigate = useNavigate();
  const { pathname } = window.location;
  const [value, setValue] = useState('');

  const handleClickSearch = useCallback(() => {
    if (value.length <= 0) return;

    if (pathname.indexOf('/search') < 0) {
      navigate(`/search/${value}`);
    }

    if (props.onChange) props.onChange(value);
  }, [value]);

  const handleKeySearch = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      if (value.length <= 0) return;

      if (pathname.indexOf('/search') < 0) {
        navigate(`/search/${value}`);
      }

      if (props.onChange) props.onChange(value);
    }
  };

  return (
    <ContainerSearch>
      <ContentBar>
        <ContentInput placeholder='Pesquise seu filme aqui...' onKeyUp={handleKeySearch} onChange={debounce((e) => setValue(e.target.value), 500)} />
        <BtnSearch onClick={() => handleClickSearch()}>
          <FontAwesomeIcon icon={faSearch} />
        </BtnSearch>
      </ContentBar>
    </ContainerSearch>
  );
};

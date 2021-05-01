import {IHomePage} from '@Interfaces';
import {IStore} from '@Redux/IStore';
import {ContainerCenter} from '@Styled';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {ApodImage, Container} from './styled';

const Apod: React.FunctionComponent<IHomePage.IProps> = () => {
  const home = useSelector((state: IStore) => state.home);
  return (
    <Container>
      <ContainerCenter>
        {home.image.url === '' ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <ApodImage
            source={{
              uri: home.image.url
            }}
            resizeMode="contain"
          />
        )}
      </ContainerCenter>
    </Container>
  );
};

export default Apod;

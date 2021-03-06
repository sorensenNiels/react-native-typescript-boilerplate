import {HomeActions} from '@Actions';
import {Heading} from '@Components';
import {IHomePage} from '@Interfaces';
import RouterActions from '@Services/RouterActions';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Apod,
  ApodButton,
  ApodText,
  Buttons,
  Centered,
  Container,
  LocaleButtonText,
  Middle
} from './styled';

const pankodLogo = require('static/images/pankod-logo.png');

const styles = StyleSheet.create({
  stretch: {
    width: Dimensions.get('window').width - 50,
    resizeMode: 'contain'
  }
});

const Home: React.FunctionComponent<IHomePage.IProps> = () => {
  const {t, i18n} = useTranslation();

  const dispatch = useDispatch();

  const renderLocaleButtons = (activeLanguage: string) =>
    ['en', 'es', 'tr'].map(lang => (
      <TouchableOpacity key={lang} onPress={() => i18n.changeLanguage(lang)}>
        <LocaleButtonText isActive={activeLanguage === lang}>
          {lang}
        </LocaleButtonText>
      </TouchableOpacity>
    ));

  const handleApod = () => {
    dispatch(
      HomeActions.GetApod({
        params: {hd: false}
      })
    );
    RouterActions.push('Apod');
  };

  return (
    <Container>
      <Image style={styles.stretch} source={pankodLogo} />
      <Middle>
        <Centered>
          <Heading text={t('common:Hello')} />
          <Buttons>{renderLocaleButtons(i18n.language)}</Buttons>
        </Centered>
        <Apod>
          <ApodButton onPress={() => handleApod()}>
            <ApodText>{t('home:Space')}</ApodText>
          </ApodButton>
        </Apod>
      </Middle>
    </Container>
  );
};

export default Home;

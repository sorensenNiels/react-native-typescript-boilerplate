import * as React from 'react';
import {IHeading} from './Heading';
import {BackText, FrontText, TitleText} from './styled';

const Heading: React.FunctionComponent<IHeading.IProps> = props => {
  const {text} = props;

  return (
    <TitleText>
      <FrontText>{text}</FrontText>
      <BackText>{text}</BackText>
    </TitleText>
  );
};

export {Heading};

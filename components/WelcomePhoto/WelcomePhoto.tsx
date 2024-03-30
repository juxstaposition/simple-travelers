import Image from 'next/image';
import React from 'react';
import { Link } from 'UI/Link';
import useScreenSize from 'utils/useScreenSize';
import {
  SWelcomePhoto,
  SWelcomePhotoDivider,
  TitleCatchLine,
  TitleContainer,
  TitleTravelers,
} from './WelcomePhoto.styled';

const WelcomePhoto = () => {
  const { width } = useScreenSize();
  return (
    <SWelcomePhoto>
      <Image
        alt={'welcome-photo'}
        src={`/static/images/${width < 850 ? 'BackgroundSmall' : 'Background'}.jpg`}
        style={{ objectFit: 'cover' }}
        fill
      />
      <SWelcomePhotoDivider>
        <Image
          alt={'welcome-photo-divider'}
          src={'/static/images/BackgroundDivider.png'}
          style={{ objectFit: 'cover' }}
          fill
        />
      </SWelcomePhotoDivider>
      <TitleContainer>
        <Link href="/" passHref>
          <TitleTravelers alt="title" src="/static/icons/SimpleTravelers.svg" />
        </Link>
        <TitleCatchLine>{'Travel simply, simply love traveling'}</TitleCatchLine>
      </TitleContainer>
    </SWelcomePhoto>
  );
};
export default WelcomePhoto;

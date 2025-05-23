import { LogoSimpleTravelers } from 'components/Header/Header.styled';
import Image from 'next/image';
import backgroundPhoto from 'public/static/images/Background.jpg';
import backgroundPhotoSmall from 'public/static/images/BackgroundSmall.jpg';
import React from 'react';
import { Flex, Link, MarginBox } from 'UI';
import { useLarge } from 'utils/useBreakpoint';
import { SWelcomePhoto, SWelcomePhotoDivider, TitleCatchLine, TitleContainer } from './WelcomePhoto.styled';

export const WELCOME_PHOTO_HEIGHT = '330px';
export const WELCOME_PHOTO_DIVIDER_TOP = '270px';

const WelcomePhoto = () => {
  const large = useLarge();
  const backgroundImage = large ? backgroundPhoto : backgroundPhotoSmall;

  return (
    <SWelcomePhoto $height={WELCOME_PHOTO_HEIGHT}>
      <Image alt={'welcome-photo'} src={backgroundImage} style={{ objectFit: 'cover' }} fetchPriority={'high'} fill />
      <SWelcomePhotoDivider $top={WELCOME_PHOTO_DIVIDER_TOP}>
        <Image
          alt={'welcome-photo-divider'}
          src={'/static/images/BackgroundDivider2.png'}
          style={{ objectFit: 'cover' }}
          fetchPriority={'high'}
          fill
        />
      </SWelcomePhotoDivider>
      <TitleContainer>
        <TitleCatchLine>
          <Flex align={'center'} direction={'column'}>
            <MarginBox mt={large ? '8vh' : '0'} />
            {!large && (
              <MarginBox my={24}>
                <Link href={'/'}>
                  <LogoSimpleTravelers
                    $maxHeight={100}
                    alt="simple-travelers-logo"
                    src="/static/icons/SimpleTravelers.svg"
                  />
                </Link>
              </MarginBox>
            )}
            <Flex>{'Cestovateľský blog,'}</Flex>
            <Flex>{'ktorý nakopne tvoju chuť objavovať svet.'}</Flex>
          </Flex>
        </TitleCatchLine>
      </TitleContainer>
    </SWelcomePhoto>
  );
};

export default WelcomePhoto;

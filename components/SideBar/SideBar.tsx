import FacebookPage from 'components/FacebookPage';
import InstagramFeed from 'components/InstagramFeed';
import { SSideBar } from 'components/SideBar/SideBar.styled';
import process from 'process';
import React from 'react';
import Divider from 'UI/Divider';
import { MarginBox } from 'UI/MarginBox';
import useScreenSize from 'utils/useScreenSize';

const SideBar = () => {
  const { width } = useScreenSize();
  return (
    <div style={{ position: 'relative' }}>
      <SSideBar>
        <MarginBox mt={'110vh'} />
        <div style={{ textAlign: 'center' }}>
          <img
            style={{
              margin: '5px',
              width: '20vw',
              minHeight: '20vw',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
            alt="Liv a Dan"
            src="/static/images/photosFull/AboutUs.jpg"
          />
        </div>
        <div className="screen-reader-text">
          <p style={{ fontSize: '1.25em' }}>
            Ahoj, my sme Liv a Dan, dvaja cestovatelia, ktorým dobrodružstvo koluje v žilách. Naše plány vznikajú
            spontánne a čím šialenejšie znejú, tým viac sa pre ich realizáciu nadchneme. Cestujeme na vlastnú päsť,
            výhradne bez cestovky, s batohom na pleciach a častokrát riešime veci za pochodu. Zdieľame naše zážitky,
            skúsenosti a fotografie z ciest, tak aby sme nakopli aj tvoju chuť objavovať svet. Hovorí sa, že: „šťastie
            si za peniaze nekúpiš,“ ale môžeš si kúpiť letenku a to je skoro to isté, no nie?
          </p>
        </div>
        <Divider text="Facebook" />
        <FacebookPage token={process.env.NEXT_PUBLIC_FB_APP_ID} />
        <Divider text="Instagram" />
        <InstagramFeed counter={width < 1250 ? 8 : 9} />
      </SSideBar>
    </div>
  );
};
export default SideBar;

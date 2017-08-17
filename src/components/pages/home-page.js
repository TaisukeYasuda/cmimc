import React from 'react';
import { Parallax } from 'react-materialize';

import Introduction from './home-page/introduction';
import Instructions from './home-page/instructions';
import Sponsors from './home-page/sponsors';

const HomePage = () => (
  <div>
    <Introduction />
    <Parallax imageSrc='assets/img/cmimc-2016-wide.jpg' />
    <Instructions />
    <Parallax imageSrc='assets/img/team-wide.jpg' />
    <Sponsors />
  </div>
);

export default HomePage;

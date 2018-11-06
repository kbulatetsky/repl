import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../homePage/homePage.component';
import PropertyPage from '../propertyPage/propertyPage.component';
import AboutPage from '../aboutPage/aboutPage.component';
import OurServicesPage from '../servicesPage/ourServicesPage.component';
import NewsAndGuidesPage from '../newsAndGuidesPage/newsAndGuidesPage.component';
import SeniorTeamPage from '../seniorTeamPage/seniorTeamPage.component';

export default(
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/property/:propertyId" component={PropertyPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/ourServices" component={OurServicesPage} />
    <Route path="/newsAndGuides" component={NewsAndGuidesPage} />
    <Route path="/seniorTeam" component={SeniorTeamPage} />
  </div>
);

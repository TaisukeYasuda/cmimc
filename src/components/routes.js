import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/home-page';
import FAQPage from './pages/faq-page';
import InformationPage from './pages/information-page';
import ArchivePage from './pages/archive-page';
import StaffPage from './pages/staff-page';

import TermsPage from './pages/terms-page';
import PrivacyPage from './pages/privacy-page';

import NotFoundPage from './pages/not-found-page';

const Routes = () => (  
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/login' component={NotFoundPage}/>
    <Route exact path='/propose' component={NotFoundPage}/>
    <Route path='/faq' component={FAQPage} />
    <Route path='/information' component={InformationPage} />
    <Route path='/archive' component={ArchivePage} />
    <Route path='/staff' component={StaffPage} />

    <Route path='/terms' component={TermsPage} />
    <Route path='/privacy' component={PrivacyPage} />

    <Route path='*' component={NotFoundPage} />
  </Switch>
);

export default Routes;

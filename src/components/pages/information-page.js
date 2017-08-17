import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-materialize';
import { connect } from 'react-redux';

const officialContestInformation = 'docs/Official_Contest_Information.pdf';

const Information = ({ info }) => (
  <div>
    <h4>Information</h4>
    <p>The Carnegie Mellon Informatics and Mathematics Competition (CMIMC) is an annual math and computer science competition held at <a href='http://www.cmu.edu/' target='_blank' className='red-text text-darken-2'>Carnegie Mellon University</a> by CMU students. The CMIMC { info.year || 'N/A' } will be held on { info.contest_date || 'N/A' }. Contestants come in teams of 4-6 to participate in individual and team events. More information can be found in the <a href={ officialContestInformation } className='red-text text-darken-2'>Official Contest Information PDF</a> below. To stay updated, follow our <a href='https://www.facebook.com/CMIMC' target='_blank' className='red-text text-darken-2'>Facebook page</a>.</p>
    <a href={ officialContestInformation } className='waves-effect waves-light btn red darken-2 contest-pdf'>Official Contest PDF</a>
  </div>
);

const ImportantDates = ({ info }) => (
  <div>
    <h5>Important Dates</h5>
    <table className='info-table centered'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ info.registration_open || 'N/A' }</td>
          <td>Registration opens</td>
        </tr>
        <tr>
          <td>{ info.registration_close || 'N/A' }</td>
          <td>Registration closes</td>
        </tr>
        <tr>
          <td>{ info.payment_deadline || 'N/A' }</td>
          <td>Payment deadline</td>
        </tr>
        <tr>
          <td>{ info.contest_date || 'N/A' }</td>
          <td>The contest</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const IndividualRound = () => (
  <div className='card'>
    <div className='card-content'>
      <h5>Individual Rounds</h5>
      <p>Each individual round consists of 10 short-answer problems in 60 minutes. Each competitor takes two individual rounds from the topics of algebra, combinatorics, geometry, number theory, and - most excitingly - the newest computer science round. We saw the lack of computer science in other math competitions, so we figured that CMU would be the perfect place for this to start. The round is designed to have no programming knowledge required. Also, due to the novelty of this field of competition math, we're excited to announce that we have provided sufficient preparation material through <a href='https://www.expii.com/map/9794' target='_blank' className='red-text text-darken-2'>Expii.com</a>, covering all the necessary topics.</p>
    </div>
    <div className='card-image'>
      <img src='assets/img/individual-round.png' />
    </div>
  </div>
);

const TeamRound = () => (
  <div className='card'>
    <div className='card-image'>
      <img src='assets/img/team-round.png' />
    </div>
    <div className='card-content'>
      <h5>Power/Team Rounds</h5>
      <p>In the power round, we present an interesting topic with all of its background information and then pose some proof-based problems exploring the different branches of the topic. It's up to the team to collaboratively solve these problems in 60 minutes.</p><br />
      <p>The team round consists of 10 short-answer problems from all five topics for the team to collaboratively solve in 30 minutes.</p>
    </div>
  </div>
);

const InformationPage = ({ info }) => (
  <div className='section white'>
    <div className='container'>
      <Information info={ info } />
      <ImportantDates info={ info } />
      <Row>
        <Col l={6} s={12}>
          <IndividualRound />
        </Col>
        <Col l={6} s={12}>
          <TeamRound />
        </Col>
      </Row>
    </div>
  </div>
);

InformationPage.propTypes = {
  info: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  info: state.init.info
});

export default connect(mapStateToProps)(InformationPage);

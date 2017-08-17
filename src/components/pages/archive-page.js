import React from 'react';
import PropTypes from 'prop-types';
import { 
  Row, Col, Tabs, Tab, Collection, CollectionItem, Collapsible, CollapsibleItem
} from 'react-materialize';
import { connect } from 'react-redux';

const Problem = ({ subject }) => (
  <div>
    { subject.name } 
    <a 
      target='_self' 
      href={ `/docs/past-tests/${subject.solutions}` } 
      className='secondary-content red-text text-darken-2 solutions-link'>
      Solutions
    </a>
    <a 
      target='_self' 
      href={ `/docs/past-tests/${subject.problems}` } 
      className='secondary-content red-text text-darken-2 problems-link'>
      Problems
    </a>
  </div>
);

const Problems = ({ title, round }) => (
  <div>
    <span className='archive-header'>{ title }</span>
    <Collection>
      {
        round.map((subject, key) => (
          <CollectionItem key={ key }>
            <Problem subject={ subject } />
          </CollectionItem>
        ))
      }
    </Collection>
  </div>
);

const ContestProblems = ({ problems }) => (
  <div>
    {
      problems.map((contest, key) => (
        <div key={ key }>
          <h5>{ contest.year } Problems</h5>
          
          <Row>
            <Col l={6} s={12}>
              <Problems 
                round={ contest.individuals } 
                title='Individuals' />
            </Col>
            <Col l={6} s={12}>
              <Problems 
                round={ contest.others } 
                title='Others' />
            </Col>
          </Row>
        </div>
      ))
    }
  </div>
);

ContestProblems.propTypes = {
  problems: PropTypes.array.isRequired
};

/* helper function for formatting winners */
const commatize = x => {
  let s = x[0];
  for (var i = 1; i < x.length; i++)
    s += ', ' + x[i];
  return s;
};

const Results = ({ title, round }) => (
  <div>
    <span className='archive-header'>{ title }</span>
    <Collapsible>
      {
        round.map((subject, key) => (
          <CollapsibleItem 
            header={(
              <div>
                <i className='fa fa-angle-down' aria-hidden='true'></i>{ subject.name }
              </div>
            )}
            key={ key }>
            <ul className='results-list'>
              {
                Object.keys(subject.results).map((rank, key) => {
                  const winners = subject.results[rank];
                  return (
                    <li key={ key }>
                      { rank }. { commatize(winners) }
                    </li>
                  );
                })
              }
            </ul>
          </CollapsibleItem>
        ))
      }
    </Collapsible>
  </div>
);

const ContestResults = ({ results }) => (
  <div>
    {
      results.map((contest, key) => (
        <div key={ key }>
          <h5>{ contest.year } Results</h5>
          <Row>
            <Col s={12} l={6}>
              <Results title='Individuals' round={ contest.individuals } />
            </Col>
            <Col s={12} l={6}>
              <Results title='Teams' round={ contest.teams } />
            </Col>
          </Row>
        </div>
      ))
    }
  </div>
);

ContestResults.propTypes = {
  results: PropTypes.array.isRequired
};

const Album = ({ album }) => (
  <div className='card'>
    <div className='card-image gallery-thumbnail'>
      <img src={ album.thumbnail } />
      <span className='card-title'>{ album.year } Photos</span>
    </div>
    <div className='card-action'>
      <a href={ album.link } target='_blank' className='red-text text-darken-2'>
        <i className='fa fa-external-link' aria-hidden='true'></i> View
      </a>
    </div>
  </div>
);

const ContestPhotos = ({ photos }) => (
  <div className='col s12 white'>
    <Row>
      {
        photos.map((album, key) => (
          <Col s={3} key={ key }>
            <Album album={ album } />
          </Col>
        ))
      }
    </Row>
  </div>
);

ContestPhotos.propTypes = {
  photos: PropTypes.array.isRequired
};

const ArchivePage = ({ archive }) => (
  archive ? 
  (
    <div className='container'>
      <Tabs>
        <Tab title='Problems' className='grey-text text-darken-4' active>
          <ContestProblems problems={ archive.problems } />
        </Tab>
        <Tab title='Results' className='grey-text text-darken-4'>
          <ContestResults results={ archive.results } />
        </Tab>
        <Tab title='Photos' className='grey-text text-darken-4'>
          <ContestPhotos photos={ archive.photos } />
        </Tab>
      </Tabs>
    </div>
  ) : (
    <div></div>
  )
);

ArchivePage.propTypes = {
  archive: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  archive: state.init.archive
});

export default connect(mapStateToProps)(ArchivePage);

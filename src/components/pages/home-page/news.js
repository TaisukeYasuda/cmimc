import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-materialize';
import { connect } from 'react-redux';

const News = ({ news }) => ( 
  news.news ? (
    <div>
      <h4><i className='fa fa-newspaper-o' aria-hidden='true'></i> News</h4>
      <ul className='news-feed'>
        {
          news.news.map((post, key) => (
            <li key={key}>
              <Row>
                <Col s={1}>
                  <i className='fa fa-rss' aria-hidden='true'></i>
                </Col>
                <Col s={11}>
                  <b>{ post.date }</b><p>{ post.message }</p>
                </Col>
              </Row>
            </li>
          ))
        }
      </ul>
    </div>
  ) : ( <div></div> )
);

News.propTypes = {
  news: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  news: state.init.news
});

export default connect(mapStateToProps)(News);

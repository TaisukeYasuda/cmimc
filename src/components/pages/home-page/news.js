import React from 'react';

class News extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('data/news.json', { method: 'get' })
    .then(res => res.json())
    .then(
      res => { this.setState({ news: res.news }); },
      err => { console.log(err); }
    );
  } 
  
  render() {
    return this.state.news ? (
      <div>
        <h4><i className='fa fa-newspaper-o' aria-hidden='true'></i> News</h4>
        <ul className='news-feed'>
          {
            this.state.news.map((post, key) => (
              <li key={key}>
                <div className='row'>
                  <div className='col s1'>
                    <i className='fa fa-rss' aria-hidden='true'></i>
                  </div>
                  <div className='col s11'>
                    <b>{ post.date }</b><p>{ post.message }</p>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    ) : (
      <div></div>
    );
  }
}

export default News;

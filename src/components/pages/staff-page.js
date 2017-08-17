import React from 'react';

const StaffCard = ({ name, photo, description }) => (
  <div className='col s12 m6 l3'>
    <div className='card'>
      <div className='card-image'>
        <img src={`assets/img/staff/${photo}`} />
      </div>
      <div className='card-content center-align'>
        <span className='card-title'>{ name }</span>
        <p>{ description }</p>
      </div>
    </div>
  </div>
);

class StaffPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('data/staff.json', { method: 'get' })
    .then(res => res.json())
    .then(
      res => { this.setState({ staff: res.staff }); },
      err => { console.log(err); }
    );
  } 

  render() {
    if (!this.state.staff) return (<div></div>);

    const groupSize = 4,
          grouped = this.state.staff
          .map((staff, i) => {
            return i % groupSize === 0 ? 
              this.state.staff.slice(i, i + groupSize) : 
              null;
          })
          .filter(staff => staff),
          staffView = grouped.map((group, key) => 
            <div className='row staff-row' key={ key }>
              {
                group.map((staff, key) => (
                  <StaffCard name={ staff.name } 
                             photo={ staff.photo } 
                             description={ staff.description }
                             key={ key } />
                  )
                )
              }
            </div>
          );

    return (
      <div className='section white'>
        <div className='container'>
        { staffView }
        </div>
      </div>
    );
  }
}

export default StaffPage;

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-materialize';
import { connect } from 'react-redux';

const StaffCard = ({ name, photo, description }) => (
  <Col s={12} m={6} l={3}>
    <div className='card'>
      <div className='card-image'>
        <img src={`assets/img/staff/${photo}`} />
      </div>
      <div className='card-content center-align'>
        <span className='card-title'>{ name }</span>
        <p>{ description }</p>
      </div>
    </div>
  </Col>
);

const StaffPage = ({ staffData }) => {
  if (!staffData) return (<div></div>);

  const groupSize = 4,
        grouped = staffData.staff.map((staff, i) => {
          return i % groupSize === 0 ? 
            staffData.staff.slice(i, i + groupSize) : 
            null;
        })
        .filter(staff => staff),
        staffView = grouped.map((group, key) => 
          <Row className='staff-row' key={ key }>
            {
              group.map((staff, key) => (
                <StaffCard name={ staff.name } 
                           photo={ staff.photo } 
                           description={ staff.description }
                           key={ key } />
                )
              )
            }
          </Row>
        );

  return (
    <div className='section white'>
      <div className='container'>
      { staffView }
      </div>
    </div>
  );
}

StaffPage.propTypes = {
  staffData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  staffData: state.init.staff
});

export default connect(mapStateToProps)(StaffPage);

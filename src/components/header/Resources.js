import React from 'react';
import {connect} from 'react-redux';

import Table from '../details/Table';

const Resources = ({
  resources
}) => {
  return (
    <div>
      <p>剩余磁带机: {resources.tapeDriver} </p>
      <div>
        <h3>分区情况: </h3>
        <Table data={resources.memory} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    resources: state.resources
  };
};

export default connect(mapStateToProps)(Resources);

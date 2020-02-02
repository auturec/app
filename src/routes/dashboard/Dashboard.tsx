import React from 'react';

import './Dashboard.scss';

const Dashboard: React.FC = () => {
  return (
    <div className="columns is-centered is-marginless is-paddingless">
      <div className="column is-two-thirds">
        <div className="dashboard__spacing">This is the dashboard</div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from "../PrivateRoute";
import { logoutUser } from "../../actions/actions";
import NavMenu from "../NavMenu";
import TopHeader from '../TopHeader';
import ReportDashboard from '../ReportDashboard';
import RegentReport from "../RegentReport";

import './styles.scss';
class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMenuItem: 'Dashboard'
    }
  }

  onClickItem = (title) => () => {
    if (title === 'Logout') {
      this.props.logoutUser();
    }
    this.setState({ selectedMenuItem: title });
  };

  render() {
    const { match: { path } } = this.props;
    return (
      <div className="row dashboard">
        <NavMenu onClickItem={this.onClickItem} />
        <div className="flex d-col content-section s8 m9 l10">
          <TopHeader />
          <Switch>
            <PrivateRoute exact path={path} component={ReportDashboard} />
            <PrivateRoute exact path={`${path}/regent-refrigerator`} component={RegentReport} />
          </Switch>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
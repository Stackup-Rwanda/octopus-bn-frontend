import React, { Component } from 'react';
import { Button} from '@material-ui/core';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import styles from '../../styles/dashboard.requests.module.css';
import RequestsTable from '../../components/RequestsTable';
import { connect } from 'react-redux';
import { getRequestsAction } from '../../redux/actions/requestsAction';
import { withRouter, Link } from 'react-router-dom';

class Requests extends Component {
	async componentDidMount() {
		await this.props.getRequestsAction();
	}
	render() {
		return (
			<div>
				<div className={styles.topIntro}>
					<div className={styles.left}>
						<p className={styles.title}>Dashboard - My REQUESTS</p>
						<p className={styles.sub_title}>Travel made easy - Barefoot Nomad</p>
					</div>
					<div className={styles.right}>
						<span>
							<Button
								variant="contained"
								className={styles.button}
								color="primary"
								startIcon={<FlightTakeoffIcon />}
								component={Link}
								to={'/new-trip-request'}
							>
								New Trip Request
						</Button>
						</span>
					</div>
				</div>
				<div className={styles.table}>
					<RequestsTable />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loginSate: state.login
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getRequestsAction: () => dispatch(getRequestsAction())
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Requests));

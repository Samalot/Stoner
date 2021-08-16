import React from "react";
import { createStructuredSelector } from 'reselect';
import { compose } from "redux";
import { connect } from "react-redux";
import { injectIntl } from 'react-intl'
import { getUsername } from '../../utils/duck'
import { types, defaultProps } from './HeaderTypes.js'
import { AppBar, Toolbar, Button } from "react95";

import styles from './Header.module.scss';


const Header = ({
	intl: {
		messages: {
			projectTitle
		}
	},
	username,
}) => {
  return (
		<div className={styles.headerContainer}>
			<AppBar >
				<Toolbar className={styles.appBar}>
					{projectTitle}
				</Toolbar>
			</AppBar>
		</div>
	);
}

Header.propTypes = types;
Header.defaultProps = defaultProps;

const mapStateToProps = createStructuredSelector({
	username: getUsername,
});

const hocChain = compose(
	injectIntl,
	connect(mapStateToProps),
);

export default hocChain(Header);

import React from 'react';

import EDMenuBackgroundView from './EDMenuBackground.view';

interface IProps {}

const EDMenuBackground: React.FC<IProps> = () => {
	return <EDMenuBackgroundView />;
};

EDMenuBackground.displayName = 'EDMenuBackground';
EDMenuBackground.defaultProps = {};

export default React.memo(EDMenuBackground);

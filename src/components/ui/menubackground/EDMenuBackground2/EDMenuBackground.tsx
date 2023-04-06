import React from 'react';

import EDMenuBackgroundView2 from './EDMenuBackground.view';

interface IProps {}

const EDMenuBackground2: React.FC<IProps> = () => {
	return <EDMenuBackgroundView2 />;
};

EDMenuBackground2.displayName = 'EDMenuBackground';
EDMenuBackground2.defaultProps = {};

export default React.memo(EDMenuBackground2);

import React from 'react';

import Contact from '../components/containers/Contact';

interface IProps {}

const ContactPage: React.FC<IProps> = () => {
	return <Contact />;
};

ContactPage.displayName = 'ContactPage';
ContactPage.defaultProps = {};

export default ContactPage;

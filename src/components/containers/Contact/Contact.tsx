import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { backendApi } from '../../../utils/http';
import type { IContactContent } from '../../../interfaces/responses';
import ContactView from './Contact.view';

interface IProps {}

const Contact: React.FC<IProps> = () => {
	const [contactContentState, setContactContentState] = useState<IContactContent | null>(null);
	console.log(contactContentState, 'contactContentState');

	useEffect(() => {
		backendApi
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/contact?populate[0]=clients`)
			.then((response: AxiosResponse) => {
				setContactContentState(() => response.data.data);
			});
	}, [backendApi]);

	const onMapsNavigate = () => {
		window.open('https://goo.gl/maps/CqKs1YLBcp2QWJ3u6', '_blank');
	};

	const onSocialNavigate = (url: string) => {
		window.open(url, '_blank');
	};

	return (
		<ContactView
			contactContent={contactContentState}
			onMapsNavigate={onMapsNavigate}
			onSocialNavigate={onSocialNavigate}
		/>
	);
};

Contact.displayName = 'Contact';
Contact.defaultProps = {};

export default React.memo(Contact);

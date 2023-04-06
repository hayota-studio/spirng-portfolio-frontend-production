import React from 'react';
import SSvg from '../../ui/SSvg';

import classes from './Footer.module.scss';

interface IProps {}

const FooterView: React.FC<IProps> = () => {
	return (
		<div className={classes['container']}>
			<span className={classes['container__subHeaderWeb']}>Ready to level up your productions?</span>
			<span className={classes['container__subHeaderMobile']}>
				Ready to level up
				<br />
				your productions?
			</span>
			<h3 className={classes['container__headerWeb']}>Let’s get started.</h3>
			<h3 className={classes['container__headerMobile']}>
				Let’s
				<br />
				get
				<br />
				started.
			</h3>
			<div className={classes['contactInfoBox']}>
				<span className={classes['contactInfoBox__item']}>Tel Aviv, Israel</span>
				<span className={classes['contactInfoBox__backSlash']}>/</span>
				<button
					className={classes['contactInfoBox__spacialItem']}
					type="button"
					onClick={() => (window.location.href = 'mailto:aviv.shiloh@gmail.com')}
				>
					aviv.shiloh@gmail.com
				</button>
				<span className={classes['contactInfoBox__backSlash']}>/</span>
				<button
					className={classes['contactInfoBox__spacialItem']}
					type="button"
					onClick={() => (window.location.href = 'tel:+972504949449')}
				>
					+972 504949449
				</button>
				<span className={classes['contactInfoBox__backSlash']}>/</span>
				<button
					className={classes['contactInfoBox__item']}
					type="button"
					onClick={() => window.open('https://www.instagram.com/aviv_shiloh/', '_blank')}
				>
					Instagram
				</button>
			</div>
			<button
				className={classes['brandLogo']}
				type="button"
				onClick={() => window.open('https://www.hayota.studio/')}
			>
				<SSvg name="hayotaLogo" className={classes['brandLogo__icon']} />
			</button>
		</div>
	);
};

FooterView.displayName = 'FooterView';
FooterView.defaultProps = {};

export default React.memo(FooterView);

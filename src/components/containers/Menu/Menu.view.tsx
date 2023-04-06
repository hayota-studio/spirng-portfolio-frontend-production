import React from 'react';
import { motion } from 'framer-motion';

import SNavigateBackButton from '../../ui/SNavigateBackButton';
import SSvg from '../../ui/SSvg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

import classes from './Menu.module.scss';

import EDMenuBackground2 from '../../ui/menubackground/EDMenuBackground2';
import { Link } from 'react-router-dom';

interface IProps {
	readonly onNevigateToHome: VoidFunction;
	readonly onNevigateToWorks: VoidFunction;
	readonly onNevigateToAbout: VoidFunction;
	readonly onNevigateToContact: VoidFunction;
	readonly onPressNextImageIndexBg: VoidFunction;
	readonly selectedImageIndex: number;
}

const MenuView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const transition = {
		duration: 0.5,
		ease: 'easeInOut',
		type: 'tween',
	};

	return (
		<motion.section
			className={classes['container']}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={transition}
		>
			<div className={classes['background']}>
				<EDMenuBackground2 />

				<button
					type="button"
					className={classes['bgbutton']}
					onClick={props.onPressNextImageIndexBg}
				/>

				<div className={classes['innerMenu']}>
					<div className={classes['navigateBackButton']}>
						<SNavigateBackButton theme="dark" navigateTo="/" />
					</div>
					<motion.div className={classes['brandLogo']} exit={{ opacity: 0 }}>
						<Link to="/">
							<SSvg name="brandLogo" className={classes['brandLogo__icon']} />
						</Link>
					</motion.div>

					<motion.div className={classes['navigationContainer']} exit={{ opacity: 0 }}>
						<button
							type="button"
							className={classes['navigationContainer__button']}
							onClick={props.onNevigateToHome}
						>
							home
						</button>
						<button
							type="button"
							className={classes['navigationContainer__button']}
							onClick={props.onNevigateToWorks}
						>
							works
						</button>
						<button
							type="button"
							className={classes['navigationContainer__button']}
							onClick={props.onNevigateToAbout}
						>
							about
						</button>
						<button
							type="button"
							className={classes['navigationContainer__button']}
							onClick={props.onNevigateToContact}
						>
							contact
						</button>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

MenuView.displayName = 'MenuView';
MenuView.defaultProps = {};

export default React.memo(MenuView);

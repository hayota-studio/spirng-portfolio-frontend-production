import React from 'react';

import SNavigateBackButton from '../../ui/SNavigateBackButton';
import { IProjectContent } from '../../../interfaces/responses';

import classes from './Project.module.scss';
import ReactPlayer from 'react-player';

interface IProps {
	readonly projectContent: IProjectContent | null;
}

const ProjectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const videoUrl = props.projectContent?.attributes.video;
	const name = props.projectContent?.attributes.name;
	const categories = props.projectContent?.attributes.categories.data;
	const year =
		props.projectContent?.attributes.categories.data[0]?.attributes.createdAt.split('-')[0] ?? '';

	const mediaGallery = props.projectContent?.attributes.media.data;

	const categoriesFirst = props.projectContent?.attributes.categories.data;

	return (
		<section className={classes['container']}>
			<div className={classes['navigateBack']}>
				<SNavigateBackButton theme="light" navigateTo="/" />
			</div>
			<div className={classes['innerVideo']}>
				<ReactPlayer
					url={videoUrl}
					width="100%"
					height="100%"
					muted
					onContextMenu={(e: any) => e.preventDefault()}
				/>
			</div>
			<div className={classes['textContainer']}>
				<div className={classes['firstLine']}>
					<div className={classes['firstLine__name']}>{name}</div>
					<div className={classes['firstLineCategoryAndYear']}>
						<div className={classes['firstLineCategoryAndYear__category']}>
							{categories ? categories[0]?.attributes.name : ''}
						</div>
						<div className={classes['firstLineCategoryAndYear__year']}>{year}</div>
					</div>
				</div>
				<div className={classes['secondLine']}>
					{categoriesFirst
						? categoriesFirst.map((item, i) => {
								const firstCategoryName = item.attributes.name;

								return (
									<div key={i} className={classes['firstCategoryNames']}>
										{firstCategoryName}
									</div>
								);
						  })
						: null}
				</div>
			</div>
			<div className={classes['galleryContainer']}>
				{mediaGallery
					? mediaGallery.map((item, i) => {
							const url = item.attributes.url;
							return (
								<div key={i} className={classes['innerImage']}>
									<img
										className={classes['innerImage__image']}
										src={`${process.env.REACT_APP_BACKEND_URL}${url}`}
										alt="gallery"
									/>
								</div>
							);
					  })
					: null}
			</div>
		</section>
	);
};

ProjectView.displayName = 'ProjectView';
ProjectView.defaultProps = {};

export default React.memo(ProjectView);

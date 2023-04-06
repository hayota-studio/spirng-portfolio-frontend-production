import React from 'react';

import type { ICategory, IType } from '../../../interfaces/responses';
import SCategoryView from './SCategory.view';

interface IProps {
	readonly element: ICategory | IType;
	readonly selectedElements: ICategory[] | IType[];
	readonly onSelectElement: (_: ICategory | IType) => void;
}

const SCategory: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SCategoryView
			element={props.element}
			selectedElements={props.selectedElements}
			onSelectElement={props.onSelectElement}
		/>
	);
};

SCategory.displayName = 'SCategory';
SCategory.defaultProps = {};

export default React.memo(SCategory);

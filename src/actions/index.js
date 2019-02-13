import * as workActions from './workActions';
import * as lightboxActions from './lightboxActions';

const actions = {
	...lightboxActions,
	...workActions
};

export default actions;

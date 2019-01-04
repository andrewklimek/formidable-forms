/**
 * Formidable Forms icon
 */
const { Component } = wp.element;
const { Dashicon } = wp.components;

export default class FormidableIcon extends Component {
	render() {
		if ( formidable_form_selector.icon !== 'svg' ) {
			return <Dashicon icon={ formidable_form_selector.icon } size="120" />
		}

		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 599.68 601.37" width="120" height="120">
				<defs />
				<rect className="cls-1 orange" x="289.64" y="383.96" width="140" height="76" />
				<path className="cls-1" d="M400.21,147H200.12c-17,0-30.48,12.2-30.48,29.31V218h260V147Z" />
				<path className="cls-1" d="M397.86,264H169.64V460h75V340H397.86A32.22,32.22,0,0,0,428,318.56a24.29,24.29,0,0,0,1.66-8.69V264Z" />
				<path className="cls-1" d="M299.84,601.37A300.26,300.26,0,0,1,0,300.68,299.84,299.84,0,1,1,511.85,513.3,297.44,297.44,0,0,1,299.84,601.37Zm0-563A261.94,261.94,0,0,0,38.26,300.68,261.58,261.58,0,1,0,484.8,115.2,259.47,259.47,0,0,0,299.84,38.37Z" />
			</svg>
		);
	}
}
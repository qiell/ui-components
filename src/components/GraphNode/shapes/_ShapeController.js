import React from 'react';

import Shape from './_Shape';

const UNIT_CONTROLLER_PATH = 'm0.17255,-0.39289c-0.02075,-0.01561 -0.09339,-0.03904 -0.19715,-0.03904c-0.25941,0 -0.43581,0.17956 -0.43581,0.46061c0,0.28105 0.1764,0.43719 0.41506,0.43719c0.10377,0 0.18678,-0.01561 0.21791,-0.03904m-0.3113,-1.82684c-0.47732,0 -0.86125,0.12491 -0.86125,0.28105c0,0.16395 0.38393,0.28886 0.86125,0.28886c0.47732,0 0.86125,-0.12491 0.86125,-0.28886c0,-0.15614 -0.38393,-0.28105 -0.86125,-0.28105zm-0.86125,0.28105c0,0 0,1.65509 0,1.65509c0,0.16395 0.38393,0.28886 0.86125,0.28886c0.47732,0 0.86125,-0.12491 0.86125,-0.28886c0,0 0,-1.65509 0,-1.65509';

const renderTemplate = attrs => <path d={UNIT_CONTROLLER_PATH} {...attrs} />;

export default class ShapeController extends React.Component {
  render() {
    return <Shape renderTemplate={renderTemplate} {...this.props} />;
  }
}
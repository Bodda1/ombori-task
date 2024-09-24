import PropTypes from 'prop-types';

import { type Props } from './loader.d';
import { Wrapper } from './Loader.style';

const Loader = ({
  width,
  height,
  thickness,
  outerColor,
  innerColor,
  extendStyle,
  ...props
}: Props) => (
  <Wrapper
    width={width}
    height={height}
    thickness={thickness}
    outerColor={outerColor}
    innerColor={innerColor}
    extendStyle={extendStyle}
    {...props}
  />
);

Loader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  thickness: PropTypes.number,
  outerColor: PropTypes.string,
  innerColor: PropTypes.string,
  extendStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

Loader.defaultProps = {
  width: 60,
  height: 60,
  thickness: 8,
  outerColor: '',
  innerColor: '',
  extendStyle: '',
};

export default Loader;

import PropTypes from 'prop-types';

import { type Props } from './section-divider';
import { Divider, Separator } from './SectionDivider.style';

const SectionDivider = ({
  gap,
  mobileGap,
  withSeparator,
  separatorGap,
  separatorMobileGap,
  borderColor,
}: Props) => (
  <>
    <Divider gap={gap} mobileGap={mobileGap} />
    {withSeparator && (
      <>
        <Separator borderColor={borderColor} />
        <Divider gap={separatorGap} mobileGap={separatorMobileGap} />
      </>
    )}
  </>
);

SectionDivider.propTypes = {
  gap: PropTypes.number.isRequired,
  mobileGap: PropTypes.number,
  withSeparator: PropTypes.bool,
  separatorGap: PropTypes.number,
  separatorMobileGap: PropTypes.number,
  borderColor: PropTypes.string,
};

SectionDivider.defaultProps = {
  mobileGap: 0,
  withSeparator: false,
  separatorGap: 0,
  separatorMobileGap: 0,
  borderColor: '', // If no color is provided will fallback to black is border css style
};

export default SectionDivider;

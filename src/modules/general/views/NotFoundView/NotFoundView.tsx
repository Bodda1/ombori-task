import NotFound from 'assets/images/not-found.gif';
import generalStrings from 'modules/general/strings';
import SectionDivider from 'modules/common/components/SectionDivider';

import {
  NotFoundImgWrapper,
  NotFoundImg,
  NotFoundTitle,
  NotFoundSubTitle,
} from './NotFoundView.style';

const NotFoundView = () => (
  <NotFoundImgWrapper>
    <NotFoundImg src={NotFound} />
    <SectionDivider gap={8} />
    <NotFoundTitle>{generalStrings.notFound.title}</NotFoundTitle>
    <SectionDivider gap={8} />
    <NotFoundSubTitle>{generalStrings.notFound.subTitle}</NotFoundSubTitle>
  </NotFoundImgWrapper>
);

export default NotFoundView;

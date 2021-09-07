import * as React from 'react';
import { useEffect } from 'react';

import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import VerificationLaboratoryPreview from '../components/verificationLaboratory/firstBlock/verificationLaboratory.preview';
import VerificationLaboratoryAchievements from '../components/verificationLaboratory/fouthBlock/verificationLaboratory.achievements';
import VerificationLaboratoryDescription from '../components/verificationLaboratory/secondBlock/verificationLaboratory.description';
import VerificationLaboratoryRequires from '../components/verificationLaboratory/thirdBlock/verificationLaboratory.requires';

const VerificationLaboratory = () => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[1]
      ?.classList.add('active');
  }, []);

  return (
    <LayoutAdditional>
      <Seo title="Поверочные лаборатории" />
      <VerificationLaboratoryPreview />
      <VerificationLaboratoryDescription />
      <VerificationLaboratoryRequires />
      <VerificationLaboratoryAchievements />
    </LayoutAdditional>
  );
};

export default VerificationLaboratory;

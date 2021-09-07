import footerContent from '../constants/footerText';
import h2sDescription from '../constants/h2sText';
import headerContent from '../constants/headerText';
import {
  about,
  akbarys,
  career,
  development,
  h2s,
  partners,
  ppe,
  projects,
  sft,
} from '../constants/mainText';
import sftDescription from '../constants/sftText';

const data = {
  headerContent,
  footerContent,
  pages: {
    main: {
      blocks: [
        akbarys,
        h2s,
        sft,
        ppe,
        about,
        projects,
        development,
        partners,
        career,
      ],
    },
    h2s: {
      blocks: [h2sDescription],
    },
    sft: {
      blocks: [sftDescription],
    }
  },
};

export default data;

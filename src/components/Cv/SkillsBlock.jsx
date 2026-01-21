import { CvBlock, CvCell } from './Cv';
import { FORM_BLOCKS, DUMMY } from '../../config/cvForm';

export default function SkillsBlock({ skills }) {
  return (
    <CvBlock blockName={FORM_BLOCKS.SKILLS}>
      <CvCell className="cell-title">
        <p>{FORM_BLOCKS.SKILLS}</p>
      </CvCell>

      <CvCell className="skills-block">
        <p>{!skills ? DUMMY.skills : skills}</p>
      </CvCell>
    </CvBlock>
  );
}

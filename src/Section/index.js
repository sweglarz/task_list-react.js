import { SectionElement, HeaderBox, SectionHeader} from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (
    <SectionElement>
        <HeaderBox>
            <SectionHeader>{title}</SectionHeader>
            {extraHeaderContent}
        </HeaderBox>
        {body}
    </SectionElement>
);

export default Section;

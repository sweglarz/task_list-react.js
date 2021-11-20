import { SectionElement, HeaderBox, SectionHeader, BorderlessHeader } from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (
    <SectionElement>
        <HeaderBox>
            <BorderlessHeader>{title}</BorderlessHeader>
            {extraHeaderContent}
        </HeaderBox>
        {body}
    </SectionElement>
)

export default Section;
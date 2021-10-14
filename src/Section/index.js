import "./style.css";

const Section = ({ title, extraHeaderContent, body }) => (
    <section className="section">
        <div className="section__headerBox">
            <h2 className="section__header section__header--borderless">{title}</h2>
            {extraHeaderContent}
        </div>
        {body}
    </section>
)

export default Section;
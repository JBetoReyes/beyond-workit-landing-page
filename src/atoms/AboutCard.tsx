export type AboutCardProps = {
    title: string;
    text: string;
    cardNumber: string;
}

const AboutCard = (aboutCardProps: AboutCardProps) => {
    const { title, text, cardNumber } = aboutCardProps;
    return (
        <div className="about-card">
            <div className="about-card__number">{cardNumber}</div>
            <div className="about-card__content | flow">
                <div className="about-card__header | heading-3">{title}</div>
                <div className="about-card__text">{text}</div>
            </div>
        </div>
    )
}

export default AboutCard;
export type CardProps = {
    header: string;
    content: string;
    ctaText: string;
    className?: string;
};

const Card = (cardProps: CardProps) => {
    const { header, content, ctaText, className } = cardProps;
    return (
        <div className={`card ${className ? className : ''}`}>
            <h2 className="card__heading | heading-2">{header}</h2>
            <p className="card__content">{content}</p>
            <button className="card__button | button" data-type="primary">{ctaText}</button>
        </div>
    );
};

export default Card;

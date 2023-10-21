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
            <img className="card__pattern" src="/assets/images/bg-pattern-3.svg" alt="decorative pattern" />
        </div>
    );
};

export default Card;

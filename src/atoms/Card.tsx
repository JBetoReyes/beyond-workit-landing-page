export type CardProps = {
    header: string;
    content: string;
    ctaText: string;
};

const Card = (cardProps: CardProps) => {
    const { header, content, ctaText } = cardProps;
    return (
        <>
            <h2 className="card__header">{header}</h2>
            <p className="card__content">{content}</p>
            <button className="button" data-type="primary">{ctaText}</button>
        </>
    );
};

export default Card;

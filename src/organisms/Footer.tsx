const Footer = () => {
    const iconList = [
        "facebook",
        "instagram",
        "twitter",
    ];
    return (
        <footer className="footer">
            <div className="footer__container | flow">
                <img className="footer__logo" src="/assets/images/logo-dark.svg" alt="logo" />
                <div className="footer__icon-list">
                    {iconList.map((icon) => (
                        <a href="">
                            <img
                                key={icon}
                                className="footer__icon"
                                src={`/assets/images/icon-${icon}.svg`}
                                alt={`${icon} icon`}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )

}

export default Footer;
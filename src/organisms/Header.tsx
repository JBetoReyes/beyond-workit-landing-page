import SecondaryButton from "../atoms/SecondaryButton";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container | container ">
                <div className="header__logo">
                    <img
                        src="/assets/images/logo-light.svg"
                        alt="workit logo"
                        className="header__logo-image"
                    />
                </div>
                <SecondaryButton>Apply for access</SecondaryButton>
            </div>
        </header>
    );
};

export default Header;

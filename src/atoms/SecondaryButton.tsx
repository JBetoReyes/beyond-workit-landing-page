type SecondaryButtonProps = {
    children: React.ReactNode;
};

const SecondaryButton = ({ children }: SecondaryButtonProps) => {
    return (
        <button className="button | text-underline" data-type="secondary">
            {children}
        </button>
    );
};

export default SecondaryButton;

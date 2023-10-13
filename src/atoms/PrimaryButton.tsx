type PrimaryButtonProps = {
    children: React.ReactNode;
};

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
    return (
        <button className="button" data-type="primary">
            {children}
        </button>
    );
};

export default PrimaryButton;

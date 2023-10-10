import Header from "../organisms/Header";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {
                children
            }
        </>
    )
}

export default Layout;
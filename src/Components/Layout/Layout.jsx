import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";


export const Layout = ({children}) => {
    return (
    <div>
    <Navbar />
    {children}
    <Footer/>
    </div>
    );
};

export default Layout
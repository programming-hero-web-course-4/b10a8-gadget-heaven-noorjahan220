import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import './Root.css';
import  { Toaster } from 'react-hot-toast';

const Root = () => {

      



    return (
      
        <div className="max-w-[90%] mx-auto sora-font">
          <Toaster />
          <NavBar></NavBar>  
          <div className="min-h-[calc(100vh-332px)]">
            <Outlet>

            </Outlet>
            </div>
          <Footer></Footer>
        </div>
    );
};

export default Root;
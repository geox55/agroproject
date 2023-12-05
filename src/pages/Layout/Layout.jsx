import { Stack } from "@mui/material";
import Header from "../Header/Header";

const Layout = ({children}) => {
  
    return (
        <Stack>
            <Header />
            {children}
        </Stack>
    );
  };
  
  export default Layout;
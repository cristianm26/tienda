import Navbar from './Navbar';
const Layout = ({children}) => {
    return (
        <>  
      
        <Navbar />
        {children}
        <style jsx global>{`
            html, body{
                margin:0;
                padding:0;
            }
            ul{
                list-style-type: none; 
            }
        `} </style>
    </>
    )
}

export default Layout


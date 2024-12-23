import React from 'react';
import Navbar from './Navbar'; // Navbar bileşenini içe aktarın

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar /> {/* Navbar her sayfada gösterilecek */}
            <main>{children}</main> {/* Sayfa içeriği buraya yerleştirilir */}
        </div>
    );
};

export default Layout;

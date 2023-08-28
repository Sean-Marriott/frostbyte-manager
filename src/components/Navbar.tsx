const Navbar = () => {
    return (
        <aside>
            <div className="toggle">
                <div className="logo">
                    <img src="images/logo.png" />
                    <h2>FrostByte<span className="primary">PCs</span></h2>
                </div>
                <div className="close" id="close-btn">
                    <span className="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>

            <div className="sidebar">
                <a href="#" className="active">
                    <span className="material-icons-sharp">
                        dashboard
                    </span>
                    <h3>Dashboard</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        build_circle
                    </span>
                    <h3>Build</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        receipt_long
                    </span>
                    <h3>Past Orders</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        inventory_2
                    </span>
                    <h3>Inventory</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        local_shipping
                    </span>
                    <h3>Shipping</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        insights
                    </span>
                    <h3>Analytics</h3>
                </a>
            </div>
        </aside>
    );
}

export default Navbar;
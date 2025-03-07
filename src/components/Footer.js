import logo from '../img/hafiz-logo-02-02.png';

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img src={logo} alt="logo" width="50" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center">&copy; {new Date().getFullYear()} hafiz. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>)
}
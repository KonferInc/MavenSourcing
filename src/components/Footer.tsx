import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-copyright">
                    Maven Sourcing &copy; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}

export default Footer


function Header() {
    const headerStyle = {
        fontFamily: 'Teko',
    }
    return(
        <header className="header" style={headerStyle}>
            <div className="name">JENVER VINCE INOJALES</div>
            <nav>
                <div><a href="#about">ABOUT&nbsp;ME</a></div>
                <div><a href="#skills">SKILLS</a></div>
                <div><a href="#projects">PROJECTS</a></div>
                <div><a href="#contacts">CONTACT</a></div>
            </nav>
        </header>
    );
}

export default Header
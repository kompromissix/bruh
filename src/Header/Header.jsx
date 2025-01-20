import './Header.scss'
import logo from './Header-assets/logo.png'
import burg from './Header-assets/ic_menu_48px.png'
import illust from './Header-assets/illustration.png'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <img src={logo} alt="" />
                    <img src={burg} alt="" />
                </nav>
                <div className='header_div'>
                        <h1>New Automation
                        Tool for Your Home</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
                        <button type="button">See Our Project</button>
                </div>
                <div className='absolut_img'>
                    <div>
                        <img src={illust} alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}
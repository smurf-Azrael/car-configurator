import { ReactComponent as LogoIcon } from '../assets/images/icons/Logo.svg'
import { ReactComponent as GitHubIcon } from '../assets/images/icons/GitHub.svg'

function Header({ children }) {
    return (
        <div id='header'>
            <h1>
                <LogoIcon className='icon' />
                <strong>Options</strong>
            </h1>
            {children}
            <div className='actions'>
                <a target='_blank' href='https://github.com/miltonjohnston/car-configurator' title='GitHub'>
                    <GitHubIcon className='icon' />
                </a>
            </div>
        </div>
    )
}

export default Header

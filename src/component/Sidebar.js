import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/profile' >Profile</Link></li>
                    <li><Link to='/messages' >messages</Link></li>
                    <li><Link to='/post' >post</Link></li>
                    <li><Link to='/feed' >feed</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;

import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsYcoRjP4PUOjV_S-j9cSfD8C3RyK1JVOVmQ&usqp=CAU'/>
            </header>
            <nav className='nav'>
                <div>
                    <a> Menu</a>
                </div>
                <div>
                    <a> Messages</a>
                </div>
                <div>
                    <a> News</a>
                </div>
                <div>
                    <a> Music</a>
                </div>
                <div>
                    <a> Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src='https://copyblogger.com/cdn-origin/images/long_road_to_nowhere.jpg'/>
                </div>
                <div>
                    ava+description
                    <img src='https://img.myloview.com/posters/rocket-logo-design-template-idea-700-190811052.jpg'/>
                </div>
                <div>
                    My post
                    <div>
                        new post
                    </div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>


            </div>
        </div>);
}

export default App;

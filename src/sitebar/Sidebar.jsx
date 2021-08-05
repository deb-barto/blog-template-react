import "./sidebar.css"

export default function sidebar() {
    return (
        <div className="sidebar">
          <div className="sidebarItem">
              <span className="logo">
                    <img src="https://logo.com" alt="logo"/>
              </span>
          </div>


            <div className="sidebarItem">
                <p>lorem ipsum dolor sit amet, con lorem nib, lorem ipsum dolor sit amet</p>
            </div>

            <div className="sidebarItem">
              <span className="sidebarTittle">
                    <a href="https://dsdsd "><p>adrianvalentim@gmail.com</p></a>
              </span>
          </div>


            <div className="sidebarItems">
                <span className="sidebarItem">
                        <p>Categories</p>
                </span>
                <ul className="sidebarList">    
                    <ul className="sidebarItems">
                        memes
                        <ul className="sidebarItems">memes</ul>
                        <ul className="sidebarItems">memes</ul>
                        <ul className="sidebarItems">memes</ul>
                    </ul>
                    <ul className="sidebarItems">
                        memes
                        <ul className="sidebarItems">memes</ul>
                        <ul className="sidebarItems">memes</ul>
                        <ul className="sidebarItems">memes</ul>
                    </ul>
                    <ul className="sidebarItems">
                        memes
                        <ul className="sidebarItems">memes</ul>
                        <ul className="sidebarItems">memes</ul>
                        <ul className="sidebarItems">memes</ul>
                    </ul>                
                </ul>
            </div>

            <div className="sidebarItems">
                <ul className="sidebarSocial">    
                    <li className="sidebarItems">youtube</li>
                    <li className="sidebarItems">linkedin</li>
                    <li className="sidebarItems">GitHub</li>
                </ul>
            </div>
        </div>
    )
}

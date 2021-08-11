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
                    <a><p>adrianvalentim@gmail.com</p></a>
              </span>
          </div>


            <div className="sidebarItems">
                <span className="sidebarItem">
                        <p>Categories</p>
                </span>
                <details>
                <summary>Epcot Center</summary>
                <details>
                        <summary className="sumary">Epcot Center</summary>
                                <details>
                                <summary className="sumary2">Epcot Center</summary>
                                    <a className="sumary2" href="">ola</a>
                                </details>
                        </details>
                </details>
                <details>
                <summary>Epcot Center</summary>
                <details>
                        <summary>  Epcot Center</summary>
                                <details>
                                <summary>Epcot Center</summary>
                                    <a href="#">ola</a>
                                </details>
                        </details>
                </details>
                <details>
                <summary>Epcot Center</summary>
                <details>
                        <summary>  Epcot Center</summary>
                                <details>
                                <summary>Epcot Center</summary>
                                    <a href="#">ola</a>
                                </details>
                        </details>
                </details>
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

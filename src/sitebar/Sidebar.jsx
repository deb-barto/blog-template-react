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
                <span className="aboutMe">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quaerat numquam, cum consequuntur ullam excepturi delectus eum molestias fugit odit iure quia.</p>
                </span>
            </div>
            <div className="categories">
                <span className="aboutMe">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quaerat numquam, cum consequuntur ullam excepturi delectus eum molestias fugit odit iure quia.</p>
                </span>
            </div>
        </div>
    )
}

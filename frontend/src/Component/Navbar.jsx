import "./Navbar.css"

export const Navbar = ()=>{
    return(
        <div className="outerNavbar">
            <div className="bold">Home</div>
            <div>
                <input placeholder="Enter Teacher name"  />
                <button>Search</button>
            </div>
            <div className="bold">
                Admin
            </div>
        </div>
    )
}
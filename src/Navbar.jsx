const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button>🍕 Home</button>

        {token ? (
          <>
            <button>🔓 Profile</button>
            <button>🔒 Logout</button>
          </>
        ) : (
          <>
            <button>🔐 Login</button>
            <button>🔐 Register</button>
          </>
        )}
      </div>

      <div className="nav-right">
        <button>🛒 Total: ${total.toLocaleString('es-CL')}</button>
      </div>
    </nav>
  )
}

export default Navbar
function Topbar() {
  return (
    <header className="topbar">

      <div>
        <h6>Dashboard</h6>
        <span>Monday, September 14, 2026</span>
      </div>

      <div className="topbar-actions">

        <button className="icon-button">
          <i className="bi bi-bell"></i>
          <span className="notification-dot"></span>
        </button>

        <div className="topbar-user">

          <div className="user-avatar">
            GS
          </div>

          <div className="d-none d-md-block">
            <strong>Gurpreet</strong>
            <small>Administrator</small>
          </div>

          <i className="bi bi-chevron-down"></i>

        </div>

      </div>

    </header>
  )
}

export default Topbar
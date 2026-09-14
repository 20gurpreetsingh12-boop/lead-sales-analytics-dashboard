function MetricCard({ title, value, icon, change }) {
  return (
    <div className="metric-card">

      <div className="metric-card-top">

        <p className="metric-title">
          {title}
        </p>

        <div className="metric-icon">
          <i className={`bi ${icon}`}></i>
        </div>

      </div>

      <h2 className="metric-value">
        {value}
      </h2>

      <p className="metric-change">
        <i className="bi bi-arrow-up"></i>
        {change} vs last month
      </p>

    </div>
  )
}

export default MetricCard
import { useState } from 'react'

function LeadTable({
  leads,
  onDelete,
  onEdit
}) {

  const [search, setSearch] = useState('')

  const [status, setStatus] = useState('All')


  const filteredLeads = leads.filter((lead) => {

    const searchText = search.toLowerCase()


    const matchesSearch =
      lead.name
        .toLowerCase()
        .includes(searchText) ||

      lead.company
        .toLowerCase()
        .includes(searchText) ||

      lead.salesRep
        .toLowerCase()
        .includes(searchText)


    const matchesStatus =
      status === 'All' ||
      lead.status === status


    return (
      matchesSearch &&
      matchesStatus
    )

  })


  return (

    <div className="lead-table">


      {/* TABLE HEADER */}

      <div className="d-flex justify-content-between align-items-center mb-3">

        <h3>
          Recent Leads
        </h3>

        <span className="text-muted">
          {filteredLeads.length} leads
        </span>

      </div>


      {/* FILTERS */}

      <div className="row g-2 mb-3">

        <div className="col-md-8">

          <input
            type="text"
            className="form-control"
            placeholder="Search name, company or sales rep..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <div className="col-md-4">

          <select
            className="form-select"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >

            <option value="All">
              All Statuses
            </option>

            <option value="New">
              New
            </option>

            <option value="Contacted">
              Contacted
            </option>

            <option value="Qualified">
              Qualified
            </option>

            <option value="Converted">
              Converted
            </option>

          </select>

        </div>

      </div>


      {/* TABLE */}

      <div className="table-responsive">

        <table className="table align-middle">

          <thead>

            <tr>

              <th>Name</th>

              <th>Company</th>

              <th>Source</th>

              <th>Status</th>

              <th>Sales Rep</th>

              <th>Value</th>

              <th>Actions</th>

            </tr>

          </thead>


          <tbody>

            {filteredLeads.length > 0 ? (

              filteredLeads.map((lead) => (

                <tr key={lead.id}>


                  <td>
                    <strong>
                      {lead.name}
                    </strong>
                  </td>


                  <td>
                    {lead.company}
                  </td>


                  <td>
                    {lead.source}
                  </td>


                  <td>

                    <span
                      className={`status-badge status-${lead.status.toLowerCase()}`}
                    >
                      {lead.status}
                    </span>

                  </td>


                  <td>
                    {lead.salesRep}
                  </td>


                  <td>
                    ₹{lead.value.toLocaleString()}
                  </td>


                  <td>

                    <div className="d-flex gap-2">

                      {/* EDIT */}

                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() =>
                          onEdit(lead)
                        }
                        title="Edit lead"
                      >

                        <i className="bi bi-pencil"></i>

                      </button>


                      {/* DELETE */}

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() =>
                          onDelete(lead.id)
                        }
                        title="Delete lead"
                      >

                        <i className="bi bi-trash"></i>

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="7"
                  className="text-center py-4 text-muted"
                >
                  No leads found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  )
}

export default LeadTable
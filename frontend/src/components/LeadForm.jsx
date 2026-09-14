import { useEffect, useState } from 'react'

function LeadForm({
  onAddLead,
  onUpdateLead,
  onClose,
  editingLead
}) {

  const [form, setForm] = useState({
    name: '',
    company: '',
    source: 'Website',
    status: 'New',
    value: '',
    salesRep: 'Aman'
  })


  // Load existing lead when editing
  useEffect(() => {

    if (editingLead) {

      setForm({
        name: editingLead.name,
        company: editingLead.company,
        source: editingLead.source,
        status: editingLead.status,
        value: editingLead.value,
        salesRep: editingLead.salesRep
      })

    } else {

      setForm({
        name: '',
        company: '',
        source: 'Website',
        status: 'New',
        value: '',
        salesRep: 'Aman'
      })

    }

  }, [editingLead])


  // Handle input changes
  const handleChange = (e) => {

    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value
    }))

  }


  // Submit form
  const handleSubmit = (e) => {

    e.preventDefault()


    // Basic validation
    if (
      !form.name.trim() ||
      !form.company.trim() ||
      !form.value
    ) {
      return
    }


    // UPDATE
    if (editingLead) {

      const updatedLead = {

        id: editingLead.id,

        name: form.name,

        company: form.company,

        source: form.source,

        status: form.status,

        value: Number(form.value),

        salesRep: form.salesRep

      }

      onUpdateLead(updatedLead)

      return
    }


    // CREATE
    const newLead = {

      id: Date.now(),

      name: form.name,

      company: form.company,

      source: form.source,

      status: form.status,

      value: Number(form.value),

      salesRep: form.salesRep

    }


    onAddLead(newLead)

  }


  return (

    <div
      className="modal d-block"
      tabIndex="-1"
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}
    >

      <div className="modal-dialog modal-dialog-centered">

        <div className="modal-content">


          {/* HEADER */}

          <div className="modal-header">

            <h5 className="modal-title">

              {editingLead
                ? 'Edit Lead'
                : 'Add New Lead'}

            </h5>


            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>

          </div>


          {/* FORM */}

          <form onSubmit={handleSubmit}>

            <div className="modal-body">


              {/* NAME */}

              <div className="mb-3">

                <label className="form-label">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter lead name"
                  value={form.name}
                  onChange={handleChange}
                />

              </div>


              {/* COMPANY */}

              <div className="mb-3">

                <label className="form-label">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  className="form-control"
                  placeholder="Enter company"
                  value={form.company}
                  onChange={handleChange}
                />

              </div>


              {/* SOURCE + STATUS */}

              <div className="row">

                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Source
                  </label>

                  <select
                    name="source"
                    className="form-select"
                    value={form.source}
                    onChange={handleChange}
                  >

                    <option>Website</option>

                    <option>Referral</option>

                    <option>Cold Outreach</option>

                    <option>LinkedIn</option>

                  </select>

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Status
                  </label>

                  <select
                    name="status"
                    className="form-select"
                    value={form.status}
                    onChange={handleChange}
                  >

                    <option>New</option>

                    <option>Contacted</option>

                    <option>Qualified</option>

                    <option>Converted</option>

                  </select>

                </div>

              </div>


              {/* VALUE + SALES REP */}

              <div className="row">

                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Lead Value
                  </label>

                  <input
                    type="number"
                    name="value"
                    className="form-control"
                    placeholder="50000"
                    value={form.value}
                    onChange={handleChange}
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Sales Rep
                  </label>

                  <select
                    name="salesRep"
                    className="form-select"
                    value={form.salesRep}
                    onChange={handleChange}
                  >

                    <option>Aman</option>

                    <option>Priya</option>

                    <option>Rahul</option>

                  </select>

                </div>

              </div>

            </div>


            {/* FOOTER */}

            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>


              <button
                type="submit"
                className="btn btn-primary"
              >

                <i
                  className={`bi ${
                    editingLead
                      ? 'bi-check-lg'
                      : 'bi-plus-lg'
                  } me-2`}
                ></i>

                {editingLead
                  ? 'Update Lead'
                  : 'Add Lead'}

              </button>

            </div>

          </form>

        </div>

      </div>

    </div>

  )
}

export default LeadForm
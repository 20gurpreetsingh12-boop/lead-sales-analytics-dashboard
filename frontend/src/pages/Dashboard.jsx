import { useState } from 'react'
import initialLeads from '../data/leads'
import MetricCard from '../components/MetricCard'
import LeadTable from '../components/LeadTable'
import LeadForm from '../components/LeadForm'

function Dashboard() {

  const [leads, setLeads] = useState(initialLeads)

  const [showForm, setShowForm] = useState(false)

  const [editingLead, setEditingLead] = useState(null)

  // -----------------------------
  // ADD LEAD
  // -----------------------------
  const addLead = (newLead) => {

    setLeads((prevLeads) => [
      newLead,
      ...prevLeads
    ])

    setShowForm(false)
  }


  // -----------------------------
  // DELETE LEAD
  // -----------------------------
  const deleteLead = (id) => {

    setLeads((prevLeads) =>
      prevLeads.filter(
        (lead) => lead.id !== id
      )
    )
  }


  // -----------------------------
  // OPEN EDIT FORM
  // -----------------------------
  const editLead = (lead) => {

    setEditingLead(lead)

    setShowForm(true)
  }


  // -----------------------------
  // UPDATE LEAD
  // -----------------------------
  const updateLead = (updatedLead) => {

    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === updatedLead.id
          ? updatedLead
          : lead
      )
    )

    setEditingLead(null)

    setShowForm(false)
  }


  // -----------------------------
  // CLOSE FORM
  // -----------------------------
  const closeForm = () => {

    setShowForm(false)

    setEditingLead(null)
  }


  // -----------------------------
  // DYNAMIC METRICS
  // -----------------------------

  const totalLeads = leads.length

  const qualifiedLeads = leads.filter(
    (lead) => lead.status === 'Qualified'
  ).length

  const convertedLeads = leads.filter(
    (lead) => lead.status === 'Converted'
  ).length

  const conversionRate =
    totalLeads > 0
      ? `${((convertedLeads / totalLeads) * 100).toFixed(1)}%`
      : '0%'


  const metrics = [
    {
      title: 'Total Leads',
      value: totalLeads,
      icon: 'bi-people',
      change: '+12.5%'
    },
    {
      title: 'Qualified Leads',
      value: qualifiedLeads,
      icon: 'bi-person-check',
      change: '+8.2%'
    },
    {
      title: 'Converted Leads',
      value: convertedLeads,
      icon: 'bi-check-circle',
      change: '+15.4%'
    },
    {
      title: 'Conversion Rate',
      value: conversionRate,
      icon: 'bi-graph-up-arrow',
      change: '+2.1%'
    }
  ]


  return (
    <div className="dashboard-content">

      {/* HEADER */}

      <div className="dashboard-header">

        <div>

          <h1>
            Good evening, Gurpreet 👋
          </h1>

          <p>
            Here's what's happening with your leads today.
          </p>

        </div>


        <button
          className="btn btn-primary"
          onClick={() => {
            setEditingLead(null)
            setShowForm(true)
          }}
        >

          <i className="bi bi-plus-lg me-2"></i>

          Add Lead

        </button>

      </div>


      {/* METRICS */}

      <div className="row g-3">

        {metrics.map((metric) => (

          <div
            key={metric.title}
            className="col-12 col-md-6 col-lg-3"
          >

            <MetricCard
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              change={metric.change}
            />

          </div>

        ))}

      </div>


      {/* LEAD TABLE */}

      <LeadTable
        leads={leads}
        onDelete={deleteLead}
        onEdit={editLead}
      />


      {/* FORM MODAL */}

      {showForm && (

        <LeadForm
          onAddLead={addLead}
          onUpdateLead={updateLead}
          onClose={closeForm}
          editingLead={editingLead}
        />

      )}

    </div>
  )
}

export default Dashboard
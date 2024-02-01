// src/components/Chart.js
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

const Chart = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('/api/data')
      .then((response) => response.json())
      .then((result) => {
        setData(result)
      })
  }, [])

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Chart</h2>
      <Bar data={data} />
    </div>
  )
}

export default Chart

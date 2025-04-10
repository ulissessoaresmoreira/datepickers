'use client'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

export default function ReactDatepickerPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-6 ">
      <h1 className="text-xl font-semibold ">React Datepicker</h1>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        className="border p-2 rounded bg-red-100"
      />
      <p>
        Data selecionada:{' '}
        <strong>{selectedDate ? selectedDate.toLocaleDateString() : 'Nenhuma'}</strong>
      </p>
    </div>
  )
}

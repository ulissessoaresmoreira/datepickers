'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 bg-gray-50">
      <h1 className="text-2xl font-semibold">Testes de Date Pickers</h1>
      <div className="grid gap-4">
        <button
          onClick={() => router.push('/routes/react-datepicker')}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          React Datepicker
        </button>
        <button
          onClick={() => router.push('/routes/react-day-picker')}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          React Day Picker
        </button>
        <button
          onClick={() => router.push('/routes/mui')}
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          MUI Date Picker
        </button>
        <button
          onClick={() => router.push('/routes/react-calendar')}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          React Calendar
        </button>
      </div>
    </main>
  )
}

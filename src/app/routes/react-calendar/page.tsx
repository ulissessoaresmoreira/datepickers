// "use client";

// import { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // Importa os estilos

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

// function MyApp() {
//   const [value, onChange] = useState<Value>(new Date());

//   return (
//     <div>
//       <Calendar onChange={onChange} value={value} />
//     </div>
//   );
// }

// export default MyApp;



// "use client";

// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./styles.css"; // seu arquivo com a classe "highlight"

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

// const highlightedDates = [
//   new Date(9, 4, 2025),  // 9 de abril de 2025
//   new Date(2025, 3, 10), // 10 de abril de 2025
//   new Date(2025, 3, 15), // 15 de abril de 2025
// ];

// function isSameDay(date1: Date, date2: Date) {
//   return (
//     date1.getFullYear() === date2.getFullYear() &&
//     date1.getMonth() === date2.getMonth() &&
//     date1.getDate() === date2.getDate()
//   );
// }

// function MyApp() {
//   const [value, onChange] = useState<Value>(new Date());

//   return (
//     <div>
//       <Calendar
//         onChange={onChange}
//         value={value}
//         tileClassName={({ date, view }) => {
//           if (
//             view === "month" &&
//             highlightedDates.some((highlighted) => isSameDay(date, highlighted))
//           ) {
//             return "highlight";
//           }
//           return "";
//         }}
//       />
//     </div>
//   );
// }

// export default MyApp;



// "use client";

// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./styles.css";
// import CalendarWithHighlights from "@/components/CalendarWithHighlights";

// // Lista de datas destacadas
// const highlightedDates = [
//   new Date(2025, 4, 9),
//   new Date(2025, 4, 10),
//   new Date(2025, 4, 15),
// ];
// type Value = Date | null | [Date | null, Date | null];

// // Função para comparar datas (sem considerar horas)
// function isSameDay(d1: Date, d2: Date) {
//   return (
//     d1.getFullYear() === d2.getFullYear() &&
//     d1.getMonth() === d2.getMonth() &&
//     d1.getDate() === d2.getDate()
//   );
// }

// export default function MyApp() {
//     const [value, setValue] = useState<Date | null>(new Date(2025, 3, 1)); // Valor pode ser null
  
//     return (
 
//     <main className="min-h-screen bg-gray-100 flex items-center justify-center">
//     <CalendarWithHighlights highlightedDates={highlightedDates}  />
//     {/* <div className="calendar-container">
//         <Calendar
//           onChange={(val) => setValue(val as Date)} // Convertendo para Date
//           value={value}
//           tileClassName={({ date, view }) =>
//             view === "month" &&
//             highlightedDates.some((d) => isSameDay(d, date))
//               ? "highlight"
//               : ""
//           }
//         />
//       </div> */}
//   </main>
//     );
//   }


// "use client";

// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./styles.css";

// // Lista de datas destacadas
// const highlightedDates = [
//   new Date(2025, 3, 9),  // 9 de abril de 2025
//   new Date(2025, 3, 10), // 10 de abril de 2025
//   new Date(2025, 3, 15), // 15 de abril de 2025
// ];

// type Value = Date | null;

// // Função para comparar datas (sem considerar horas)
// function isSameDay(d1: Date, d2: Date) {
//   return (
//     d1.getFullYear() === d2.getFullYear() &&
//     d1.getMonth() === d2.getMonth() &&
//     d1.getDate() === d2.getDate()
//   );
// }

// export default function MyApp() {
//   const [value, setValue] = useState<Date | null>(new Date(2025, 3, 1)); // Valor inicial

//   return (
//     <main className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="calendar-container">
//         <Calendar
//           onChange={(val) => setValue(val as Date)} // Atualiza o valor do calendário
//           value={value}
//           tileClassName={({ date }) => 
//             highlightedDates.some((d) => isSameDay(d, date)) ? "highlighted-day" : ""
//           }
//         />
//       </div>
//     </main>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./styles.css";

// // Função mock para simular o fetch das datas
// function fetchHighlightedDays() {
//   return new Promise<Date[]>((resolve) => {
//     setTimeout(() => {
//       // Simulando o retorno das datas do servidor
//       const serverDates = [
//         new Date(2025, 2, 10),  // 10 de março de 2025
//         new Date(2025, 3, 16),  // 16 de abril de 2025
//         new Date(2025, 5, 10),  // 10 de junho de 2025
//       ];
//       resolve(serverDates);
//     }, 1000); // Simula um delay de 1 segundo para o "fetch"
//   });
// }

// type Value = Date | null;

// // Função para comparar datas (sem considerar horas)
// function isSameDay(d1: Date, d2: Date) {
//   return (
//     d1.getFullYear() === d2.getFullYear() &&
//     d1.getMonth() === d2.getMonth() &&
//     d1.getDate() === d2.getDate()
//   );
// }

// export default function MyApp() {
//   const [value, setValue] = useState<Date | null>(new Date(2025, 3, 1)); // Valor inicial
//   const [highlightedDates, setHighlightedDates] = useState<Date[]>([]); // Datas a destacar

//   useEffect(() => {
//     // Simulando a requisição do servidor
//     fetchHighlightedDays().then((dates) => {
//       setHighlightedDates(dates); // Atualiza as datas destacadas
//     });
//   }, []); // Apenas uma vez no carregamento

//   return (
//     <main className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="calendar-container">
//         <Calendar
//           onChange={(val) => setValue(val as Date)} // Atualiza o valor do calendário
//           value={value}
//           tileClassName={({ date }) =>
//             highlightedDates.some((d) => isSameDay(d, date)) ? "highlighted-day" : ""
//           }
//         />
//       </div>
//     </main>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";

// Função mock para simular o fetch das datas
function fetchHighlightedDays() {
  return new Promise<Date[]>((resolve) => {
    setTimeout(() => {
      // Simulando o retorno das datas do servidor
      const serverDates = [
        new Date(2025, 2, 10),  // 10 de março de 2025
        new Date(2025, 3, 12),  // 16 de abril de 2025
        new Date(2025, 3, 13),  // 16 de abril de 2025
        new Date(2025, 3, 16),  // 16 de abril de 2025
        new Date(2025, 3, 17),  // 16 de abril de 2025
        new Date(2025, 3, 18),  // 16 de abril de 2025
        new Date(2025, 3, 19),  // 16 de abril de 2025
        new Date(2025, 5, 10),  // 10 de junho de 2025
      ];
      resolve(serverDates);
    }, 1000); // Simula um delay de 1 segundo para o "fetch"
  });
}

type Value = Date | null;

// Função para comparar datas (sem considerar horas)
function isSameDay(d1: Date, d2: Date) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export default function MyApp() {
  const [value, setValue] = useState<Date | null>(new Date(2025, 3, 1)); // Valor inicial
  const [highlightedDates, setHighlightedDates] = useState<Date[]>([]); // Datas a destacar

  useEffect(() => {
    // Simulando a requisição do servidor
    fetchHighlightedDays().then((dates) => {
      setHighlightedDates(dates); // Atualiza as datas destacadas
    });
  }, []); // Apenas uma vez no carregamento

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="calendar-wrapper rounded-xl shadow-md">
        <Calendar
          locale="pt-pt"
          className={"w-full max-w-[600px]"}
          onChange={(val) => setValue(val as Date)} // Atualiza o valor do calendário
          value={value}
          tileClassName={({ date }) =>
            highlightedDates.some((d) => isSameDay(d, date)) ? "highlighted-day" : ""
          }
          // Desabilita os dias que não estão na lista de datas destacadas
          tileDisabled={({ date }) =>
            !highlightedDates.some((d) => isSameDay(d, date)) // Desabilita os dias que não são destacadas
          }
        />
      </div>
    </main>
  );
}

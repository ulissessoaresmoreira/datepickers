
// "use client"; 

// import { DayPicker } from "react-day-picker";
// import { useState } from 'react';
// import "react-day-picker/style.css";  

// function MyDatePicker() {
//   const [selected, setSelected] = useState<Date | undefined>();

//   return (
//     <DayPicker
//       mode="single"
//       selected={selected}
//       onSelect={setSelected}
//       footer={
//         selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
//       }
//     />
//   );
// }

// export default MyDatePicker;


// "use client";

// import { DayPicker } from "react-day-picker";
// import { useState } from "react";
// import "react-day-picker/style.css";

// // Função para verificar se a data está na lista
// const isHighlighted = (date: Date, highlightedDates: Date[]) => {
//   return highlightedDates.some(
//     (highlightedDate) =>
//       highlightedDate.getDate() === date.getDate() &&
//       highlightedDate.getMonth() === date.getMonth() &&
//       highlightedDate.getFullYear() === date.getFullYear()
//   );
// };

// function MyDatePicker() {
//   const [selected, setSelected] = useState<Date | undefined>();

//   // Lista de datas a serem destacadas
//   const highlightedDates = [
//     new Date(2025, 3, 9),  // 9 de abril de 2025
//     new Date(2025, 3, 10), // 10 de abril de 2025
//     new Date(2025, 3, 15), // 15 de abril de 2025
//   ];

//   return (
//     <DayPicker
//       mode="single"
//       selected={selected}
//       onSelect={setSelected}
//       footer={
//         selected
//           ? `Selected: ${selected.toLocaleDateString()}`
//           : "Pick a day."
//       }
//       dayStyles={(date) => {
//         if (isHighlighted(date, highlightedDates)) {
//           return { backgroundColor: "green", color: "white" };
//         }
//         return {};
//       }}
//     />
//   );
// }

// export default MyDatePicker;



"use client";

import { DayPicker } from "react-day-picker";
import { useState } from "react";
import "react-day-picker/style.css";
import "./styles.css";
import { isSameDay } from "date-fns"; // Importando a função isSameDay do date-fns

// Função para verificar se a data está na lista
const isHighlighted = (date: Date, highlightedDates: Date[]) => {
  return highlightedDates.some((highlightedDate) =>
    isSameDay(date, highlightedDate) // Usando isSameDay para comparação robusta
  );
};

function MyDatePicker() {
  const [selected, setSelected] = useState<Date | undefined>();

  // Lista de datas a serem destacadas
  const highlightedDates = [
    // new Date(9, 4, 2025),  // 9 de abril de 2025
    new Date(10, 4, 2025), // 10 de abril de 2025
    new Date(15, 4, 2025), // 15 de abril de 2025
  ];

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected
          ? `Selected: ${selected.toLocaleDateString()}`
          : "Pick a day."
      }
      classNames={{
        //day: (date: Date) => isHighlighted(date, highlightedDates) ? 'highlighted-day' : '', // Aqui estamos aplicando a classe 'highlighted-day' aos dias destacados
        //day: isHighlighted(selected!, highlightedDates) ? 'highlighted-day' : '', // Condicional para a classe
        day: isHighlighted(selected!, highlightedDates) ? "highlighted-day" : ""
      }}
    />
  );
}

export default MyDatePicker;

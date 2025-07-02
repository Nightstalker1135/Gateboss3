import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Воротный Авторитет</h1>
        <p>Мы не ставим ворота — мы ставим границы</p>
        <button>Оставить заявку</button>
      </header>
      <section className="services">
        <h2>Наши услуги</h2>
        <ul>
          <li>Секционные и откатные ворота</li>
          <li>Сварная сетка и штакетник</li>
          <li>Рольставни и рольворота</li>
          <li>Шлагбаумы и болларды</li>
          <li>Бытовые, технические, противопожарные</li>
          <li>Автоматические раздвижные ворота</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
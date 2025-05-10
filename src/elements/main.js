import React from 'react';
import { Routes, Route } from 'react-router-dom';
import News from './ArticleContent/news';
import About from './ArticleContent/about';
import Contacts from './ArticleContent/contacts';
import NotFound from './ArticleContent/NotFound';

function Main() {
  return (
    <main className="main-grid">
      <section className="left-section">
        <img src="https://gplatom.com/wp-content/uploads/image-placeholder-590x590.png" width={100} height={100} alt="Пример" />
      </section>
      
      <article className="center-article">
        <Routes>
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </article>
      
      <aside className="right-aside">
        <p>Ткаченко Никита Юрьевич</p>
      </aside>
    </main>
  );
}

export default Main;
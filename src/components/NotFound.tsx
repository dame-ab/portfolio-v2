import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-5xl font-bold mb-4">404</h1>
    <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
    <Link to="/">
      <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-semibold shadow hover:bg-primary/90 transition-all">Go Home</button>
    </Link>
  </section>
);

export default NotFound; 
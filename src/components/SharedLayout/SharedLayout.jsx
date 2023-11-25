import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import css from "./SharedLayot.module.css"

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster/>
    </div>
  );
};
export default SharedLayout;

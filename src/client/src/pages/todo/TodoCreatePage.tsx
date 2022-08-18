import React from 'react';
import { Link } from "react-router-dom";

const TodoCreatePage = () => {
    return (
      <>
      <main>
        <h2>Create Todo</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/create">Create</Link>
      </nav>
    </>
    );
  }
  
  export default TodoCreatePage;
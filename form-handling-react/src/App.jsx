// src/App.js
import React from "react";
import RegistrationForm from "./RegistrationForm.jsx";
import FormikForm from "./FormikForm.jsx";

function App() {
  return (
    <div>
      <h1>User Registration</h1>
      <h2>Using Controlled Components</h2>
      <RegistrationForm />
      <h2>Using Formik</h2>
      <FormikForm />
    </div>
  );
}

export default App;

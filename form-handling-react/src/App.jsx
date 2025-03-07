import formikForm from "./formikForm.js";
import RegistrationForm from "./RegistrationForm.jsx";
function App() {
  return (
    <div>
      <h1>User Registration</h1>

      {/* Controlled Component Form */}
      <h2>Controlled Form</h2>
      <RegistrationForm />

      {/* Formik Form */}
      <h2>Formik Form</h2>
      <formikForm />
    </div>
  );
}

export default App;

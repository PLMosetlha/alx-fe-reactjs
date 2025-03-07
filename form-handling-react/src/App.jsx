import FormikForm from "./formikForm.js";
import RegistrationForm from "./RegistrationForm.js";
function App() {
  return (
    <div>
      <h1>User Registration</h1>

      {/* Controlled Component Form */}
      <h2>Controlled Form</h2>
      <RegistrationForm />

      {/* Formik Form */}
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;

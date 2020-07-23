/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useFormik } from 'formik';

const initialValues = {
  dueDate: new Date(),
  description: '',
};
const onSubmit = (values) => {
  console.log('form data', values);
};
const validate = (values) => {
  let errors = {};
  if (!values.dueDate) {
    errors.dueDate = 'A Due Date is required';
  }
  if (!values.description) {
    errors.description = 'A description is required';
  }
  return errors;
};

const ViewTask = () => {
  const viewTaskFormStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const labelStyle = {
    fontWeight: 'bold',
    display: 'flex',
    marginBottom: '5px',
  };
  const inputStyle = {
    display: 'block',
    width: '265px',
    padding: '6 px 12px',
    fontSize: '14px',
    lineHeight: '1.5',
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div style={viewTaskFormStyle}>
      <form>
        <label style={labelStyle} htmlFor="Due Date">
          Due Date
        </label>
        <input
          style={inputStyle}
          type="date"
          id="due date"
          name="dueDate"
          onChange={formik.handleChange}
          value={formik.values.dueDate}
        />

        <label style={labelStyle} htmlFor="Description">
          Description
        </label>
        <input
          style={inputStyle}
          type="text"
          id="description"
          name="description"
          onChange={formik.handleChange}
          values={formik.values.description}
        />

        <button>Complete Task</button>
      </form>
    </div>
  );
};

export default ViewTask;

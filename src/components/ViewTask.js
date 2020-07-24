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
  const formControl = {
    marginBottom: '20px',
  };
  const error = {
    color: 'red',
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div style={viewTaskFormStyle}>
      <form onSubmit={formik.handleSubmit}>
        <div className={formControl}>
          <label style={labelStyle} htmlFor="Due Date">
            Due Date
          </label>
          <input
            style={inputStyle}
            type="date"
            id="due date"
            name="dueDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dueDate}
          />
          {formik.touched.dueDate && formik.errors.dueDate ? (
            <div className={error}>{formik.errors.dueDate}</div>
          ) : null}
        </div>

        <div className={formControl}>
          <label style={labelStyle} htmlFor="Description">
            Description
          </label>
          <input
            style={inputStyle}
            type="text"
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className={error}>{formik.errors.description}</div>
          ) : null}
        </div>
        <button type="completed">Complete Task</button>
      </form>
    </div>
  );
};

export default ViewTask;

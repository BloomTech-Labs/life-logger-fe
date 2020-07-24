/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  dueDate: new Date(),
  description: '',
};
const onSubmit = (values) => {
  console.log('form data', values);
};

const validationSchema = Yup.object().shape({
  dueDate: Yup.date().required('Required').nullable(),
  description: Yup.string().required('Required!'),
});

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

  return (
    <Formik
      style={viewTaskFormStyle}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className={formControl}>
          <label style={labelStyle} htmlFor="Due Date">
            Due Date
          </label>
          <Field style={inputStyle} type="date" id="due date" name="dueDate" />
          <ErrorMessage className={error} name="dueDate" />
        </div>

        <div className={formControl}>
          <label style={labelStyle} htmlFor="Description">
            Description
          </label>
          <Field
            style={inputStyle}
            type="text"
            id="description"
            name="description"
          />
          <ErrorMessage className={error} name="description" />
        </div>
        <button type="completed">Complete Task</button>
      </Form>
    </Formik>
  );
};

export default ViewTask;

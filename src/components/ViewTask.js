/** @jsx jsx */
import { jsx } from 'theme-ui';
import { IoIosSettings } from "react-icons/io";
import { GrLink} from "react-icons/gr";


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
    display: 'block',
    justifyContent: 'center',

  };

  const labelStyle = {
    fontWeight: 'bold',
    display: 'flex',
    marginBottom: '5px',
    marginLeft: '20%'
  };
  const inputStyle = {
    width: '265px',
    padding: '6 px 12px',
    fontSize: '14px',
    lineHeight: '1.5',
    marginLeft: '20%'
  };
  const formControl = {
    marginBottom: '20px',
    
  };
  const error = {
    color: 'red',
    marginLeft: '20%'
  };
  const completeTaskButton = {
    marginLeft: '20%'
  }
  const settingsIcon = {
    marginLeft: '80%'

  }
  const grLink = {
    marginLeft: '20%',
    marginBottom: '30%'
  }
  const divMomma = {
   
  }


  return (  
      

    
    <div style={divMomma}>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      
      <Form style={viewTaskFormStyle}>
        <div style={formControl}>
          <div style={settingsIcon} >
            <IoIosSettings />
          </div>
          <label style={labelStyle} htmlFor="Due Date">
            Due Date
          </label>
          <Field style={inputStyle} type="date" id="due date" name="dueDate" />
          <ErrorMessage style={error} name="dueDate" />
        </div>
          <br/>
          

        <div style={formControl}>
          <label style={labelStyle} htmlFor="Description">
            Description
          </label>
          <Field style={inputStyle} type="text" id="description" name="description" />
          <div style= {error}>
            <ErrorMessage name="description" />
          </div>
        </div>
        <br />
        <div style= {grLink}><GrLink /> Tag</div>
        <button style= {completeTaskButton} type="completed">Complete Task</button>
      </Form>
    </Formik>
    </div>
  );
};

export default ViewTask;

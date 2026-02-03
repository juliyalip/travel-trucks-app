import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../NavButton/NavButton";
import style from "./Modal.module.css";

const BookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be more than 2 letters")
    .max(30, "Too long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  date: Yup.date().required("Booking date is required").min(new Date(), "Date cannot be in the past"),
  comment:  Yup.string().max(50, "Must be 50 characters or less").notRequired()
});
const initionForm = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

export default function Modal() {
  const handleSubmit = (config, actions) => {
    console.log(config);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initionForm}
      onSubmit={handleSubmit}
      validationSchema={BookSchema}
    >
      <Form className={style.section}>
        <div>
        <p className={style.title}>Book your campervan now</p>
        <p className={style.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
        </div>
        <div className={style.sectionInputs}>
          <Field
            type="text"
            name="name"
            placeholder="Name*"
            className={style.input}
          />
          <ErrorMessage className={style.error} name="name" component="span" />
          <Field
            type="email"
            name="email"
            placeholder="Email*"
            className={style.input}
          />
          <ErrorMessage className={style.error} name="email" component="span" />
          <Field
            type="text"
            name="date"
            placeholder="Booking date*"
            className={style.input}
          />
          <ErrorMessage className={style.error} name="date" component="span" />
          <Field as="textarea" name="comment" className={style.textarea} placeholder="Comment"/>
        </div>

        <div>
          <Button type="submit">Send</Button>
        </div>
      </Form>
    </Formik>
  );
}

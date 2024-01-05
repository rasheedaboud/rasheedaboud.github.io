import "./code.css";
import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";
import sendgrid, { MailDataRequired } from "@sendgrid/mail";

export { Page };

type User = {
  name: string;
  email: string;
  message: string;
};
sendgrid.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

const schema = Yup.object().shape({
  name: Yup.string().required("Value is required."),
  message: Yup.string().required("Value is required."),
  email: Yup.string().email().required("Value is not a valid email."),
});

const handleSubmit = async (values: Partial<User>) => {
  const options = {
    from: values.email,
    to: "rasheedaboud@gmail.com",
    subject: `Request For Information From:${values.name}`,
    html: values.email,
  } as MailDataRequired;

  sendgrid.send(options);
};
function Page() {
  return (
    <>
      <h1>
        <div className='card w-full bg-base-100 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title text-4xl'>Get In Touch! 🚀</h2>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              onSubmit={handleSubmit}
              validationSchema={schema}
            >
              {() => (
                <Form>
                  <Field name={"name"}>
                    {({ field, meta, form }: FieldProps) => (
                      <>
                        <label className='form-control w-full '>
                          <div className='label'>
                            <span className='label-text'>
                              What is your name?
                            </span>
                          </div>
                          <input
                            {...field}
                            type='text'
                            placeholder='Type here'
                            name='name'
                            id='name'
                            className={
                              meta.error && meta.touched
                                ? "input input-bordered input-error w-full "
                                : "input input-bordered w-full "
                            }
                          />
                        </label>
                        {meta.error && meta.touched ? (
                          <p className='text-red-500 text-xs italic my-1 mx-1'>
                            **{meta.error}
                          </p>
                        ) : null}
                      </>
                    )}
                  </Field>
                  <Field name={"email"} type='email'>
                    {({ field, meta }: FieldProps) => (
                      <>
                        <label className='form-control w-full '>
                          <div className='label'>
                            <span className='label-text'>
                              What is your email?
                            </span>
                          </div>
                          <input
                            {...field}
                            type='text'
                            placeholder='Type here'
                            name='email'
                            id='email'
                            className={
                              meta.error && meta.touched
                                ? "input input-bordered input-error w-full "
                                : "input input-bordered w-full "
                            }
                          />
                        </label>
                        {meta.error && meta.touched ? (
                          <p className='text-red-500 text-xs italic my-1 mx-1'>
                            **{meta.error}
                          </p>
                        ) : null}
                      </>
                    )}
                  </Field>
                  <Field name={"message"} type='message'>
                    {({ field, meta }: FieldProps) => (
                      <>
                        <label className='form-control w-full '>
                          <div className='label'>
                            <span className='label-text'>
                              How can I help you?
                            </span>
                          </div>
                          <textarea
                            {...field}
                            name='message'
                            id='message'
                            className={
                              meta.error && meta.touched
                                ? "textarea textarea-bordered h-24 textarea-error w-full "
                                : "textarea textarea-bordered h-24 w-full "
                            }
                            placeholder='Type here...'
                          />
                        </label>
                        {meta.error && meta.touched ? (
                          <p className='text-red-500 text-xs italic my-3 mx-3'>
                            **{meta.error}
                          </p>
                        ) : null}
                      </>
                    )}
                  </Field>
                  <div className='card-actions justify-end my-5 py-5'>
                    <button type='submit' className='btn btn-primary'>
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </h1>
    </>
  );
}

import "./code.css";
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Email } from "../../types/Email";
export { Page };

type User = {
  name: string;
  email: string;
  message: string;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Value is required."),
  message: Yup.string().required("Value is required."),
  email: Yup.string().email().required("Value is not a valid email."),
});

function Page() {
  const handleSubmit = async (
    values: Partial<User>,
    utils: FormikHelpers<User>
  ) => {
    try {
      const options = {
        from: values.email,
        to: "rasheedaboud@gmail.com",
        subject: `Request For Information From:${values.name}`,
        text: values.message,
      } as Email;

      await fetch("https://sendgridblog.azurewebsites.net/api/sendEmail?", {
        method: "POST",
        body: JSON.stringify(options),
      });

      utils.resetForm();
    } catch (error) {
      console.log(error);
    }
  };
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

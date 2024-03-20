"use client";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { registerSchema, registerSchemaSchema } from "~/supports/schema/schema";
import { useRegMutation } from "~/supports/api/useAuthMutation/useRegMutation";

export default function NewUser() {
  const handleRegMutationError = (err) => {
    alert(err.message);
  };

  const handleRegMutationSuccess = (data) => {
    console.log(data);
    alert("Data Posted!");
  };

  const { mutate, status } = useRegMutation({
    onSuccess: handleRegMutationSuccess,
    onError: handleRegMutationError,
  });

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
          type: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          const { username, password, type } = values;
          mutate(
            { username, password, type },
            {
              onSuccess: () => resetForm(),
            }
          );
        }}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <div className="py-24 flex flex-col items-center mx-auto">
                <div className="flex flex-col min-w-[30%]">
                  <span className="label-text py-2">Username</span>
                  <label className="input input-bordered flex items-center gap-2">
                    <Field
                      type="text"
                      name="username"
                      placeholder="Enter username"
                    />
                  </label>
                  <ErrorMessage
                    name="username"
                    component={"div"}
                    className="text-red-500 label-text"
                  ></ErrorMessage>
                  <span className="label-text py-2">Password</span>
                  <label className="input input-bordered flex items-center gap-2">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter password"
                    />
                  </label>
                  <ErrorMessage
                    name="password"
                    component={"div"}
                    className="text-red-500 label-text"
                  ></ErrorMessage>
                  <span className="label-text py-2">User Type</span>
                  <Field as="select" name="type" className="input">
                    <option value="1">Super Admin</option>
                    <option value="2">Admin</option>
                  </Field>
                  <ErrorMessage
                    name="type"
                    component={"div"}
                    className="text-red-500 label-text"
                  ></ErrorMessage>
                  <div className="py-4">
                    <button
                      disabled={!(dirty && isValid)}
                      type="submit"
                      className="btn w-full bg-black text-white hover:bg-neutral-500"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

'use client'
import { Form, Formik, Field, ErrorMessage } from "formik";
import { registerSchema, registerSchemaSchema } from "~/supports/schema/schema";
import { useProductMutation } from "../../../supports/api/useAuthMutation/useProductMutation";
export default function NewProduct() {
  const { handleCreateProduct } = useProductMutation()

  return (
    <>
    <Formik
      initialValues={{
        name:'',
        price:'',
        imageURL:'',
        desc:'',
        categoryId:'1'
      }}
      onSubmit=
      {(values,{resetForm}) => {
        console.log(values)
        const {name, price, imageURL, desc,categoryId} = values
        handleCreateProduct({name, price, imageURL, desc,categoryId});
      }}
    >
    {
    ({dirty,isValid})=> {
        return(
      <Form>
      <div className="py-24 flex flex-col items-center mx-auto">
        <div className="flex flex-col min-w-[30%]">
          <span className="label-text py-2">Title</span>
          <label className="input input-bordered flex items-center gap-2">
            <Field type="text" name='name' placeholder="Enter username" />
          </label>
          <span className="label-text py-2">Price</span>
          <label className="input input-bordered flex items-center gap-2">
            <Field type="text" name='price' placeholder="Enter username" />
          </label>
          <span className="label-text py-2">Description</span>
          <label className="input input-bordered flex items-center gap-2">
            <Field type="text" name='desc' placeholder="Enter username" />
          </label>

          <span className="label-text py-2">Image URL</span>
          <label className="input input-bordered flex items-center gap-2">
            <Field type="text" name='imageURL' placeholder="Enter username" />
          </label>

          <span className="label-text py-2">Category</span>
          <Field as="select" name="categoryId" className="input">
             <option value="1" defaultChecked={true}>Sides</option>
             <option value="2">Mains</option>
             <option value="3">Drinks</option>
           </Field>
          <div className="py-4">
          <button disabled={!(dirty && isValid)} type="submit" className="btn w-full bg-black text-white hover:bg-neutral-500"> New Product</button>
          </div>
        </div>
      </div>
      </Form>
    )
    }}
    </Formik>
    </>
  );
}

import React from "react";
import { withFormik, Form, Field,} from "formik";
import * as Yup from "yup";
import axios from "axios";

function UserForm({errors, touched, values}) {
    
    return (
        <Form>
            <div>
            <Field type="text" name="name" placeholder="enter name" value={values.name} />
             {touched.name && errors.name && <p>{errors.name}</p>}
             </div>

             <div>
            <Field type="password" name="password" placeholder="enter password" value={values.password}/>
            {touched.password && errors.password && <p>{errors.password}</p>}
            </div>

            <div>
            <Field type="email" name="email" placeholder="enter email" value={values.email} />
            {touched.email && errors.email && <p>{errors.email}</p>}
            </div>

            <div>
            <Field type="checkbox" name="tos"  checked={values.tos} value={values.tos}/> 
            {touched.tos && errors.tos && <p>{errors.tos}</p>}
            </div>

            <div>
            <label>
                 Accept terms of service
                <button type="submit">submit</button>
                 
            </label>
            </div>
        </Form>

    );
}

const formikUserForm = withFormik({
    mapPropsToValues({name,email,password,tos}) {
        return {
            name: name || "",
            password: password ||"",
            email: email || "",
            tos: tos ||""
        };
    }, 

    handleSubmit(values) {
        axios 
        .post("https://reqres.in/api/users", values)
        .then(res =>{
           alert("your subittion was successful",res.data.tos)
            console.log(res.data);
        }) 
        .catch(err => {
            console.log(err);
        })
    },


    validationSchema: Yup.object().shape({
        name: Yup.string()
        //  .name("name not valid")
         .required("name is required"),
        password: Yup.string()
         .min(8,"password must be 8 charachters")
         .required("password is required"),
        email: Yup.string()
         .email("email not valid")
         .required("email is required"),
        
        

    })

})(UserForm);



export default formikUserForm;

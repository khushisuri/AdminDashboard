import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField, useTheme } from "@mui/material";
import { tokens } from "../theme";

const phoneRegex =
  /^(\+?\d{1,3})?[-.\s]?(\(?\d{3}\)?)[-.\s]?\d{3}[-.\s]?\d{4}$/;

const validationSchema = yup.object({
  firstname: yup.string("string").required("Email is required"),
  lastname: yup.string("string").required("Lastname is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  contact: yup
    .string("Enter your contact")
    .matches(phoneRegex, "Phone number is not valid")
    .required("Contact number is required"),
  Address1: yup.string().required("Address is required"),
  Address2: yup.string().required("Address is required"),
});

const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      Address1: "",
      Address2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat (4,minmax(0,1fr))",
          gap: "20px 10px",
        }}
      >
        <TextField
          fullWidth
          id="firstname"
          name="firstname"
          label="FirstName"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          id="lastname"
          name="lastname"
          label="LastName"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          id="contact"
          name="contact"
          label="Contact Number"
          type="phone"
          value={formik.values.contact}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.contact && Boolean(formik.errors.contact)}
          helperText={formik.touched.contact && formik.errors.contact}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          id="Address1"
          name="Address1"
          label="Address1"
          value={formik.values.Address1}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Address1 && Boolean(formik.errors.Address1)}
          helperText={formik.touched.Address1 && formik.errors.Address1}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          id="Address2"
          name="Address2"
          label="Address2"
          value={formik.values.Address2}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Address2 && Boolean(formik.errors.Address2)}
          helperText={formik.touched.Address2 && formik.errors.Address2}
          sx={{ gridColumn: "span 4" }}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ backgroundColor: colors.greenAccent[600] }}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default Form;

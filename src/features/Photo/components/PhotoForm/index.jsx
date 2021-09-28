import React from "react";
import PropTypes from "prop-types";
import { FastField, Formik } from "formik";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onsubmit: null,
};
function PhotoForm(props) {
  const initialValues = {
    title: "",
  };
  return (
    <Formik initialValues={initialValues}>
      {(formikProps) => {
        const { value, error, touched } = formikProps;
        return (
          <Form>
            <FastField name="title" component={InputField} label="Title" placeholder="Eg: Wow nature ..." />
            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FormGroup>
              <Label for="categoryId">Photo</Label>

              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="colorful background" />
              </div>
            </FormGroup>

            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;

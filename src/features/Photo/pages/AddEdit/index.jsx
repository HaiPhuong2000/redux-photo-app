import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import React from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import { useHistory, useParams } from "react-router";
import { randomNumber } from "utils/common";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;
  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: randomNumber(10000, 99999),
          };
          const action = addPhoto(values);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }

        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };
  const editPhoto = useSelector((state) => state.photos.find((x) => x.id === +photoId));

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editPhoto;
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm isAddMode={isAddMode} initialValues={initialValues} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;

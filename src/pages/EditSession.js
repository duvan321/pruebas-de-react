import { useState } from "react";
import "../style/EditSession.css";
function EditSession() {
  const [images, setimages] = useState([]);

  const changeInput = (e) => {
    //This is the index that will be given to each image, from the index of the last photo
    let indexImg;

    //here we evaluate if there are already images before this input, to know where the index of the next array should start
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setimages(newImgsState);

    console.log(newImgsState);
  };

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files;

    //the array with the new images
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];

      let url = URL.createObjectURL(file);

      //console.log(file);
      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file,
      });

      indexInicial++;
    });

    //After having concluded the cycle we return the new images
    return arrayImages;
  }

  function deleteImg(indice) {
    //console.log("delete img " + index);

    const newImgs = images.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setimages(newImgs);
  }

  return (
    <div className="container-fluid">
      <br></br>
      {/* INPUT IMAGES */}
      <label className="btn btn-warning">
        <span>select files </span>
        <input hidden type="file" multiple onChange={changeInput}></input>
      </label>

      {/* VIEW IMAGES */}
      <div className="row">
        {images.map((imagen) => (
          <div className="col-6 col-sm-4 col-lg-3 square" key={imagen.index}>
            <div className="content_img">
              <button
                className="position-absolute btn btn-danger"
                onClick={deleteImg.bind(this, imagen.index)}
              >
                x
              </button>
              <img
                alt="algo"
                src={imagen.url}
                data-toggle="modal"
                data-target="#ModalPreViewImg"
                className="img-responsive"
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default EditSession;

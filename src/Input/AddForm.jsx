import useInput from "../hooks/use-input";
import "./AddForm.css";

const isNotEmpty = (value) => value.trim() !== "";

const AddForm = (props) => {

  const {
    value: autherNameValue,
    isValid: autherNameIsValid,
    hasError: autherNameHasError,
    valueChangeHandler: autherNameChangeHandler,
    inputBlurHandler: autherNameBlurHandler,
    reset: resetAutherName,
  } = useInput(isNotEmpty);
  const {
    value: blogTitleValue,
    isValid: blogTitleIsValid,
    hasError: blogTitleHasError,
    valueChangeHandler: blogTitleChangeHandler,
    inputBlurHandler: blogTitleBlurHandler,
    reset: resetBlogTitle,
  } = useInput(isNotEmpty);

  const {
    value: photoValue,
    isValid: photoIsValid,
    hasError: photoHasError,
    valueChangeHandler: photoChangeHandler,
    inputBlurHandler: photoBlurHandler,
    reset: resetPhoto,
  } = useInput(isNotEmpty);

  const {
    value: blogContentValue,
    isValid: blogContentIsValid,
    hasError: blogContentHasError,
    valueChangeHandler: blogContentChangeHandler,
    inputBlurHandler: blogContentBlurHandler,
    reset: resetBlogContent,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    autherNameIsValid &&
    blogTitleIsValid &&
    blogContentIsValid &&
    photoIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("clicked");

    if (!formIsValid) {
      return;
    }

    const Submission = {
      auther: autherNameValue,
      title: blogTitleValue,
      content: blogContentValue,
      image: photoValue,
    };

    props.submissionHandler(Submission);

    console.log("Submitted!");
    console.log(autherNameValue, blogTitleValue, blogContentValue, photoValue);
    
    resetAutherName();
    resetBlogTitle();
    resetBlogContent();
    resetPhoto();
  };

  const autherNameClasses = autherNameHasError
    ? "form-control invalid"
    : "form-control";
  const blogTitleClasses = blogTitleHasError
    ? "form-control invalid"
    : "form-control";
  const blogContentClasses = blogContentHasError
    ? "form-control invalid"
    : "form-control";
  const photoClasses = photoHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form>
      <div className="control-group">
        <div className={autherNameClasses}>
          <label htmlFor="name">Auther Name</label>
          <input
            type="text"
            id="name"
            value={autherNameValue}
            onChange={autherNameChangeHandler}
            onBlur={autherNameBlurHandler}
          />
          {autherNameHasError && (
            <p className="error-text">*Please enter a auther name.</p>
          )}
        </div>
        <div className={blogTitleClasses}>
          <label htmlFor="name" key={blogTitleValue}>Blog Title</label>
          <input
            type="text"
            id="name"
            value={blogTitleValue}
            onChange={blogTitleChangeHandler}
            onBlur={blogTitleBlurHandler}
          />
          {blogTitleHasError && (
            <p className="error-text">*Please enter a valid title.</p>
          )}
        </div>
        <div className={blogContentClasses}>
          <label htmlFor="name">Blog Content</label>
          <textarea
            type="text"
            id="name"
            value={blogContentValue}
            onChange={blogContentChangeHandler}
            onBlur={blogContentBlurHandler}
          />
          {blogContentHasError && (
            <p className="error-text">*Please enter a valid Blog Content</p>
          )}
        </div>
        <div className={photoClasses}>
          <label htmlFor="photo-upload">Select a photo:</label>
          <input
            id="photo"
            type="file"
            max-size="5MB"
            value={photoValue}
            onChange={photoChangeHandler}
            onBlur={photoBlurHandler}
          />
          {photoHasError && (
            <p className="error-text">*Please enter a valid photo</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={submitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default AddForm;

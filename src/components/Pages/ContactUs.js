import { useForm } from "react-hook-form";
import "./ContactUs.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaUserAlt,
} from "react-icons/fa";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    // to check (data) parameter is used
    alert("message sent, we will contact you soon!");
    reset();
  };
  return (
    <main className="contact-us">
      <h1 className="text-center display-5 my-4">Contact Us</h1>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-label my-3" htmlFor="fullName">
            Full Nme: <FaUserAlt />
          </label>
          <input
            required
            type="text"
            className="form-control"
            name="fullName"
            id="fullName"
            placeholder="please type you name..."
            {...register("fullName", { required: true, minLength: 3 })}
          />
          {errors.fullName && (
            <p style={{ color: "red" }}>
              Please check full name, must be least 3 letters long
            </p>
          )}
          <label className=" form-label my-3" htmlFor="phoneNumber">
            Phone Number: <FaPhoneAlt />
          </label>
          <input
            required
            type="tel"
            className="form-control"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="please type your phone number..."
            {...register("phoneNumber", {
              required: true,
              minLength: 5,
            })}
          />
          {errors.phoneNumber && (
            <p style={{ color: "red" }}> please check numbers </p>
          )}
          <label htmlFor="InputEmail1" className="form-label my-3">
            Email address: <FaEnvelope />
          </label>
          <input
            required
            type="email"
            className="form-control"
            id="InputEmail1"
            placeholder="please type your email..."
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>Please check the email address again</p>
          )}
          <label className=" form-label my-3" htmlFor="messageText">
            Message: <FaPaperPlane />
          </label>
          <textarea
            required
            className="form-control mb-5"
            name="messageText"
            id="messageText"
            cols="50"
            rows="5"
            placeholder="please type your message..."
            {...register("messageText", { required: true, minLength: 3 })}
          ></textarea>
          {errors.message && (
            <p style={{ color: "red" }}>
              Please check message, must be least 3 letters long
            </p>
          )}
          <div className="container">
            <button type="submit" className="btn btn-lg btn-dark mb-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactUs;

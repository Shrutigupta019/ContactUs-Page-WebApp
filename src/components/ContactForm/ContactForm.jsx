import React, { useDebugValue, useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  // const [userDetails, setUserDetails] = useState({
  //   name: "",
  //   email: "",
  //   text: "",
  // });

  const [name, setName] = useState("abc");
  const [email, setEmail] = useState("cde@gmail.com");
  const [text, setText] = useState("efg");

  const onViaCallSubmit = () => {
    console.log("I am on a call");
  };
  const onSubmit = (event) => {
    event.preventDefault(); // Page will not refersh once click on Submit Button

    console.log(name, email, text);

    // setUserDetails({
    //   name: event.target[0].value,
    //   email: event.target[1].value,
    //   text: event.target[2].value,
    // });
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<MdCall fontSize="24px" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input
              value={name}
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              value={text}
              name="text"
              rows="8"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button isOutline={false} text="SUBMT" />
          </div>
          {name && email && text && (
            <div>
              {"Name: " +
                name +
                ", " +
                "Email: " +
                email +
                ", " +
                "Text: " +
                text}
            </div>
            // </div>
            // {userDetails.name && userDetails.email && userDetails.text && (
            //   <div>
            //     {"Name: " +
            //       userDetails.name +
            //       ", " +
            //       "Email: " +
            //       userDetails.email +
            //       ", " +
            //       "Text: " +
            //       userDetails.text}
            //   </div>
          )}
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/contact.svg" alt="conatct image" />
      </div>
    </section>
  );
};

export default ContactForm;

const Contact = () => {
  return (
    <div className="contact-outer w-full mt-11 flex justify-center">
      <div className="contact-main flex justify-center w-full">
        <div className="contact-left w-2/5 ">
          <div className="image">
            <img src={require("../../Images/contact.jpg")} />
          </div>
        </div>
        <div className="contact-right w-3/5  h-full">
          <h1 className="text-center font-semibold text-4xl text-cgreen mb-8">
            Contact Us
          </h1>
          <div className="form w-1/2 mx-auto">
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full h-11 mb-6 pl-3 border-2 border-cborder rounded-lg outline-0 shadow-lg"
            />
            <input
              type="email"
              placeholder="Enter Email : abc@xyz.com"
              className="w-full h-11 pl-3 mb-6 border-2 border-cborder rounded-lg outline-0 shadow-lg"
            />
            <textarea
              rows={5}
              cols={43}
              placeholder="Type Your Query:"
              className="w-full pl-3 mb-6 border-2 border-cborder rounded-lg outline-0 shadow-lg"
            />
            <button
              type="submit"
              id="submit"
              className="ml-44 bg-cborder text-white pl-6 pr-6 pt-2 pb-2 rounded-lg shadow-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

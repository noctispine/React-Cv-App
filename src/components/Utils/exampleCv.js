import uniqid from "uniqid";

const exampleCv = {
  personal: {
    firstName: "Lorem.",
    lastName: "Ipsum.",
    title: "Lorem Ipsum",
    email: "lorem@ipsum.com",
    phone: "630-234-12-16",
    location: "Random, Place",
    summary:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia magni reprehenderit optio labore facilis sint mollitia repudiandae ut necessitatibus.",
  },

  educationInfo: [
    {
      id: uniqid(),
      //
      school: "Lorem University",
      degree: "3.85",
    },
  ],

  experience: [
    {
      id: uniqid(),
      company: "Lorem",
      role: "Ipsum Engineer",
      description: "",
    },
    {
      id: uniqid(),
      company: "Lorem",
      role: "Ipsum Developer",
      description: "",
    },
  ],
};

export default exampleCv;

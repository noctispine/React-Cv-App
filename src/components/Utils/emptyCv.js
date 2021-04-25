import uniqid from "uniqid";

const emptyCv = {
  personal: {
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  },

  educationInfo: [
    {
      id: uniqid(),
      //
      school: "",
      degree: "",
    },
  ],

  experience: [
    {
      id: uniqid(),
      company: "",
      role: "",
      description: "",
    },
  ],
};

export default emptyCv;

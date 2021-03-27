import uniqid from "uniqid";

const emptyCv = {
  personal: {
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    summary: "",
  },

  educationInfo: [
    {
      id: uniqid(),
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

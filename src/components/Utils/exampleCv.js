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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error neque alias iusto excepturi mollitia sint, quia, cum laboriosam nemo blanditiis deserunt consectetur voluptatum a commodi possimus esse repellat doloremque inventore rerum? Veritatis eligendi ipsam nihil perferendis cupiditate ipsa eveniet nemo distinctio labore. Soluta est numquam aperiam cumque assumenda maxime. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat obcaecati quia molestias error, maiores est voluptatibus aliquid incidunt distinctio dolores pariatur ratione! Dolorum rem consequatur autem ipsum distinctio quaerat numquam.",
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

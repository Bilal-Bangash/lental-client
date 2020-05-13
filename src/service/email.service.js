import axios from "axios";

const template = (data) => {
  const { name, pockerId, message, role } = data;

  return `<Html>
      <div style='line-height:'10px'>
      <span>${
        role === "club"
          ? "Hello, You have a new member request"
          : "Hello, You have a new agent request"
      }</span><br/><br/>
      <span style='font-weight:bold'>Name: </span><span>${name}</span><br/>
      <span style='font-weight:bold'>Pokerbros ID: </span><span>${pockerId}</span><br/>
      <span style='font-weight:bold'>Message: </span><span>${message}</span><br/><br/>
      <span style='font-weight:bold'>Kind Regards,</span><br/>
      <span>Lethal Poker Club</span><br/>
      </div>
      </Html >`;
};

export const sendEmail = (
  { firstName, lastName, email, pockerId, message },
  role
) => {
  const fName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const lName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  const subject = role === "club" ? "New Member Request" : "New Agent Request";
  const data = {
    user: `${fName}" "${lName}`,
    from: email,
    to: "Lethalpokerclub@gmail.com",
    bcc: "cryptoanna@protonmail.com",
    subject,
    message: `Hello, You have a new member request.`,
    template: template({
      name: `${fName} ${lName}`,
      pockerId,
      message,
      role,
    }),
  };
  try {
    return axios
      .post("https://lethalpoker-server.herokuapp.com/api/email", data)
      .then((response) => {
        const { message } = response.data;
        if (response.data.status === 200) {
          return { status: true, message };
        } else {
          return { status: false, message };
        }
      })
      .catch((error) => {
        return { status: false, message: error.message };
      });
  } catch (error) {
    return { status: false, message: error.message };
  }
};

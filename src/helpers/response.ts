/** @format */

const res = (message = "err", status = false) => {
  console.log(message);
  return { message, status };
};

export default res;

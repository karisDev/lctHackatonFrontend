const isEmpty = (string) => {
  if (string == null || string.trim() === "") return true;
  else return false;
};

const isEmail = (email) => {
  const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

export const validateRegistration = (data) => {
  const errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Почта не может быть пустой";
  } else if (!isEmail(data.email)) {
    errors.email = "Почта введена некорректно";
  }

  if (isEmpty(data.password)) errors.password = "Пароль не может быть пустым";
  console.log(data.password, data.confirmPassword);
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Пароли не совпадают";

  if (isEmpty(data.firstName)) errors.firstName = "Не может быть пустым";
  if (isEmpty(data.lastName)) errors.lastName = "Не может быть пустой";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

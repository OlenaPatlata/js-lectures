const getFormData = form => {
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  // {
  //   "first_name": "Genesis",
  //   "last_name": "O'Kon",
  //   "email": "Jonatan_Robel15@gmail.com",
  // },
  return data;
};

const fillInForm = (form, data) => {
  const inputs = form.elements;
  Object.keys(data).forEach(key => {
    if (inputs.hasOwnProperty(key)) {
      inputs[key].value = data[key];
    }
  });
};

export { getFormData, fillInForm };

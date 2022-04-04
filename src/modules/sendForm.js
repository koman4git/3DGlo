"use strict"

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId)
  const statusBlock = document.createElement("div")
  const loadText = "Загрузка..."
  const errorText = "Ошибка..."
  const successText = "Спасибо! Наш менеджер с вами свяжется!"
  const textError = "Попробуйте ещё раз..."

  statusBlock.style.color = "#fff"

  const validate = (list) => {
    let success = true;

    list.forEach((item) => {
      item.style.border = null
      if (item.name === "user_name") {
        if (item.value.length < 2) {
          item.style.border = "1px solid red"
          success = false
        }
      } else if (item.name === "user_phone") {
        if (item.value.length < 6 || item.value.length > 16) {
          success = false
          item.style.border = "1px solid red";
        }
      } else if (item.name === "user_message") {
        if (item.value.length < 2) {
          success = false
          item.style.border = "1px solid red";
        }
      } else if (item.name === "user_email") {
        if (item.value.length === 0) {
          success = false
          item.style.border = "1px solid red"
        }
      } else {
        success = true
      }
    })


    return success
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll("input")
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.textContent = loadText
    form.append(statusBlock)

    formData.forEach((val, key) => {
      formBody[key] = val
      
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id)

      if (elem.type === "block" && +element.textContent) {
        formBody[elem.id] = element.textContent
      } else if (elem.type === "input" && element.value) {
        formBody[elem.id] = element.value
      }
    })

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;

          formElements.forEach((input) => {
            input.value = ""
          });
          setInterval(() => {
            statusBlock.textContent = ""
          }, 3000)
        })
        .catch((error) => {
          statusBlock.textContent = errorText
        })
    } else {
      

      form.append(statusBlock);
      statusBlock.textContent = textError;

      
      setTimeout(() => {
        statusBlock.textContent = ""
      }, 2000)
    }
  }

  

  try {
    if (!form) {
      throw new Error("Верните форму на место!")
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault()

      submitForm()
    })
  } catch (error) {
    
  }
}

export default sendForm
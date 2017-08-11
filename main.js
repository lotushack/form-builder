// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator

// -------- Your Code Goes Below this Line --------



let formContainer = document.querySelector('.fields');
let inputFirstNameElement = document.createElement('input');
inputFirstNameElement.setAttribute('type', 'text');
inputFirstNameElement.setAttribute('id', 'user-first-name');
inputFirstNameElement.setAttribute('placeholder', 'First Name');
formContainer.appendChild(inputFirstNameElement);


let inputLastNameElement = document.createElement('input');
inputLastNameElement.setAttribute('type' , 'text');
inputLastNameElement.setAttribute('id' , 'user-last-name');
inputLastNameElement.setAttribute('placeholder' , 'Last Name');
formContainer.appendChild(inputLastNameElement);

let inputEmailElement = document.createElement('input');
inputEmailElement.setAttribute('type', 'email')
inputEmailElement.setAttribute('id', 'user-email');
inputEmailElement.setAttribute('placeholder', 'Email Address');
formContainer.appendChild(inputEmailElement);


for (var i = 0; i < formData.length; i++) {
    if(formData[i].type === 'select'){
      // selectBox.push(formData[i])
      let selectBox = document.createElement('select');
      let options = document.createElement('options');
      let optionContent = document.createTextNode(formData[i].label);
      let newOption = document.createElement("option");
      console.log(formData[i].label);
      selectBox.setAttribute('placeholder', formData[i].label);
      options.setAttribute('label', formData[i].label);

      selectBox.appendChild(options);
      newOption.appendChild(options);
      formContainer.appendChild(selectBox);

      for(var s = 0; s < formData[i].options.length; s++){
         newOption = document.createElement('option');
        console.log(formData[i].options[s].label);
        optionContent = document.createTextNode(formData[i].options[s].label);
      newOption.setAttribute('label', formData[i].options[s].label)
      selectBox.appendChild(newOption);
      newOption.appendChild(optionContent);
    }

  }
}


let textArea = document.createElement('textarea');
textArea.setAttribute('placeholder', 'Your comment');
formContainer.appendChild(textArea);

let mobile = document.createElement('input')
mobile.setAttribute('type', 'tel');
mobile.setAttribute('id', 'user-mobile');
mobile.setAttribute('placeholder', 'Mobile number');
formContainer.appendChild(mobile);

let homeNumber = document.createElement('input');
homeNumber.setAttribute('type', 'tel');
homeNumber.setAttribute('id', 'user-phone');
homeNumber.setAttribute('placeholder', 'Home Number');
formContainer.appendChild(homeNumber);

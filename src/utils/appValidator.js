// import validation from 'validate.js';

// export default function validate(fieldName, value) {
//   const constraints = {
//     email: {
//       presence: true,
//       email: {
//         message: '^Please enter valid email address'
//       }
//     },
//     password: {
//       presence: {
//         allowEmpty: false,
//         message: '^Input required'
//       }
//     },
//     isPresent: {
//       presence: {
//         allowEmpty: false,
//         message: '^Input required'
//       }
//     },
//     name: {
//       presence: { allowEmpty: false, message: '^Name is required' },
//       format: {
//         pattern: '^[A-z ]+$',
//         message: '^Please enter valid name'
//       },
//       length: {
//         maximum: 25,
//         message: 'Length exceed, maximum 25 digits',
//       }
//     },
//   };

//   var formValues = {};
//   var formFields = {};

//   if (typeof fieldName === 'string') {
//     formValues[fieldName] = value;
//     formFields[fieldName] = constraints[fieldName];
//   } else if (typeof fieldName === 'object') {
//     for (let i = 0; i < fieldName.length; i++) {
//       formValues[fieldName[i]] = value[i];
//     }
//     formFields[fieldName[0]] = constraints[fieldName[0]];
//   }

//   const result = validation(formValues, formFields);

//   if (result) {
//     if (typeof fieldName === 'string') {
//       return result[fieldName][0];
//     } else if (typeof fieldName === 'object') {
//       return result[fieldName[0]][0];
//     }
//   }

//   return null;
// }

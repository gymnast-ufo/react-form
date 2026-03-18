# Test task

## Goal

Develop a single page application (SPA) with sequential, sequential forms collecting user data with data validation and a final modal confirmation window.

## Start

run `yarn start` or `npm run start`  
open `http://localhost:5173/`

## Used libraries

1. Vite + React + Typescript
2. Eslint + Prettier
3. Material-UI as ui library
4. Redux/toolkit + RTK-query for collecting data between steps and API
5. lodash as utils library
6. React-final-form for creating form, MUI-rff to connect rff with Mui components
7. Joi.js for validating form's data

Spent time ~ 3 days, 4 hours each

## Test description

### Technical requirements:

1. Use TypeScript.
2. Use React.
3. Use React Router for switching between forms.
4. Bootstrap can be used for styling if desired.
5. Using additional libraries is encouraged, but you must justify your choice (with a comment in the code).

### Forms description

**Form 1: Personal Data**

- **Input Fields:**
  - Phone (input type="tel", required, input mask 0XXX XXX XXX)
  - First Name (input type="text", required)
  - Last Name (input type="text", required)
  - Gender (select with options "Male", "Female", required)
- **Button:**
  - "Next" (switch to the next form)

**Form 2: Address and Place of Work**

- **Input Fields:**
  - Place of Work (select with predefined options, required). Use https://dummyjson.com/docs/products#products-category_list as the data source for this field (Get products category list method). Provide the ability to reuse the result obtained via the API. - Residential address (input type="text", required field)
- **Buttons:**
  - "Back" (return to the previous form)
  - "Next" (switch to the next form)

**Form 3: Loan Parameters**

- **Input Fields:**
  - Slider for selecting the loan amount (from $200 to $1000, increments of 100, required field)
  - Slider for selecting the loan term (from 10 to 30 days, increments of 1 day, required field)
- **Buttons:**
  - "Back" (return to the previous form)
  - "Submit Application". When clicking the button, use the test API method https://dummyjson.com/docs/products#products-add (the "Add a new product" method). For example, submit: {"title": firstName + ' ' + lastName}. Then display a modal window.

#### Final Modal:

- After receiving the result from the test server, a modal window should appear with the following text:

```
Congratulations, <Last Name> <First Name>. You have been approved for <amount> for <period> days.
```

where `<Last Name>`, `<First Name>`, `<amount>`, and `<period>` are replaced with the data entered by the user.

#### Additional Requirements:

1. All fields are required. An error should be displayed if you attempt to proceed to the next form without filling in all required fields.
2. Data from all forms must be saved in the application state and accessible at any step.
3. The "Back" button on the second form must return to the first form, preserving the entered data.
4. Bootstrap or any other library of your choice can be used for styling.
5. It is important to adhere to the technical specifications.
6. It is necessary to indicate the time spent on completing the task.

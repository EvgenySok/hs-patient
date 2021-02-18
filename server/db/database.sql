CREATE TABLE patient(
  id SERIAL PRIMARY KEY,
  surname VARCHAR(255),
  name VARCHAR(255),
  patronymic VARCHAR(255),
  sex VARCHAR(255),
  dateBirth VARCHAR(255),
  adress VARCHAR(255),
  policyNumber VARCHAR(255)
)
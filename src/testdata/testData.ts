import { faker } from '@faker-js/faker';

export type UserRegistrationData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export function prepareRandomUser(): UserRegistrationData {
  const registerUserData: UserRegistrationData = {
    email: faker.internet.email({}) ?? '[NOT SET]',
    password: faker.internet.password() ?? '[NOT SET]',
    firstName: faker.person.firstName().replace(/[^A-Za-z]/g, ''),
    lastName: faker.person.lastName().replace(/[^A-Za-z]/g, ''),
  };
  return registerUserData;
}

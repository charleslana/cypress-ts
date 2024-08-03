import { faker } from '@faker-js/faker';

export function generateName(): string {
  return faker.person.fullName();
}

export function generateEmail(): string {
  return faker.internet.email();
}

export function generateLorem(): string {
  return faker.lorem.text();
}

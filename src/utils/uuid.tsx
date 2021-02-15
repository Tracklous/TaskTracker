import { v4 as uuidv4 } from 'uuid';

const generateUUID = () => uuidv4();

export { generateUUID };

export function generateRandomID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return `${Math.random().toString(36).substr(2, 9)}${new Date().getTime()}`;
}

import b from "bcrypt";

export const hash = async (value: string) => {
  const saltRounds = await b.genSalt(4);
  return b.hash(value, saltRounds);
};

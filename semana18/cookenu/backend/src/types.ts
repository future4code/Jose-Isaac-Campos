export type user = {
  name: string;
  email: string;
  password: string;
};

export type revenue = {
  id: string;
  title: string;
  description: string;
  creation_date?: string;
  created_by: string;
};

export type authenticationData = {
  id: string;
};

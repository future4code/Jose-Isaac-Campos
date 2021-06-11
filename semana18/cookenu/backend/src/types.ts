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

export type follower = {
  fk_user_id: string;
  fk_following_user_id: string;
};

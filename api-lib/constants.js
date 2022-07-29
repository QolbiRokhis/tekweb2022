export const ValidateProps = {
  user: {
    username: { type: 'string', minLength: 4, maxLength: 20 },
    name: { type: 'string', minLength: 1, maxLength: 50 },
    password: { type: 'string', minLength: 8 },
    email: { type: 'string', minLength: 1 },
    birth: { type: 'string', minLength: 0, maxLength: 160 },
    facebook: { type: 'string', minLength: 0, maxLength: 160 },
    github: { type: 'string', minLength: 0, maxLength: 160 },
    bio: { type: 'string', minLength: 0, maxLength: 200000000000000000000 },
  },
  post: {
    title: { type: 'string', minLength: 1, maxLength: 200000000 },
    content: { type: 'string', minLength: 1, maxLength: 200000000 },
  },
  comment: {
    content: { type: 'string', minLength: 1, maxLength: 200000000 },
  },
};

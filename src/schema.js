export const typeDefs = `
type User {
   id: Int!                # "!" denotes a required field
   name: String
}
# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
   users: [User]    # "[]" means this is a list of channels
}
`;

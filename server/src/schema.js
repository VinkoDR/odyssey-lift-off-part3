const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track's decription, can be in markdown format"
    description: String
    "the numbers of view the track has been viewed"
    numbersOfViews: Int
    "A track can have multiples modules, the track's complete array of modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The module's title"
    title: String!
    "The module's length in min"
    length: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
`;

module.exports = typeDefs;

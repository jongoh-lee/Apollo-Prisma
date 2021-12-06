const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
    type Query{
        hello: String
    }
`;

const resolvers = {
    Query:{
        hello: () => "baby"
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server
.listen()
.then(() => console.log("server is running http://localhost:4000"));
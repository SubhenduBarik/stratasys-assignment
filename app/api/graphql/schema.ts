const typeDefs = `#graphql
    scalar DateTime

    type Layer {
      id: ID!
      name: String!
      visible: Boolean!
      color: String
      lastModified: DateTime
    }
    
    type Query {
      layers: [Layer!]!
      layer(id: ID!): Layer
    }
    
    type Mutation {
      toggleLayerVisibility(id: ID!): Layer
      updateLayer(id: ID!, name: String, color: String, visible: Boolean): Layer
      addLayer(name: String!, color: String): Layer
      deleteLayer(id: ID!): Boolean
      toggleAllLayers(visible: Boolean!): [Layer!]!
    }
`;

export default typeDefs;
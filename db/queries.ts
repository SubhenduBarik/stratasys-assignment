import {gql} from "@apollo/client";

export const GET_LAYERS = gql`
  query {
    layers {
      id
      name
      visible
      color
    }
  }
`;
export const TOGGLE_LAYER = gql`
  mutation ToggleLayerVisibility($id: ID!) {
    toggleLayerVisibility(id: $id) {
      id
      visible
    }
  }
`;

export const ADD_LAYER = gql`
mutation AddLayer($name: String!, $color: String) {
  addLayer(name: $name, color: $color) {
    id
    name
    visible
    color
    lastModified
  }
}`

export const TOGGLE_ALL_LAYERS = gql`
  mutation ToggleAllLayers($visible: Boolean!) {
    toggleAllLayers(visible: $visible) {
      id
      visible
    }
  }
`;

export const DELETE_LAYER = gql`
  mutation DeleteLayer($id: ID!) {
    deleteLayer(id: $id)
  }
`;
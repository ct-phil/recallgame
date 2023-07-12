/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserDetails = /* GraphQL */ `
  query GetUserDetails($id: ID!) {
    getUserDetails(id: $id) {
      id
      userSub
      firstName
      lastName
      DOB
      gender
      phoneNumber
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserDetails = /* GraphQL */ `
  query ListUserDetails(
    $filter: ModelUserDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userSub
        firstName
        lastName
        DOB
        gender
        phoneNumber
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserScore = /* GraphQL */ `
  query GetUserScore($id: ID!) {
    getUserScore(id: $id) {
      id
      userSub
      score
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserScores = /* GraphQL */ `
  query ListUserScores(
    $filter: ModelUserScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userSub
        score
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

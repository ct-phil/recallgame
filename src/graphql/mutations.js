/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserDetails = /* GraphQL */ `
  mutation CreateUserDetails(
    $input: CreateUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    createUserDetails(input: $input, condition: $condition) {
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
export const updateUserDetails = /* GraphQL */ `
  mutation UpdateUserDetails(
    $input: UpdateUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    updateUserDetails(input: $input, condition: $condition) {
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
export const deleteUserDetails = /* GraphQL */ `
  mutation DeleteUserDetails(
    $input: DeleteUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    deleteUserDetails(input: $input, condition: $condition) {
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
export const createUserScore = /* GraphQL */ `
  mutation CreateUserScore(
    $input: CreateUserScoreInput!
    $condition: ModelUserScoreConditionInput
  ) {
    createUserScore(input: $input, condition: $condition) {
      id
      userSub
      score
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserScore = /* GraphQL */ `
  mutation UpdateUserScore(
    $input: UpdateUserScoreInput!
    $condition: ModelUserScoreConditionInput
  ) {
    updateUserScore(input: $input, condition: $condition) {
      id
      userSub
      score
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserScore = /* GraphQL */ `
  mutation DeleteUserScore(
    $input: DeleteUserScoreInput!
    $condition: ModelUserScoreConditionInput
  ) {
    deleteUserScore(input: $input, condition: $condition) {
      id
      userSub
      score
      createdAt
      updatedAt
      __typename
    }
  }
`;

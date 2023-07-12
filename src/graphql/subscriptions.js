/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserDetails = /* GraphQL */ `
  subscription OnCreateUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
  ) {
    onCreateUserDetails(filter: $filter) {
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
export const onUpdateUserDetails = /* GraphQL */ `
  subscription OnUpdateUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
  ) {
    onUpdateUserDetails(filter: $filter) {
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
export const onDeleteUserDetails = /* GraphQL */ `
  subscription OnDeleteUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
  ) {
    onDeleteUserDetails(filter: $filter) {
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
export const onCreateUserScore = /* GraphQL */ `
  subscription OnCreateUserScore(
    $filter: ModelSubscriptionUserScoreFilterInput
  ) {
    onCreateUserScore(filter: $filter) {
      id
      userSub
      score
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserScore = /* GraphQL */ `
  subscription OnUpdateUserScore(
    $filter: ModelSubscriptionUserScoreFilterInput
  ) {
    onUpdateUserScore(filter: $filter) {
      id
      userSub
      score
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserScore = /* GraphQL */ `
  subscription OnDeleteUserScore(
    $filter: ModelSubscriptionUserScoreFilterInput
  ) {
    onDeleteUserScore(filter: $filter) {
      id
      userSub
      score
      createdAt
      updatedAt
      __typename
    }
  }
`;

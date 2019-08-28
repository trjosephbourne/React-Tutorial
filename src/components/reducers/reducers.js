const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  }

  return oldListOfClaims;
};

const accounting = (bagOfMoney, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.cashAmountToClaim;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.amount;
  }

  return bagOfMoney;
};

const policyHistory = (oldListOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...oldListOfPolicies, action.payload];
  } else if (action.type === "DELETE_POLICY") {
    return oldListOfPolicies;
  }

  return oldListOfPolicies;
};

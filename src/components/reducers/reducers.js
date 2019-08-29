const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  }

  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.cashAmountToClaim;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.amount;
  }

  return bagOfMoney;
};

const policyHistory = (oldListOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...oldListOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return oldListOfPolicies.filter(name => name !== action.payload.name);
  }

  return oldListOfPolicies;
};

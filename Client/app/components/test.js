const printable = state => ({
  print: () => console.log(state.policyNbr + " is being printed")
});

const bindable = state => ({
  bind: () => console.log(state.policyNbr + " was bound")
});

const policy = polNbr => {
  let state = {
    policyNbr: polNbr,
    isIssued: false,
    createDate: Date.now()
  };

  return Object.assign({}, printable(state), bindable(state));
};

var p = policy("LHP8955");
p.print(); 
p.bind(); 


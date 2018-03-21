const printable = (state) => ({
    print: () => console.log(state.policyNbr + " is being printed")
  })
  
  const bindable = (state) => ({
    bind: () => console.log(state.policyNbr + " was bound")
  }) 

  const policy = (polNbr) => {
  
    let state = {
      policyNbr: polNbr,
      isIssued: false,
      createDate: Date.now()
    }
    
    return Object.assign(
        {},
        printable(state),
        bindable(state));
   
    
  }
  
  var p = policy('LHP8855')
  p.print()
  p.bind()

  var q = policy('QHP34567');

  var obj1 = { a: 123, b:456}
  var obj2 = { a: 876, b:917}


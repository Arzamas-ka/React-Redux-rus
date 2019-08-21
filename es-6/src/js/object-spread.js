const def = {
  host: 'local',
  dName: 'blog',
  user: 'admin', 
};

const opt = {
  user: 'peter',
  pass: 123,
};

const defOpt = Object.assign({}, def. opt);
console.log(defOpt);

const defOptions = {...def, ...opt };
console.log(defOptions);

// ****** ******

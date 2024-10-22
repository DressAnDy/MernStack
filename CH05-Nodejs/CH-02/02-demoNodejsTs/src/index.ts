const fullname = "Anh điệp đẹp trai";
console.log(fullname);

type Handle = () => Promise<string>;
const handleF: Handle = () => Promise.resolve(fullname + " ahihi");
handleF().then((res) => {
  console.log(res);
});

const person: any = {};
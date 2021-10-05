import bcryptjs from "bcryptjs"

const users = [
  {
    name: "admin user",
    email: "admin@zmalashop.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "jhon doe",
    email: "jhon@zmalashop.com",
    password: bcryptjs.hashSync("123456", 10),
 
  },
  {
    name: "jeena dhoe ",
    email: "jeena@zmalashop.com",
    password: bcryptjs.hashSync("123456", 10),
 
  },
  {
    name: "amar douane",
    email: "amar@zmalashop.com",
    password: bcryptjs.hashSync("123456", 10),
    
  },
];
export default users 
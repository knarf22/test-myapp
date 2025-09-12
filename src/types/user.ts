export interface User {
  id: number;
  email: string;
  name : string;
  phone: string;
  username: string;
  website: string;
  address : Address;
  company : Company;
}

export interface Address {
    city : string;
    street : string;
    suit : string;
    zipcode : string;
    geo : {
        lat : string;
        lng : string;
    }
}

export interface Company {
    bs : string;
    catchPhrase : string;
    name : string;
}
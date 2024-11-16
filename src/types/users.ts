export type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress
  phone: string;
  website: string;
  company: UserCompany
}

export type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}

export type GeoLocation = {
  lat: string;
  lng: string;
}

export type UserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
}
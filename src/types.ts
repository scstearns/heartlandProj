export type Maybe<T> = null | undefined | T;

export type CountryCode = 'US' | 'MX' | 'CA';

export type Address = {
  streetAddress: string,
  streetAddress2?: Maybe<string>,
  city: string,
  state: string,
  countryCode: Maybe<CountryCode>,
  postalCode: string
}

export type Contact = {
  firstName: string,
  middleName: Maybe<string>,
  lastName: string,
  address: Address[],
  telephone: string,
}
class User {
  constructor(
    public name: string,
    public email: string,
    public readonly id?: string,
  ) {}
}

export default User;

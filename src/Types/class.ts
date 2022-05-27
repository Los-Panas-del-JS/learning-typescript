enum UserRole {
  'admin',
  'guess',
};

interface UserRoleAuthorizableInterface {
  check(): void;

  changeRole(): void;

  auth(): boolean;
}

class User implements UserRoleAuthorizableInterface {
  private name: string;

  private role: UserRole;

  constructor(name: string, role: UserRole) {
    this.name = name;
    this.role = role;
  }

  check(): void {
    if (this.role === UserRole.admin) {
      console.log(`User has role ADMIN with name ${this.name}`);

      return;
    }

    console.log(`User has role GUESS with name ${this.name}`);
  }

  changeRole(): void {
    if (this.role === UserRole.admin) {
      this.role = UserRole.guess;

      return;
    }

    this.role = UserRole.admin;
  }

  auth(): boolean {
    return this.role === UserRole.admin;
  }
}

interface ApiDefinitionInterface {
  name: string;

  endPoint: string;
}

interface ApiIntegrationInterface extends ApiDefinitionInterface {
  call(): void;
}

interface UserApiDelegationInterface {
  delegate(user: User): void;
}

abstract class BaseApiIntegration implements ApiIntegrationInterface {
  public name: string;

  public endPoint: string;

  constructor(name: string, endPoint: string) {
    this.name = name;
    this.endPoint = endPoint;
  }

  abstract call(): void;
}

class BotApi extends BaseApiIntegration implements UserApiDelegationInterface {
  constructor() {
    super('BotApi', 'https://bot.hidden.com/api/v3/')
  }

  delegate(user: User): void {
    if (user.auth()) {
      this.call();

      return;
    }

    throw new Error(`Cannot delegate user to ${this.name}`);
  }

  call(): void {
    console.log(`Calling API ${this.name} for endpoint ${this.endPoint}`);
  }
}

const user: User = new User(
  'Diego',
  UserRole.admin
);

user.check();
user.changeRole();
user.check();

const api: BotApi = new BotApi();

user.changeRole();

api.delegate(user);

user.changeRole();

api.delegate(user);

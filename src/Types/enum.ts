enum UserRole {
  'admin',
  'guess',
};

interface User {
  role: UserRole;

  name: string;
}

function checkUser(user: User): void {
  if (user.role === UserRole.admin) {
    console.log(`User has role ADMIN with name ${user.name}`);

    return;
  }

  console.log(`User has role GUESS with name ${user.name}`);
}

function changeRole(user: User): void {
  if (user.role === UserRole.admin) {
    user.role = UserRole.guess;

    return;
  }

  user.role = UserRole.admin;
}

const user: User = {
  role: UserRole.admin,
  name: 'Diego',
};

checkUser(user);
changeRole(user);
checkUser(user);

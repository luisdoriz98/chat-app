const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id:'1',
      name: 'Luis',
      room: 'TestRoom'
    }, {
      id:'2',
      name: 'Fer',
      room: 'TestRoom'
    }, {
      id:'3',
      name: 'Melissa',
      room: 'Room'
    },
  ]
  });

  it('Should add a new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Luis',
      room: 'TestRoom'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('Should return names for test room', () => {
    var userList = users.getUserList('TestRoom');
    expect(userList).toEqual(['Luis', 'Fer']);
  });

  it('Should return names for  room', () => {
    var userList = users.getUserList('Room');
    expect(userList).toEqual(['Melissa']);
  });

  it('Should remove a User',() => {
    var userId= '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove a User',() => {
    var userId= '99';
    var user = users.removeUser(userId);

    expect(user).toBeUndefined();
    expect(users.users.length).toBe(3);
  });


  it('Should get one user by id', () => {
    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('Should not get one user by id', () => {
    var userId = 'es42';
    var user = users.getUser(userId);
    expect(user).toBeUndefined();
  });
});

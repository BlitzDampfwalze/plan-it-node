// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const faker = require('faker');

const expect = require('expect');
const request = require('supertest');

const mongoose = require('mongoose');

// const should = chai.should();

const { Task } = require('../models/Task');
const { Schedule } = require('../models/Schedule');
const { User } = require('../models/User');

const { closeServer, runServer, app } = require('../server');
const { TEST_DATABASE_URL } = require('../config/config');

// chai.use(chaiHttp);

const { ObjectID } = require('mongodb');

const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/config');

// this function deletes the entire database.
// we'll call it in an `afterEach` block below
// to ensure  ata from one test does not stick
// around for next one
function tearDownDb() {
  return new Promise((resolve, reject) => {
    console.warn('Deleting database');
    mongoose.connection.dropDatabase()
      .then(result => resolve(result))
      .catch(err => reject(err));
  });
}

const userOneId = new ObjectID();
const eventOneId = new ObjectID();

const users = [
  {
    _id: userOneId,
    email: 'test@gmail.com',
    password: 'asdf123',
    tokens: [{
      access: 'auth',
      token: jwt
        .sign({ _id: userOneId, access: 'auth' }, 'abc123')
        .toString()
    }]
  }
]

const events = [
  {
    _id: eventOneId,
    users: [],
    title: 'Test-event 1',
    description: 'some desc for test-event 1',
    password: '',
    imageUrl: '',
  },
]

const tasks = [
  {
    _id: new ObjectID(),
    user: userOneId,
    event: eventOneId,
    taskDetails: "dessert",
    completed: false,
  },
  {
    _id: new ObjectID(),
    user: userOneId,
    event: eventOneId,
    taskDetails: "test 2 task details",
    completed: false,
  }]

describe('Plan-it API resource', function () {

  before(function () {
    return runServer(TEST_DATABASE_URL);
  });

  // beforeEach(function () {
  //   return seedBlogPostData();
  // });

  beforeEach((done) => {
    User.deleteMany({}).then(() => {
      const user = new User(users[0])
      return user.save()
        .then(() => {
          return Task.deleteMany({})
            .then(() => Task.insertMany(tasks))
        })
        .then(() => done());
    })
  });

  afterEach(function () {
    // tear down database so we ensure no state from this test
    // effects any coming after.
    return tearDownDb();
  });

  after(function () {
    return closeServer();
  });


  describe('GET /api/users/auth', () => {
    it('should return user if authenticated', (done) => {
      request(app)
        .get('/api/users/auth')
        .set('x-auth', users[0].tokens[0].token)
        .expect(200)
        .expect((res) => {
          expect(res.body._id).toBe(users[0]._id.toHexString());
          expect(res.body.email).toBe(users[0].email);
        })
        .end(done);
    });

    it('should return 401 if not authenticated', (done) => {
      request(app)
        .get('/api/users/auth')
        .expect(401)
        .expect((res) => {
          expect(res.body).toEqual({});
        })
        .end(done);
    });
  });

  describe('POST /api/users', () => {
    it('should create a user', (done) => {
      const email = 'example@example.com';
      const password = '1234asdf';

      request(app)
        .post('/api/users')
        .send({ email, password })
        .expect(200)
        .expect((res) => {
          expect(res.body.token).toBeDefined();
          expect(res.body.id).toBeDefined();
          expect(res.body.email).toEqual(email);
        })
        .end((err) => {
          if (err) {
            return done(err);
          }

          User.findOne({ email }).then((user) => {
            expect(user).toBeDefined();
            expect(user.password).not.toEqual(password);
            done()
          })
            .catch(err => done(err));
        })
    });
  });

  describe('POST /api/users/login', () => {
    it('should login user and return auth token', done => {
      request(app)
        .post('/api/users/login')
        .send({
          email: users[0].email,
          password: users[0].password,
        })
        .expect(200)
        .expect(res => {
          expect(res.body.token).toBeTruthy();
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          User.findById(users[0]._id)
            .then(user => {
              expect(user.toObject().tokens[0]).toMatchObject({
                access: 'auth',
                token: res.body.token,
              });
              done();
            })
            .catch(err => done(err));
        });
    });

    it('should reject invalid login', done => {
      request(app)
        .post('/api/users/login')
        .send({
          email: users[0].email,
          password: users[0].password + '1',
        })
        .expect(401)
        .expect(res => {
          expect(res.headers['x-auth']).toBeFalsy();
        })
        .end(err => {
          if (err) {
            return done(err);
          }

          User.findById(users[0]._id)
            .then(user => {
              expect(user.tokens.length).toBe(1);
              done();
            })
            .catch(err => done(err));
        });
    });
  });

  describe('DELETE /api/users/me/token', () => {
    it('should remove auth token on logout', done => {
      request(app)
        .delete('/api/users/me/token')
        .set('x-auth', users[0].tokens[0].token)
        .expect(200)
        .end(err => {
          if (err) {
            return done(err);
          }

          User.findById(users[0]._id)
            .then(user => {
              expect(user.tokens.length).toBe(0);
              done();
            })
            .catch(err => done(err));
        });
    });
  });



describe('POST /recipes', () => {
  it('should create new recipe', (done) => {

    const newRecipe = {
      userID: userOneId,
      title: "pies",
      dishType: "dessert",
      ingredients: "flour, water, apples",
      instructions: "instructions alsdjflasdf",
      readyInMinutes: 20,
      servings: 6,
      source: 'website'
    }

    request(app)
      .post('/recipes')
      .set('x-auth', users[0].tokens[0].token)
      .send(newRecipe)
      .expect(200)
      .expect((res) => {
        expect(res.body.dishType).toBe('dessert');
        expect(res.body.ingredients).toBe(newRecipe.ingredients);
        expect(res.body.instructions).toBe('instructions alsdjflasdf');
        expect(res.body.readyInMinutes).toBe(20);
      })
      .end(err => {
        if (err) {
          return done(err);
        }

        Recipe.find()
          .then(recipes => {
            expect(recipes.length).toBe(3);
          })
          .then(() => Recipe.find(newRecipe)
            .then(recipes => {
              expect(recipes.length).toBe(1);
              expect(recipes[0].dishType).toBe(newRecipe.dishType);
              expect(recipes[0].ingredients).toBe(newRecipe.ingredients);
              expect(recipes[0].instructions).toBe(newRecipe.instructions);
              expect(recipes[0].readyInMinutes).toBe(newRecipe.readyInMinutes);
              done();
            })).catch((err) => done(err));
      });
  })

  it('should not create recipe with invalid body data', (done) => {
    request(app)
      .post('/recipes')
      .set('x-auth', users[0].tokens[0].token)
      .send({})
      .expect(500)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Recipe.find()
          .then((recipes) => {
            expect(recipes.length).toBe(2);
            done();
          })
          .catch((e) => done(e));
      });
  });
})

describe('GET /recipes', () => {
  it('should get all recipes', (done) => {
    request(app)
      .get('/recipes')
      .set('x-auth', users[0].tokens[0].token)
      .expect(200)
      .expect((res) => {
        expect(res.body.recipes.length).toBe(2);
      })
      .end(done);
  });
});

describe('GET /recipes/:id', () => {
  it('should return recipe doc', (done) => {
    console.log(recipes)
    request(app)
      .get(`/recipes/${recipes[0]._id.toHexString()}`)
      .set('x-auth', users[0].tokens[0].token)
      .expect(200)
      .expect((res) => {
        expect(res.body.recipe.title).toBe(recipes[0].title);
      })
      .end(done);
  });

  it('should return 404 if recipe not found', (done) => {
    const hexId = new ObjectID().toHexString();

    request(app)
      .get(`/recipes/${hexId}`)
      .set('x-auth', users[0].tokens[0].token)
      .expect(404)
      .end(done);
  });

  it('should return 404 for non-object ids', (done) => {
    request(app)
      .get('/recipes/123abc')
      .set('x-auth', users[0].tokens[0].token)
      .expect(404)
      .end(done);
  });
});

describe('DELETE /recipes/:id', () => {
  it('should remove a recipe', (done) => {
    const hexId = recipes[0]._id.toHexString();

    request(app)
      .delete(`/recipes/${hexId}`)
      .set('x-auth', users[0].tokens[0].token)
      .expect(204)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Recipe.findById(hexId)
          .then(recipe => {
            expect(recipe).toBeFalsy();
            done();
          })
          .catch(e => done(e));
      });
  });

  it('should return 404 if object id is invalid', done => {
    request(app)
      .delete('/recipes/123abc')
      .set('x-auth', users[0].tokens[0].token)
      .expect(404)
      .end(done);
  });
});

});  //end of Plan-it API resource before eaches//
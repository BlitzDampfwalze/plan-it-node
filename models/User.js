const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const pick = require('lodash.pick');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('./../config/config');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      minlength: 5,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email',
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    username: {
      type: String,
      unique: true
    },
    tokens: [{
      access: {
        type: String,
        required: true,
      },
      token: {
        type: String,
        required: true,
      },
    }]
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  return pick(userObject, ['_id', 'email', 'username']);
};

userSchema.methods.generateAuthToken = function () {
  const user = this;
  const access = 'auth'; 
  const token = jwt.sign({ _id: user._id.toHexString(), access }, JWT_SECRET).toString();

  user.tokens = user.tokens.concat([{ access, token }]);

  return user.save().then(() => {
    return token;
  });
};

userSchema.methods.removeToken = function (token) {
  const user = this;

  return user.update({
    $pull: {
      tokens: { token },
    },
  });
};

userSchema.statics.findByToken = function (token) {
  const User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return Promise.reject('some rejection value'); //value in err for catch on user login routes
  }

  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth',
  });
};

userSchema.statics.findByCredentials = function (email, password) {
  const User = this;

  return User.findOne({ email }).then(user => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

userSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
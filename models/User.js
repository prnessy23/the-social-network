const { Schema, model, SchemaTypeOptions } = require('mongoose');
const dayjs = require('dayjs');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],

friends: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false
}
);
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;

});
// create user model with userschema
const User =model('User', UserSchema);

// export user model
module.exports = User;
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('linksPub', function() {
        return Links.find({ userId: this.userId });
    });
}

Meteor.methods ({

'links.insert'(url) {
    if(!this.userId) {
        throw new Meteor.Error('not-authorized');
    }

        new SimpleSchema({
          url: {
            type: String,
            label: 'Your link',
            regEx: SimpleSchema.RegEx.Url
          }
        }).validate({ url });

    Links.insert({
        _id: shortid.generate(),
        url,
        userId: this.userId,
        visible: true,
        visitedCount: 0,
        lastVisitedAt: null
    });
},
'links.setVisibility'(id, status) {
    if(!this.userId) {
        throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
        id: {
            type: String,
            min: 1
        },
        status: {
            type: Boolean,    
        }
    }).validate({ id, status });

   Links.update({
       _id: id,
       userId: this.userId
   }, {
       $set: {
           visible: status
       }
   });

},
'links.trackVisit'(_id) {
    new SimpleSchema({
        id: {
            type: String,
            min: 1
        }
    }).validate({ id: _id });

    Links.update({_id},{
        $set: {
            lastVisitedAt: new Date().getTime()
        },
        $inc: {
            visitedCount: 1 
        }
    });

}

});
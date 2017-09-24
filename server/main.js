import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import { Links } from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {

  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if(link) {
    res.statusCode = 302;
    res.setHeader('Location', link.url);
    res.end(); 
    }else {
      next();
    }
  });

  // WebApp.connectHandlers.use((req, res, next) => {
  //   console.log('middleware');
    // console.log(req.url, req.method, req.headers, req.query);
    //set http status code
    // res.statusCode = 404;
    //set http headers
    // res.setHeader('benden-gelen-header', 'akif');
    //set http body
    // res.write('<h1>Response</h1>');
    //end http request
    // res.end();

  //   next();
  // });
  // code to run on server at startup


  // const employeeSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200
  //   }, 
  //   hourlyWage: {
  //       type: Number,
  //       min: 0
  //     },
  //   email : {
  //     type: String,
  //     regEx: SimpleSchema.RegEx.Email
  //   }
  // });

  // employeeSchema.validate({
  //   name: 'asd',
  //   hourlyWage: 1,
  //   email: 'asda@asd.com'
  // });

});

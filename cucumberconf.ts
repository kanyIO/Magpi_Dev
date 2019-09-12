
import {Config, browser} from "protractor";

exports.config = {  
// seleniumAddress: 'http://localhost:4444/wd/hub',
"compilerOptions": {
  "lib": ["es2018", "dom","scripthost"],},
framework:'custom',
frameworkPath: require.resolve('protractor-cucumber-framework'),
 directConnect: true, 

specs: ['../Features/task.feature'],
cucumberOpts: {

  require: [
   './StepDefinition/*.js',] // accepts a glob,
  },
  
onPrepare:()=>{
(global as any).Angularsite=function(flag:boolean){
  browser.ignoreSynchronization=!flag;
}
},

// splitTestsBetweenCapabilities: true,
// multiCapabilities: [{
//   browserName: 'chrome',
//   client_key: "api_key",
//   client_secret: "api_secret"
// }],

  };

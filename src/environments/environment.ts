// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'maha-jans',
    appId: '1:157368815748:web:b8d48ba4b9c9e43a7bb2d1',
    storageBucket: 'maha-jans.appspot.com',
    locationId: 'us-central',
    apiKey: 'REPLACEMENT_STRING',
    authDomain: 'maha-jans.firebaseapp.com',
    messagingSenderId: '157368815748',
    measurementId: 'G-6MB4XCB5MB',
  },
  cloudFunctions: {
    createOrder: 'https://us-central1-trivenisangam-aef13.cloudfunctions.net/createOrder',
    capturePayment:
      'https://us-central1-trivenisangam-aef13.cloudfunctions.net/capturePayments',
  },
  RAZORPAY_KEY_ID: 'REPLACEMENT_STRING_uaE9gdz5zjzhGm',
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error'; // Included with Angular CLI.

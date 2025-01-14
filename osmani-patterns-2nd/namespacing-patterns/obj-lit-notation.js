const myApplication = {
  getInfo() {
    console.log('Application information');
  },
  models: {
    user: {
      login() {
        console.log('User Logged In');
      },
      logout() {
        console.log('User Logged Out');
      },
    },
  },
  views: {
    pages: {
      home: {
        show() {
          console.log('Home Page Show');
        },
      },
      about: {
        show() {
          console.log('About Page Show');
        }
      },
    },
  },
  collections: {},
};

myApplication.getInfo();
myApplication.models.user.login();

myApplication.views.pages.home.show();
myApplication.views.pages.about.show();

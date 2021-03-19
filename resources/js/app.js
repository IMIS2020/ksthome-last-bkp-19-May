require('./bootstrap');
window.Vue = require('vue');
import Vue from "vue";
import VueRouter from 'vue-router';
import routes from './routes';
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueRouter);
Vue.use(VueSimpleAlert);

newFunction();

function newFunction(){

  const app1 = new Vue({
    el: '#manageScholarship',
    router: new VueRouter(routes)
  });

  const app2 = new Vue({
    el: '#dashboard',
    router: new VueRouter(routes)
  });

//add-start(nursing)
  const app3 = new Vue({
    el: '#applicationForm',
    router: new VueRouter(routes)
  });

  const app4 = new Vue({
    el: '#annexure1',
    router: new VueRouter(routes)
  });

  const app5 = new Vue({
    el: '#annexure2',
    router: new VueRouter(routes)
  });

  const app6 = new Vue({
    el: '#annexure2PrintForm',
    router: new VueRouter(routes)
  });

  const app7 = new Vue({
    el: '#annexure2BlankForm',
    router: new VueRouter(routes)
  });

  const app8 = new Vue({
    el: '#uploadDocuments',
    router: new VueRouter(routes)
  });

  const app9 = new Vue({
    el: '#review',
    router: new VueRouter(routes)
  });
//add-end(nursing)

// view-start(nursing)
  
  const app10 = new Vue({
    el: '#viewNursing',
    router: new VueRouter(routes)
  });
  
  const app11 = new Vue({
    el: '#printViewNursing',
    router: new VueRouter(routes)
  });
//manage-view end (Nursing)

//HHDLSS ADD-START
  const app12 = new Vue({
    el: '#applicationFormHHDLSS',
    router: new VueRouter(routes)
  });

  const app13 = new Vue({
    el: '#annexure1HHDLSS',
    router: new VueRouter(routes)
  });

  const app14 = new Vue({
    el: '#annexure2HHDLSS',
    router: new VueRouter(routes)
  });

  const app15 = new Vue({
    el: '#annexure2PrintFormHHDLSS',
    router: new VueRouter(routes)
  });

  const app16 = new Vue({
    el: '#annexure2BlankFormHHDLSS',
    router: new VueRouter(routes)
  });

  const app17 = new Vue({
    el: '#uploadDocumentsHHDLSS',
    router: new VueRouter(routes)
  });

  const app18 = new Vue({
    el: '#reviewHHDLSS',
    router: new VueRouter(routes)
  });
//HHDLSS ADD-END

//view-start hhdlss
  const app19 = new Vue({
    el: '#viewHHDLSS',
    router: new VueRouter(routes)
  });

  const app20 = new Vue({
    el: '#printViewHHDLSS',
    router: new VueRouter(routes)
  });

//End-HHDLSS

// Admin Section
const app21 = new Vue({
  el: '#adminDashboard',
  router: new VueRouter(routes)
});

const app22 = new Vue({
  el: '#addDomains',
  router: new VueRouter(routes)
});

const app23 = new Vue({
  el: '#manageDomains',
  router: new VueRouter(routes)
});

const app24 = new Vue({
  el: '#addNursingApplicationSchedule',
  router: new VueRouter(routes)
});

const app25 = new Vue({
  el: '#addHHDLSSApplicationSchedule',
  router: new VueRouter(routes)
});

const app26 = new Vue({
  el: '#manageApplicationSchedule',
  router: new VueRouter(routes)
});

const app27 = new Vue({
  el: '#manageApplicationDetails',
  router: new VueRouter(routes)
});
// Nursing
const app28 = new Vue({
  el: '#applicationFormNursing',
  router: new VueRouter(routes)
});

const app29 = new Vue({
  el: '#annexure1Nursing',
  router: new VueRouter(routes)
});

const app30 = new Vue({
  el: '#annexure2Nursing',
  router: new VueRouter(routes)
});

const app31 = new Vue({
  el: '#uploadDocumentsNursing',
  router: new VueRouter(routes)
});

const app32 = new Vue({
  el: '#reviewNursing',
  router: new VueRouter(routes)
});


// Review-hhdlss

// const app33 = new Vue({
//   el: '#applicationFormNursing',
//   router: new VueRouter(routes)
// });

// const app34 = new Vue({
//   el: '#annexure1Nursing',
//   router: new VueRouter(routes)
// });

// const app35 = new Vue({
//   el: '#annexure2Nursing',
//   router: new VueRouter(routes)
// });

// const app36 = new Vue({
//   el: '#uploadDocumentsNursing',
//   router: new VueRouter(routes)
// });

// const app37 = new Vue({
//   el: '#reviewNursing',
//   router: new VueRouter(routes)
// });
// End hhdlss

const app38 = new Vue({
  el: '#extendLastDate',
  router: new VueRouter(routes)
});

}
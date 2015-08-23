!function(){"use strict";angular.module("javabrains.common",[]),angular.module("javabrains",["ngAnimate","ngTouch","ngSanitize","ui.router","ui.bootstrap","angularUtils.directives.dirPagination","javabrains.common"])}(),function(){"use strict";function e(){return{restrict:"A",link:function(e,t,s){e.$watch(s.translateX,function(e,s){e&&e!==s&&(e=parseFloat(e)+"%",t.css("transform","translateX("+e+")"))})}}}angular.module("javabrains").directive("translateX",e)}(),function(){"use strict";function e(){return{templateUrl:"/app/lesson-module/quiz/quiz.html",scope:{content:"="},controller:t,controllerAs:"ctrl"}}function t(e){this.quiz={questions:e.content},this.quizStarted=!0,this.showTabs=!0,this.userData={quizAnswers:{}},this.activeQuestionIndex=0,this.activateQuestion=function(e){this.setActiveQuestionIndex(e)},this.setActiveQuestionIndex=function(e){this.activeQuestionIndex=e},this.isAnswerCorrect=function(e){var t=this.userData.quizAnswers[e.id];return null!=t&&t==e.correctAnswer},this.isAnswerIncorrect=function(e){var t=this.userData.quizAnswers[e.id];return null!=t&&t!=e.correctAnswer}}angular.module("javabrains").directive("quiz",e),t.$inject=["$scope"]}(),function(){"use strict";function e(){return{templateUrl:"/app/lesson-module/manuscript/manuscript.html",scope:{content:"="}}}angular.module("javabrains").directive("manuscript",e)}(),angular.module("javabrains").filter("trust_html",["$sce",function(e){return function(t){return e.trustAsHtml(t)}}]),function(){"use strict";function e(){return function(e,t){var s=_.values(t.tags),a={searchCriteria:t,out:[]};return angular.forEach(e,function(e,n){var r=_.intersection(e.tags,s);return("All"===t.tags.All||r.length)&&t.level[e.level]?void a.out.push(e):void 0},a),a.out}}angular.module("javabrains").filter("coursefilter",e)}(),function(){"use strict";function e(){function e(e,t){var s=this;s.currentUrl=e.path(),s.isCoursesUrl=e.path().startsWith("/courses"),s.isTopicsUrl=e.path().startsWith("/topics"),s.isAboutUrl=e.path().startsWith("/about"),t.$on("$stateChangeSuccess",function(t,a,n,r,i){window.scrollTo(0,0),s.currentUrl=e.path(),s.isCoursesUrl=s.currentUrl.startsWith("/courses"),s.isTopicsUrl=s.currentUrl.startsWith("/topics"),s.isAboutUrl=s.currentUrl.startsWith("/about")})}var t={restrict:"E",templateUrl:"/app/components/navbar/navbar.html",scope:{},controller:e,controllerAs:"vm",bindToController:!0};return e.$inject=["$location","$rootScope"],t}angular.module("javabrains.common").directive("navbar",e)}(),function(){"use strict";function e(){return{templateUrl:"/app/components/lesson-section/lesson-section.html",controller:t,scope:{lesson:"="},controllerAs:"ctrl"}}function t(e,t){this.lesson=e.lesson,s(this.lesson,t)}function s(e,t){e.url="/courses/"+e.courseCode+"/lessons/"+e.permalinkName,e.prevLessonPermalinkName&&(e.prevLessonPermalinkName="/courses/"+e.courseCode+"/lessons/"+e.prevLessonPermalinkName),e.nextLessonPermalinkName&&(e.nextLessonPermalinkName="/courses/"+e.courseCode+"/lessons/"+e.nextLessonPermalinkName);var s=t.path();s.endsWith(e.url)&&(e.isSelected=!0);for(var a in e.sections){var n=e.sections[a];n.url=e.url+"/"+n.permalinkName,s.endsWith(e.permalinkName+"/"+n.permalinkName)&&(n.isSelected=!0)}return e}angular.module("javabrains").directive("lessonSection",e),t.$inject=["$scope","$location"]}(),function(){"use strict";function e(){this.topics=[{id:"spring",name:"Spring",desc:"Learn about one of the most popular application frameworks in Java today.",tech:"java",level:"Beginner",tags:["Java","Spring"],courses:3},{id:"javaee",name:"Java EE",desc:"Enterprise Java programming courses.",tech:"java",level:"Beginner",tags:["Java","Java EE"],courses:2},{id:"maven",name:"Maven",desc:"Understand and use Maven to simplify your application's build and dependency management.",tech:"java",level:"Intermediate",tags:["Java","Maven"],courses:1},{id:"struts2",name:"Struts 2",desc:"Learn MVC concepts and write MVC web applications with the Struts 2 framework.",tech:"java",level:"Advanced",tags:["Java","Struts2"],courses:1},{id:"hibernate",name:"Hibernate",desc:"Understand Object Relational Mapping and write robust data applications using this ORM framework.",tech:"java",level:"Advanced",tags:["Java","Hibernate"],courses:2},{id:"servlets",name:"Servlets and JSPs",desc:"Learn server side web programming in Java.",tech:"java",level:"Advanced",tags:["Java","Servlets","JSP"],courses:2},{id:"angularjs",name:"AngularJS (Coming soon)",desc:"Learn about this client side application framework and build rich single page applications.",tech:"js",level:"Advanced",tags:["Javascript","AngularJS"],courses:0}],this.courses=[{slNo:1,code:"javaee_jaxrs",topic:"javaee",name:"Developing REST APIs with JAX-RS",desc:"This course introduces you to RESTful Web Services using the JAX-RS standard specification. You will learn what RESTful web services are and how to write them. You will write a sample RESTful web service from scratch, design the APIs, implement it using Jersey and run it on Tomcat. ",level:"Beginner",img:"https://i.ytimg.com/vi/xkKcdK1u95s/mqdefault.jpg",tags:["Java","Java EE"]},{slNo:2,code:"javaee_jaxws",topic:"javaee",name:"Developing SOAP Web Services with JAX-WS",desc:"This course introduces you to SOAP Web Services using the JAX-WS standard specification. You will learn what SOAP web services are and how to write them. You will be writing a web service application, deploying, running and testing it on Glassfish. You will also learn to consume SOAP web services.",level:"Beginner",img:"https://i.ytimg.com/vi/Zx6NuO6niFI/mqdefault.jpg",tags:["Java","Java EE"]},{slNo:3,code:"spring_core",topic:"spring",name:"Learning Spring Core",desc:"This course provides an introduction to the Spring framework. You will understand the concepts of dependency injection, understand how the core Spring framework works and how to write an application using it.",level:"Beginner",img:"https://i.ytimg.com/vi/WUqyoH_G4Ko/mqdefault.jpg",tags:["Java","Spring"]},{slNo:4,code:"spring_aop",topic:"spring",name:"Understanding Spring AOP",desc:"This course introduces the concepts of Aspect Oriented Programming and Spring AOP. You will learn to write Aspects in Java using Spring AOP and also understand the terminologies used in AOP along the way.",level:"Advanced",img:"https://i.ytimg.com/vi/4P0TME-AbSw/mqdefault.jpg",tags:["Java","Spring"]},{slNo:5,code:"spring_data",topic:"spring",name:"Data access in Spring",desc:"Almost every application needs to access data. In this course, you will learn about Spring support for data access from relational databases.",level:"Intermediate",tags:["Java","Spring","Hibernate"],img:"https://i.ytimg.com/vi/eR_JFtqyNL4/mqdefault.jpg"},{slNo:6,code:"hibernate_intro",topic:"hibernate",name:"Introduction To Hibernate",desc:"This course provides an introduction to the Hibernate ORM framework. You will understand the concept of Object Relational Mapping (ORM). You will learn to use Hibernate to write Java applications that connect to a relational database. You will also learn various JPA annotations that let you map classes to relational models.",level:"Beginner",img:"https://i.ytimg.com/vi/Yv2xctJxE-w/mqdefault.jpg",tags:["Java","Hibernate"]},{slNo:7,code:"hibernate_run",topic:"hibernate",name:"Hibernate - APIs and Runtime",desc:"This course explores the runtime aspects of Hibernate. You'll understand how to perform Create, Read, Update and Delete operations, implement Hibernate APIs, understand the life cycle of entities, write queries in HQL, the Hibernate Query Language and implement caching.",level:"Intermediate",img:"https://i.ytimg.com/vi/sjZGFHEdD4M/mqdefault.jpg",tags:["Java","Hibernate"]},{slNo:8,code:"maven_intro",topic:"maven",name:"Introduction to Maven",desc:"This course is an introduction to the basic features of Apache Maven. You will learn what Maven is and how it helps managing dependencies in your Java project. You will understand POM configuration, build phases and use plugins.",level:"Beginner",img:"https://i.ytimg.com/vi/al7bRZzz4oU/mqdefault.jpg",tags:["Java","Maven"]},{slNo:9,code:"struts2_intro",topic:"struts2",name:"Beginning Struts 2",desc:"This course provides an introduction to the Struts 2 framework. You will understand the concepts of MVC, and learn to write a web application from scratch using Struts 2.",level:"Beginner",img:"https://i.ytimg.com/vi/9BvQpf7JcOI/mqdefault.jpg",tags:["Java","Struts 2"]},{slNo:10,code:"servlets_intro",topic:"servlets",name:"Introduction to Servlets",desc:"This course provides an introduction to Java Servlet technology. You will learn how to develop Java web applications using Servlets. you will also understand the life cycle of Servlets, how they work and how to configure them.",level:"Beginner",img:"https://i.ytimg.com/vi/b42CJ0r-1to/mqdefault.jpg",tags:["Java","Servlets and JSPs"]},{slNo:11,code:"jsps_intro",topic:"servlets",name:"Java Server Pages",desc:"This course covers writing and implementing Java Server Pages (JSPs) on a servlet container. You will understand what JSPs are, how they are related to servlets and how to write view logic using them.",level:"Beginner",img:"https://i.ytimg.com/vi/zk_zEp-mtvQ/mqdefault.jpg",tags:["Java","Servlets and JSPs"]}]}angular.module("javabrains.common").service("courseDataService",e)}(),function(){"use strict";function e(e){this.filterValue="",this.topics=e.topics,this.filterTopics=function(e){this.filterValue=e}}angular.module("javabrains").controller("TopicsController",e),e.$inject=["courseDataService"]}(),function(){"use strict";function e(){}angular.module("javabrains").controller("MainController",e)}(),function(){"use strict";function e(e,t){this.info=e.data,this.info.youtube=t.trustAsResourceUrl("//www.youtube.com/embed/"+this.info.youtube+"?rel=0&showinfo=0&fs=1")}angular.module("javabrains").controller("LessonController",e),e.$inject=["lessonData","$sce"]}(),function(){"use strict";function e(e,t){function s(e,t){var s;for(var a in e.sections)if(e.sections[a].permalinkName===t)return s=e.sections[a].content}this.isText="exercise"!==t.moduleName,this.isQuiz="exercise"===t.moduleName,this.info=e.data,this.content=s(this.info,t.moduleName)}angular.module("javabrains").controller("LessonModuleController",e),e.$inject=["lessonData","$stateParams"]}(),function(){"use strict";function e(e,t){this.filterValue="";var s=this;this.filter={tags:{},level:{Beginner:!0,Intermediate:!0,Advanced:!0}},this.topics=e.topics;var a=t.tag;a||(a="All"),this.filter.tags[a]=a,this.courses=e.courses,this.filterTopics=function(e){this.filterValue=e},this.topicChanged=function(e){if("INPUT"===e.target.tagName){"all"===e.target.id?this.filter.tags={All:"All"}:this.filter.tags.All="";var t=_.find(s.topics,function(e){var t=s.filter.tags[e.name];return t&&t.length});t||(this.filter.tags.All="All")}}}angular.module("javabrains").controller("CoursesController",e),e.$inject=["courseDataService","$stateParams"]}(),function(){"use strict";function e(e,t){this.info=e.data,this.info.topicName=_.findWhere(t.topics,{id:this.info.topic}).name,this.info.imageUrl="http://javabrains.koushik.org/assets/images/"+this.info.code+".jpg",this.info.courseBaseUrl="/courses/"+this.info.code+"/lessons/",this.info.startCourseUrl=this.info.courseBaseUrl+this.info.units[0].firstLesson,angular.forEach(this.info.units,function(e){e.unitNumber="0"+e.unitNumber})}angular.module("javabrains").controller("CourseDetailController",e),e.$inject=["courseData","courseDataService"]}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"/app/main/main.html",controller:"MainController",controllerAs:"main"}).state("topics",{url:"/topics",templateUrl:"/app/topics/topics.html",controller:"TopicsController",controllerAs:"topics"}).state("courses",{url:"/courses?tag",templateUrl:"/app/courses/courses.html",controller:"CoursesController",controllerAs:"courses"}).state("course",{url:"/courses/:courseName",resolve:{courseData:["REST_ROOT_URL","$http","$stateParams","$q",function(e,t,s,a){return t.get(e+"courses/"+s.courseName)}]},templateUrl:"/app/coursedetail/coursedetail.html",controller:"CourseDetailController",controllerAs:"course"}).state("lesson",{url:"/courses/:courseName/lessons/:lessonName",resolve:{lessonData:["REST_ROOT_URL","$http","$stateParams","$q",function(e,t,s,a){return t.get("https://javabrains-data.parseapp.com/courses/"+s.courseName+"/lessons/"+s.lessonName,{cache:!0})}]},templateUrl:"/app/lessons/lessons.html",controller:"LessonController",controllerAs:"lesson"}).state("lessonmodule",{url:"/courses/:courseName/lessons/:lessonName/:moduleName",resolve:{lessonData:["REST_ROOT_URL","$http","$stateParams","$q",function(e,t,s,a){return t.get("https://javabrains-data.parseapp.com/courses/"+s.courseName+"/lessons/"+s.lessonName,{cache:!0})}]},templateUrl:"/app/lesson-module/lesson-module.html",controller:"LessonModuleController",controllerAs:"lessonModule"}).state("about",{url:"/about",templateUrl:"/app/about.html"}),t.otherwise("/")}angular.module("javabrains").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("javabrains").constant("REST_ROOT_URL","http://javabrains-data.parseapp.com/")}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.html5Mode({enabled:!0,requireBase:!1})}angular.module("javabrains").config(e),e.$inject=["$logProvider","$locationProvider"],String.prototype.endsWith||(String.prototype.endsWith=function(e,t){var s=this.toString();(void 0===t||t>s.length)&&(t=s.length),t-=e.length;var a=s.indexOf(e,t);return-1!==a&&a===t})}();
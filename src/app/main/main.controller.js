(function() {
  'use strict';

  angular
    .module('myCv')
    .controller('MainController', MainController);

  /** @ngInject */
function MainController($scope) {
    var vm = $scope;
    vm.form = true;
    
    vm.information = [{
      text: 'Name',
      value: 'Đỗ Đăng Trình'
    }, {
      text: 'Birthday',
      value: '11/09/1995'
    }, {
      text: 'Address',
      value: 'Sư Vạn Hạnh, TP Hồ Chí Minh'
    }, {
      text: 'National',
      value: 'Việt Nam'
    }, {
      text: 'Phone Number',
      value: '0974068863'
    }, {
      text: 'Email',
      value: 'dodangtrinh119@gmail.com'
    }];

    vm.objective = "An opportunity to work and upgrade oneself, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community. I am presently expanding my solid experience in develop mobile software. I focus on using my interpersonal skills to build good user experience and create a strong interest in my employers. I hope to develop skills in motion design and my knowledge of the Web, and become an honest asset to the business. As an individual, I'm self-confident you’ll find me creative, funny and naturally passionate. I am a forward thinker, which others may find inspiring when working as a team.";

    vm.skills = ["OOP", "Design", "Photoshop", ".Net", "Java", "Swing"];
    vm.education = [{
      time: '2013 - Now',
      place: 'University of Science',
      text: 'Learn IT at University of Science - Teacher teach me about computer, software, network, and logic thinking',
      sty: 'timeline'

    }, {
      time: '2010 - 2013',
      place: 'Krông Nô High School',
      text: ' Learn some subject about science, social sciences and humanities like math, literature, geography, history .... at here help me find my dream, my orientation.',
      sty: "timeline-inverted"
    }, {
      time: '2006 - 2010',
      place: 'Đắk Mâm Secondary School',
      text: 'I have learn basic knowledge',
      sty: 'timeline'
    }];

    vm.professional1 = [{
      name: 'C/C++',
      value: '60',
      text: '60%'

    }, {
      name: 'HTML',
      value: '60',
      text: '60%'
    }, {
      name: 'Design',
      value: '50',
      text: '50%'
    }];
    vm.professional2 = [{
      name: 'Java',
      value: '70',
      text: '70%'
    }, {
      name: 'Andoird',
      value: '60',

      text: '60%'
    }, {
      name: 'iOS',
      value: '40',
      text: '40%'
    }];

    vm.moreskills = [{
      text: 'Leadership',
      value: '70'
    }, {
      text: 'Creativity',
      value: '40'
    }, {
      text: 'Branding',
      value: '60'
    }, {
      text: 'Management',
      value: '45'
    }, {
      text: 'Marketing',
      value: '30'
    }, {
      text: 'Motivation',
      value: '15'

    }]

    vm.exp = [{
      time: '2013-2016',
      place: '227, Nguyen Van Cu street, Dictrict 5, Hồ Chí Minh city',
      dowhat: 'Student at University of Science',
      sty: 'timeline-inverted'
    }];

    vm.mypj = ["Game Caro on C++", "Game You are free to eat on Android", "Game Caro with client - server on .Net", "App Hotel Manager"];
  }
})();

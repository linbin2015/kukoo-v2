var rv1 = {
  "input": "",
  "recommend": [{
    "projectName": "EE",
    "country": "加拿大",
    "projectType": "技术移民",
    "major": "您",
    "language": "英语",
    "visaType": "PR",
    "capital": "5万",
    "period": "3年",
    "intro": "EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介",
    "score": 369,
    "pass": 420
  }, {
    "projectName": "EE",
    "country": "加拿大",
    "projectType": "技术移民",
    "major": "您",
    "language": "英语",
    "visaType": "PR",
    "capital": "5万",
    "period": "3年",
    "intro": "EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介EE项目简介",
    "score": 369,
    "pass": 420
  }],
  "promote": [{
    "projectName": "EE",
    "country": "加拿大",
    "major": "您",
    "language": "英语",
    "a": "存中文专业名称数组",
    "b": "项目得分",
    "c": "通过分数",
    "visaType": "PR",
    "capital": "5万",
    "period": "3年",
    "intro": "EE项目简介",
    "score": 369,
    "pass": 420
  }, {
    "projectName": "EE",
    "country": "加拿大",
    "major": "您",
    "language": "英语",
    "visaType": "PR",
    "capital": "5万",
    "period": "3年",
    "intro": "EE项目简介",
    "score": 369,
    "pass": 420
  }],
  "Quebec": [{
    "projectName": "魁省",
    "country": "加拿大",
    "major": "您",
    "visaType": "PR",
    "capital": "5万",
    "period": "3年",
    "intro": "EE项目简介",
    "specialty": [
      ["专业1", "专业2", "专业3"],
      ["专业1", "专业2", "专业3"]
    ],
    "learn": "不是",
    "score": 369,
    "pass": 420,
    "index": 0 //我还是伴侣下标
  }]
}


var __list = localStorage.getItem("__list");
var list = __list ? JSON.parse(__list) : [];
var answer = JSON.parse(localStorage.getItem("__answer"));

function _g67(i, details) {

  return {
    "question6": {
      "listening": details[0].value[0][i],
      "speaking": details[0].value[1][i],
      "reading": details[0].value[2][i],
      "writing": details[0].value[3][i],
    },
    "question7": {
      "listening": details[1].value[0][i],
      "speaking": details[1].value[1][i],
      "reading": details[1].value[2][i],
      "writing": details[1].value[3][i],
    }
  }
}

var _app, _app2;

function start(rv) {
  Vue.component('project-score', {
    template: '#project-template',
    props: ["msg", "type"],
    data: function() {
      //return this.msg;
    }
  });

  var tmp = [];
  if (!rv.Quebec.specialty || rv.Quebec.specialty.length == 0) {
    rv.Quebec.specialty = [
      [],
      []
    ];
  }
  tmp.push(rv.Quebec);
  rv.Quebec = tmp;

  _app = new Vue({
    "el": '.main',
    "data": {
      "answer": rv.input || answer,
      "rv": rv,
      "details": list.length > 0 ? list[4].details : [],
      "change1": false
    },
    mounted: function() {
      // $("#e1").select2({
      //   placeholder: "您的专业",
      //   tags: ["red", "green", "blue"]
      // });

      // if (list.length > 0) {
      //   this.details = list[4].details;
      // }
      $(".main").show();
    },
    updated: function() {},
    methods: {
      js: function() {
        this.answer[0].learn = rv.Quebec[0].learn;
        this.answer[0].specialty = rv.Quebec[0].specialty[0];
        if (this.answer.length > 1) {
          this.answer[1].specialty = rv.Quebec[0].specialty[1];
        }
        doAjax(JSON.stringify(this.answer), this.resultSettle);
      },
      dogo: function() {
        var r1 = _g67(0, this.details);
        this.answer[0].question6 = r1.question6;
        this.answer[0].question7 = r1.question7;
        if (answer.length > 1) {
          var r2 = _g67(1, this.details);
          this.answer[1].question6 = r2.question6;
          this.answer[1].question7 = r2.question7;
        }

        doAjax(JSON.stringify(this.answer), this.resultSettle);
      },
      resultSettle: function(result) {
        var _this = this;
        _this.answer = result.input;
        //
        var tmp = [];
        if (!result.Quebec.specialty || rv.Quebec.specialty.length == 0) {
          result.Quebec.specialty = [
            [],
            []
          ];
        }
        tmp.push(result.Quebec);
        result.Quebec = tmp;
        //
        _this.rv = result;
      }
    }
  });

  _app2 = new Vue({
    "el": '#bs-example-modal-sm',
    "data": {
      "rootOccup": [],
      "occup": [],
      "change1": false
    },
    mounted: function() {},
    updated: function() {},
    methods: {
      sel_occup: function(e) {
        var name = $(e.target).text();
        var index = rv.Quebec[0].index;
        rv.Quebec[0].specialty[index].push(name);
        $(".modal-header .close").click();
      },
      search: function(e) {
        this.occup = this.rootOccup.filter(function(cv, index, arr) {
          return cv.cnName.indexOf($(e.target).val().trim()) >= 0;
        });
        //if (this.occup.length == 0) {}
        this.occup.push({
          "cnName": "其他"
        });
      }
    }
  });
}

//start(rv);

function zy() {
  //http://47.94.215.48/kukoo/markingOLController/getAllProfession
  $.ajax({
    url: "/kukoo/markingOLController/getAllProfession",
    type: "get",
    dataType: "json",
    success: function(result) {
      _app2.$data.occup = result;
      _app2.$data.rootOccup = result;
    }
  });
}

zy();

doAjax(JSON.stringify(answer));

function doAjax(marking, cb) {
  $.ajax({
    url: "/kukoo/markingOLController/addMarkingOL",
    type: "POST",
    data: {
      marking: marking
    },
    dataType: "json",
    success: function(result) {
      if (cb) {
        cb(result);
      } else {
        start(result);
      }
    }
  });
}

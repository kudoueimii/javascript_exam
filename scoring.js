// DOMの読み込みが終わったらfunction()の中の処理を実行します。
$(document).ready(function () {
  // 「国語、英語、数学、理科、社会」の点数（入力値）を取得して合計点と平均点を出すロジック
  function score_indicate() {
    // 変数「subject_points」に「国語、英語、数学、理科、社会」の点数の配列を代入します。
    let subject_points = [
      Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val())
    ];
    // 変数「sum」に「国語、英語、数学、理科、社会」の点数を足します。
    let number = subject_points.length;
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    // 「合計点：」(id="sum_indicate")に変数「sum」(合計点)を出力させます。
    $("#sum_indicate").text(sum);
    var average = function(){
      return sum / number;
    }
    $("#average_indicate").text(average());
    console.log($("#average_indicate").text());
  }



   
  function get_achievement() {
    // 変数「averageIndicate」に
    // 平均点数をHTML上のid="average_indicate"から取得して代入します。
    let averageIndicate = $("#average_indicate").text();
    // もし「averageIndicate」が80以上なら"A"を返します。
    if (averageIndicate >= 80) {
      $("#evaluation").text("A");
      return "A";
      }
      else if (averageIndicate >= 60) {
          $("#evaluation").text("B");
          return "B";
      }
      else if(averageIndicate >= 40) {
          $("#evaluation").text("C")
          return "C";
      }else {
          $("#evaluation").text("D")
          return "D";
      }
  }
  
  function get_pass_or_failure() {
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    let number = subject_points.length;
    let judge ="合格"
      for (let i = 0; i < number; i++) {
        const x = 4;
        if (subject_points[i] < 60) {
          judge = "不合格";
          break;
        }
      };
      return judge;
    };

  function judgement() {
    let points = [10,20,30,40,50]
    let achievement = get_achievement(points);
    let pass_or_failure = get_pass_or_failure();
   
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です。</label>`);
  };
 
  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });
 
  $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
  });
 
  $('#btn-judge').click(function () {
    $("#judge").text(get_pass_or_failure());
  });
 
  $('#btn-declaration').click(function () {
    $("#alert-indicate").remove();
    $('#declaration').text(judgement);
  });
});
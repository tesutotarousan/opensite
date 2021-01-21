$('input').change(function() {    
  // 合計金額の計算
  $kingaku = 0; // 合計金額
  $kosuu = 0;   // 合計個数
  $null = true; // 入力有無

  // ボタンの分だけループで一括処理
  // ボタンの親要素を対象にして金額の合計を計算する
  $('input').each(function(index, elm){

    // 計算対象
    $dl = $(this).parent().parent();

    // 商品名
    $dt = $dl.find('dt').text();
    // 金額
    $label = $dl.find('label').text();
    // 金額に余計な文字が合ったら消す。今回は”円”
    $label = $label.replace('円', '');

    // 個数
    // 数字型に変換しておく
    $kazu = Number($(this).val());

    // 合計金額に加算、合計個数に加算
    $kingaku += ($label * $kazu);
    $kosuu += $kazu;

    //box2 class_change
    //変更後の文字列
    $res = $dt + "/" + $(this).val() + "個：" + ($label * $(this).val()) + "円";
    // 対象指定
    $target = $('#box2 p:nth-of-type('+ (index+1) +')')
    $target.text($res);
    if($(this).val() == 0){
      $target.removeClass('open');
    } else {
      $target.addClass('open');
      $null = false;
      if(($label * $kazu) >= 0) {
        $target.css('color', 'Black');
      } else {
        $target.css('color', 'Red');
      }
    }
  });

  // テキストをセット
  $('#total').text("合計：" + $kingaku + "円");

  // 合計金額がマイナスなら赤字
  if($kingaku >= 0){
    $('#total').css('color', 'Black');
  } else {
    $('#total').css('color', 'Red');
  }

  // box2 class_change
  if($null){
    $('#box2 p:last-of-type').removeClass('open');
  } else {
    $('#box2 p:last-of-type').addClass('open');
    $res = "合計/" + $kosuu + "個：" + $kingaku + "円";
    $('#box2 p:last-of-type').text($res);
  }
  // #box2に.openがないなら#box2がどっかいく
  if($('#box2 .open').length){
    $('#box2').addClass('open');
  } else {
    $('#box2').removeClass('open');
  }

  // box3 create_element

});
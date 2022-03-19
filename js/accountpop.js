$().ready(function (e) {
  if ($('#Accounts').text() != '') {
    accounts = JSON.parse($('#Accounts').text());
    accounts.forEach(function (elm) {
      var elem = '<dl id="dl_' + elm.Sort + '">';
      elem = elem + '<dt>';
      elem =
        elem +
        '<span id="inputSender_' +
        elm.Sort +
        '" class="input_sender"></span>&nbsp;&nbsp;계좌';
      elem =
        elem +
        '<a href="javascript:;" class="copy_btn all" idx="' +
        elm.Sort +
        '">복사하기</a>';
      elem = elem + '</dt>';
      elem =
        elem +
        '<dd><span id="inputBank_' +
        elm.Sort +
        '" class="input_bank"></span>&nbsp;&nbsp;(예금주 : <span id="inputAccountHolder_' +
        elm.Sort +
        '" class="input_accountholder" ></span>)</dd>';
      elem =
        elem +
        '<dd><span id="inputAccountNumber_' +
        elm.Sort +
        '" class="input_accountnumber"></span></dd>';
      elem = elem + '</dl>';
      $('.account_list.account').append(elem);

      $('#inputSender_' + elm.Sort).text(elm.Send_Name);
      $('#inputBank_' + elm.Sort).text(elm.Bank_Name);
      $('#inputAccountHolder_' + elm.Sort).text(elm.Account_Holder);
      $('#inputAccountNumber_' + elm.Sort).text(elm.Account_Number);
    });

    //스크롤바
    $('.account_list.account').mCustomScrollbar();

    var accountLength = $('.account_list.account dl').length;
    if (accountLength > 4) {
      $('.account_list.account').addClass('add_scroll');
    } else {
      $('.account_list.account').removeClass('add_scroll');
    }

    $('.copy_btn.all').on('click', function () {
      var idx = $(this).attr('idx');
      var account_number = $('#inputAccountNumber_' + idx).text();

      copyToClipboard(account_number);

      //복사완료 문구
      toast(this, '복사되었습니다.', 1500);
    });
  }

  var groom_accounts = [];

  if ($('#GroomAccounts').text() != '') {
    groom_accounts = JSON.parse($('#GroomAccounts').text());
    groom_accounts.forEach(function (elm) {
      var elem = '<dl id="dl_groom_' + elm.Sort + '">';
      elem = elem + '<dt>';
      elem =
        elem +
        '<span id="inputGroomSender_' +
        elm.Sort +
        '" class="input_groom_sender"></span>&nbsp;&nbsp;계좌';
      elem =
        elem +
        '<a href="javascript:;" class="copy_btn groom" idx="' +
        elm.Sort +
        '">복사하기</a>';
      elem = elem + '</dt>';
      elem =
        elem +
        '<dd><span id="inputGroomBank_' +
        elm.Sort +
        '" class="input_groom_bank"></span>&nbsp;&nbsp;(예금주 : <span id="inputGroomAccountHolder_' +
        elm.Sort +
        '" class="input_groom_accountholder" ></span>)</dd>';
      elem =
        elem +
        '<dd><span id="inputGroomAccountNumber_' +
        elm.Sort +
        '" class="input_groom_accountnumber"></span></dd>';
      elem = elem + '</dl>';
      $('.account_list.groom').append(elem);

      $('#inputGroomSender_' + elm.Sort).text(elm.Send_Name);
      $('#inputGroomBank_' + elm.Sort).text(elm.Bank_Name);
      $('#inputGroomAccountHolder_' + elm.Sort).text(elm.Account_Holder);
      $('#inputGroomAccountNumber_' + elm.Sort).text(elm.Account_Number);
    });

    $('.copy_btn.groom').on('click', function () {
      var idx = $(this).attr('idx');
      var account_number = $('#inputGroomAccountNumber_' + idx).text();
      copyToClipboard(account_number);

      //복사완료 문구
      toast_groom(this, '복사되었습니다.', 1500);
    });
  }
  var bride_accounts = [];
  if ($('#BrideAccounts').text() != '') {
    bride_accounts = JSON.parse($('#BrideAccounts').text());
    bride_accounts.forEach(function (elm) {
      var elem = '<dl id="dl_bride_' + elm.Sort + '">';
      elem = elem + '<dt>';
      elem =
        elem +
        '<span id="inputBrideSender_' +
        elm.Sort +
        '" class="input_bride_sender"></span>&nbsp;&nbsp;계좌';
      elem =
        elem +
        '<a href="javascript:;" class="copy_btn bride" idx="' +
        elm.Sort +
        '">복사하기</a>';
      elem = elem + '</dt>';
      elem =
        elem +
        '<dd><span id="inputBrideBank_' +
        elm.Sort +
        '" class="input_bride_bank"></span>&nbsp;&nbsp;(예금주 : <span id="inputBrideAccountHolder_' +
        elm.Sort +
        '" class="input_bride_accountholder" ></span>)</dd>';
      elem =
        elem +
        '<dd><span id="inputBrideAccountNumber_' +
        elm.Sort +
        '" class="input_bride_accountnumber"></span></dd>';
      elem = elem + '</dl>';
      $('.account_list.bride').append(elem);

      $('#inputBrideSender_' + elm.Sort).text(elm.Send_Name);
      $('#inputBrideBank_' + elm.Sort).text(elm.Bank_Name);
      $('#inputBrideAccountHolder_' + elm.Sort).text(elm.Account_Holder);
      $('#inputBrideAccountNumber_' + elm.Sort).text(elm.Account_Number);
    });

    $('.copy_btn.bride').on('click', function () {
      var idx = $(this).attr('idx');
      var account_number = $('#inputBrideAccountNumber_' + idx).text();
      copyToClipboard(account_number);

      //복사완료 문구
      toast_bride(this, '복사되었습니다.', 1500);
    });
  }

  //축의금
  if (
    $('#MoneyGift_Remit_Use_YN').val() == 'N' &&
    $('#MoneyAccount_Remit_Use_YN').val() == 'N' &&
    $('#MoneyAccount_Div_Use_YN').val() == 'N'
  ) {
    $('.onoff_4').hide();
  } else {
    //비회원
    if ($('#User_ID').val() == '') {
      $('.remittance_btn').hide();

      if ($('#MoneyAccount_Remit_Use_YN').val() == 'Y') {
        $('.an_btn.account').show();
      } else {
        $('.an_btn.account').hide();
      }

      if (
        $('#MoneyAccount_Div_Use_YN').val() == 'Y' &&
        groom_accounts.length > 0
      ) {
        $('.an_btn.groom').show();
      } else {
        $('.an_btn.groom').hide();
      }

      if (
        $('#MoneyAccount_Div_Use_YN').val() == 'Y' &&
        bride_accounts.length > 0
      ) {
        $('.an_btn.bride').show();
      } else {
        $('.an_btn.bride').hide();
      }
    } else {
      $('.onoff_4').show();

      if ($('#MoneyGift_Remit_Use_YN').val() == 'Y') {
        $('.remittance_btn').show();
      } else {
        $('.remittance_btn').hide();
      }

      if ($('#MoneyAccount_Remit_Use_YN').val() == 'Y') {
        $('.an_btn.account').show();
      } else {
        $('.an_btn.account').hide();
      }

      if (
        $('#MoneyAccount_Div_Use_YN').val() == 'Y' &&
        groom_accounts.length > 0
      ) {
        $('.an_btn.groom').show();
      } else {
        $('.an_btn.groom').hide();
      }

      if (
        $('#MoneyAccount_Div_Use_YN').val() == 'Y' &&
        bride_accounts.length > 0
      ) {
        $('.an_btn.bride').show();
      } else {
        $('.an_btn.bride').hide();
      }
    }
  }
});

var spreadsheet = {
    usrDb : '1vA45fu2SU0UW0Hn0X8T_mrPCuYum_FzgeuiyIsyu07A'
}

function getElems4Loading(){
  var spsId  = spreadsheet.usrDb;
  var sps    = SpreadsheetApp.openById(spsId);
  var sheets = sps.getSheets().length; 
  return sheets;
}

function getWho(){
  var spsId  = spreadsheet.usrDb,
      sheetN = 'who?',
      sps    = SpreadsheetApp.openById(spsId),
      sheet  = sps.getSheetByName(sheetN),
      data   = sheet.getDataRange().getValues(),
      who    = {};
      cntWho = -1;
  var row,id,name,mail,edit;
  for(var i in data){
    if(i > 0){
      row = data[i];
      cntWho ++;
      id   = row[0];
      name = row[1];
      mail = row[4];
      edit = (row[5] == 1)? 'SI' : 'NO';
      if(undefined != who[cntWho]){
        who[cntWho] = {}
      }who[cntWho] = {id:id,name:name,mail:mail,edit:edit};
    }
  }
  return who;  
}

function oAuth(user){
  user = (user)? user : 'norberto.lopezdelara.contractor@bbva.com';
  var spsId  = spreadsheet.usrDb;
  var sheetN = 'who?';
  var sps = SpreadsheetApp.openById(spsId);
  var sheet = sps.getSheetByName(sheetN);
  var data  = sheet.getDataRange().getValues();
  var usr  = new Object;
      usr  = {
        access : {},
        perfil :{
          edit       : {},
          parametria : {},
          validacion : {}
        }
      }
  
  for(var i in data){
    var row    = data[i][4];
    var edit,param,valid;
        edit   = data[i][5];
        param  = data[i][6];
        valid  = data[i][7];
    if(row == user){
      usr['access'] = '1';
      usr.perfil['edit']        = edit;
      usr.perfil['parametria']  = param;
      usr.perfil['validacion']  = valid;
    }
  }
  SpreadsheetApp.flush();
  return usr;
}






























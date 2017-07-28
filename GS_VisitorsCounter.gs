function visitorsCounter(){
  var spsId  = spreadsheet.usrDb,
      sheetN = 'VisitorsCounter',
      sps    = SpreadsheetApp.openById(spsId),
      sheet  = sps.getSheetByName(sheetN),
      data   = sheet.getDataRange().getValues(),
      last   = sheet.getLastRow();
  var getUser = getProfile();
  var email   = getUser.email;
  var name    = getUser.name;  
  var today   = new Date();
  var month   = today.getMonth()+1;
  var day     = today.getDate();
  var year    = today.getFullYear();
  var Today   = day+'/'+month+'/'+year;
      Today.toString();
  var vToday,
      frstVisit,
      lastVisit,
      where;
//  var where = parseInt(findCell(name, Today))+1;
  for(var i in data){
    if(i > 0){
      var row = data[i];
      var fecha  = row[2];
      var nombre = row[0];
      if(Today == fecha && nombre == name){
        where = parseInt(i)+1;
      }
    }
  }
//  var cell = findCell(name);
  if(where == undefined){
    where  = last+1;
    vToday = 1;
    frstVisit = queHorasSon();
    sheet.getRange(where, 4).setValue(frstVisit);
  }else if(isNaN(where)===true){
    where  = last+1;
    vToday = 1;
    frstVisit = queHorasSon();
    sheet.getRange(where, 4).setValue(frstVisit);
  }else{
    var visitas = sheet.getRange(where, 6).getValue();
        vToday = parseInt(visitas)+1;
  }
   Logger.log(vToday);
  sheet.getRange(where, 1).setValue(name);
  sheet.getRange(where, 2).setValue(email);
  sheet.getRange(where, 3).setValue(Today);
  sheet.getRange(where, 5).setValue(queHorasSon());
  sheet.getRange(where, 6).setValue(vToday);
  
  var visitas = last;
  return visitas;
}

function findCell(name, Today) {
  var spsId  = spreadsheet.usrDb,
      sheetN = 'VisitorsCounter',
      sps    = SpreadsheetApp.openById(spsId),
      sheet  = sps.getSheetByName(sheetN),
      data   = sheet.getDataRange().getValues();
  for (var i in data){
    var row   = '',
        fila  = '';
    if(data[i][2] == Today){
      for (var j = 0; j < data[i].length; j++){
        if (data[i][j] == name){
          row  = data[i][j];
          fila = i;
          return fila;
        }
      }
    }    
  }
}

function queHorasSon(){
  var Digital=new Date();
  var hours=Digital.getHours();
  var minutes=Digital.getMinutes();
  var seconds=Digital.getSeconds();
  var dn="AM";
  if (hours>12){
    dn="PM";
    hours=hours-12;
  }
  if(hours==0){
    hours=12;
  }
  if(minutes<=9){
    minutes="0"+minutes;
  }
  if(seconds<=9){
    seconds="0"+seconds;
  }
  var queHorasSon = hours+":"+minutes+":"+seconds+" "+dn;
  return queHorasSon;
}

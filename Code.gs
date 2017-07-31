function doGet(){
  var html = HtmlService.createTemplateFromFile('index').evaluate().setTitle('Develop :: SisPagos ::');
  return html;
}
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename)
  .setSandboxMode(HtmlService.SandboxMode.NATIVE)
  .getContent();
}

function sesion_GSUserEmail(){
  return Session.getActiveUser().getEmail();
}

function searchContent(template, callbackname){
  var res = new Array();
      res[0] = HtmlService.createTemplateFromFile(template).getRawContent();
 if (callbackname != null) {
  res[1] = callbackname;
 }
 return res;
}

function getProfile(){
  var userId = 'me';
  var profile = PlusDomains.People.get(userId);
  var user = new Object;
      user = {
        email : profile.emails[0].value,
        name  : profile.displayName,
        thumb : profile.image.url,
      }
  return user;
}

function basics(){
  Logger.log(BigQuery.Datasets.list('testdb-bbva'));
}















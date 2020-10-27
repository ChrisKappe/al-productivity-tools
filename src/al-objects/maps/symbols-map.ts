import IKeyValue from "../../helpers/key-value";

class Symbols implements IKeyValue {
  [prop: string]: string;

  skip = "Skip";
  abs = "Abs";
  accountdata = "AccountData";
  action = "Action";
  active = "Active";
  add = "Add";
  addaction = "AddAction";
  addafterself = "AddAfterSelf";
  addbeforeself = "AddBeforeSelf";
  addcertificate = "AddCertificate";
  addentitykey = "AddEntityKey";
  addfield = "AddField";
  addfieldno = "AddFieldNo";
  addfirst = "AddFirst";
  addlink = "AddLink";
  addnamespace = "AddNamespace";
  addrange = "AddRange";
  addrecord = "AddRecord";
  addrecordref = "AddRecordRef";
  addtable = "AddTable";
  addtext = "AddText";
  api = "Api";
  append = "Append";
  appendline = "AppendLine";
  applicationarea = "ApplicationArea";
  applicationidentifier = "ApplicationIdentifier";
  appversion = "AppVersion";
  arraylen = "ArrayLen";
  asarray = "AsArray";
  asbiginteger = "AsBigInteger";
  asboolean = "AsBoolean";
  asbyte = "AsByte";
  ascending = "Ascending";
  aschar = "AsChar";
  ascode = "AsCode";
  asdate = "AsDate";
  asdatetime = "AsDateTime";
  asdecimal = "AsDecimal";
  asduration = "AsDuration";
  asinteger = "AsInteger";
  asobject = "AsObject";
  asoption = "AsOption";
  astext = "AsText";
  astime = "AsTime";
  astoken = "AsToken";
  asvalue = "AsValue";
  asxmlattribute = "AsXmlAttribute";
  asxmlcdata = "AsXmlCData";
  asxmlcomment = "AsXmlComment";
  asxmldeclaration = "AsXmlDeclaration";
  asxmldocument = "AsXmlDocument";
  asxmldocumenttype = "AsXmlDocumentType";
  asxmlelement = "AsXmlElement";
  asxmlnode = "AsXmlNode";
  asxmlprocessinginstruction = "AsXmlProcessingInstruction";
  asxmltext = "AsXmlText";
  attributes = "Attributes";
  background = "Background";
  biginteger = "BigInteger";
  bindsubscription = "BindSubscription";
  blob = "Blob";
  boolean = "Boolean";
  break = "Break";
  browse = "Browse";
  build = "Build";
  calcdate = "CalcDate";
  calcfield = "CalcField";
  calcfields = "CalcFields";
  calcsum = "CalcSum";
  calcsums = "CalcSums";
  cancel = "Cancel";
  canceltask = "CancelTask";
  cancreatetask = "CanCreateTask";
  capacity = "Capacity";
  caption = "Caption";
  captionclasstranslate = "CaptionClassTranslate";
  changecompany = "ChangeCompany";
  childsession = "ChildSession";
  class = "Class";
  clear = "Clear";
  clearall = "ClearAll";
  clearlasterror = "ClearLastError";
  clearmarks = "ClearMarks";
  client = "Client";
  clienttype = "ClientType";
  clone = "Clone";
  close = "Close";
  closingdate = "ClosingDate";
  code = "Code";
  codecoverageinclude = "CodeCoverageInclude";
  codecoverageload = "CodeCoverageLoad";
  codecoveragelog = "CodeCoverageLog";
  codecoveragerefresh = "CodeCoverageRefresh";
  codeunit = "Codeunit";
  commit = "Commit";
  company = "Company";
  companyanduser = "CompanyAndUser";
  companyname = "CompanyName";
  companyproperty = "CompanyProperty";
  compressarray = "CompressArray";
  confirm = "Confirm";
  consistent = "Consistent";
  contains = "Contains";
  containskey = "ContainsKey";
  content = "Content";
  convertstr = "ConvertStr";
  copy = "Copy";
  copyarray = "CopyArray";
  copycompany = "CopyCompany";
  copyfilter = "CopyFilter";
  copyfilters = "CopyFilters";
  copylinks = "CopyLinks";
  copystr = "CopyStr";
  copystream = "CopyStream";
  count = "Count";
  countapprox = "CountApprox";
  created = "Created";
  createdatetime = "CreateDateTime";
  createencryptionkey = "CreateEncryptionKey";
  createguid = "CreateGuid";
  createtask = "CreateTask";
  critical = "Critical";
  crm = "CRM";
  current = "Current";
  currentclienttype = "CurrentClientType";
  currentcompany = "CurrentCompany";
  currentdatetime = "CurrentDateTime";
  currentexecutionmode = "CurrentExecutionMode";
  currentkey = "CurrentKey";
  currentkeyindex = "CurrentKeyIndex";
  currenttransactiontype = "CurrentTransactionType";
  customercontent = "CustomerContent";
  database = "Database";
  dataclassification = "DataClassification";
  datascope = "DataScope";
  dataversion = "DataVersion";
  date = "Date";
  date2dmy = "Date2DMY";
  date2dwy = "Date2DWY";
  dateformula = "DateFormula";
  datetime = "DateTime";
  dati2variant = "DaTi2Variant";
  debug = "Debug";
  decimal = "Decimal";
  decrypt = "Decrypt";
  default = "Default";
  defaultclienttype = "DefaultClientType";
  defaultlayout = "DefaultLayout";
  defaultrequestheaders = "DefaultRequestHeaders";
  delchr = "DelChr";
  delete = "Delete";
  deleteall = "DeleteAll";
  deletearchivedata = "DeleteArchiveData";
  deleted = "Deleted";
  deleteencryptionkey = "DeleteEncryptionKey";
  deletelink = "DeleteLink";
  deletelinks = "DeleteLinks";
  delstr = "DelStr";
  dependencies = "Dependencies";
  desktop = "Desktop";
  dialog = "Dialog";
  dictionary = "Dictionary";
  disabled = "Disabled";
  disallowed = "Disallowed";
  displayname = "DisplayName";
  dmy2date = "DMY2Date";
  download = "Download";
  downloadfromstream = "DownloadFromStream";
  dt2date = "DT2Date";
  dt2time = "DT2Time";
  duplicate = "Duplicate";
  duration = "Duration";
  dwy2date = "DWY2Date";
  encoding = "Encoding";
  encrypt = "Encrypt";
  encryptionenabled = "EncryptionEnabled";
  encryptionkeyexists = "EncryptionKeyExists";
  enduseridentifiableinformation = "EndUserIdentifiableInformation";
  enduserpseudonymousidentifiers = "EndUserPseudonymousIdentifiers";
  ensurecapacity = "EnsureCapacity";
  enum = "Enum";
  eos = "EOS";
  erase = "Erase";
  error = "Error";
  errortype = "ErrorType";
  evaluate = "Evaluate";
  excel = "Excel";
  exchange = "Exchange";
  execute = "Execute";
  executioncontext = "ExecutionContext";
  executionmode = "ExecutionMode";
  exists = "Exists";
  export = "Export";
  externalsql = "ExternalSQL";
  field = "Field";
  fieldactive = "FieldActive";
  fieldcaption = "FieldCaption";
  fieldclass = "FieldClass";
  fieldcount = "FieldCount";
  fielderror = "FieldError";
  fieldexist = "FieldExist";
  fieldindex = "FieldIndex";
  fieldname = "FieldName";
  fieldno = "FieldNo";
  fieldref = "FieldRef";
  fieldtype = "FieldType";
  file = "File";
  filtered = "Filtered";
  filtergroup = "FilterGroup";
  filterpagebuilder = "FilterPageBuilder";
  find = "Find";
  findfirst = "FindFirst";
  findlast = "FindLast";
  findset = "FindSet";
  flowfield = "FlowField";
  flowfilter = "FlowFilter";
  format = "Format";
  full = "Full";
  get = "Get";
  getarchiverecordref = "GetArchiveRecordRef";
  getarchiveversion = "GetArchiveVersion";
  getascending = "GetAscending";
  getbaseaddress = "GetBaseAddress";
  getchildelements = "GetChildElements";
  getchildnodes = "GetChildNodes";
  getdata = "GetData";
  getdeclaration = "GetDeclaration";
  getdefaulttableconnection = "GetDefaultTableConnection";
  getdescendantelements = "GetDescendantElements";
  getdescendantnodes = "GetDescendantNodes";
  getdocument = "GetDocument";
  getdocumenttype = "GetDocumentType";
  getfilter = "GetFilter";
  getfilters = "GetFilters";
  getheaders = "GetHeaders";
  getinternalsubset = "GetInternalSubset";
  getlasterrorcallstack = "GetLastErrorCallStack";
  getlasterrorcode = "GetLastErrorCode";
  getlasterrortext = "GetLastErrorText";
  getname = "GetName";
  getnamespaceofprefix = "GetNamespaceOfPrefix";
  getobjectid = "GetObjectId";
  getobjecttype = "GetObjectType";
  getparent = "GetParent";
  getposition = "GetPosition";
  getprefixofnamespace = "GetPrefixOfNamespace";
  getpublicid = "GetPublicId";
  getrange = "GetRange";
  getrangemax = "GetRangeMax";
  getrangemin = "GetRangeMin";
  getrecord = "GetRecord";
  getrequesturi = "GetRequestUri";
  getresultcode = "GetResultCode";
  getroot = "GetRoot";
  getstamp = "GetStamp";
  getsubtext = "GetSubText";
  getsystemid = "GetSystemId";
  gettable = "GetTable";
  gettarget = "GetTarget";
  geturl = "GetUrl";
  getvalues = "GetValues";
  getview = "GetView";
  globallanguage = "GlobalLanguage";
  globalscope = "GlobalScope";
  guiallowed = "GuiAllowed";
  guid = "Guid";
  hasattributes = "HasAttributes";
  hasdata = "HasData";
  haselements = "HasElements";
  hasfilter = "HasFilter";
  haslinks = "HasLinks";
  hasnamespace = "HasNamespace";
  hastableconnection = "HasTableConnection";
  headers = "Headers";
  html = "Html";
  httpclient = "HttpClient";
  httpcontent = "HttpContent";
  httpheaders = "HttpHeaders";
  httprequestmessage = "HttpRequestMessage";
  httpresponsemessage = "HttpResponseMessage";
  httpstatuscode = "HttpStatusCode";
  hyperlink = "Hyperlink";
  id = "Id";
  ignore = "Ignore";
  ignored = "Ignored";
  import = "Import";
  incstr = "IncStr";
  indexof = "IndexOf";
  inheritfromtestcodeunit = "InheritFromTestCodeunit";
  init = "Init";
  innertext = "InnerText";
  innerxml = "InnerXml";
  insert = "Insert";
  insstr = "InsStr";
  install = "Install";
  integer = "Integer";
  internal = "Internal";
  isaction = "IsAction";
  isarray = "IsArray";
  isautomation = "IsAutomation";
  isbiginteger = "IsBigInteger";
  isbinary = "IsBinary";
  isblockedbyenvironment = "IsBlockedByEnvironment";
  isboolean = "IsBoolean";
  isbyte = "IsByte";
  ischar = "IsChar";
  isclienttype = "IsClientType";
  iscode = "IsCode";
  iscodeunit = "IsCodeunit";
  isdataclassificationtype = "IsDataClassificationType";
  isdate = "IsDate";
  isdateformula = "IsDateFormula";
  isdatetime = "IsDateTime";
  isdecimal = "IsDecimal";
  isdefaultlayout = "IsDefaultLayout";
  isdotnet = "IsDotNet";
  isduration = "IsDuration";
  isempty = "IsEmpty";
  isexecutionmode = "IsExecutionMode";
  isfieldref = "IsFieldRef";
  isfile = "IsFile";
  isfilterpagebuilder = "IsFilterPageBuilder";
  isguid = "IsGuid";
  isinstalling = "IsInstalling";
  isinstream = "IsInStream";
  isinteger = "IsInteger";
  isnamespacedeclaration = "IsNamespaceDeclaration";
  isnotification = "IsNotification";
  isnull = "IsNull";
  isnullguid = "IsNullGuid";
  isobject = "IsObject";
  isobjecttype = "IsObjectType";
  isolatedstorage = "IsolatedStorage";
  isoption = "IsOption";
  isoutstream = "IsOutStream";
  ispathtemporary = "IsPathTemporary";
  isrecord = "IsRecord";
  isrecordid = "IsRecordId";
  isrecordref = "IsRecordRef";
  isreportformat = "IsReportFormat";
  issecurityfiltering = "IsSecurityFiltering";
  isservicetier = "IsServiceTier";
  issessionactive = "IsSessionActive";
  issuccessstatuscode = "IsSuccessStatusCode";
  istableconnectiontype = "IsTableConnectionType";
  istemporary = "IsTemporary";
  istestpermissions = "IsTestPermissions";
  istext = "IsText";
  istextconstant = "IsTextConstant";
  istextencoding = "IsTextEncoding";
  istime = "IsTime";
  istransactiontype = "IsTransactionType";
  isundefined = "IsUndefined";
  isvalue = "IsValue";
  iswidechar = "IsWideChar";
  isxmlattribute = "IsXmlAttribute";
  isxmlcdata = "IsXmlCData";
  isxmlcomment = "IsXmlComment";
  isxmldeclaration = "IsXmlDeclaration";
  isxmldocument = "IsXmlDocument";
  isxmldocumenttype = "IsXmlDocumentType";
  isxmlelement = "IsXmlElement";
  isxmlprocessinginstruction = "IsXmlProcessingInstruction";
  isxmltext = "IsXmlText";
  jsonarray = "JsonArray";
  jsonobject = "JsonObject";
  jsontoken = "JsonToken";
  jsonvalue = "JsonValue";
  keycount = "KeyCount";
  keyindex = "KeyIndex";
  keys = "Keys";
  languageid = "LanguageId";
  lastindexof = "LastIndexOf";
  length = "Length";
  list = "List";
  loadpackagedata = "LoadPackageData";
  localeid = "LocaleId";
  localname = "LocalName";
  localscope = "LocalScope";
  locktable = "LockTable";
  locktimeout = "LockTimeout";
  lookupcancel = "LookupCancel";
  lookupnamespace = "LookupNamespace";
  lookupok = "LookupOK";
  lookupprefix = "LookupPrefix";
  lowercase = "LowerCase";
  major = "Major";
  management = "Management";
  mark = "Mark";
  markedonly = "MarkedOnly";
  marketing = "Marketing";
  maxcapacity = "MaxCapacity";
  maxstrlen = "MaxStrLen";
  media = "Media";
  mediaset = "MediaSet";
  menusuite = "MenuSuite";
  message = "Message";
  method = "Method";
  microsoftgraph = "MicrosoftGraph";
  minor = "Minor";
  modify = "Modify";
  modifyall = "ModifyAll";
  module = "Module";
  moduledependencyinfo = "ModuleDependencyInfo";
  moduleinfo = "ModuleInfo";
  msdos = "MSDos";
  name = "Name";
  names = "Names";
  namespaceprefix = "NamespacePrefix";
  namespaceuri = "NamespaceUri";
  nametable = "NameTable";
  nas = "NAS";
  navapp = "NavApp";
  next = "Next";
  no = "No";
  none = "None";
  nonrestrictive = "NonRestrictive";
  normal = "Normal";
  normaldate = "NormalDate";
  notificationscope = "NotificationScope";
  number = "Number";
  objecttype = "ObjectType";
  odata = "OData";
  odatav4 = "ODataV4";
  ok = "OK";
  open = "Open";
  option = "Option";
  optioncaption = "OptionCaption";
  optionstring = "OptionString";
  ordinals = "Ordinals";
  organizationidentifiableinformation = "OrganizationIdentifiableInformation";
  padstr = "PadStr";
  page = "Page";
  pagebackgroundtaskerrorlevel = "PageBackgroundTaskErrorLevel";
  pagecaption = "PageCaption";
  path = "Path";
  pdf = "Pdf";
  phone = "Phone";
  popscope = "PopScope";
  post = "Post";
  power = "Power";
  preservewhitespace = "PreserveWhitespace";
  print = "Print";
  productname = "ProductName";
  profileappid = "ProfileAppId";
  profileid = "ProfileId";
  profilesystemscope = "ProfileSystemScope";
  publisher = "Publisher";
  pushscope = "PushScope";
  put = "Put";
  query = "Query";
  random = "Random";
  randomize = "Randomize";
  rdlc = "RDLC";
  rdlclayout = "RdlcLayout";
  read = "Read";
  readas = "ReadAs";
  readconsistency = "ReadConsistency";
  readfrom = "ReadFrom";
  readpermission = "ReadPermission";
  readtext = "ReadText";
  reasonphrase = "ReasonPhrase";
  recall = "Recall";
  record = "Record";
  recordid = "RecordId";
  recordlevellocking = "RecordLevelLocking";
  recordref = "RecordRef";
  registertableconnection = "RegisterTableConnection";
  relation = "Relation";
  remove = "Remove";
  removeall = "RemoveAll";
  removeallattributes = "RemoveAllAttributes";
  removeat = "RemoveAt";
  removeattribute = "RemoveAttribute";
  removenamespace = "RemoveNamespace";
  removenodes = "RemoveNodes";
  removerange = "RemoveRange";
  rename = "Rename";
  replace = "Replace";
  replacenodes = "ReplaceNodes";
  replacewith = "ReplaceWith";
  report = "Report";
  reportformat = "ReportFormat";
  requestsessionupdate = "RequestSessionUpdate";
  reset = "Reset";
  restorearchivedata = "RestoreArchiveData";
  restrictive = "Restrictive";
  reverse = "Reverse";
  revision = "Revision";
  round = "Round";
  rounddatetime = "RoundDateTime";
  run = "Run";
  runmodal = "RunModal";
  runobject = "RunObject";
  runrequestpage = "RunRequestPage";
  runsystem = "RunSystem";
  saveas = "SaveAs";
  saveascsv = "SaveAsCsv";
  saveasexcel = "SaveAsExcel";
  saveashtml = "SaveAsHtml";
  saveaspdf = "SaveAsPdf";
  saveasword = "SaveAsWord";
  saveasxml = "SaveAsXml";
  scope = "Scope";
  securityfilter = "SecurityFilter";
  securityfiltering = "SecurityFiltering";
  selectlatestversion = "SelectLatestVersion";
  selectnodes = "SelectNodes";
  selectsinglenode = "SelectSingleNode";
  selectstr = "SelectStr";
  selecttoken = "SelectToken";
  send = "Send";
  sendtracetag = "SendTraceTag";
  serialnumber = "SerialNumber";
  serviceinstanceid = "ServiceInstanceId";
  session = "Session";
  sessionid = "SessionId";
  sessionsettings = "SessionSettings";
  set = "Set";
  setascending = "SetAscending";
  setattribute = "SetAttribute";
  setautocalcfields = "SetAutoCalcFields";
  setbaseaddress = "SetBaseAddress";
  setcurrentkey = "SetCurrentKey";
  setdata = "SetData";
  setdeclaration = "SetDeclaration";
  setdefaulttableconnection = "SetDefaultTableConnection";
  setencrypted = "SetEncrypted";
  setfilter = "SetFilter";
  setinternalsubset = "SetInternalSubset";
  setname = "SetName";
  setobjectid = "SetObjectId";
  setobjecttype = "SetObjectType";
  setpermissionfilter = "SetPermissionFilter";
  setposition = "SetPosition";
  setpublicid = "SetPublicId";
  setrange = "SetRange";
  setrecfilter = "SetRecFilter";
  setrequesturi = "SetRequestUri";
  setresultcode = "SetResultCode";
  setselectionfilter = "SetSelectionFilter";
  setstamp = "SetStamp";
  setsystemid = "SetSystemId";
  settable = "SetTable";
  settaskready = "SetTaskReady";
  setvalue = "SetValue";
  setvaluetonull = "SetValueToNull";
  setvaluetoundefined = "SetValueToUndefined";
  setview = "SetView";
  short = "Short";
  sleep = "Sleep";
  snapshot = "Snapshot";
  soap = "SOAP";
  standalone = "Standalone";
  standard = "Standard";
  startsession = "StartSession";
  stopsession = "StopSession";
  strchecksum = "StrCheckSum";
  strlen = "StrLen";
  strmenu = "StrMenu";
  strpos = "StrPos";
  strsubstno = "StrSubstNo";
  system = "System";
  systemmetadata = "SystemMetadata";
  table = "Table";
  tablecaption = "TableCaption";
  tableconnectiontype = "TableConnectionType";
  tablefilter = "TableFilter";
  tablename = "TableName";
  tableno = "TableNo";
  tablet = "Tablet";
  taskexists = "TaskExists";
  taskscheduler = "TaskScheduler";
  tenantid = "TenantId";
  testfield = "TestField";
  testpermissions = "TestPermissions";
  text = "Text";
  textbuilder = "TextBuilder";
  textencoding = "TextEncoding";
  textpos = "TextPos";
  time = "Time";
  timeout = "Timeout";
  timezone = "TimeZone";
  tobeclassified = "ToBeClassified";
  today = "Today";
  totext = "ToText";
  transactiontype = "TransactionType";
  transferfields = "TransferFields";
  tryaddwithoutvalidation = "TryAddWithoutValidation";
  type = "Type";
  unbindsubscription = "UnbindSubscription";
  uninstall = "Uninstall";
  unregistertableconnection = "UnregisterTableConnection";
  update = "Update";
  updated = "Updated";
  updatenolocks = "UpdateNoLocks";
  upgrade = "Upgrade";
  upload = "Upload";
  uploadintostream = "UploadIntoStream";
  uppercase = "UpperCase";
  urlname = "UrlName";
  usedefaultnetworkwindowsauthentication =
    "UseDefaultNetworkWindowsAuthentication";
  user = "User";
  userid = "UserId";
  usersecurityid = "UserSecurityId";
  usewindowsauthentication = "UseWindowsAuthentication";
  utf16 = "UTF16";
  utf8 = "UTF8";
  validate = "Validate";
  validated = "Validated";
  value = "Value";
  values = "Values";
  variant = "Variant";
  variant2date = "Variant2Date";
  variant2time = "Variant2Time";
  verbose = "Verbose";
  verbosity = "Verbosity";
  version = "Version";
  warning = "Warning";
  web = "Web";
  webserviceactioncontext = "WebServiceActionContext";
  webserviceactionresultcode = "WebServiceActionResultCode";
  windows = "Windows";
  windowslanguage = "WindowsLanguage";
  word = "Word";
  wordlayout = "WordLayout";
  wordxmlpart = "WordXmlPart";
  workdate = "WorkDate";
  write = "Write";
  writefrom = "WriteFrom";
  writepermission = "WritePermission";
  writetext = "WriteText";
  writeto = "WriteTo";
  xml = "Xml";
  xmlattribute = "XmlAttribute";
  xmlattributecollection = "XmlAttributeCollection";
  xmlcdata = "XmlCData";
  xmlcomment = "XmlComment";
  xmldeclaration = "XmlDeclaration";
  xmldocument = "XmlDocument";
  xmldocumenttype = "XmlDocumentType";
  xmlelement = "XmlElement";
  xmlnamespacemanager = "XmlNamespaceManager";
  xmlnametable = "XmlNameTable";
  xmlnode = "XmlNode";
  xmlnodelist = "XmlNodeList";
  xmlport = "Xmlport";
  xmlprocessinginstruction = "XmlProcessingInstruction";
  xmlreadoptions = "XmlReadOptions";
  xmltext = "XmlText";
  xmlwriteoptions = "XmlWriteOptions";
  yes = "Yes";
  begin = "begin";
  end = "end";
  exit = "exit";
  if = "if";
  then = "then";
  else = "else";
  with = "with";
  do = "do";
  while = "while";
  for = "for";
  foreach = "foreach";
  in = "in";
  repeat = "repeat";
  until = "until";
  case = "case";
  of = "of";
  and = "and";
  or = "or";
  not = "not";
  true = "true";
  false = "false";
}

const SYMBOLS = new Symbols();
export default SYMBOLS;
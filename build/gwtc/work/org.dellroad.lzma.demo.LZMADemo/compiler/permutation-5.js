�� sr !com.google.gwt.dev.CompilePerms$1_�oP�� L val$jst Ljava/lang/String;xp|     k$var _, N8000000000000000_longLit = [0, -9223372036854775808], N1_longLit = [4294967295, -4294967296], P0_longLit = [0, 0], P1_longLit = [1, 0], P4_longLit = [4, 0], P1000_longLit = [4096, 0], Pffffff_longLit = [16777215, 0], P1000000_longLit = [16777216, 0], Pff000000_longLit = [4278190080, 0], Pffffffff_longLit = [4294967295, 0], P7fffffffffffffff_longLit = [4294967295, 9223372032559808512];
function equals_1(other){
  return this === (other == null?null:other);
}

function getClass_66(){
  return Ljava_lang_Object_2_classLit;
}

function hashCode_3(){
  return this.$H || (this.$H = ++sNextHashId);
}

function toString_8(){
  return (this.typeMarker$ == nullMethod || this.typeId$ == 2?this.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName + '@' + toPowerOfTwoString(this.typeMarker$ == nullMethod || this.typeId$ == 2?this.hashCode$():this.$H || (this.$H = ++sNextHashId), 4);
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = equals_1;
_.getClass$ = getClass_66;
_.hashCode$ = hashCode_3;
_.toString$ = toString_8;
_.toString = function(){
  return this.toString$();
}
;
_.typeMarker$ = nullMethod;
_.typeId$ = 1;
var sUncaughtExceptionHandler = null;
function getClass_71(){
  return Ljava_lang_Throwable_2_classLit;
}

function getMessage_0(){
  return this.detailMessage;
}

function toString_12(){
  var className, msg;
  className = this.getClass$().typeName;
  msg = this.getMessage();
  if (msg != null) {
    return className + ': ' + msg;
  }
   else {
    return className;
  }
}

function Throwable(){
}

_ = Throwable.prototype = new Object_0();
_.getClass$ = getClass_71;
_.getMessage = getMessage_0;
_.toString$ = toString_12;
_.typeId$ = 3;
_.detailMessage = null;
function getClass_61(){
  return Ljava_lang_Exception_2_classLit;
}

function Exception(){
}

_ = Exception.prototype = new Throwable();
_.getClass$ = getClass_61;
_.typeId$ = 4;
function $RuntimeException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_67(){
  return Ljava_lang_RuntimeException_2_classLit;
}

function RuntimeException(){
}

_ = RuntimeException.prototype = new Exception();
_.getClass$ = getClass_67;
_.typeId$ = 5;
function $JavaScriptException(this$static, e){
  this$static.e = e;
  return this$static;
}

function getClass_0(){
  return Lcom_google_gwt_core_client_JavaScriptException_2_classLit;
}

function getDescription(e){
  if (e != null && (e.typeMarker$ != nullMethod && e.typeId$ != 2)) {
    return getDescription0(dynamicCastJso(e));
  }
   else {
    return e + '';
  }
}

function getDescription0(e){
  return e == null?null:e.message;
}

function getMessage(){
  if (this.message_0 == null) {
    this.name_0 = getName(this.e);
    this.description = getDescription(this.e);
    this.message_0 = '(' + this.name_0 + '): ' + this.description + getProperties(this.e);
  }
  return this.message_0;
}

function getName(e){
  if (e == null) {
    return 'null';
  }
   else if (e != null && (e.typeMarker$ != nullMethod && e.typeId$ != 2)) {
    return getName0(dynamicCastJso(e));
  }
   else if (e != null && canCast(e.typeId$, 1)) {
    return 'String';
  }
   else {
    return (e.typeMarker$ == nullMethod || e.typeId$ == 2?e.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
  }
}

function getName0(e){
  return e == null?null:e.name;
}

function getProperties(e){
  return e != null && (e.typeMarker$ != nullMethod && e.typeId$ != 2)?getProperties0(dynamicCastJso(e)):'';
}

function getProperties0(e){
  var result = '';
  try {
    for (prop in e) {
      if (prop != 'name' && (prop != 'message' && prop != 'toString')) {
        try {
          result += '\n ' + prop + ': ' + e[prop];
        }
         catch (ignored) {
        }
      }
    }
  }
   catch (ignored) {
  }
  return result;
}

function JavaScriptException(){
}

_ = JavaScriptException.prototype = new RuntimeException();
_.getClass$ = getClass_0;
_.getMessage = getMessage;
_.typeId$ = 6;
_.description = null;
_.e = null;
_.message_0 = null;
_.name_0 = null;
function equals__devirtual$(this$static, other){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.equals$(other):(this$static == null?null:this$static) === (other == null?null:other);
}

function hashCode__devirtual$(this$static){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.hashCode$():this$static.$H || (this$static.$H = ++sNextHashId);
}

var sNextHashId = 0;
function $append(a, x){
  a[a.explicitLength++] = x;
}

function $append_0(a, x){
  a[a.explicitLength++] = x == null?'null':x;
}

function $appendNonNull(a, x){
  a[a.explicitLength++] = x;
}

function $toString_0(a){
  var s_0, s;
  s_0 = (s = a.join('') , a.length = a.explicitLength = 0 , s);
  a[a.explicitLength++] = s_0;
  return s_0;
}

function $clinit_10(){
  $clinit_10 = nullMethod;
  $clinit_8();
  new DOMImplIE8();
}

function $createScriptElement(doc, source){
  var elem;
  elem = doc.createElement('script');
  elem.text = source;
  return elem;
}

function getClass_4(){
  return Lcom_google_gwt_dom_client_DOMImpl_2_classLit;
}

function DOMImpl(){
}

_ = DOMImpl.prototype = new Object_0();
_.getClass$ = getClass_4;
_.typeId$ = 0;
function $clinit_9(){
  $clinit_9 = nullMethod;
  $clinit_10();
}

function $isOrHasChild(parent_0, child){
  return parent_0 === child || parent_0.contains(child);
}

function $selectAdd(select, option, before){
  if (before) {
    select.add(option, before.index);
  }
   else {
    select.add(option);
  }
}

function getClass_3(){
  return Lcom_google_gwt_dom_client_DOMImplTrident_2_classLit;
}

function DOMImplTrident(){
}

_ = DOMImplTrident.prototype = new DOMImpl();
_.getClass$ = getClass_3;
_.typeId$ = 0;
var currentEventTarget = null;
function $clinit_8(){
  $clinit_8 = nullMethod;
  $clinit_9();
}

function getClass_2(){
  return Lcom_google_gwt_dom_client_DOMImplIE8_2_classLit;
}

function DOMImplIE8(){
}

_ = DOMImplIE8.prototype = new DOMImplTrident();
_.getClass$ = getClass_2;
_.typeId$ = 0;
function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function getClass_13(){
  return Lcom_google_gwt_event_shared_GwtEvent_2_classLit;
}

function toString_2(){
  return 'An event type';
}

function GwtEvent(){
}

_ = GwtEvent.prototype = new Object_0();
_.getClass$ = getClass_13;
_.toString$ = toString_2;
_.typeId$ = 0;
_.dead = false;
_.source = null;
function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (registered) {
    typeKey = dynamicCast(registered.map[($clinit_10() , nativeEvent).type], 2);
    if (typeKey) {
      currentNative = typeKey.flyweight.nativeEvent;
      currentRelativeElem = typeKey.flyweight.relativeElem;
      typeKey.flyweight.nativeEvent = nativeEvent;
      typeKey.flyweight.relativeElem = relativeElem;
      $fireEvent_1(handlerSource, typeKey.flyweight);
      typeKey.flyweight.nativeEvent = currentNative;
      typeKey.flyweight.relativeElem = currentRelativeElem;
    }
  }
}

function getClass_8(){
  return Lcom_google_gwt_event_dom_client_DomEvent_2_classLit;
}

function DomEvent(){
}

_ = DomEvent.prototype = new GwtEvent();
_.getClass$ = getClass_8;
_.typeId$ = 0;
_.nativeEvent = null;
_.relativeElem = null;
var registered = null;
function $clinit_20(){
  $clinit_20 = nullMethod;
  TYPE = $DomEvent$Type(new DomEvent$Type(), 'change', ($clinit_20() , new ChangeEvent()));
}

function dispatch(handler){
  handler.this$0.mode = get_1(handler.val$modeBox.element.selectedIndex + 1);
}

function getAssociatedType(){
  return TYPE;
}

function getClass_5(){
  return Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit;
}

function ChangeEvent(){
}

_ = ChangeEvent.prototype = new DomEvent();
_.dispatch = dispatch;
_.getAssociatedType = getAssociatedType;
_.getClass$ = getClass_5;
_.typeId$ = 0;
var TYPE;
function $clinit_22(){
  $clinit_22 = nullMethod;
  TYPE_0 = $DomEvent$Type(new DomEvent$Type(), 'click', ($clinit_22() , new ClickEvent()));
}

function dispatch_0(handler){
  handler.onClick(this);
}

function getAssociatedType_0(){
  return TYPE_0;
}

function getClass_6(){
  return Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit;
}

function ClickEvent(){
}

_ = ClickEvent.prototype = new DomEvent();
_.dispatch = dispatch_0;
_.getAssociatedType = getAssociatedType_0;
_.getClass$ = getClass_6;
_.typeId$ = 0;
var TYPE_0;
function $GwtEvent$Type(this$static){
  this$static.index_0 = ++nextHashCode;
  return this$static;
}

function getClass_12(){
  return Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit;
}

function hashCode_1(){
  return this.index_0;
}

function toString_1(){
  return 'Event type';
}

function GwtEvent$Type(){
}

_ = GwtEvent$Type.prototype = new Object_0();
_.getClass$ = getClass_12;
_.hashCode$ = hashCode_1;
_.toString$ = toString_1;
_.typeId$ = 0;
_.index_0 = 0;
var nextHashCode = 0;
function $DomEvent$Type(this$static, eventName, flyweight){
  this$static.index_0 = ++nextHashCode;
  this$static.flyweight = flyweight;
  if (!registered) {
    registered = $PrivateMap(new PrivateMap());
  }
  registered.map[eventName] = this$static;
  this$static.name_0 = eventName;
  return this$static;
}

function getClass_7(){
  return Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit;
}

function DomEvent$Type(){
}

_ = DomEvent$Type.prototype = new GwtEvent$Type();
_.getClass$ = getClass_7;
_.typeId$ = 7;
_.flyweight = null;
_.name_0 = null;
function $PrivateMap(this$static){
  this$static.map = {};
  return this$static;
}

function getClass_9(){
  return Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit;
}

function PrivateMap(){
}

_ = PrivateMap.prototype = new Object_0();
_.getClass$ = getClass_9;
_.typeId$ = 0;
_.map = null;
function dispatch_1(handler){
  handler.onClose(this);
}

function fire(source){
  var event_0;
  if (TYPE_1) {
    event_0 = new CloseEvent();
    $fireEvent_0(source, event_0);
  }
}

function getAssociatedType_1(){
  return TYPE_1;
}

function getClass_10(){
  return Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit;
}

function CloseEvent(){
}

_ = CloseEvent.prototype = new GwtEvent();
_.dispatch = dispatch_1;
_.getAssociatedType = getAssociatedType_1;
_.getClass$ = getClass_10;
_.typeId$ = 0;
var TYPE_1 = null;
function getClass_11(){
  return Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit;
}

function DefaultHandlerRegistration(){
}

_ = DefaultHandlerRegistration.prototype = new Object_0();
_.getClass$ = getClass_11;
_.typeId$ = 0;
function $HandlerManager(this$static, source){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry());
  this$static.source = source;
  this$static.isReverseOrder = false;
  return this$static;
}

function $addHandler_0(this$static, type, handler){
  if (this$static.firingDepth > 0) {
    $defer(this$static, $HandlerManager$1(new HandlerManager$1(), this$static, type, handler));
  }
   else {
    $addHandler(this$static.registry, type, handler);
  }
  return new DefaultHandlerRegistration();
}

function $defer(this$static, command){
  if (!this$static.deferredDeltas) {
    this$static.deferredDeltas = $ArrayList(new ArrayList());
  }
  $add_5(this$static.deferredDeltas, command);
}

function $fireEvent_0(this$static, event_0){
  var oldSource;
  if (event_0.dead) {
    event_0.dead = false;
    event_0.source = null;
  }
  oldSource = event_0.source;
  event_0.source = this$static.source;
  try {
    ++this$static.firingDepth;
    $fireEvent(this$static.registry, event_0, this$static.isReverseOrder);
  }
   finally {
    --this$static.firingDepth;
    if (this$static.firingDepth == 0) {
      $handleQueuedAddsAndRemoves(this$static);
    }
  }
  if (oldSource == null) {
    event_0.dead = true;
    event_0.source = null;
  }
   else {
    event_0.source = oldSource;
  }
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static.deferredDeltas); c$iterator.i < c$iterator.this$0.size;) {
        c = dynamicCast($next_0(c$iterator), 3);
        $addHandler(c.this$0.registry, c.val$type, c.val$handler);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function getClass_16(){
  return Lcom_google_gwt_event_shared_HandlerManager_2_classLit;
}

function HandlerManager(){
}

_ = HandlerManager.prototype = new Object_0();
_.getClass$ = getClass_16;
_.typeId$ = 0;
_.deferredDeltas = null;
_.firingDepth = 0;
_.isReverseOrder = false;
_.registry = null;
_.source = null;
function $HandlerManager$1(this$static, this$0, val$type, val$handler){
  this$static.this$0 = this$0;
  this$static.val$type = val$type;
  this$static.val$handler = val$handler;
  return this$static;
}

function getClass_14(){
  return Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit;
}

function HandlerManager$1(){
}

_ = HandlerManager$1.prototype = new Object_0();
_.getClass$ = getClass_14;
_.typeId$ = 8;
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function $HandlerManager$HandlerRegistry(this$static){
  this$static.map = $HashMap(new HashMap());
  return this$static;
}

function $addHandler(this$static, type, handler){
  var l;
  l = dynamicCast($get(this$static.map, type), 4);
  if (!l) {
    l = $ArrayList(new ArrayList());
    $put(this$static.map, type, l);
  }
  setCheck(l.array, l.size++, handler);
}

function $fireEvent(this$static, event_0, isReverseOrder){
  var count, handler, i, type, l, l_0, l_1;
  type = event_0.getAssociatedType();
  count = (l = dynamicCast($get(this$static.map, type), 4) , !l?0:l.size);
  if (isReverseOrder) {
    for (i = count - 1; i >= 0; --i) {
      handler = (l_0 = dynamicCast($get(this$static.map, type), 4) , dynamicCast((checkIndex(i, l_0.size) , l_0.array[i]), 15));
      event_0.dispatch(handler);
    }
  }
   else {
    for (i = 0; i < count; ++i) {
      handler = (l_1 = dynamicCast($get(this$static.map, type), 4) , dynamicCast((checkIndex(i, l_1.size) , l_1.array[i]), 15));
      event_0.dispatch(handler);
    }
  }
}

function getClass_15(){
  return Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit;
}

function HandlerManager$HandlerRegistry(){
}

_ = HandlerManager$HandlerRegistry.prototype = new Object_0();
_.getClass$ = getClass_15;
_.typeId$ = 0;
function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType > 0) {
    var value = [null, 0, false, [0, 0]][seedType];
    for (var i = 0; i < length_0; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function getClass_17(){
  return this.arrayClass$;
}

function initDim(arrayClass, typeId, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  $clinit_61();
  wrapArray(result, expandoNames_0, expandoValues_0);
  result.arrayClass$ = arrayClass;
  result.typeId$ = typeId;
  result.queryId$ = queryId;
  return result;
}

function initValues(arrayClass, typeId, queryId, array){
  $clinit_61();
  wrapArray(array, expandoNames_0, expandoValues_0);
  array.arrayClass$ = arrayClass;
  array.typeId$ = typeId;
  array.queryId$ = queryId;
  return array;
}

function setCheck(array, index, value){
  if (value != null) {
    if (array.queryId$ > 0 && !canCastUnsafe(value.typeId$, array.queryId$)) {
      throw new ArrayStoreException();
    }
    if (array.queryId$ < 0 && (value.typeMarker$ == nullMethod || value.typeId$ == 2)) {
      throw new ArrayStoreException();
    }
  }
  return array[index] = value;
}

function Array_0(){
}

_ = Array_0.prototype = new Object_0();
_.getClass$ = getClass_17;
_.typeId$ = 0;
_.arrayClass$ = null;
_.length = 0;
_.queryId$ = 0;
function $clinit_61(){
  $clinit_61 = nullMethod;
  expandoNames_0 = [];
  expandoValues_0 = [];
  initExpandos(new Array_0(), expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name_0 in protoType) {
    if (value = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function wrapArray(array, expandoNames, expandoValues){
  $clinit_61();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCast(srcId, dstId){
  return srcId && !!typeIdArray[srcId][dstId];
}

function canCastUnsafe(srcId, dstId){
  return srcId && typeIdArray[srcId][dstId];
}

function dynamicCast(src, dstId){
  if (src != null && !canCastUnsafe(src.typeId$, dstId)) {
    throw new ClassCastException();
  }
  return src;
}

function dynamicCastJso(src){
  if (src != null && (src.typeMarker$ == nullMethod || src.typeId$ == 2)) {
    throw new ClassCastException();
  }
  return src;
}

function instanceOf(src, dstId){
  return src != null && canCast(src.typeId$, dstId);
}

function round_int(x){
  return ~~Math.max(Math.min(x, 2147483647), -2147483648);
}

var typeIdArray = [{}, {}, {1:1}, {16:1}, {16:1}, {16:1}, {16:1}, {2:1}, {3:1}, {18:1}, {18:1}, {18:1}, {16:1}, {15:1}, {5:1}, {7:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1, 19:1}, {15:1}, {5:1, 6:1, 7:1, 8:1, 19:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {16:1, 24:1}, {16:1}, {16:1}, {16:1}, {16:1}, {16:1}, {16:1, 25:1}, {16:1}, {16:1}, {16:1}, {16:1}, {23:1}, {23:1}, {21:1}, {21:1}, {21:1}, {23:1}, {4:1}, {22:1}, {23:1}, {21:1}, {16:1}, {17:1}, {17:1}, {17:1}, {17:1}, {9:1}, {10:1}, {11:1}, {12:1}, {13:1}, {15:1}, {15:1}, {15:1}, {15:1}, {15:1}, {17:1}, {17:1}, {14:1}];
function caught(e){
  if (e != null && canCast(e.typeId$, 16)) {
    return e;
  }
  return $JavaScriptException(new JavaScriptException(), e);
}

function add(a, b){
  var newHigh, newLow;
  newHigh = a[1] + b[1];
  newLow = a[0] + b[0];
  return create(newLow, newHigh);
}

function addTimes(accum, a, b){
  if (a == 0) {
    return accum;
  }
  if (b == 0) {
    return accum;
  }
  return add(accum, create(a * b, 0));
}

function and(a, b){
  return makeFromBits(~~Math.max(Math.min(a[1] / 4294967296, 2147483647), -2147483648) & ~~Math.max(Math.min(b[1] / 4294967296, 2147483647), -2147483648), lowBits_0(a) & lowBits_0(b));
}

function compare_0(a, b){
  var nega, negb;
  if (a[0] == b[0] && a[1] == b[1]) {
    return 0;
  }
  nega = a[1] < 0;
  negb = b[1] < 0;
  if (nega && !negb) {
    return -1;
  }
  if (!nega && negb) {
    return 1;
  }
  if (sub(a, b)[1] < 0) {
    return -1;
  }
   else {
    return 1;
  }
}

function create(valueLow, valueHigh){
  var diffHigh, diffLow;
  valueHigh %= 1.8446744073709552E19;
  valueLow %= 1.8446744073709552E19;
  diffHigh = valueHigh % 4294967296;
  diffLow = Math.floor(valueLow / 4294967296) * 4294967296;
  valueHigh = valueHigh - diffHigh + diffLow;
  valueLow = valueLow - diffLow + diffHigh;
  while (valueLow < 0) {
    valueLow += 4294967296;
    valueHigh -= 4294967296;
  }
  while (valueLow > 4294967295) {
    valueLow -= 4294967296;
    valueHigh += 4294967296;
  }
  valueHigh = valueHigh % 1.8446744073709552E19;
  while (valueHigh > 9223372032559808512) {
    valueHigh -= 1.8446744073709552E19;
  }
  while (valueHigh < -9223372036854775808) {
    valueHigh += 1.8446744073709552E19;
  }
  return [valueLow, valueHigh];
}

function div_0(a, b){
  var approx, deltaRem, deltaResult, halfa, rem, result;
  if (b[0] == 0 && b[1] == 0) {
    throw $ArithmeticException(new ArithmeticException(), '/ by zero');
  }
  if (a[0] == 0 && a[1] == 0) {
    return $clinit_67() , ZERO;
  }
  if (eq(a, ($clinit_67() , MIN_VALUE))) {
    if (eq(b, ONE) || eq(b, NEG_ONE)) {
      return MIN_VALUE;
    }
    halfa = shr(a, 1);
    approx = shl(div_0(halfa, b), 1);
    rem = sub(a, mul(b, approx));
    return add(approx, div_0(rem, b));
  }
  if (eq(b, MIN_VALUE)) {
    return ZERO;
  }
  if (a[1] < 0) {
    if (b[1] < 0) {
      return div_0(neg(a), neg(b));
    }
     else {
      return neg(div_0(neg(a), b));
    }
  }
  if (b[1] < 0) {
    return neg(div_0(a, neg(b)));
  }
  result = ZERO;
  rem = a;
  while (compare_0(rem, b) >= 0) {
    deltaResult = fromDouble(Math.floor(toDoubleRoundDown(rem) / toDoubleRoundUp(b)));
    if (deltaResult[0] == 0 && deltaResult[1] == 0) {
      deltaResult = ONE;
    }
    deltaRem = mul(deltaResult, b);
    result = add(result, deltaResult);
    rem = sub(rem, deltaRem);
  }
  return result;
}

function eq(a, b){
  return a[0] == b[0] && a[1] == b[1];
}

function fromDouble(value){
  if (isNaN(value)) {
    return $clinit_67() , ZERO;
  }
  if (value < -9223372036854775808) {
    return $clinit_67() , MIN_VALUE;
  }
  if (value >= 9223372036854775807) {
    return $clinit_67() , MAX_VALUE;
  }
  if (value > 0) {
    return create(Math.floor(value), 0);
  }
   else {
    return create(Math.ceil(value), 0);
  }
}

function fromInt(value){
  var rebase, result;
  if (value > -129 && value < 128) {
    rebase = value + 128;
    result = ($clinit_66() , boxedValues)[rebase];
    if (result == null) {
      result = boxedValues[rebase] = internalFromInt(value);
    }
    return result;
  }
  return internalFromInt(value);
}

function internalFromInt(value){
  if (value >= 0) {
    return [value, 0];
  }
   else {
    return [value + 4294967296, -4294967296];
  }
}

function lowBits_0(a){
  if (a[0] >= 2147483648) {
    return ~~Math.max(Math.min(a[0] - 4294967296, 2147483647), -2147483648);
  }
   else {
    return ~~Math.max(Math.min(a[0], 2147483647), -2147483648);
  }
}

function makeFromBits(highBits, lowBits){
  var high, low;
  high = highBits * 4294967296;
  low = lowBits;
  if (lowBits < 0) {
    low += 4294967296;
  }
  return [low, high];
}

function mul(a, b){
  var a1, a2, a3, a4, b1, b2, b3, b4, res;
  if (a[0] == 0 && a[1] == 0) {
    return $clinit_67() , ZERO;
  }
  if (b[0] == 0 && b[1] == 0) {
    return $clinit_67() , ZERO;
  }
  if (eq(a, ($clinit_67() , MIN_VALUE))) {
    return multByMinValue(b);
  }
  if (eq(b, MIN_VALUE)) {
    return multByMinValue(a);
  }
  if (a[1] < 0) {
    if (b[1] < 0) {
      return mul(neg(a), neg(b));
    }
     else {
      return neg(mul(neg(a), b));
    }
  }
  if (b[1] < 0) {
    return neg(mul(a, neg(b)));
  }
  if (compare_0(a, TWO_PWR_24) < 0 && compare_0(b, TWO_PWR_24) < 0) {
    return create((a[1] + a[0]) * (b[1] + b[0]), 0);
  }
  a3 = a[1] % 281474976710656;
  a4 = a[1] - a3;
  a1 = a[0] % 65536;
  a2 = a[0] - a1;
  b3 = b[1] % 281474976710656;
  b4 = b[1] - b3;
  b1 = b[0] % 65536;
  b2 = b[0] - b1;
  res = ZERO;
  res = addTimes(res, a4, b1);
  res = addTimes(res, a3, b2);
  res = addTimes(res, a3, b1);
  res = addTimes(res, a2, b3);
  res = addTimes(res, a2, b2);
  res = addTimes(res, a2, b1);
  res = addTimes(res, a1, b4);
  res = addTimes(res, a1, b3);
  res = addTimes(res, a1, b2);
  res = addTimes(res, a1, b1);
  return res;
}

function multByMinValue(a){
  if ((lowBits_0(a) & 1) == 1) {
    return $clinit_67() , MIN_VALUE;
  }
   else {
    return $clinit_67() , ZERO;
  }
}

function neg(a){
  var newHigh, newLow;
  if (eq(a, ($clinit_67() , MIN_VALUE))) {
    return MIN_VALUE;
  }
  newHigh = -a[1];
  newLow = -a[0];
  if (newLow > 4294967295) {
    newLow -= 4294967296;
    newHigh += 4294967296;
  }
  if (newLow < 0) {
    newLow += 4294967296;
    newHigh -= 4294967296;
  }
  return [newLow, newHigh];
}

function or(a, b){
  return makeFromBits(~~Math.max(Math.min(a[1] / 4294967296, 2147483647), -2147483648) | ~~Math.max(Math.min(b[1] / 4294967296, 2147483647), -2147483648), lowBits_0(a) | lowBits_0(b));
}

function pwrAsDouble(n){
  if (n <= 30) {
    return 1 << n;
  }
   else {
    return pwrAsDouble(30) * pwrAsDouble(n - 30);
  }
}

function shl(a, n){
  var diff, newHigh, newLow, twoToN;
  n &= 63;
  if (eq(a, ($clinit_67() , MIN_VALUE))) {
    if (n == 0) {
      return a;
    }
     else {
      return ZERO;
    }
  }
  if (a[1] < 0) {
    return neg(shl(neg(a), n));
  }
  twoToN = pwrAsDouble(n);
  newHigh = a[1] * twoToN % 1.8446744073709552E19;
  newLow = a[0] * twoToN;
  diff = newLow - newLow % 4294967296;
  newHigh += diff;
  newLow -= diff;
  if (newHigh >= 9223372036854775807) {
    newHigh -= 1.8446744073709552E19;
  }
  return [newLow, newHigh];
}

function shr(a, n){
  var newHigh, newLow, shiftFact;
  n &= 63;
  shiftFact = pwrAsDouble(n);
  newHigh = a[1] / shiftFact;
  newLow = Math.floor(a[0] / shiftFact);
  return create(newLow, newHigh);
}

function shru(a, n){
  var sr;
  n &= 63;
  sr = shr(a, n);
  if (a[1] < 0) {
    sr = add(sr, shl(($clinit_67() , TWO), 63 - n));
  }
  return sr;
}

function sub(a, b){
  var newHigh, newLow;
  newHigh = a[1] - b[1];
  newLow = a[0] - b[0];
  return create(newLow, newHigh);
}

function toDouble(a){
  return a[1] + a[0];
}

function toDoubleRoundDown(a){
  var diff, magnitute, toSubtract;
  magnitute = round_int(Math.log(a[1]) / ($clinit_67() , LN_2));
  if (magnitute <= 48) {
    return a[1] + a[0];
  }
   else {
    diff = magnitute - 48;
    toSubtract = (1 << diff) - 1;
    return a[1] + (a[0] - toSubtract);
  }
}

function toDoubleRoundUp(a){
  var diff, magnitute, toAdd;
  magnitute = round_int(Math.log(a[1]) / ($clinit_67() , LN_2));
  if (magnitute <= 48) {
    return a[1] + a[0];
  }
   else {
    diff = magnitute - 48;
    toAdd = (1 << diff) - 1;
    return a[1] + (a[0] + toAdd);
  }
}

function toString_3(a){
  var digits, rem, remDivTenPower, res, tenPowerLong, zeroesNeeded;
  if (a[0] == 0 && a[1] == 0) {
    return '0';
  }
  if (eq(a, ($clinit_67() , MIN_VALUE))) {
    return '-9223372036854775808';
  }
  if (a[1] < 0) {
    return '-' + toString_3(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem[0] == 0 && rem[1] == 0)) {
    tenPowerLong = fromInt(1000000000);
    remDivTenPower = div_0(rem, tenPowerLong);
    digits = '' + lowBits_0(sub(rem, mul(remDivTenPower, tenPowerLong)));
    rem = remDivTenPower;
    if (!(rem[0] == 0 && rem[1] == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; --zeroesNeeded) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function $clinit_66(){
  $clinit_66 = nullMethod;
  boxedValues = initDim(_3_3D_classLit, 0, 14, 256, 0);
}

var boxedValues;
function $clinit_67(){
  $clinit_67 = nullMethod;
  LN_2 = Math.log(2);
  MAX_VALUE = P7fffffffffffffff_longLit;
  MIN_VALUE = N8000000000000000_longLit;
  NEG_ONE = fromInt(-1);
  ONE = fromInt(1);
  TWO = fromInt(2);
  TWO_PWR_24 = P1000000_longLit;
  ZERO = fromInt(0);
}

var LN_2, MAX_VALUE, MIN_VALUE, NEG_ONE, ONE, TWO, TWO_PWR_24, ZERO;
function $CommandExecutor(this$static){
  this$static.cancellationTimer = $CommandExecutor$1(new CommandExecutor$1(), this$static);
  this$static.commands = $ArrayList(new ArrayList());
  this$static.executionTimer = $CommandExecutor$2(new CommandExecutor$2(), this$static);
  this$static.iterator = $CommandExecutor$CircularIterator(new CommandExecutor$CircularIterator(), this$static);
  return this$static;
}

function $doCommandCanceled(this$static){
  var cmd, ex, ueh;
  cmd = $getLast(this$static.iterator);
  $remove(this$static.iterator);
  ex = null;
  if (cmd != null && canCast(cmd.typeId$, 17)) {
    ex = $IncrementalCommandCanceledException(new IncrementalCommandCanceledException(), dynamicCast(cmd, 17));
  }
  if (ex) {
    ueh = sUncaughtExceptionHandler;
    if (ueh) {
      $wnd.alert('Uncaught exception: ' + ex);
    }
  }
  this$static.executing = false;
  $maybeStartExecutionTimer(this$static);
}

function $doExecuteCommands(this$static, startTimeMillis){
  var element, incrementalCommand, removeCommand, wasCanceled;
  wasCanceled = false;
  try {
    this$static.executing = true;
    this$static.iterator.end = this$static.commands.size;
    $schedule(this$static.cancellationTimer, 10000);
    while ($hasNext(this$static.iterator)) {
      element = $next(this$static.iterator);
      removeCommand = true;
      try {
        if (element == null) {
          return;
        }
        if (element != null && canCast(element.typeId$, 17)) {
          incrementalCommand = dynamicCast(element, 17);
          removeCommand = !incrementalCommand.execute();
        }
      }
       finally {
        wasCanceled = this$static.iterator.last == -1;
        if (wasCanceled) {
          return;
        }
        if (removeCommand) {
          $remove(this$static.iterator);
        }
      }
      if ((new Date()).getTime() - startTimeMillis >= 100) {
        return;
      }
    }
  }
   finally {
    if (!wasCanceled) {
      $cancel(this$static.cancellationTimer);
      this$static.executing = false;
      $maybeStartExecutionTimer(this$static);
    }
  }
}

function $maybeStartExecutionTimer(this$static){
  if (this$static.commands.size != 0 && !this$static.executionTimerPending && !this$static.executing) {
    this$static.executionTimerPending = true;
    $schedule(this$static.executionTimer, 1);
  }
}

function $submit(this$static, command){
  $add_5(this$static.commands, command);
  $maybeStartExecutionTimer(this$static);
}

function getClass_21(){
  return Lcom_google_gwt_user_client_CommandExecutor_2_classLit;
}

function CommandExecutor(){
}

_ = CommandExecutor.prototype = new Object_0();
_.getClass$ = getClass_21;
_.typeId$ = 0;
_.executing = false;
_.executionTimerPending = false;
function $clinit_81(){
  $clinit_81 = nullMethod;
  timers = $ArrayList(new ArrayList());
  addCloseHandler(new Timer$1());
}

function $cancel(this$static){
  if (this$static.isRepeating) {
    $wnd.clearInterval(this$static.timerId);
  }
   else {
    $wnd.clearTimeout(this$static.timerId);
  }
  $remove_6(timers, this$static);
}

function $fireAndCatch(this$static){
  var $e0, e;
  try {
    $fireImpl(this$static);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 16)) {
      e = $e0;
      $wnd.alert('Uncaught exception: ' + e);
    }
     else 
      throw $e0;
  }
}

function $fireImpl(this$static){
  if (!this$static.isRepeating) {
    $remove_6(timers, this$static);
  }
  this$static.run();
}

function $schedule(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw $IllegalArgumentException(new IllegalArgumentException(), 'must be positive');
  }
  $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = createTimeout(this$static, delayMillis);
  $add_5(timers, this$static);
}

function createTimeout(timer, delay){
  return $wnd.setTimeout(function(){
    timer.fire();
  }
  , delay);
}

function fire_0(){
  var handler;
  handler = sUncaughtExceptionHandler;
  if (handler) {
    $fireAndCatch(this);
  }
   else {
    $fireImpl(this);
  }
}

function getClass_24(){
  return Lcom_google_gwt_user_client_Timer_2_classLit;
}

function Timer(){
}

_ = Timer.prototype = new Object_0();
_.fire = fire_0;
_.getClass$ = getClass_24;
_.typeId$ = 9;
_.isRepeating = false;
_.timerId = 0;
var timers;
function $clinit_71(){
  $clinit_71 = nullMethod;
  $clinit_81();
}

function $CommandExecutor$1(this$static, this$0){
  $clinit_71();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_18(){
  return Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit;
}

function run(){
  if (!this.this$0.executing) {
    return;
  }
  $doCommandCanceled(this.this$0);
}

function CommandExecutor$1(){
}

_ = CommandExecutor$1.prototype = new Timer();
_.getClass$ = getClass_18;
_.run = run;
_.typeId$ = 10;
_.this$0 = null;
function $clinit_72(){
  $clinit_72 = nullMethod;
  $clinit_81();
}

function $CommandExecutor$2(this$static, this$0){
  $clinit_72();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_19(){
  return Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit;
}

function run_0(){
  this.this$0.executionTimerPending = false;
  $doExecuteCommands(this.this$0, (new Date()).getTime());
}

function CommandExecutor$2(){
}

_ = CommandExecutor$2.prototype = new Timer();
_.getClass$ = getClass_19;
_.run = run_0;
_.typeId$ = 11;
_.this$0 = null;
function $CommandExecutor$CircularIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $getLast(this$static){
  return $get_0(this$static.this$0.commands, this$static.last);
}

function $hasNext(this$static){
  return this$static.next < this$static.end;
}

function $next(this$static){
  var command;
  this$static.last = this$static.next;
  command = $get_0(this$static.this$0.commands, this$static.next++);
  if (this$static.next >= this$static.end) {
    this$static.next = 0;
  }
  return command;
}

function $remove(this$static){
  $remove_5(this$static.this$0.commands, this$static.last);
  --this$static.end;
  if (this$static.last <= this$static.next) {
    if (--this$static.next < 0) {
      this$static.next = 0;
    }
  }
  this$static.last = -1;
}

function getClass_20(){
  return Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit;
}

function hasNext(){
  return this.next < this.end;
}

function next_0(){
  return $next(this);
}

function CommandExecutor$CircularIterator(){
}

_ = CommandExecutor$CircularIterator.prototype = new Object_0();
_.getClass$ = getClass_20;
_.hasNext = hasNext;
_.next_0 = next_0;
_.typeId$ = 0;
_.end = 0;
_.last = -1;
_.next = 0;
_.this$0 = null;
function dispatchEvent_0(evt, elem, listener){
  var handler;
  handler = sUncaughtExceptionHandler;
  if (handler) {
    dispatchEventAndCatch(evt, elem, listener);
  }
   else {
    dispatchEventImpl(evt, elem, listener);
  }
}

function dispatchEventAndCatch(evt, elem, listener){
  var $e0, e;
  try {
    dispatchEventImpl(evt, elem, listener);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 16)) {
      e = $e0;
      $wnd.alert('Uncaught exception: ' + e);
    }
     else 
      throw $e0;
  }
}

function dispatchEventImpl(evt, elem, listener){
  var prevCurrentEvent;
  if (elem == sCaptureElem) {
    if ($eventGetTypeInt(($clinit_10() , evt).type) == 8192) {
      sCaptureElem = null;
    }
  }
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  try {
    listener.onBrowserEvent(evt);
  }
   finally {
    currentEvent = prevCurrentEvent;
  }
}

function previewEvent(evt){
  return true;
}

function sinkEvents(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem = null;
function $clinit_76(){
  $clinit_76 = nullMethod;
  commandExecutor = $CommandExecutor(new CommandExecutor());
}

function addCommand(cmd){
  $clinit_76();
  if (!cmd) {
    throw $NullPointerException(new NullPointerException(), 'cmd cannot be null');
  }
  $submit(commandExecutor, cmd);
}

var commandExecutor;
function $IncrementalCommandCanceledException(this$static){
  return this$static;
}

function getClass_22(){
  return Lcom_google_gwt_user_client_IncrementalCommandCanceledException_2_classLit;
}

function IncrementalCommandCanceledException(){
}

_ = IncrementalCommandCanceledException.prototype = new RuntimeException();
_.getClass$ = getClass_22;
_.typeId$ = 12;
function getClass_23(){
  return Lcom_google_gwt_user_client_Timer$1_2_classLit;
}

function onClose(event_0){
  while (($clinit_81() , timers).size > 0) {
    $cancel(dynamicCast($get_0(timers, 0), 18));
  }
}

function Timer$1(){
}

_ = Timer$1.prototype = new Object_0();
_.getClass$ = getClass_23;
_.onClose = onClose;
_.typeId$ = 13;
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_1?TYPE_1:(TYPE_1 = $GwtEvent$Type(new GwtEvent$Type())), handler);
}

function addHandler(type, handler){
  return $addHandler_0(getHandlers(), type, handler);
}

function fireClosedAndCatch(){
  var $e0, e;
  try {
    fireClosedImpl();
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 16)) {
      e = $e0;
      $wnd.alert('Uncaught exception: ' + e);
    }
     else 
      throw $e0;
  }
}

function fireClosedImpl(){
  if (closeHandlersInitialized) {
    fire(getHandlers());
  }
}

function fireClosingAndCatch(){
  var $e0, e;
  try {
    return fireClosingImpl();
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 16)) {
      e = $e0;
      $wnd.alert('Uncaught exception: ' + e);
      return null;
    }
     else 
      throw $e0;
  }
}

function fireClosingImpl(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = ($clinit_82() , new Window$ClosingEvent());
    fireEvent(event_0);
    return null;
  }
  return null;
}

function fireEvent(event_0){
  if (handlers) {
    $fireEvent_0(handlers, event_0);
  }
}

function getHandlers(){
  if (!handlers) {
    handlers = $Window$WindowHandlers(new Window$WindowHandlers());
  }
  return handlers;
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler($getWindowCloseHandlerMethodString(), '__gwt_initWindowCloseHandler');
    closeHandlersInitialized = true;
  }
}

function onClosed(){
  var handler;
  handler = sUncaughtExceptionHandler;
  if (handler) {
    fireClosedAndCatch();
  }
   else {
    fireClosedImpl();
  }
}

function onClosing(){
  var handler;
  handler = sUncaughtExceptionHandler;
  if (handler) {
    return fireClosingAndCatch();
  }
   else {
    return fireClosingImpl();
  }
}

var closeHandlersInitialized = false, handlers = null;
function $clinit_82(){
  $clinit_82 = nullMethod;
  TYPE_2 = $GwtEvent$Type(new GwtEvent$Type());
}

function dispatch_2(handler){
  null.nullMethod();
}

function getAssociatedType_2(){
  return TYPE_2;
}

function getClass_25(){
  return Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit;
}

function Window$ClosingEvent(){
}

_ = Window$ClosingEvent.prototype = new GwtEvent();
_.dispatch = dispatch_2;
_.getAssociatedType = getAssociatedType_2;
_.getClass$ = getClass_25;
_.typeId$ = 0;
var TYPE_2;
function $Window$WindowHandlers(this$static){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry());
  this$static.source = null;
  this$static.isReverseOrder = false;
  return this$static;
}

function getClass_26(){
  return Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit;
}

function Window$WindowHandlers(){
}

_ = Window$WindowHandlers.prototype = new HandlerManager();
_.getClass$ = getClass_26;
_.typeId$ = 14;
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'mousewheel':
      return 131072;
    case 'DOMMouseScroll':
      return 131072;
    case 'contextmenu':
      return 262144;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

var eventSystemIsInitialized = false;
function $initEventSystem(){
  dispatchEvent_1 = function(){
    var oldEventTarget = ($clinit_9() , currentEventTarget);
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEvent($wnd.event)) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentElement;
    }
    if (listener) {
      if (!(listener != null && (listener.typeMarker$ != nullMethod && listener.typeId$ != 2)) && (listener != null && canCast(listener.typeId$, 6))) {
        dispatchEvent_0($wnd.event, curElem, listener);
      }
    }
    currentEventTarget = oldEventTarget;
  }
  ;
  dispatchDblClickEvent = function(){
    var newEvent = $doc.createEventObject();
    if ($wnd.event.returnValue == null) {
      $wnd.event.srcElement.fireEvent('onclick', newEvent);
    }
    if (this.__eventBits & 2) {
      dispatchEvent_1.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEvent($wnd.event);
    }
  }
  ;
  var bodyDispatcher = function(){
    dispatchEvent_1.call($doc.body);
  }
  ;
  var bodyDblClickDispatcher = function(){
    dispatchDblClickEvent.call($doc.body);
  }
  ;
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  if (chMask & 1)
    elem.onclick = bits & 1?dispatchEvent_1:null;
  if (chMask & 3)
    elem.ondblclick = bits & 3?dispatchDblClickEvent:null;
  if (chMask & 4)
    elem.onmousedown = bits & 4?dispatchEvent_1:null;
  if (chMask & 8)
    elem.onmouseup = bits & 8?dispatchEvent_1:null;
  if (chMask & 16)
    elem.onmouseover = bits & 16?dispatchEvent_1:null;
  if (chMask & 32)
    elem.onmouseout = bits & 32?dispatchEvent_1:null;
  if (chMask & 64)
    elem.onmousemove = bits & 64?dispatchEvent_1:null;
  if (chMask & 128)
    elem.onkeydown = bits & 128?dispatchEvent_1:null;
  if (chMask & 256)
    elem.onkeypress = bits & 256?dispatchEvent_1:null;
  if (chMask & 512)
    elem.onkeyup = bits & 512?dispatchEvent_1:null;
  if (chMask & 1024)
    elem.onchange = bits & 1024?dispatchEvent_1:null;
  if (chMask & 2048)
    elem.onfocus = bits & 2048?dispatchEvent_1:null;
  if (chMask & 4096)
    elem.onblur = bits & 4096?dispatchEvent_1:null;
  if (chMask & 8192)
    elem.onlosecapture = bits & 8192?dispatchEvent_1:null;
  if (chMask & 16384)
    elem.onscroll = bits & 16384?dispatchEvent_1:null;
  if (chMask & 32768)
    elem.onload = bits & 32768?dispatchEvent_1:null;
  if (chMask & 65536)
    elem.onerror = bits & 65536?dispatchEvent_1:null;
  if (chMask & 131072)
    elem.onmousewheel = bits & 131072?dispatchEvent_1:null;
  if (chMask & 262144)
    elem.oncontextmenu = bits & 262144?dispatchEvent_1:null;
}

var dispatchDblClickEvent = null, dispatchEvent_1 = null;
function $getWindowCloseHandlerMethodString(){
  return function(beforeunload, unload){
    var wnd = window, oldOnBeforeUnload = wnd.onbeforeunload, oldOnUnload = wnd.onunload;
    wnd.onbeforeunload = function(evt){
      var ret, oldRet;
      try {
        ret = beforeunload();
      }
       finally {
        oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
      }
      if (ret != null) {
        return ret;
      }
      if (oldRet != null) {
        return oldRet;
      }
    }
    ;
    wnd.onunload = function(evt){
      try {
        unload();
      }
       finally {
        oldOnUnload && oldOnUnload(evt);
        wnd.onresize = null;
        wnd.onscroll = null;
        wnd.onbeforeunload = null;
        wnd.onunload = null;
      }
    }
    ;
    wnd.__gwt_initWindowCloseHandler = undefined;
  }
  .toString();
}

function $initHandler(initFunc, funcName){
  var scriptElem;
  initFunc = $replaceFirst(initFunc, 'function', 'function ' + funcName);
  scriptElem = $createScriptElement(($clinit_10() , $doc), initFunc);
  $doc.body.appendChild(scriptElem);
  $initWindowCloseHandlerImpl();
  $doc.body.removeChild(scriptElem);
}

function $initWindowCloseHandlerImpl(){
  $wnd.__gwt_initWindowCloseHandler(function(){
    return onClosing();
  }
  , function(){
    onClosed();
  }
  );
}

function getClass_46(){
  return Lcom_google_gwt_user_client_ui_UIObject_2_classLit;
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw $RuntimeException(new RuntimeException(), 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw $IllegalArgumentException(new IllegalArgumentException(), 'Style names cannot be empty');
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function toString_5(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_10() , this.element).outerHTML;
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = elem.className.split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    if (name_0.length > oldPrimaryStyleLen && (name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0)) {
      classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen);
    }
  }
  elem.className = classes.join(' ');
}

function UIObject(){
}

_ = UIObject.prototype = new Object_0();
_.getClass$ = getClass_46;
_.toString$ = toString_5;
_.typeId$ = 15;
_.element = null;
function $addDomHandler(this$static, handler, type){
  $sinkEvents(this$static, $eventGetTypeInt(type.name_0));
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = $HandlerManager(new HandlerManager(), this$static)):this$static.handlerManager, type, handler);
}

function $fireEvent_1(this$static, event_0){
  if (this$static.handlerManager) {
    $fireEvent_0(this$static.handlerManager, event_0);
  }
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw $IllegalStateException(new IllegalStateException(), "Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  this$static.element.__listener = this$static;
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  if (bitsToAdd > 0) {
    $sinkEvents(this$static, bitsToAdd);
  }
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(($clinit_10() , event_0).type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget || (event_0.type == 'mouseout'?event_0.toElement:event_0.fromElement);
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw $IllegalStateException(new IllegalStateException(), "Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    this$static.doDetachChildren();
    this$static.element.__listener = null;
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_115();
    if ($containsKey(widgetsToDetach.map, this$static)) {
      $onDetach(this$static);
      $remove_4(widgetsToDetach.map, this$static) != null;
    }
  }
   else if (this$static.parent_0) {
    this$static.parent_0.remove(this$static);
  }
   else if (this$static.parent_0) {
    throw $IllegalStateException(new IllegalStateException(), "This widget's parent does not implement HasWidgets");
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    if (!!oldParent && oldParent.attached) {
      $onDetach(this$static);
    }
    this$static.parent_0 = null;
  }
   else {
    if (oldParent) {
      throw $IllegalStateException(new IllegalStateException(), 'Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    if (parent_0.attached) {
      $onAttach(this$static);
    }
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  if (this$static.eventsToSink == -1) {
    sinkEvents(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0));
  }
   else {
    this$static.eventsToSink |= eventBitsToAdd;
  }
}

function doAttachChildren_0(){
}

function doDetachChildren_0(){
}

function getClass_50(){
  return Lcom_google_gwt_user_client_ui_Widget_2_classLit;
}

function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
}

function onLoad_0(){
}

function onUnload_0(){
}

function Widget(){
}

_ = Widget.prototype = new UIObject();
_.doAttachChildren = doAttachChildren_0;
_.doDetachChildren = doDetachChildren_0;
_.getClass$ = getClass_50;
_.onBrowserEvent = onBrowserEvent_0;
_.onLoad = onLoad_0;
_.onUnload = onUnload_0;
_.typeId$ = 16;
_.attached = false;
_.eventsToSink = 0;
_.handlerManager = null;
_.parent_0 = null;
function doAttachChildren(){
  var child, it;
  for (it = this.iterator_0(); it.hasNext();) {
    child = dynamicCast(it.next_0(), 8);
    $onAttach(child);
  }
}

function doDetachChildren(){
  var child, it;
  for (it = this.iterator_0(); it.hasNext();) {
    child = dynamicCast(it.next_0(), 8);
    $onDetach(child);
  }
}

function getClass_38(){
  return Lcom_google_gwt_user_client_ui_Panel_2_classLit;
}

function onLoad(){
}

function onUnload(){
}

function Panel(){
}

_ = Panel.prototype = new Widget();
_.doAttachChildren = doAttachChildren;
_.doDetachChildren = doDetachChildren;
_.getClass$ = getClass_38;
_.onLoad = onLoad;
_.onUnload = onUnload;
_.typeId$ = 17;
function $add_0(this$static, child, container){
  $removeFromParent(child);
  $add_3(this$static.children, child);
  container.appendChild(child.element);
  $setParent(child, this$static);
}

function $remove_0(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  $setParent(w, null);
  elem = w.element;
  ($clinit_10() , elem).parentElement.removeChild(elem);
  $remove_3(this$static.children, w);
  return true;
}

function getClass_31(){
  return Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit;
}

function iterator(){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator(), this.children);
}

function remove_0(w){
  return $remove_0(this, w);
}

function ComplexPanel(){
}

_ = ComplexPanel.prototype = new Panel();
_.getClass$ = getClass_31;
_.iterator_0 = iterator;
_.remove = remove_0;
_.typeId$ = 18;
function $add(this$static, w){
  $add_0(this$static, w, this$static.element);
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

function getClass_27(){
  return Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit;
}

function remove(w){
  var removed;
  removed = $remove_0(this, w);
  if (removed) {
    changeToStaticPositioning(w.element);
  }
  return removed;
}

function AbsolutePanel(){
}

_ = AbsolutePanel.prototype = new ComplexPanel();
_.getClass$ = getClass_27;
_.remove = remove;
_.typeId$ = 19;
function $FocusWidget(this$static, elem){
  this$static.element = elem;
  this$static.element.tabIndex = 0;
  return this$static;
}

function getClass_32(){
  return Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit;
}

function FocusWidget(){
}

_ = FocusWidget.prototype = new Widget();
_.getClass$ = getClass_32;
_.typeId$ = 20;
function $ButtonBase(this$static, elem){
  this$static.element = elem;
  this$static.element.tabIndex = 0;
  return this$static;
}

function getClass_28(){
  return Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit;
}

function ButtonBase(){
}

_ = ButtonBase.prototype = new FocusWidget();
_.getClass$ = getClass_28;
_.typeId$ = 21;
function $Button_0(this$static, html, handler){
  $ButtonBase(this$static, ($clinit_10() , $doc).createElement('button'));
  adjustType(this$static.element);
  this$static.element['className'] = 'gwt-Button';
  this$static.element.innerHTML = html || '';
  $addDomHandler(this$static, handler, ($clinit_22() , TYPE_0));
  return this$static;
}

function adjustType(button){
  if (button.type == 'submit') {
    try {
      button.setAttribute('type', 'button');
    }
     catch (e) {
    }
  }
}

function getClass_29(){
  return Lcom_google_gwt_user_client_ui_Button_2_classLit;
}

function Button(){
}

_ = Button.prototype = new ButtonBase();
_.getClass$ = getClass_29;
_.typeId$ = 22;
function $CellPanel(this$static){
  this$static.children = $WidgetCollection(new WidgetCollection());
  this$static.table = ($clinit_10() , $doc).createElement('table');
  this$static.body_0 = $doc.createElement('tbody');
  this$static.table.appendChild(this$static.body_0);
  this$static.element = this$static.table;
  return this$static;
}

function getClass_30(){
  return Lcom_google_gwt_user_client_ui_CellPanel_2_classLit;
}

function CellPanel(){
}

_ = CellPanel.prototype = new ComplexPanel();
_.getClass$ = getClass_30;
_.typeId$ = 23;
_.body_0 = null;
_.table = null;
function $clinit_100(){
  $clinit_100 = nullMethod;
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant(), 'center');
  ALIGN_LEFT = $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant(), 'left');
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant(), 'right');
  ALIGN_DEFAULT = ALIGN_LEFT;
}

var ALIGN_DEFAULT, ALIGN_LEFT;
function $HasHorizontalAlignment$HorizontalAlignmentConstant(this$static, textAlignString){
  this$static.textAlignString = textAlignString;
  return this$static;
}

function getClass_33(){
  return Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit;
}

function HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new Object_0();
_.getClass$ = getClass_33;
_.typeId$ = 0;
_.textAlignString = null;
function $clinit_105(){
  $clinit_105 = nullMethod;
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant(), 'bottom');
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant(), 'middle');
  ALIGN_TOP = $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant(), 'top');
}

var ALIGN_TOP;
function $HasVerticalAlignment$VerticalAlignmentConstant(this$static, verticalAlignString){
  this$static.verticalAlignString = verticalAlignString;
  return this$static;
}

function getClass_34(){
  return Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit;
}

function HasVerticalAlignment$VerticalAlignmentConstant(){
}

_ = HasVerticalAlignment$VerticalAlignmentConstant.prototype = new Object_0();
_.getClass$ = getClass_34;
_.typeId$ = 0;
_.verticalAlignString = null;
function $HorizontalPanel(this$static){
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_100() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_105() , ALIGN_TOP);
  this$static.tableRow = ($clinit_10() , $doc).createElement('tr');
  this$static.body_0.appendChild(this$static.tableRow);
  this$static.table['cellSpacing'] = '0';
  this$static.table['cellPadding'] = '0';
  return this$static;
}

function $add_1(this$static, w){
  var td_0, td;
  td_0 = (td = ($clinit_10() , $doc).createElement('td') , (td['align'] = this$static.horzAlign.textAlignString , undefined) , (td.style['verticalAlign'] = this$static.vertAlign.verticalAlignString , undefined) , td);
  this$static.tableRow.appendChild(td_0);
  $removeFromParent(w);
  $add_3(this$static.children, w);
  td_0.appendChild(w.element);
  $setParent(w, this$static);
}

function getClass_35(){
  return Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit;
}

function remove_1(w){
  var removed, td;
  td = ($clinit_10() , w.element).parentElement;
  removed = $remove_0(this, w);
  if (removed) {
    this.tableRow.removeChild(td);
  }
  return removed;
}

function HorizontalPanel(){
}

_ = HorizontalPanel.prototype = new CellPanel();
_.getClass$ = getClass_35;
_.remove = remove_1;
_.typeId$ = 24;
_.tableRow = null;
function $Label(this$static, text){
  this$static.element = ($clinit_10() , $doc).createElement('div');
  this$static.element['className'] = 'gwt-Label';
  this$static.element.innerText = text || '';
  return this$static;
}

function getClass_36(){
  return Lcom_google_gwt_user_client_ui_Label_2_classLit;
}

function Label(){
}

_ = Label.prototype = new Widget();
_.getClass$ = getClass_36;
_.typeId$ = 25;
function $ListBox(this$static){
  var html;
  $FocusWidget(this$static, (html = '<SELECT>' , ($clinit_10() , $doc).createElement(html)));
  this$static.element['className'] = 'gwt-ListBox';
  return this$static;
}

function $insertItem(this$static, item, value, index){
  var before, option, select;
  select = this$static.element;
  option = ($clinit_10() , $doc).createElement('option');
  option.text = item;
  option.value = value;
  if (index == -1 || index == select.options.length) {
    $selectAdd(select, option, null);
  }
   else {
    before = select.options[index];
    $selectAdd(select, option, before);
  }
}

function getClass_37(){
  return Lcom_google_gwt_user_client_ui_ListBox_2_classLit;
}

function ListBox(){
}

_ = ListBox.prototype = new FocusWidget();
_.getClass$ = getClass_37;
_.typeId$ = 26;
function $clinit_115(){
  $clinit_115 = nullMethod;
  rootPanels = $HashMap(new HashMap());
  widgetsToDetach = $HashSet(new HashSet());
}

function $RootPanel(this$static, elem){
  $clinit_115();
  this$static.children = $WidgetCollection(new WidgetCollection());
  this$static.element = elem;
  $onAttach(this$static);
  return this$static;
}

function detachWidgets(){
  var outerIter, entry;
  $clinit_115();
  var widget, widget$iterator;
  for (widget$iterator = (outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $keySet(widgetsToDetach.map).val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1(), outerIter)); $hasNext_0(widget$iterator.val$outerIter.iter);) {
    widget = dynamicCast((entry = dynamicCast($next_0(widget$iterator.val$outerIter.iter), 21) , entry.getKey()), 8);
    if (widget.attached) {
      $onDetach(widget);
    }
  }
  $clearImpl(widgetsToDetach.map);
  $clearImpl(rootPanels);
}

function get_0(id){
  $clinit_115();
  var rp;
  rp = dynamicCast($get(rootPanels, id), 19);
  if (rp) {
    return rp;
  }
  if (rootPanels.size == 0) {
    addCloseHandler(new RootPanel$1());
  }
  rp = $RootPanel$DefaultRootPanel(new RootPanel$DefaultRootPanel());
  $put(rootPanels, id, rp);
  $add_6(widgetsToDetach, rp);
  return rp;
}

function getClass_41(){
  return Lcom_google_gwt_user_client_ui_RootPanel_2_classLit;
}

function RootPanel(){
}

_ = RootPanel.prototype = new AbsolutePanel();
_.getClass$ = getClass_41;
_.typeId$ = 27;
var rootPanels, widgetsToDetach;
function getClass_39(){
  return Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit;
}

function onClose_0(closeEvent){
  detachWidgets();
}

function RootPanel$1(){
}

_ = RootPanel$1.prototype = new Object_0();
_.getClass$ = getClass_39;
_.onClose = onClose_0;
_.typeId$ = 28;
function $clinit_114(){
  $clinit_114 = nullMethod;
  $clinit_115();
}

function $RootPanel$DefaultRootPanel(this$static){
  $clinit_114();
  $RootPanel(this$static, $doc.body);
  return this$static;
}

function getClass_40(){
  return Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit;
}

function RootPanel$DefaultRootPanel(){
}

_ = RootPanel$DefaultRootPanel.prototype = new RootPanel();
_.getClass$ = getClass_40;
_.typeId$ = 29;
function $SimplePanel(this$static){
  this$static.element = ($clinit_10() , $doc).createElement('div');
  return this$static;
}

function $remove_1(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  $setParent(w, null);
  this$static.element.removeChild(w.element);
  this$static.widget = null;
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  if (w) {
    $removeFromParent(w);
  }
  if (this$static.widget) {
    $remove_1(this$static, this$static.widget);
  }
  this$static.widget = w;
  if (w) {
    this$static.element.appendChild(this$static.widget.element);
    $setParent(w, this$static);
  }
}

function getClass_43(){
  return Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit;
}

function iterator_0(){
  return $SimplePanel$1(new SimplePanel$1(), this);
}

function remove_2(w){
  return $remove_1(this, w);
}

function SimplePanel(){
}

_ = SimplePanel.prototype = new Panel();
_.getClass$ = getClass_43;
_.iterator_0 = iterator_0;
_.remove = remove_2;
_.typeId$ = 30;
_.widget = null;
function $SimplePanel$1(this$static, this$0){
  this$static.this$0 = this$0;
  this$static.hasElement = !!this$static.this$0.widget;
  return this$static;
}

function getClass_42(){
  return Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit;
}

function hasNext_0(){
  return this.hasElement;
}

function next_1(){
  if (!this.hasElement || !this.this$0.widget) {
    throw new NoSuchElementException();
  }
  this.hasElement = false;
  return this.this$0.widget;
}

function SimplePanel$1(){
}

_ = SimplePanel$1.prototype = new Object_0();
_.getClass$ = getClass_42;
_.hasNext = hasNext_0;
_.next_0 = next_1;
_.typeId$ = 0;
_.this$0 = null;
function $TextBoxBase(this$static, elem){
  this$static.element = elem;
  this$static.element.tabIndex = 0;
  return this$static;
}

function $setText_1(this$static, text){
  this$static.element['value'] = text != null?text:'';
}

function getClass_45(){
  return Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit;
}

function onBrowserEvent(event_0){
  var type;
  type = $eventGetTypeInt(($clinit_10() , event_0).type);
  if ((type & 896) != 0) {
    $onBrowserEvent(this, event_0);
  }
   else {
    $onBrowserEvent(this, event_0);
  }
}

function TextBoxBase(){
}

_ = TextBoxBase.prototype = new FocusWidget();
_.getClass$ = getClass_45;
_.onBrowserEvent = onBrowserEvent;
_.typeId$ = 31;
function $TextArea(this$static){
  $TextBoxBase(this$static, ($clinit_10() , $doc).createElement('textarea'));
  this$static.element['className'] = 'gwt-TextArea';
  return this$static;
}

function getClass_44(){
  return Lcom_google_gwt_user_client_ui_TextArea_2_classLit;
}

function TextArea(){
}

_ = TextArea.prototype = new TextBoxBase();
_.getClass$ = getClass_44;
_.typeId$ = 32;
function $VerticalPanel(this$static){
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_100() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_105() , ALIGN_TOP);
  this$static.table['cellSpacing'] = '0';
  this$static.table['cellPadding'] = '0';
  return this$static;
}

function $add_2(this$static, w){
  var td_0, tr, td;
  tr = ($clinit_10() , $doc).createElement('tr');
  td_0 = (td = $doc.createElement('td') , (td['align'] = this$static.horzAlign.textAlignString , undefined) , (td.style['verticalAlign'] = this$static.vertAlign.verticalAlignString , undefined) , td);
  tr.appendChild(td_0);
  this$static.body_0.appendChild(tr);
  $removeFromParent(w);
  $add_3(this$static.children, w);
  td_0.appendChild(w.element);
  $setParent(w, this$static);
}

function getClass_47(){
  return Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit;
}

function remove_3(w){
  var removed, td;
  td = ($clinit_10() , w.element).parentElement;
  removed = $remove_0(this, w);
  if (removed) {
    this.body_0.removeChild(td.parentElement);
  }
  return removed;
}

function VerticalPanel(){
}

_ = VerticalPanel.prototype = new CellPanel();
_.getClass$ = getClass_47;
_.remove = remove_3;
_.typeId$ = 33;
function $WidgetCollection(this$static){
  this$static.array = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 0, 8, 4, 0);
  return this$static;
}

function $add_3(this$static, w){
  $insert(this$static, w, this$static.size);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size) {
    throw new IndexOutOfBoundsException();
  }
  if (this$static.size == this$static.array.length) {
    newArray = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 0, 8, this$static.array.length * 2, 0);
    for (i = 0; i < this$static.array.length; ++i) {
      setCheck(newArray, i, this$static.array[i]);
    }
    this$static.array = newArray;
  }
  ++this$static.size;
  for (i = this$static.size - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_2(this$static, index){
  var i;
  if (index < 0 || index >= this$static.size) {
    throw new IndexOutOfBoundsException();
  }
  --this$static.size;
  for (i = index; i < this$static.size; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size, null);
}

function $remove_3(this$static, w){
  var index;
  index = $indexOf(this$static, w);
  if (index == -1) {
    throw new NoSuchElementException();
  }
  $remove_2(this$static, index);
}

function getClass_49(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit;
}

function WidgetCollection(){
}

_ = WidgetCollection.prototype = new Object_0();
_.getClass$ = getClass_49;
_.typeId$ = 0;
_.array = null;
_.size = 0;
function $WidgetCollection$WidgetIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_48(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit;
}

function hasNext_1(){
  return this.index_0 < this.this$0.size - 1;
}

function next_2(){
  if (this.index_0 >= this.this$0.size) {
    throw new NoSuchElementException();
  }
  return this.this$0.array[++this.index_0];
}

function WidgetCollection$WidgetIterator(){
}

_ = WidgetCollection$WidgetIterator.prototype = new Object_0();
_.getClass$ = getClass_48;
_.hasNext = hasNext_1;
_.next_0 = next_2;
_.typeId$ = 0;
_.index_0 = -1;
_.this$0 = null;
function getClass_54(){
  return Ljava_io_InputStream_2_classLit;
}

function InputStream(){
}

_ = InputStream.prototype = new Object_0();
_.getClass$ = getClass_54;
_.typeId$ = 0;
function $ByteArrayInputStream(this$static, buf){
  $ByteArrayInputStream_0(this$static, buf, 0, buf.length);
  return this$static;
}

function $ByteArrayInputStream_0(this$static, buf, off, len){
  this$static.buf = buf;
  this$static.pos = off;
  this$static.count = off + len;
  if (this$static.count > buf.length)
    this$static.count = buf.length;
  return this$static;
}

function $read(this$static){
  if (this$static.pos >= this$static.count)
    return -1;
  return this$static.buf[this$static.pos++] & 255;
}

function $read_0(this$static, buf, off, len){
  if (this$static.pos >= this$static.count)
    return -1;
  len = min(len, this$static.count - this$static.pos);
  arraycopy(this$static.buf, this$static.pos, buf, off, len);
  this$static.pos += len;
  return len;
}

function getClass_51(){
  return Ljava_io_ByteArrayInputStream_2_classLit;
}

function ByteArrayInputStream(){
}

_ = ByteArrayInputStream.prototype = new InputStream();
_.getClass$ = getClass_51;
_.typeId$ = 0;
_.buf = null;
_.count = 0;
_.pos = 0;
function getClass_55(){
  return Ljava_io_OutputStream_2_classLit;
}

function OutputStream(){
}

_ = OutputStream.prototype = new Object_0();
_.getClass$ = getClass_55;
_.typeId$ = 0;
function $ByteArrayOutputStream(this$static){
  this$static.buf = initDim(_3B_classLit, 0, -1, 32, 1);
  return this$static;
}

function $ensureCapacity(this$static, len){
  var newbuf;
  if (len <= this$static.buf.length)
    return;
  len = max(len, this$static.buf.length * 2);
  newbuf = initDim(_3B_classLit, 0, -1, len, 1);
  arraycopy(this$static.buf, 0, newbuf, 0, this$static.buf.length);
  this$static.buf = newbuf;
}

function $toByteArray(this$static){
  var data;
  data = initDim(_3B_classLit, 0, -1, this$static.count, 1);
  arraycopy(this$static.buf, 0, data, 0, this$static.count);
  return data;
}

function $write(this$static, b){
  $ensureCapacity(this$static, this$static.count + 1);
  this$static.buf[this$static.count++] = b << 24 >> 24;
}

function $write_0(this$static, buf, off, len){
  $ensureCapacity(this$static, this$static.count + len);
  arraycopy(buf, off, this$static.buf, this$static.count, len);
  this$static.count += len;
}

function getClass_52(){
  return Ljava_io_ByteArrayOutputStream_2_classLit;
}

function ByteArrayOutputStream(){
}

_ = ByteArrayOutputStream.prototype = new OutputStream();
_.getClass$ = getClass_52;
_.typeId$ = 0;
_.buf = null;
_.count = 0;
function $IOException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_53(){
  return Ljava_io_IOException_2_classLit;
}

function IOException(){
}

_ = IOException.prototype = new Exception();
_.getClass$ = getClass_53;
_.typeId$ = 34;
function $ArithmeticException(this$static, explanation){
  this$static.detailMessage = explanation;
  return this$static;
}

function getClass_56(){
  return Ljava_lang_ArithmeticException_2_classLit;
}

function ArithmeticException(){
}

_ = ArithmeticException.prototype = new RuntimeException();
_.getClass$ = getClass_56;
_.typeId$ = 35;
function $ArrayStoreException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_57(){
  return Ljava_lang_ArrayStoreException_2_classLit;
}

function ArrayStoreException(){
}

_ = ArrayStoreException.prototype = new RuntimeException();
_.getClass$ = getClass_57;
_.typeId$ = 36;
function digit_0(c, radix){
  if (radix < 2 || radix > 36) {
    return -1;
  }
  if (c >= 48 && c < 48 + (radix < 10?radix:10)) {
    return c - 48;
  }
  if (c >= 97 && c < radix + 97 - 10) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < radix + 65 - 10) {
    return c - 65 + 10;
  }
  return -1;
}

function forDigit(digit, radix){
  if (radix < 2 || radix > 36) {
    return 0;
  }
  if (digit < 0 || digit >= radix) {
    return 0;
  }
  if (digit < 10) {
    return 48 + digit & 65535;
  }
   else {
    return 97 + digit - 10 & 65535;
  }
}

function createForArray(packageName, className){
  var clazz;
  clazz = new Class();
  clazz.typeName = packageName + className;
  clazz.modifiers = 4;
  return clazz;
}

function createForClass(packageName, className){
  var clazz;
  clazz = new Class();
  clazz.typeName = packageName + className;
  return clazz;
}

function createForEnum(packageName, className){
  var clazz;
  clazz = new Class();
  clazz.typeName = packageName + className;
  clazz.modifiers = 8;
  return clazz;
}

function getClass_59(){
  return Ljava_lang_Class_2_classLit;
}

function toString_6(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + this.typeName;
}

function Class(){
}

_ = Class.prototype = new Object_0();
_.getClass$ = getClass_59;
_.toString$ = toString_6;
_.typeId$ = 0;
_.modifiers = 0;
_.typeName = null;
function getClass_58(){
  return Ljava_lang_ClassCastException_2_classLit;
}

function ClassCastException(){
}

_ = ClassCastException.prototype = new RuntimeException();
_.getClass$ = getClass_58;
_.typeId$ = 39;
function equals_0(other){
  return this === (other == null?null:other);
}

function getClass_60(){
  return Ljava_lang_Enum_2_classLit;
}

function hashCode_2(){
  return this.$H || (this.$H = ++sNextHashId);
}

function toString_7(){
  return this.name_0;
}

function Enum(){
}

_ = Enum.prototype = new Object_0();
_.equals$ = equals_0;
_.getClass$ = getClass_60;
_.hashCode$ = hashCode_2;
_.toString$ = toString_7;
_.typeId$ = 0;
_.name_0 = null;
function $IllegalArgumentException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_62(){
  return Ljava_lang_IllegalArgumentException_2_classLit;
}

function IllegalArgumentException(){
}

_ = IllegalArgumentException.prototype = new RuntimeException();
_.getClass$ = getClass_62;
_.typeId$ = 40;
function $IllegalStateException(this$static, s){
  this$static.detailMessage = s;
  return this$static;
}

function getClass_63(){
  return Ljava_lang_IllegalStateException_2_classLit;
}

function IllegalStateException(){
}

_ = IllegalStateException.prototype = new RuntimeException();
_.getClass$ = getClass_63;
_.typeId$ = 41;
function $IndexOutOfBoundsException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_64(){
  return Ljava_lang_IndexOutOfBoundsException_2_classLit;
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException.prototype = new RuntimeException();
_.getClass$ = getClass_64;
_.typeId$ = 42;
function toPowerOfTwoString(value, shift){
  var bitMask, buf, bufSize, digits, pos;
  bufSize = ~~(32 / shift);
  bitMask = (1 << shift) - 1;
  buf = initDim(_3C_classLit, 0, -1, bufSize, 1);
  digits = ($clinit_156() , digits_0);
  pos = bufSize - 1;
  if (value >= 0) {
    while (value > bitMask) {
      buf[pos--] = digits[value & bitMask];
      value >>= shift;
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[value & bitMask];
      value >>= shift;
    }
  }
  buf[pos] = digits[value & bitMask];
  return __valueOf(buf, pos, bufSize);
}

function max(x, y){
  return x > y?x:y;
}

function min(x, y){
  return x < y?x:y;
}

function $NullPointerException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_65(){
  return Ljava_lang_NullPointerException_2_classLit;
}

function NullPointerException(){
}

_ = NullPointerException.prototype = new RuntimeException();
_.getClass$ = getClass_65;
_.typeId$ = 43;
function $clinit_156(){
  $clinit_156 = nullMethod;
  digits_0 = initValues(_3C_classLit, 0, -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
}

var digits_0;
function $equals_0(this$static, other){
  if (!(other != null && canCast(other.typeId$, 1))) {
    return false;
  }
  return String(this$static) == other;
}

function $getChars(this$static, srcBegin, srcEnd, dst, dstBegin){
  var srcIdx;
  for (srcIdx = srcBegin; srcIdx < srcEnd; ++srcIdx) {
    dst[dstBegin++] = this$static.charCodeAt(srcIdx);
  }
}

function $replaceFirst(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex), replace);
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    if (replaceStr.charCodeAt(pos + 1) == 36) {
      replaceStr = replaceStr.substr(0, pos - 0) + '$' + $substring(replaceStr, ++pos);
    }
     else {
      replaceStr = replaceStr.substr(0, pos - 0) + $substring(replaceStr, ++pos);
    }
  }
  return replaceStr;
}

function __valueOf(x, start, end){
  x = x.slice(start, end);
  return String.fromCharCode.apply(null, x);
}

function equals_2(other){
  return $equals_0(this, other);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & 65535;
    return String.fromCharCode(hiSurrogate) + String.fromCharCode(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

function getClass_70(){
  return Ljava_lang_String_2_classLit;
}

function hashCode_4(){
  return getHashCode_0(this);
}

function toString_11(){
  return this;
}

_ = String.prototype;
_.equals$ = equals_2;
_.getClass$ = getClass_70;
_.hashCode$ = hashCode_4;
_.toString$ = toString_11;
_.typeId$ = 2;
function $clinit_160(){
  $clinit_160 = nullMethod;
  back = {};
  front = {};
}

function compute(str){
  var hashCode, i, inc, n;
  n = str.length;
  inc = n < 64?1:~~(n / 32);
  hashCode = 0;
  for (i = 0; i < n; i += inc) {
    hashCode <<= 1;
    hashCode += str.charCodeAt(i);
  }
  hashCode |= 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_160();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back[key];
  if (result == null) {
    result = compute(str);
  }
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back, count_0 = 0, front;
function $StringBuffer(this$static){
  var array;
  this$static.data = (array = [] , array.explicitLength = 0 , array);
  return this$static;
}

function $append_1(this$static, x){
  $append_0(this$static.data, x);
  return this$static;
}

function getClass_68(){
  return Ljava_lang_StringBuffer_2_classLit;
}

function toString_9(){
  return $toString_0(this.data);
}

function StringBuffer(){
}

_ = StringBuffer.prototype = new Object_0();
_.getClass$ = getClass_68;
_.toString$ = toString_9;
_.typeId$ = 0;
function $StringBuilder(this$static){
  var array;
  this$static.data = (array = [] , array.explicitLength = 0 , array);
  return this$static;
}

function $StringBuilder_0(this$static){
  var array;
  this$static.data = (array = [] , array.explicitLength = 0 , array);
  return this$static;
}

function $append_2(this$static, x){
  $appendNonNull(this$static.data, String.fromCharCode(x));
  return this$static;
}

function getClass_69(){
  return Ljava_lang_StringBuilder_2_classLit;
}

function toString_10(){
  return $toString_0(this.data);
}

function StringBuilder(){
}

_ = StringBuilder.prototype = new Object_0();
_.getClass$ = getClass_69;
_.toString$ = toString_10;
_.typeId$ = 0;
function arraycopy(src, srcOfs, dest, destOfs, len){
  var destArray, destEnd, destTypeName, destlen, srcArray, srcTypeName, srclen;
  if (src == null || dest == null) {
    throw new NullPointerException();
  }
  srcTypeName = (src.typeMarker$ == nullMethod || src.typeId$ == 2?src.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
  destTypeName = (dest.typeMarker$ == nullMethod || dest.typeId$ == 2?dest.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
  if (srcTypeName.charCodeAt(0) != 91 || destTypeName.charCodeAt(0) != 91) {
    throw $ArrayStoreException(new ArrayStoreException(), 'Must be array types');
  }
  if (srcTypeName.charCodeAt(1) != destTypeName.charCodeAt(1)) {
    throw $ArrayStoreException(new ArrayStoreException(), 'Array types must match');
  }
  srclen = src.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new IndexOutOfBoundsException();
  }
  if ((srcTypeName.charCodeAt(1) == 76 || srcTypeName.charCodeAt(1) == 91) && !$equals_0(srcTypeName, destTypeName)) {
    srcArray = dynamicCast(src, 20);
    destArray = dynamicCast(dest, 20);
    if ((src == null?null:src) === (dest == null?null:dest) && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        setCheck(destArray, destEnd, srcArray[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        setCheck(destArray, destOfs++, srcArray[srcOfs++]);
      }
    }
  }
   else {
    Array.prototype.splice.apply(dest, [destOfs, len].concat(src.slice(srcOfs, srcOfs + len)));
  }
}

function $UnsupportedOperationException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_72(){
  return Ljava_lang_UnsupportedOperationException_2_classLit;
}

function UnsupportedOperationException(){
}

_ = UnsupportedOperationException.prototype = new RuntimeException();
_.getClass$ = getClass_72;
_.typeId$ = 44;
function $advanceToFind(iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next_0();
    if (o == null?t == null:equals__devirtual$(o, t)) {
      return iter;
    }
  }
  return null;
}

function $toString_2(this$static){
  var comma, iter, sb;
  sb = $StringBuffer(new StringBuffer());
  comma = null;
  $append_0(sb.data, '[');
  iter = this$static.iterator_0();
  while (iter.hasNext()) {
    if (comma != null) {
      $append_0(sb.data, comma);
    }
     else {
      comma = ', ';
    }
    $append_1(sb, '' + iter.next_0());
  }
  $append_0(sb.data, ']');
  return $toString_0(sb.data);
}

function add_0(o){
  throw $UnsupportedOperationException(new UnsupportedOperationException(), 'Add not supported on this collection');
}

function contains(o){
  var iter;
  iter = $advanceToFind(this.iterator_0(), o);
  return !!iter;
}

function getClass_73(){
  return Ljava_util_AbstractCollection_2_classLit;
}

function toString_13(){
  return $toString_2(this);
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0();
_.add_0 = add_0;
_.contains_0 = contains;
_.getClass$ = getClass_73;
_.toString$ = toString_13;
_.typeId$ = 0;
function $keySet(this$static){
  var entrySet;
  entrySet = $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), this$static);
  return $AbstractMap$1(new AbstractMap$1(), this$static, entrySet);
}

function equals_5(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if ((obj == null?null:obj) === this) {
    return true;
  }
  if (!(obj != null && canCast(obj.typeId$, 22))) {
    return false;
  }
  otherMap = dynamicCast(obj, 22);
  if (dynamicCast(this, 22).size != otherMap.size) {
    return false;
  }
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), otherMap).this$0); $hasNext_0(entry$iterator.iter);) {
    entry = dynamicCast($next_0(entry$iterator.iter), 21);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(otherKey == null?dynamicCast(this, 22).nullSlotLive:otherKey != null && canCast(otherKey.typeId$, 1)?$hasStringValue(dynamicCast(this, 22), dynamicCast(otherKey, 1)):$hasHashValue(dynamicCast(this, 22), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
    if (!equalsWithNullCheck(otherValue, otherKey == null?dynamicCast(this, 22).nullSlot:otherKey != null && canCast(otherKey.typeId$, 1)?dynamicCast(this, 22).stringMap[':' + dynamicCast(otherKey, 1)]:$getHashValue(dynamicCast(this, 22), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
  }
  return true;
}

function getClass_84(){
  return Ljava_util_AbstractMap_2_classLit;
}

function hashCode_7(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), dynamicCast(this, 22)).this$0); $hasNext_0(entry$iterator.iter);) {
    entry = dynamicCast($next_0(entry$iterator.iter), 21);
    hashCode += entry.hashCode$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function toString_15(){
  var comma, entry, iter, s;
  s = '{';
  comma = false;
  for (iter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), dynamicCast(this, 22)).this$0); $hasNext_0(iter.iter);) {
    entry = dynamicCast($next_0(iter.iter), 21);
    if (comma) {
      s += ', ';
    }
     else {
      comma = true;
    }
    s += '' + entry.getKey();
    s += '=';
    s += '' + entry.getValue();
  }
  return s + '}';
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0();
_.equals$ = equals_5;
_.getClass$ = getClass_84;
_.hashCode$ = hashCode_7;
_.toString$ = toString_15;
_.typeId$ = 0;
function $addAllHashEntries(this$static, dest){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add_0(array[i]);
      }
    }
  }
}

function $addAllStringEntries(this$static, dest){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = new_$(this$static, key.substring(1));
      dest.add_0(entry);
    }
  }
}

function $clearImpl(this$static){
  this$static.hashCodeMap = [];
  this$static.stringMap = {};
  this$static.nullSlotLive = false;
  this$static.nullSlot = null;
  this$static.size = 0;
}

function $containsKey(this$static, key){
  return key == null?this$static.nullSlotLive:key != null && canCast(key.typeId$, 1)?$hasStringValue(this$static, dynamicCast(key, 1)):$hasHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $get(this$static, key){
  return key == null?this$static.nullSlot:key != null && canCast(key.typeId$, 1)?this$static.stringMap[':' + dynamicCast(key, 1)]:$getHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $getHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
  return null;
}

function $hasHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function $hasStringValue(this$static, key){
  return ':' + key in this$static.stringMap;
}

function $put(this$static, key, value){
  return key == null?$putNullSlot(this$static, value):key != null && canCast(key.typeId$, 1)?$putStringValue(this$static, dynamicCast(key, 1), value):$putHashValue(this$static, key, value, ~~hashCode__devirtual$(key));
}

function $putHashValue(this$static, key, value, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.hashCodeMap[hashCode] = [];
  }
  var entry = $MapEntryImpl(new MapEntryImpl(), key, value);
  array.push(entry);
  ++this$static.size;
  return null;
}

function $putNullSlot(this$static, value){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = value;
  if (!this$static.nullSlotLive) {
    this$static.nullSlotLive = true;
    ++this$static.size;
  }
  return result;
}

function $putStringValue(this$static, key, value){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
  }
   else {
    ++this$static.size;
  }
  stringMap[key] = value;
  return result;
}

function $remove_4(this$static, key){
  return !key?$removeNullSlot(this$static):$removeHashValue(this$static, key, ~~(key.$H || (key.$H = ++sNextHashId)));
}

function $removeHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        if (array.length == 1) {
          delete this$static.hashCodeMap[hashCode];
        }
         else {
          array.splice(i, 1);
        }
        --this$static.size;
        return entry.getValue();
      }
    }
  }
  return null;
}

function $removeNullSlot(this$static){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = null;
  if (this$static.nullSlotLive) {
    this$static.nullSlotLive = false;
    --this$static.size;
  }
  return result;
}

function equalsBridge(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function getClass_78(){
  return Ljava_util_AbstractHashMap_2_classLit;
}

function AbstractHashMap(){
}

_ = AbstractHashMap.prototype = new AbstractMap();
_.equalsBridge = equalsBridge;
_.getClass$ = getClass_78;
_.typeId$ = 0;
_.hashCodeMap = null;
_.nullSlot = null;
_.nullSlotLive = false;
_.size = 0;
_.stringMap = null;
function equals_6(o){
  var iter, other, otherItem;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 23))) {
    return false;
  }
  other = dynamicCast(o, 23);
  if (other.size_0() != this.size_0()) {
    return false;
  }
  for (iter = other.iterator_0(); iter.hasNext();) {
    otherItem = iter.next_0();
    if (!this.contains_0(otherItem)) {
      return false;
    }
  }
  return true;
}

function getClass_85(){
  return Ljava_util_AbstractSet_2_classLit;
}

function hashCode_8(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator_0(); iter.hasNext();) {
    next = iter.next_0();
    if (next != null) {
      hashCode += hashCode__devirtual$(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}

function AbstractSet(){
}

_ = AbstractSet.prototype = new AbstractCollection();
_.equals$ = equals_6;
_.getClass$ = getClass_85;
_.hashCode$ = hashCode_8;
_.typeId$ = 45;
function $AbstractHashMap$EntrySet(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $contains(this$static, o){
  var entry, key, value;
  if (o != null && canCast(o.typeId$, 21)) {
    entry = dynamicCast(o, 21);
    key = entry.getKey();
    if ($containsKey(this$static.this$0, key)) {
      value = $get(this$static.this$0, key);
      return $equals_1(entry.getValue(), value);
    }
  }
  return false;
}

function contains_0(o){
  return $contains(this, o);
}

function getClass_75(){
  return Ljava_util_AbstractHashMap$EntrySet_2_classLit;
}

function iterator_1(){
  return $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), this.this$0);
}

function size_0(){
  return this.this$0.size;
}

function AbstractHashMap$EntrySet(){
}

_ = AbstractHashMap$EntrySet.prototype = new AbstractSet();
_.contains_0 = contains_0;
_.getClass$ = getClass_75;
_.iterator_0 = iterator_1;
_.size_0 = size_0;
_.typeId$ = 46;
_.this$0 = null;
function $AbstractHashMap$EntrySetIterator(this$static, this$0){
  var list;
  this$static.this$0 = this$0;
  list = $ArrayList(new ArrayList());
  if (this$static.this$0.nullSlotLive) {
    $add_5(list, $AbstractHashMap$MapEntryNull(new AbstractHashMap$MapEntryNull(), this$static.this$0));
  }
  $addAllStringEntries(this$static.this$0, list);
  $addAllHashEntries(this$static.this$0, list);
  this$static.iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), list);
  return this$static;
}

function getClass_74(){
  return Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit;
}

function hasNext_2(){
  return $hasNext_0(this.iter);
}

function next_3(){
  return dynamicCast($next_0(this.iter), 21);
}

function AbstractHashMap$EntrySetIterator(){
}

_ = AbstractHashMap$EntrySetIterator.prototype = new Object_0();
_.getClass$ = getClass_74;
_.hasNext = hasNext_2;
_.next_0 = next_3;
_.typeId$ = 0;
_.iter = null;
_.this$0 = null;
function equals_4(other){
  var entry;
  if (other != null && canCast(other.typeId$, 21)) {
    entry = dynamicCast(other, 21);
    if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
      return true;
    }
  }
  return false;
}

function getClass_83(){
  return Ljava_util_AbstractMapEntry_2_classLit;
}

function hashCode_6(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  if (this.getKey() != null) {
    keyHash = hashCode__devirtual$(this.getKey());
  }
  if (this.getValue() != null) {
    valueHash = hashCode__devirtual$(this.getValue());
  }
  return keyHash ^ valueHash;
}

function toString_14(){
  return this.getKey() + '=' + this.getValue();
}

function AbstractMapEntry(){
}

_ = AbstractMapEntry.prototype = new Object_0();
_.equals$ = equals_4;
_.getClass$ = getClass_83;
_.hashCode$ = hashCode_6;
_.toString$ = toString_14;
_.typeId$ = 47;
function $AbstractHashMap$MapEntryNull(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_76(){
  return Ljava_util_AbstractHashMap$MapEntryNull_2_classLit;
}

function getKey(){
  return null;
}

function getValue(){
  return this.this$0.nullSlot;
}

function setValue(object){
  return $putNullSlot(this.this$0, object);
}

function AbstractHashMap$MapEntryNull(){
}

_ = AbstractHashMap$MapEntryNull.prototype = new AbstractMapEntry();
_.getClass$ = getClass_76;
_.getKey = getKey;
_.getValue = getValue;
_.setValue = setValue;
_.typeId$ = 48;
_.this$0 = null;
function $AbstractHashMap$MapEntryString(this$static, key, this$0){
  this$static.this$0 = this$0;
  this$static.key = key;
  return this$static;
}

function getClass_77(){
  return Ljava_util_AbstractHashMap$MapEntryString_2_classLit;
}

function getKey_0(){
  return this.key;
}

function getValue_0(){
  return this.this$0.stringMap[':' + this.key];
}

function new_$(this$outer, key){
  return $AbstractHashMap$MapEntryString(new AbstractHashMap$MapEntryString(), key, this$outer);
}

function setValue_0(object){
  return $putStringValue(this.this$0, this.key, object);
}

function AbstractHashMap$MapEntryString(){
}

_ = AbstractHashMap$MapEntryString.prototype = new AbstractMapEntry();
_.getClass$ = getClass_77;
_.getKey = getKey_0;
_.getValue = getValue_0;
_.setValue = setValue_0;
_.typeId$ = 49;
_.key = null;
_.this$0 = null;
function add_1(obj){
  $add_4(this, this.size_0(), obj);
  return true;
}

function checkIndex(index, size){
  if (index < 0 || index >= size) {
    indexOutOfBounds(index, size);
  }
}

function equals_3(o){
  var elem, elemOther, iter, iterOther, other;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 4))) {
    return false;
  }
  other = dynamicCast(o, 4);
  if (this.size_0() != other.size) {
    return false;
  }
  iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), dynamicCast(this, 4));
  iterOther = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), other);
  while (iter.i < iter.this$0.size) {
    elem = $next_0(iter);
    elemOther = $next_0(iterOther);
    if (!(elem == null?elemOther == null:equals__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function getClass_80(){
  return Ljava_util_AbstractList_2_classLit;
}

function hashCode_5(){
  var iter, k, obj;
  k = 1;
  iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), dynamicCast(this, 4));
  while (iter.i < iter.this$0.size) {
    obj = $next_0(iter);
    k = 31 * k + (obj == null?0:hashCode__devirtual$(obj));
    k = ~~k;
  }
  return k;
}

function indexOutOfBounds(index, size){
  throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Index: ' + index + ', Size: ' + size);
}

function iterator_2(){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), dynamicCast(this, 4));
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection();
_.add_0 = add_1;
_.equals$ = equals_3;
_.getClass$ = getClass_80;
_.hashCode$ = hashCode_5;
_.iterator_0 = iterator_2;
_.typeId$ = 0;
function $AbstractList$IteratorImpl(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $hasNext_0(this$static){
  return this$static.i < this$static.this$0.size;
}

function $next_0(this$static){
  if (this$static.i >= this$static.this$0.size) {
    throw new NoSuchElementException();
  }
  return $get_0(this$static.this$0, this$static.i++);
}

function getClass_79(){
  return Ljava_util_AbstractList$IteratorImpl_2_classLit;
}

function hasNext_3(){
  return this.i < this.this$0.size;
}

function next_4(){
  return $next_0(this);
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl.prototype = new Object_0();
_.getClass$ = getClass_79;
_.hasNext = hasNext_3;
_.next_0 = next_4;
_.typeId$ = 0;
_.i = 0;
_.this$0 = null;
function $AbstractMap$1(this$static, this$0, val$entrySet){
  this$static.this$0 = this$0;
  this$static.val$entrySet = val$entrySet;
  return this$static;
}

function contains_1(key){
  return $containsKey(this.this$0, key);
}

function getClass_82(){
  return Ljava_util_AbstractMap$1_2_classLit;
}

function iterator_3(){
  var outerIter;
  return outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), this.val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1(), outerIter);
}

function size_1(){
  return this.val$entrySet.this$0.size;
}

function AbstractMap$1(){
}

_ = AbstractMap$1.prototype = new AbstractSet();
_.contains_0 = contains_1;
_.getClass$ = getClass_82;
_.iterator_0 = iterator_3;
_.size_0 = size_1;
_.typeId$ = 50;
_.this$0 = null;
_.val$entrySet = null;
function $AbstractMap$1$1(this$static, val$outerIter){
  this$static.val$outerIter = val$outerIter;
  return this$static;
}

function getClass_81(){
  return Ljava_util_AbstractMap$1$1_2_classLit;
}

function hasNext_4(){
  return $hasNext_0(this.val$outerIter.iter);
}

function next_5(){
  var entry;
  return entry = dynamicCast($next_0(this.val$outerIter.iter), 21) , entry.getKey();
}

function AbstractMap$1$1(){
}

_ = AbstractMap$1$1.prototype = new Object_0();
_.getClass$ = getClass_81;
_.hasNext = hasNext_4;
_.next_0 = next_5;
_.typeId$ = 0;
_.val$outerIter = null;
function $ArrayList(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 0, 0, 0, 0);
  this$static.size = 0;
  return this$static;
}

function $add_5(this$static, o){
  setCheck(this$static.array, this$static.size++, o);
  return true;
}

function $add_4(this$static, index, o){
  if (index < 0 || index > this$static.size) {
    indexOutOfBounds(index, this$static.size);
  }
  this$static.array.splice(index, 0, o);
  ++this$static.size;
}

function $get_0(this$static, index){
  checkIndex(index, this$static.size);
  return this$static.array[index];
}

function $indexOf_2(this$static, o, index){
  for (; index < this$static.size; ++index) {
    if (equalsWithNullCheck(o, this$static.array[index])) {
      return index;
    }
  }
  return -1;
}

function $remove_5(this$static, index){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  this$static.array.splice(index, 1);
  --this$static.size;
  return previous;
}

function $remove_6(this$static, o){
  var i;
  i = $indexOf_2(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  $remove_5(this$static, i);
  return true;
}

function add_2(o){
  return setCheck(this.array, this.size++, o) , true;
}

function contains_2(o){
  return $indexOf_2(this, o, 0) != -1;
}

function getClass_86(){
  return Ljava_util_ArrayList_2_classLit;
}

function size_2(){
  return this.size;
}

function ArrayList(){
}

_ = ArrayList.prototype = new AbstractList();
_.add_0 = add_2;
_.contains_0 = contains_2;
_.getClass$ = getClass_86;
_.size_0 = size_2;
_.typeId$ = 51;
_.array = null;
_.size = 0;
function $HashMap(this$static){
  $clearImpl(this$static);
  return this$static;
}

function $equals_1(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function getClass_87(){
  return Ljava_util_HashMap_2_classLit;
}

function HashMap(){
}

_ = HashMap.prototype = new AbstractHashMap();
_.getClass$ = getClass_87;
_.typeId$ = 52;
function $HashSet(this$static){
  this$static.map = $HashMap(new HashMap());
  return this$static;
}

function $add_6(this$static, o){
  var old;
  old = $put(this$static.map, o, this$static);
  return old == null;
}

function add_3(o){
  var old;
  return old = $put(this.map, o, this) , old == null;
}

function contains_3(o){
  return $containsKey(this.map, o);
}

function getClass_88(){
  return Ljava_util_HashSet_2_classLit;
}

function iterator_4(){
  var outerIter;
  return outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $keySet(this.map).val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1(), outerIter);
}

function size_3(){
  return this.map.size;
}

function toString_16(){
  return $toString_2($keySet(this.map));
}

function HashSet(){
}

_ = HashSet.prototype = new AbstractSet();
_.add_0 = add_3;
_.contains_0 = contains_3;
_.getClass$ = getClass_88;
_.iterator_0 = iterator_4;
_.size_0 = size_3;
_.toString$ = toString_16;
_.typeId$ = 53;
_.map = null;
function $MapEntryImpl(this$static, key, value){
  this$static.key = key;
  this$static.value_0 = value;
  return this$static;
}

function getClass_89(){
  return Ljava_util_MapEntryImpl_2_classLit;
}

function getKey_1(){
  return this.key;
}

function getValue_1(){
  return this.value_0;
}

function setValue_1(value){
  var old;
  old = this.value_0;
  this.value_0 = value;
  return old;
}

function MapEntryImpl(){
}

_ = MapEntryImpl.prototype = new AbstractMapEntry();
_.getClass$ = getClass_89;
_.getKey = getKey_1;
_.getValue = getValue_1;
_.setValue = setValue_1;
_.typeId$ = 54;
_.key = null;
_.value_0 = null;
function getClass_90(){
  return Ljava_util_NoSuchElementException_2_classLit;
}

function NoSuchElementException(){
}

_ = NoSuchElementException.prototype = new RuntimeException();
_.getClass$ = getClass_90;
_.typeId$ = 55;
function equalsWithNullCheck(a, b){
  return (a == null?null:a) === (b == null?null:b) || a != null && equals__devirtual$(a, b);
}

function $clinit_193(){
  $clinit_193 = nullMethod;
  MODE_1 = $CompressionMode(new CompressionMode(), 'MODE_1', 1, 16, 64, 0, 3, 0, 2);
  MODE_2 = $CompressionMode(new CompressionMode(), 'MODE_2', 2, 20, 64, 0, 3, 0, 2);
  MODE_3 = $CompressionMode(new CompressionMode(), 'MODE_3', 3, 19, 64, 1, 3, 0, 2);
  MODE_4 = $CompressionMode(new CompressionMode(), 'MODE_4', 4, 20, 64, 1, 3, 0, 2);
  MODE_5 = $CompressionMode(new CompressionMode(), 'MODE_5', 5, 21, 128, 1, 3, 0, 2);
  MODE_6 = $CompressionMode(new CompressionMode(), 'MODE_6', 6, 22, 128, 1, 3, 0, 2);
  MODE_7 = $CompressionMode(new CompressionMode(), 'MODE_7', 7, 23, 128, 1, 3, 0, 2);
  MODE_8 = $CompressionMode(new CompressionMode(), 'MODE_8', 8, 24, 255, 1, 3, 0, 2);
  MODE_9 = $CompressionMode(new CompressionMode(), 'MODE_9', 9, 25, 255, 1, 3, 0, 2);
}

function $CompressionMode(this$static, enum$name, level, dictionarySize, fb, matchFinder, lc, lp, pb){
  $clinit_193();
  this$static.name_0 = enum$name;
  this$static.level = level;
  this$static.dictionarySize = dictionarySize;
  this$static.fb = fb;
  this$static.matchFinder = matchFinder;
  this$static.lc = lc;
  this$static.lp = lp;
  this$static.pb = pb;
  return this$static;
}

function $configure(this$static, encoder){
  if (!$SetDictionarySize_0(encoder, 1 << this$static.dictionarySize))
    throw $RuntimeException(new RuntimeException(), 'unexpected failure');
  if (!$SetNumFastBytes(encoder, this$static.fb))
    throw $RuntimeException(new RuntimeException(), 'unexpected failure');
  if (!$SetMatchFinder(encoder, this$static.matchFinder))
    throw $RuntimeException(new RuntimeException(), 'unexpected failure');
  if (!$SetLcLpPb_0(encoder, this$static.lc, this$static.lp, this$static.pb))
    throw $RuntimeException(new RuntimeException(), 'unexpected failure');
}

function get_1(level){
  $clinit_193();
  switch (level) {
    case 1:
      return MODE_1;
    case 2:
      return MODE_2;
    case 3:
      return MODE_3;
    case 4:
      return MODE_4;
    case 5:
      return MODE_5;
    case 6:
      return MODE_6;
    case 7:
      return MODE_7;
    case 8:
      return MODE_8;
    case 9:
      return MODE_9;
    default:throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid level ' + level);
  }
}

function getClass_91(){
  return Lorg_dellroad_lzma_client_CompressionMode_2_classLit;
}

function CompressionMode(){
}

_ = CompressionMode.prototype = new Enum();
_.getClass$ = getClass_91;
_.typeId$ = 0;
_.dictionarySize = 0;
_.fb = 0;
_.lc = 0;
_.level = 0;
_.lp = 0;
_.matchFinder = 0;
_.pb = 0;
var MODE_1, MODE_2, MODE_3, MODE_4, MODE_5, MODE_6, MODE_7, MODE_8, MODE_9;
function $clinit_196(){
  $clinit_196 = nullMethod;
  $clinit_193();
}

function $execute(this$static){
  var $e0;
  try {
    return $processChunk(this$static.chunker);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 24)) {
      return false;
    }
     else 
      throw $e0;
  }
}

function $getProgress(this$static){
  if (eq(this$static.length_0, N1_longLit))
    return 0;
  return toDouble(this$static.chunker.inBytesProcessed) / toDouble(this$static.length_0);
}

function $init_0(this$static, input, output, length_0, mode){
  var encoder, i;
  if (!mode)
    throw $IllegalArgumentException(new IllegalArgumentException(), 'null mode');
  if (compare_0(length_0, N1_longLit) < 0)
    throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid length ' + toString_3(length_0));
  this$static.length_0 = length_0;
  encoder = $Encoder(new Encoder());
  $configure(mode, encoder);
  encoder._writeEndMark = true;
  $WriteCoderProperties(encoder, output);
  for (i = 0; i < 64; i += 8)
    $write(output, lowBits_0(shr(length_0, i)) & 255);
  this$static.chunker = (encoder._needReleaseMFStream = false , (encoder._inStream = input , encoder._finished = false , $Create_2(encoder) , encoder._rangeEncoder.Stream = output , $Init_4(encoder) , $FillDistancesPrices(encoder) , $FillAlignPrices(encoder) , encoder._lenEncoder._tableSize = encoder._numFastBytes + 1 - 2 , $UpdateTables(encoder._lenEncoder, 1 << encoder._posStateBits) , encoder._repMatchLenEncoder._tableSize = encoder._numFastBytes + 1 - 2 , $UpdateTables(encoder._repMatchLenEncoder, 1 << encoder._posStateBits) , encoder.nowPos64 = P0_longLit , undefined) , $Chunker_0(new Chunker(), encoder));
}

function execute(){
  return $execute(this);
}

function getClass_94(){
  return Lorg_dellroad_lzma_client_LZMACompressor_2_classLit;
}

function LZMACompressor(){
}

_ = LZMACompressor.prototype = new Object_0();
_.execute = execute;
_.getClass$ = getClass_94;
_.typeId$ = 56;
_.chunker = null;
_.length_0 = P0_longLit;
function $clinit_194(){
  $clinit_194 = nullMethod;
  $clinit_196();
}

function $LZMAByteArrayCompressor(this$static, data, mode){
  var $e0;
  $clinit_194();
  this$static.output = $ByteArrayOutputStream(new ByteArrayOutputStream());
  try {
    $init_0(this$static, $ByteArrayInputStream(new ByteArrayInputStream(), data), this$static.output, fromInt(data.length), mode);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 24)) {
      throw $RuntimeException(new RuntimeException(), 'impossible exception');
    }
     else 
      throw $e0;
  }
  return this$static;
}

function getClass_92(){
  return Lorg_dellroad_lzma_client_LZMAByteArrayCompressor_2_classLit;
}

function LZMAByteArrayCompressor(){
}

_ = LZMAByteArrayCompressor.prototype = new LZMACompressor();
_.getClass$ = getClass_92;
_.typeId$ = 57;
_.output = null;
function $execute_0(this$static){
  var $e0, e;
  try {
    return $processChunk(this$static.chunker);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 24)) {
      e = $e0;
      this$static.exception = e;
      return false;
    }
     else 
      throw $e0;
  }
}

function $getProgress_0(this$static){
  if (eq(this$static.length_0, N1_longLit))
    return 0;
  return toDouble(this$static.chunker.outBytesProcessed) / toDouble(this$static.length_0);
}

function $init_1(this$static, input, output){
  var decoder, expectedLength, i, properties, r;
  properties = initDim(_3B_classLit, 0, -1, 5, 1);
  for (i = 0; i < properties.length; ++i) {
    r = $read(input);
    if (r == -1)
      throw $IOException(new IOException(), 'truncated input');
    properties[i] = r << 24 >> 24;
  }
  decoder = $Decoder(new Decoder());
  if (!$SetDecoderProperties(decoder, properties))
    throw $IOException(new IOException(), 'corrupted input');
  expectedLength = N1_longLit;
  for (i = 0; i < 64; i += 8) {
    r = $read(input);
    if (r == -1)
      throw $IOException(new IOException(), 'truncated input');
    expectedLength = or(expectedLength, shl(fromInt(r), i));
  }
  this$static.length_0 = expectedLength;
  this$static.chunker = $CodeInChunks(decoder, input, output, this$static.length_0);
}

function execute_0(){
  return $execute_0(this);
}

function getClass_95(){
  return Lorg_dellroad_lzma_client_LZMADecompressor_2_classLit;
}

function LZMADecompressor(){
}

_ = LZMADecompressor.prototype = new Object_0();
_.execute = execute_0;
_.getClass$ = getClass_95;
_.typeId$ = 58;
_.chunker = null;
_.exception = null;
_.length_0 = P0_longLit;
function $LZMAByteArrayDecompressor(this$static, data){
  this$static.output = $ByteArrayOutputStream(new ByteArrayOutputStream());
  $init_1(this$static, $ByteArrayInputStream(new ByteArrayInputStream(), data), this$static.output);
  return this$static;
}

function getClass_93(){
  return Lorg_dellroad_lzma_client_LZMAByteArrayDecompressor_2_classLit;
}

function LZMAByteArrayDecompressor(){
}

_ = LZMAByteArrayDecompressor.prototype = new LZMADecompressor();
_.getClass$ = getClass_93;
_.typeId$ = 59;
_.output = null;
function $Create_4(this$static, keepSizeBefore, keepSizeAfter, keepSizeReserv){
  var blockSize;
  this$static._keepSizeBefore = keepSizeBefore;
  this$static._keepSizeAfter = keepSizeAfter;
  blockSize = keepSizeBefore + keepSizeAfter + keepSizeReserv;
  if (this$static._bufferBase == null || this$static._blockSize != blockSize) {
    this$static._bufferBase = null;
    this$static._blockSize = blockSize;
    this$static._bufferBase = initDim(_3B_classLit, 0, -1, this$static._blockSize, 1);
  }
  this$static._pointerToLastSafePosition = this$static._blockSize - keepSizeAfter;
}

function $GetIndexByte(this$static, index){
  return this$static._bufferBase[this$static._bufferOffset + this$static._pos + index];
}

function $GetMatchLen(this$static, index, distance, limit){
  var i, pby;
  if (this$static._streamEndWasReached)
    if (this$static._pos + index + limit > this$static._streamPos)
      limit = this$static._streamPos - (this$static._pos + index);
  ++distance;
  pby = this$static._bufferOffset + this$static._pos + index;
  for (i = 0; i < limit && this$static._bufferBase[pby + i] == this$static._bufferBase[pby + i - distance]; ++i)
  ;
  return i;
}

function $GetNumAvailableBytes(this$static){
  return this$static._streamPos - this$static._pos;
}

function $MoveBlock(this$static){
  var i, numBytes, offset;
  offset = this$static._bufferOffset + this$static._pos - this$static._keepSizeBefore;
  if (offset > 0)
    --offset;
  numBytes = this$static._bufferOffset + this$static._streamPos - offset;
  for (i = 0; i < numBytes; ++i)
    this$static._bufferBase[i] = this$static._bufferBase[offset + i];
  this$static._bufferOffset -= offset;
}

function $MovePos_1(this$static){
  var pointerToPostion;
  ++this$static._pos;
  if (this$static._pos > this$static._posLimit) {
    pointerToPostion = this$static._bufferOffset + this$static._pos;
    if (pointerToPostion > this$static._pointerToLastSafePosition)
      $MoveBlock(this$static);
    $ReadBlock(this$static);
  }
}

function $ReadBlock(this$static){
  var numReadBytes, pointerToPostion, size;
  if (this$static._streamEndWasReached)
    return;
  while (true) {
    size = -this$static._bufferOffset + this$static._blockSize - this$static._streamPos;
    if (size == 0)
      return;
    numReadBytes = $read_0(this$static._stream, this$static._bufferBase, this$static._bufferOffset + this$static._streamPos, size);
    if (numReadBytes == -1) {
      this$static._posLimit = this$static._streamPos;
      pointerToPostion = this$static._bufferOffset + this$static._posLimit;
      if (pointerToPostion > this$static._pointerToLastSafePosition)
        this$static._posLimit = this$static._pointerToLastSafePosition - this$static._bufferOffset;
      this$static._streamEndWasReached = true;
      return;
    }
    this$static._streamPos += numReadBytes;
    if (this$static._streamPos >= this$static._pos + this$static._keepSizeAfter)
      this$static._posLimit = this$static._streamPos - this$static._keepSizeAfter;
  }
}

function $ReduceOffsets(this$static, subValue){
  this$static._bufferOffset += subValue;
  this$static._posLimit -= subValue;
  this$static._pos -= subValue;
  this$static._streamPos -= subValue;
}

function getClass_108(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_InWindow_2_classLit;
}

function InWindow(){
}

_ = InWindow.prototype = new Object_0();
_.getClass$ = getClass_108;
_.typeId$ = 0;
_._blockSize = 0;
_._bufferBase = null;
_._bufferOffset = 0;
_._keepSizeAfter = 0;
_._keepSizeBefore = 0;
_._pointerToLastSafePosition = 0;
_._pos = 0;
_._posLimit = 0;
_._stream = null;
_._streamEndWasReached = false;
_._streamPos = 0;
function $clinit_210(){
  $clinit_210 = nullMethod;
  var i, j, r;
  CrcTable = initDim(_3I_classLit, 0, -1, 256, 1);
  for (i = 0; i < 256; ++i) {
    r = i;
    for (j = 0; j < 8; ++j)
      if ((r & 1) != 0)
        r = r >>> 1 ^ -306674912;
      else 
        r >>>= 1;
    CrcTable[i] = r;
  }
}

function $Create_3(this$static, historySize, keepAddBufferBefore, matchMaxLen, keepAddBufferAfter){
  var cyclicBufferSize, hs, windowReservSize;
  if (historySize > 1073741567)
    return false;
  this$static._cutValue = 16 + (matchMaxLen >> 1);
  windowReservSize = ~~((historySize + keepAddBufferBefore + matchMaxLen + keepAddBufferAfter) / 2) + 256;
  $Create_4(this$static, historySize + keepAddBufferBefore, matchMaxLen + keepAddBufferAfter, windowReservSize);
  this$static._matchMaxLen = matchMaxLen;
  cyclicBufferSize = historySize + 1;
  if (this$static._cyclicBufferSize != cyclicBufferSize)
    this$static._son = initDim(_3I_classLit, 0, -1, (this$static._cyclicBufferSize = cyclicBufferSize) * 2, 1);
  hs = 65536;
  if (this$static.HASH_ARRAY) {
    hs = historySize - 1;
    hs |= hs >> 1;
    hs |= hs >> 2;
    hs |= hs >> 4;
    hs |= hs >> 8;
    hs >>= 1;
    hs |= 65535;
    if (hs > 16777216)
      hs >>= 1;
    this$static._hashMask = hs;
    ++hs;
    hs += this$static.kFixHashSize;
  }
  if (hs != this$static._hashSizeSum)
    this$static._hash = initDim(_3I_classLit, 0, -1, this$static._hashSizeSum = hs, 1);
  return true;
}

function $GetMatches(this$static, distances){
  var count, cur, curMatch, curMatch2, curMatch3, cyclicPos, delta, hash2Value, hash3Value, hashValue, len, len0, len1, lenLimit, matchMinPos, maxLen, offset, pby1, ptr0, ptr1, temp;
  if (this$static._pos + this$static._matchMaxLen <= this$static._streamPos)
    lenLimit = this$static._matchMaxLen;
  else {
    lenLimit = this$static._streamPos - this$static._pos;
    if (lenLimit < this$static.kMinMatchCheck) {
      $MovePos_0(this$static);
      return 0;
    }
  }
  offset = 0;
  matchMinPos = this$static._pos > this$static._cyclicBufferSize?this$static._pos - this$static._cyclicBufferSize:0;
  cur = this$static._bufferOffset + this$static._pos;
  maxLen = 1;
  hash2Value = 0;
  hash3Value = 0;
  if (this$static.HASH_ARRAY) {
    temp = CrcTable[this$static._bufferBase[cur] & 255] ^ this$static._bufferBase[cur + 1] & 255;
    hash2Value = temp & 1023;
    temp ^= (this$static._bufferBase[cur + 2] & 255) << 8;
    hash3Value = temp & 65535;
    hashValue = (temp ^ CrcTable[this$static._bufferBase[cur + 3] & 255] << 5) & this$static._hashMask;
  }
   else 
    hashValue = this$static._bufferBase[cur] & 255 ^ (this$static._bufferBase[cur + 1] & 255) << 8;
  curMatch = this$static._hash[this$static.kFixHashSize + hashValue];
  if (this$static.HASH_ARRAY) {
    curMatch2 = this$static._hash[hash2Value];
    curMatch3 = this$static._hash[1024 + hash3Value];
    this$static._hash[hash2Value] = this$static._pos;
    this$static._hash[1024 + hash3Value] = this$static._pos;
    if (curMatch2 > matchMinPos)
      if (this$static._bufferBase[this$static._bufferOffset + curMatch2] == this$static._bufferBase[cur]) {
        distances[offset++] = maxLen = 2;
        distances[offset++] = this$static._pos - curMatch2 - 1;
      }
    if (curMatch3 > matchMinPos)
      if (this$static._bufferBase[this$static._bufferOffset + curMatch3] == this$static._bufferBase[cur]) {
        if (curMatch3 == curMatch2)
          offset -= 2;
        distances[offset++] = maxLen = 3;
        distances[offset++] = this$static._pos - curMatch3 - 1;
        curMatch2 = curMatch3;
      }
    if (offset != 0 && curMatch2 == curMatch) {
      offset -= 2;
      maxLen = 1;
    }
  }
  this$static._hash[this$static.kFixHashSize + hashValue] = this$static._pos;
  ptr0 = (this$static._cyclicBufferPos << 1) + 1;
  ptr1 = this$static._cyclicBufferPos << 1;
  len0 = len1 = this$static.kNumHashDirectBytes;
  if (this$static.kNumHashDirectBytes != 0) {
    if (curMatch > matchMinPos) {
      if (this$static._bufferBase[this$static._bufferOffset + curMatch + this$static.kNumHashDirectBytes] != this$static._bufferBase[cur + this$static.kNumHashDirectBytes]) {
        distances[offset++] = maxLen = this$static.kNumHashDirectBytes;
        distances[offset++] = this$static._pos - curMatch - 1;
      }
    }
  }
  count = this$static._cutValue;
  while (true) {
    if (curMatch <= matchMinPos || count-- == 0) {
      this$static._son[ptr0] = this$static._son[ptr1] = 0;
      break;
    }
    delta = this$static._pos - curMatch;
    cyclicPos = (delta <= this$static._cyclicBufferPos?this$static._cyclicBufferPos - delta:this$static._cyclicBufferPos - delta + this$static._cyclicBufferSize) << 1;
    pby1 = this$static._bufferOffset + curMatch;
    len = len0 < len1?len0:len1;
    if (this$static._bufferBase[pby1 + len] == this$static._bufferBase[cur + len]) {
      while (++len != lenLimit)
        if (this$static._bufferBase[pby1 + len] != this$static._bufferBase[cur + len])
          break;
      if (maxLen < len) {
        distances[offset++] = maxLen = len;
        distances[offset++] = delta - 1;
        if (len == lenLimit) {
          this$static._son[ptr1] = this$static._son[cyclicPos];
          this$static._son[ptr0] = this$static._son[cyclicPos + 1];
          break;
        }
      }
    }
    if ((this$static._bufferBase[pby1 + len] & 255) < (this$static._bufferBase[cur + len] & 255)) {
      this$static._son[ptr1] = curMatch;
      ptr1 = cyclicPos + 1;
      curMatch = this$static._son[ptr1];
      len1 = len;
    }
     else {
      this$static._son[ptr0] = curMatch;
      ptr0 = cyclicPos;
      curMatch = this$static._son[ptr0];
      len0 = len;
    }
  }
  $MovePos_0(this$static);
  return offset;
}

function $Init_5(this$static){
  var i;
  this$static._bufferOffset = 0;
  this$static._pos = 0;
  this$static._streamPos = 0;
  this$static._streamEndWasReached = false;
  $ReadBlock(this$static);
  for (i = 0; i < this$static._hashSizeSum; ++i)
    this$static._hash[i] = 0;
  this$static._cyclicBufferPos = 0;
  $ReduceOffsets(this$static, -1);
}

function $MovePos_0(this$static){
  var subValue;
  if (++this$static._cyclicBufferPos >= this$static._cyclicBufferSize)
    this$static._cyclicBufferPos = 0;
  $MovePos_1(this$static);
  if (this$static._pos == 1073741823) {
    subValue = this$static._pos - this$static._cyclicBufferSize;
    $NormalizeLinks(this$static._son, this$static._cyclicBufferSize * 2, subValue);
    $NormalizeLinks(this$static._hash, this$static._hashSizeSum, subValue);
    $ReduceOffsets(this$static, subValue);
  }
}

function $NormalizeLinks(items, numItems, subValue){
  var i, value;
  for (i = 0; i < numItems; ++i) {
    value = items[i];
    if (value <= subValue)
      value = 0;
    else 
      value -= subValue;
    items[i] = value;
  }
}

function $SetType(this$static, numHashBytes){
  this$static.HASH_ARRAY = numHashBytes > 2;
  if (this$static.HASH_ARRAY) {
    this$static.kNumHashDirectBytes = 0;
    this$static.kMinMatchCheck = 4;
    this$static.kFixHashSize = 66560;
  }
   else {
    this$static.kNumHashDirectBytes = 2;
    this$static.kMinMatchCheck = 3;
    this$static.kFixHashSize = 0;
  }
}

function $Skip(this$static, num){
  var count, cur, curMatch, cyclicPos, delta, hash2Value, hash3Value, hashValue, len, len0, len1, lenLimit, matchMinPos, pby1, ptr0, ptr1, temp;
  do {
    if (this$static._pos + this$static._matchMaxLen <= this$static._streamPos)
      lenLimit = this$static._matchMaxLen;
    else {
      lenLimit = this$static._streamPos - this$static._pos;
      if (lenLimit < this$static.kMinMatchCheck) {
        $MovePos_0(this$static);
        continue;
      }
    }
    matchMinPos = this$static._pos > this$static._cyclicBufferSize?this$static._pos - this$static._cyclicBufferSize:0;
    cur = this$static._bufferOffset + this$static._pos;
    if (this$static.HASH_ARRAY) {
      temp = CrcTable[this$static._bufferBase[cur] & 255] ^ this$static._bufferBase[cur + 1] & 255;
      hash2Value = temp & 1023;
      this$static._hash[hash2Value] = this$static._pos;
      temp ^= (this$static._bufferBase[cur + 2] & 255) << 8;
      hash3Value = temp & 65535;
      this$static._hash[1024 + hash3Value] = this$static._pos;
      hashValue = (temp ^ CrcTable[this$static._bufferBase[cur + 3] & 255] << 5) & this$static._hashMask;
    }
     else 
      hashValue = this$static._bufferBase[cur] & 255 ^ (this$static._bufferBase[cur + 1] & 255) << 8;
    curMatch = this$static._hash[this$static.kFixHashSize + hashValue];
    this$static._hash[this$static.kFixHashSize + hashValue] = this$static._pos;
    ptr0 = (this$static._cyclicBufferPos << 1) + 1;
    ptr1 = this$static._cyclicBufferPos << 1;
    len0 = len1 = this$static.kNumHashDirectBytes;
    count = this$static._cutValue;
    while (true) {
      if (curMatch <= matchMinPos || count-- == 0) {
        this$static._son[ptr0] = this$static._son[ptr1] = 0;
        break;
      }
      delta = this$static._pos - curMatch;
      cyclicPos = (delta <= this$static._cyclicBufferPos?this$static._cyclicBufferPos - delta:this$static._cyclicBufferPos - delta + this$static._cyclicBufferSize) << 1;
      pby1 = this$static._bufferOffset + curMatch;
      len = len0 < len1?len0:len1;
      if (this$static._bufferBase[pby1 + len] == this$static._bufferBase[cur + len]) {
        while (++len != lenLimit)
          if (this$static._bufferBase[pby1 + len] != this$static._bufferBase[cur + len])
            break;
        if (len == lenLimit) {
          this$static._son[ptr1] = this$static._son[cyclicPos];
          this$static._son[ptr0] = this$static._son[cyclicPos + 1];
          break;
        }
      }
      if ((this$static._bufferBase[pby1 + len] & 255) < (this$static._bufferBase[cur + len] & 255)) {
        this$static._son[ptr1] = curMatch;
        ptr1 = cyclicPos + 1;
        curMatch = this$static._son[ptr1];
        len1 = len;
      }
       else {
        this$static._son[ptr0] = curMatch;
        ptr0 = cyclicPos;
        curMatch = this$static._son[ptr0];
        len0 = len;
      }
    }
    $MovePos_0(this$static);
  }
   while (--num != 0);
}

function getClass_107(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_BinTree_2_classLit;
}

function BinTree(){
}

_ = BinTree.prototype = new InWindow();
_.getClass$ = getClass_107;
_.typeId$ = 0;
_.HASH_ARRAY = true;
_._cutValue = 255;
_._cyclicBufferPos = 0;
_._cyclicBufferSize = 0;
_._hash = null;
_._hashMask = 0;
_._hashSizeSum = 0;
_._matchMaxLen = 0;
_._son = null;
_.kFixHashSize = 66560;
_.kMinMatchCheck = 4;
_.kNumHashDirectBytes = 0;
var CrcTable;
function $CopyBlock(this$static, distance, len){
  var pos;
  pos = this$static._pos - distance - 1;
  if (pos < 0)
    pos += this$static._windowSize;
  for (; len != 0; --len) {
    if (pos >= this$static._windowSize)
      pos = 0;
    this$static._buffer[this$static._pos++] = this$static._buffer[pos++];
    if (this$static._pos >= this$static._windowSize)
      $Flush_0(this$static);
  }
}

function $Create_5(this$static, windowSize){
  if (this$static._buffer == null || this$static._windowSize != windowSize)
    this$static._buffer = initDim(_3B_classLit, 0, -1, windowSize, 1);
  this$static._windowSize = windowSize;
  this$static._pos = 0;
  this$static._streamPos = 0;
}

function $Flush_0(this$static){
  var size;
  size = this$static._pos - this$static._streamPos;
  if (size == 0)
    return;
  $write_0(this$static._stream, this$static._buffer, this$static._streamPos, size);
  if (this$static._pos >= this$static._windowSize)
    this$static._pos = 0;
  this$static._streamPos = this$static._pos;
}

function $GetByte(this$static, distance){
  var pos;
  pos = this$static._pos - distance - 1;
  if (pos < 0)
    pos += this$static._windowSize;
  return this$static._buffer[pos];
}

function $Init_7(this$static, solid){
  if (!solid) {
    this$static._streamPos = 0;
    this$static._pos = 0;
  }
}

function $PutByte(this$static, b){
  this$static._buffer[this$static._pos++] = b;
  if (this$static._pos >= this$static._windowSize)
    $Flush_0(this$static);
}

function $ReleaseStream(this$static){
  $Flush_0(this$static);
  this$static._stream = null;
}

function $SetStream_0(this$static, stream){
  $Flush_0(this$static);
  this$static._stream = null;
  this$static._stream = stream;
}

function getClass_109(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_OutWindow_2_classLit;
}

function OutWindow(){
}

_ = OutWindow.prototype = new Object_0();
_.getClass$ = getClass_109;
_.typeId$ = 0;
_._buffer = null;
_._pos = 0;
_._stream = null;
_._streamPos = 0;
_._windowSize = 0;
function GetLenToPosState(len){
  len -= 2;
  if (len < 4)
    return len;
  return 3;
}

function StateUpdateChar(index){
  if (index < 4)
    return 0;
  if (index < 10)
    return index - 3;
  return index - 6;
}

function $Chunker_0(this$static, encoder){
  this$static.encoder = encoder;
  this$static.decoder = null;
  this$static.alive = true;
  return this$static;
}

function $Chunker(this$static, decoder){
  this$static.decoder = decoder;
  this$static.encoder = null;
  this$static.alive = true;
  return this$static;
}

function $processChunk(this$static){
  var exception;
  if (!this$static.alive)
    throw new IllegalStateException();
  exception = true;
  try {
    if (this$static.encoder)
      $processEncoderChunk(this$static);
    else 
      $processDecoderChunk(this$static);
    exception = false;
    return this$static.alive;
  }
   finally {
    if (exception)
      this$static.alive = false;
  }
}

function $processDecoderChunk(this$static){
  var result;
  result = $CodeOneChunk(this$static.decoder);
  if (result == -1)
    throw $IOException(new IOException(), 'corrupted input');
  this$static.inBytesProcessed = N1_longLit;
  this$static.outBytesProcessed = this$static.decoder.nowPos64;
  if (result == 1 || compare_0(this$static.decoder.outSize, P0_longLit) >= 0 && compare_0(this$static.decoder.nowPos64, this$static.decoder.outSize) >= 0) {
    $CodeFinish(this$static.decoder);
    this$static.alive = false;
  }
}

function $processEncoderChunk(this$static){
  $CodeOneBlock(this$static.encoder, this$static.encoder.processedInSize, this$static.encoder.processedOutSize, this$static.encoder.finished);
  this$static.inBytesProcessed = this$static.encoder.processedInSize[0];
  this$static.outBytesProcessed = this$static.encoder.processedOutSize[0];
  if (this$static.encoder.finished[0]) {
    $ReleaseStreams(this$static.encoder);
    this$static.alive = false;
  }
}

function getClass_96(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Chunker_2_classLit;
}

function Chunker(){
}

_ = Chunker.prototype = new Object_0();
_.getClass$ = getClass_96;
_.typeId$ = 0;
_.alive = false;
_.decoder = null;
_.encoder = null;
_.inBytesProcessed = P0_longLit;
_.outBytesProcessed = P0_longLit;
function $CodeFinish(this$static){
  $Flush_0(this$static.m_OutWindow);
  $ReleaseStream(this$static.m_OutWindow);
  this$static.m_RangeDecoder.Stream = null;
}

function $CodeInChunks(this$static, inStream, outStream, outSize){
  this$static.m_RangeDecoder.Stream = inStream;
  $SetStream_0(this$static.m_OutWindow, outStream);
  $Init_1(this$static);
  this$static.state = 0;
  this$static.rep0 = 0;
  this$static.rep1 = 0;
  this$static.rep2 = 0;
  this$static.rep3 = 0;
  this$static.outSize = outSize;
  this$static.nowPos64 = P0_longLit;
  this$static.prevByte = 0;
  return $Chunker(new Chunker(), this$static);
}

function $CodeOneChunk(this$static){
  var decoder2, distance, len, numDirectBits, posSlot, posState;
  posState = lowBits_0(this$static.nowPos64) & this$static.m_PosStateMask;
  if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsMatchDecoders, (this$static.state << 4) + posState) == 0) {
    decoder2 = $GetDecoder(this$static.m_LiteralDecoder, lowBits_0(this$static.nowPos64), this$static.prevByte);
    if (this$static.state < 7) {
      this$static.prevByte = $DecodeNormal(decoder2, this$static.m_RangeDecoder);
    }
     else {
      this$static.prevByte = $DecodeWithMatchByte(decoder2, this$static.m_RangeDecoder, $GetByte(this$static.m_OutWindow, this$static.rep0));
    }
    $PutByte(this$static.m_OutWindow, this$static.prevByte);
    this$static.state = StateUpdateChar(this$static.state);
    this$static.nowPos64 = add(this$static.nowPos64, P1_longLit);
  }
   else {
    if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepDecoders, this$static.state) == 1) {
      len = 0;
      if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG0Decoders, this$static.state) == 0) {
        if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRep0LongDecoders, (this$static.state << 4) + posState) == 0) {
          this$static.state = this$static.state < 7?9:11;
          len = 1;
        }
      }
       else {
        if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG1Decoders, this$static.state) == 0)
          distance = this$static.rep1;
        else {
          if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG2Decoders, this$static.state) == 0)
            distance = this$static.rep2;
          else {
            distance = this$static.rep3;
            this$static.rep3 = this$static.rep2;
          }
          this$static.rep2 = this$static.rep1;
        }
        this$static.rep1 = this$static.rep0;
        this$static.rep0 = distance;
      }
      if (len == 0) {
        len = $Decode(this$static.m_RepLenDecoder, this$static.m_RangeDecoder, posState) + 2;
        this$static.state = this$static.state < 7?8:11;
      }
    }
     else {
      this$static.rep3 = this$static.rep2;
      this$static.rep2 = this$static.rep1;
      this$static.rep1 = this$static.rep0;
      len = 2 + $Decode(this$static.m_LenDecoder, this$static.m_RangeDecoder, posState);
      this$static.state = this$static.state < 7?7:10;
      posSlot = $Decode_0(this$static.m_PosSlotDecoder[GetLenToPosState(len)], this$static.m_RangeDecoder);
      if (posSlot >= 4) {
        numDirectBits = (posSlot >> 1) - 1;
        this$static.rep0 = (2 | posSlot & 1) << numDirectBits;
        if (posSlot < 14)
          this$static.rep0 += ReverseDecode(this$static.m_PosDecoders, this$static.rep0 - posSlot - 1, this$static.m_RangeDecoder, numDirectBits);
        else {
          this$static.rep0 += $DecodeDirectBits(this$static.m_RangeDecoder, numDirectBits - 4) << 4;
          this$static.rep0 += $ReverseDecode(this$static.m_PosAlignDecoder, this$static.m_RangeDecoder);
          if (this$static.rep0 < 0) {
            if (this$static.rep0 == -1)
              return 1;
            return -1;
          }
        }
      }
       else 
        this$static.rep0 = posSlot;
    }
    if (compare_0(fromInt(this$static.rep0), this$static.nowPos64) >= 0 || this$static.rep0 >= this$static.m_DictionarySizeCheck) {
      return -1;
    }
    $CopyBlock(this$static.m_OutWindow, this$static.rep0, len);
    this$static.nowPos64 = add(this$static.nowPos64, fromInt(len));
    this$static.prevByte = $GetByte(this$static.m_OutWindow, 0);
  }
  return 0;
}

function $Decoder(this$static){
  var i;
  this$static.m_OutWindow = new OutWindow();
  this$static.m_RangeDecoder = new Decoder_0();
  this$static.m_IsMatchDecoders = initDim(_3S_classLit, 0, -1, 192, 1);
  this$static.m_IsRepDecoders = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static.m_IsRepG0Decoders = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static.m_IsRepG1Decoders = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static.m_IsRepG2Decoders = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static.m_IsRep0LongDecoders = initDim(_3S_classLit, 0, -1, 192, 1);
  this$static.m_PosSlotDecoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit, 0, 12, 4, 0);
  this$static.m_PosDecoders = initDim(_3S_classLit, 0, -1, 114, 1);
  this$static.m_PosAlignDecoder = $BitTreeDecoder(new BitTreeDecoder(), 4);
  this$static.m_LenDecoder = $Decoder$LenDecoder(new Decoder$LenDecoder());
  this$static.m_RepLenDecoder = $Decoder$LenDecoder(new Decoder$LenDecoder());
  this$static.m_LiteralDecoder = new Decoder$LiteralDecoder();
  for (i = 0; i < 4; ++i)
    this$static.m_PosSlotDecoder[i] = $BitTreeDecoder(new BitTreeDecoder(), 6);
  return this$static;
}

function $Init_1(this$static){
  var i;
  $Init_7(this$static.m_OutWindow, false);
  InitBitModels(this$static.m_IsMatchDecoders);
  InitBitModels(this$static.m_IsRep0LongDecoders);
  InitBitModels(this$static.m_IsRepDecoders);
  InitBitModels(this$static.m_IsRepG0Decoders);
  InitBitModels(this$static.m_IsRepG1Decoders);
  InitBitModels(this$static.m_IsRepG2Decoders);
  InitBitModels(this$static.m_PosDecoders);
  $Init_0(this$static.m_LiteralDecoder);
  for (i = 0; i < 4; ++i)
    InitBitModels(this$static.m_PosSlotDecoder[i].Models);
  $Init(this$static.m_LenDecoder);
  $Init(this$static.m_RepLenDecoder);
  InitBitModels(this$static.m_PosAlignDecoder.Models);
  $Init_8(this$static.m_RangeDecoder);
}

function $SetDecoderProperties(this$static, properties){
  var dictionarySize, i, lc, lp, pb, remainder, val;
  if (properties.length < 5)
    return false;
  val = properties[0] & 255;
  lc = val % 9;
  remainder = ~~(val / 9);
  lp = remainder % 5;
  pb = ~~(remainder / 5);
  dictionarySize = 0;
  for (i = 0; i < 4; ++i)
    dictionarySize += (properties[1 + i] & 255) << i * 8;
  if (!$SetLcLpPb(this$static, lc, lp, pb))
    return false;
  return $SetDictionarySize(this$static, dictionarySize);
}

function $SetDictionarySize(this$static, dictionarySize){
  if (dictionarySize < 0)
    return false;
  if (this$static.m_DictionarySize != dictionarySize) {
    this$static.m_DictionarySize = dictionarySize;
    this$static.m_DictionarySizeCheck = max(this$static.m_DictionarySize, 1);
    $Create_5(this$static.m_OutWindow, max(this$static.m_DictionarySizeCheck, 4096));
  }
  return true;
}

function $SetLcLpPb(this$static, lc, lp, pb){
  var numPosStates;
  if (lc > 8 || lp > 4 || pb > 4)
    return false;
  $Create_0(this$static.m_LiteralDecoder, lp, lc);
  numPosStates = 1 << pb;
  $Create(this$static.m_LenDecoder, numPosStates);
  $Create(this$static.m_RepLenDecoder, numPosStates);
  this$static.m_PosStateMask = numPosStates - 1;
  return true;
}

function getClass_100(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder_2_classLit;
}

function Decoder(){
}

_ = Decoder.prototype = new Object_0();
_.getClass$ = getClass_100;
_.typeId$ = 0;
_.m_DictionarySize = -1;
_.m_DictionarySizeCheck = -1;
_.m_PosStateMask = 0;
_.nowPos64 = P0_longLit;
_.outSize = P0_longLit;
_.prevByte = 0;
_.rep0 = 0;
_.rep1 = 0;
_.rep2 = 0;
_.rep3 = 0;
_.state = 0;
function $Create(this$static, numPosStates){
  for (; this$static.m_NumPosStates < numPosStates; ++this$static.m_NumPosStates) {
    this$static.m_LowCoder[this$static.m_NumPosStates] = $BitTreeDecoder(new BitTreeDecoder(), 3);
    this$static.m_MidCoder[this$static.m_NumPosStates] = $BitTreeDecoder(new BitTreeDecoder(), 3);
  }
}

function $Decode(this$static, rangeDecoder, posState){
  var symbol;
  if ($DecodeBit(rangeDecoder, this$static.m_Choice, 0) == 0)
    return $Decode_0(this$static.m_LowCoder[posState], rangeDecoder);
  symbol = 8;
  if ($DecodeBit(rangeDecoder, this$static.m_Choice, 1) == 0)
    symbol += $Decode_0(this$static.m_MidCoder[posState], rangeDecoder);
  else 
    symbol += 8 + $Decode_0(this$static.m_HighCoder, rangeDecoder);
  return symbol;
}

function $Decoder$LenDecoder(this$static){
  this$static.m_Choice = initDim(_3S_classLit, 0, -1, 2, 1);
  this$static.m_LowCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit, 0, 12, 16, 0);
  this$static.m_MidCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit, 0, 12, 16, 0);
  this$static.m_HighCoder = $BitTreeDecoder(new BitTreeDecoder(), 8);
  return this$static;
}

function $Init(this$static){
  var posState;
  InitBitModels(this$static.m_Choice);
  for (posState = 0; posState < this$static.m_NumPosStates; ++posState) {
    InitBitModels(this$static.m_LowCoder[posState].Models);
    InitBitModels(this$static.m_MidCoder[posState].Models);
  }
  InitBitModels(this$static.m_HighCoder.Models);
}

function getClass_97(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LenDecoder_2_classLit;
}

function Decoder$LenDecoder(){
}

_ = Decoder$LenDecoder.prototype = new Object_0();
_.getClass$ = getClass_97;
_.typeId$ = 0;
_.m_NumPosStates = 0;
function $Create_0(this$static, numPosBits, numPrevBits){
  var i, numStates;
  if (this$static.m_Coders != null && this$static.m_NumPrevBits == numPrevBits && this$static.m_NumPosBits == numPosBits)
    return;
  this$static.m_NumPosBits = numPosBits;
  this$static.m_PosMask = (1 << numPosBits) - 1;
  this$static.m_NumPrevBits = numPrevBits;
  numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
  this$static.m_Coders = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit, 0, 9, numStates, 0);
  for (i = 0; i < numStates; ++i)
    this$static.m_Coders[i] = $Decoder$LiteralDecoder$Decoder2(new Decoder$LiteralDecoder$Decoder2());
}

function $GetDecoder(this$static, pos, prevByte){
  return this$static.m_Coders[((pos & this$static.m_PosMask) << this$static.m_NumPrevBits) + ((prevByte & 255) >>> 8 - this$static.m_NumPrevBits)];
}

function $Init_0(this$static){
  var i, numStates;
  numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
  for (i = 0; i < numStates; ++i)
    InitBitModels(this$static.m_Coders[i].m_Decoders);
}

function getClass_99(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder_2_classLit;
}

function Decoder$LiteralDecoder(){
}

_ = Decoder$LiteralDecoder.prototype = new Object_0();
_.getClass$ = getClass_99;
_.typeId$ = 0;
_.m_Coders = null;
_.m_NumPosBits = 0;
_.m_NumPrevBits = 0;
_.m_PosMask = 0;
function $DecodeNormal(this$static, rangeDecoder){
  var symbol;
  symbol = 1;
  do 
    symbol = symbol << 1 | $DecodeBit(rangeDecoder, this$static.m_Decoders, symbol);
  while (symbol < 256);
  return symbol << 24 >> 24;
}

function $DecodeWithMatchByte(this$static, rangeDecoder, matchByte){
  var bit, matchBit, symbol;
  symbol = 1;
  do {
    matchBit = matchByte >> 7 & 1;
    matchByte <<= 1;
    bit = $DecodeBit(rangeDecoder, this$static.m_Decoders, (1 + matchBit << 8) + symbol);
    symbol = symbol << 1 | bit;
    if (matchBit != bit) {
      while (symbol < 256)
        symbol = symbol << 1 | $DecodeBit(rangeDecoder, this$static.m_Decoders, symbol);
      break;
    }
  }
   while (symbol < 256);
  return symbol << 24 >> 24;
}

function $Decoder$LiteralDecoder$Decoder2(this$static){
  this$static.m_Decoders = initDim(_3S_classLit, 0, -1, 768, 1);
  return this$static;
}

function getClass_98(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit;
}

function Decoder$LiteralDecoder$Decoder2(){
}

_ = Decoder$LiteralDecoder$Decoder2.prototype = new Object_0();
_.getClass$ = getClass_98;
_.typeId$ = 60;
function $clinit_209(){
  $clinit_209 = nullMethod;
  var c, j, k, slotFast;
  g_FastPos = initDim(_3B_classLit, 0, -1, 2048, 1);
  c = 2;
  g_FastPos[0] = 0;
  g_FastPos[1] = 1;
  for (slotFast = 2; slotFast < 22; ++slotFast) {
    k = 1 << (slotFast >> 1) - 1;
    for (j = 0; j < k; ++j , ++c)
      g_FastPos[c] = slotFast << 24 >> 24;
  }
}

function $Backward(this$static, cur){
  var backCur, backMem, posMem, posPrev;
  this$static._optimumEndIndex = cur;
  posMem = this$static._optimum[cur].PosPrev;
  backMem = this$static._optimum[cur].BackPrev;
  do {
    if (this$static._optimum[cur].Prev1IsChar) {
      $MakeAsChar(this$static._optimum[posMem]);
      this$static._optimum[posMem].PosPrev = posMem - 1;
      if (this$static._optimum[cur].Prev2) {
        this$static._optimum[posMem - 1].Prev1IsChar = false;
        this$static._optimum[posMem - 1].PosPrev = this$static._optimum[cur].PosPrev2;
        this$static._optimum[posMem - 1].BackPrev = this$static._optimum[cur].BackPrev2;
      }
    }
    posPrev = posMem;
    backCur = backMem;
    backMem = this$static._optimum[posPrev].BackPrev;
    posMem = this$static._optimum[posPrev].PosPrev;
    this$static._optimum[posPrev].BackPrev = backCur;
    this$static._optimum[posPrev].PosPrev = cur;
    cur = posPrev;
  }
   while (cur > 0);
  this$static.backRes = this$static._optimum[0].BackPrev;
  this$static._optimumCurrentIndex = this$static._optimum[0].PosPrev;
  return this$static._optimumCurrentIndex;
}

function $BaseInit(this$static){
  var i;
  this$static._state = 0;
  this$static._previousByte = 0;
  for (i = 0; i < 4; ++i)
    this$static._repDistances[i] = 0;
}

function $CodeOneBlock(this$static, inSize, outSize, finished){
  var baseVal, complexState, curByte, distance, footerBits, i, len, lenToPosState, matchByte, pos, posReduced, posSlot, posState, progressPosValuePrev, subCoder;
  inSize[0] = P0_longLit;
  outSize[0] = P0_longLit;
  finished[0] = true;
  if (this$static._inStream) {
    this$static._matchFinder._stream = this$static._inStream;
    $Init_5(this$static._matchFinder);
    this$static._needReleaseMFStream = true;
    this$static._inStream = null;
  }
  if (this$static._finished)
    return;
  this$static._finished = true;
  progressPosValuePrev = this$static.nowPos64;
  if (eq(this$static.nowPos64, P0_longLit)) {
    if ($GetNumAvailableBytes(this$static._matchFinder) == 0) {
      $Flush(this$static, lowBits_0(this$static.nowPos64));
      return;
    }
    $ReadMatchDistances(this$static);
    posState = lowBits_0(this$static.nowPos64) & this$static._posStateMask;
    $Encode_3(this$static._rangeEncoder, this$static._isMatch, (this$static._state << 4) + posState, 0);
    this$static._state = StateUpdateChar(this$static._state);
    curByte = $GetIndexByte(this$static._matchFinder, -this$static._additionalOffset);
    $Encode_1($GetSubCoder(this$static._literalEncoder, lowBits_0(this$static.nowPos64), this$static._previousByte), this$static._rangeEncoder, curByte);
    this$static._previousByte = curByte;
    --this$static._additionalOffset;
    this$static.nowPos64 = add(this$static.nowPos64, P1_longLit);
  }
  if ($GetNumAvailableBytes(this$static._matchFinder) == 0) {
    $Flush(this$static, lowBits_0(this$static.nowPos64));
    return;
  }
  while (true) {
    len = $GetOptimum(this$static, lowBits_0(this$static.nowPos64));
    pos = this$static.backRes;
    posState = lowBits_0(this$static.nowPos64) & this$static._posStateMask;
    complexState = (this$static._state << 4) + posState;
    if (len == 1 && pos == -1) {
      $Encode_3(this$static._rangeEncoder, this$static._isMatch, complexState, 0);
      curByte = $GetIndexByte(this$static._matchFinder, -this$static._additionalOffset);
      subCoder = $GetSubCoder(this$static._literalEncoder, lowBits_0(this$static.nowPos64), this$static._previousByte);
      if (this$static._state < 7) {
        $Encode_1(subCoder, this$static._rangeEncoder, curByte);
      }
       else {
        matchByte = $GetIndexByte(this$static._matchFinder, -this$static._repDistances[0] - 1 - this$static._additionalOffset);
        $EncodeMatched(subCoder, this$static._rangeEncoder, matchByte, curByte);
      }
      this$static._previousByte = curByte;
      this$static._state = StateUpdateChar(this$static._state);
    }
     else {
      $Encode_3(this$static._rangeEncoder, this$static._isMatch, complexState, 1);
      if (pos < 4) {
        $Encode_3(this$static._rangeEncoder, this$static._isRep, this$static._state, 1);
        if (pos == 0) {
          $Encode_3(this$static._rangeEncoder, this$static._isRepG0, this$static._state, 0);
          if (len == 1)
            $Encode_3(this$static._rangeEncoder, this$static._isRep0Long, complexState, 0);
          else 
            $Encode_3(this$static._rangeEncoder, this$static._isRep0Long, complexState, 1);
        }
         else {
          $Encode_3(this$static._rangeEncoder, this$static._isRepG0, this$static._state, 1);
          if (pos == 1)
            $Encode_3(this$static._rangeEncoder, this$static._isRepG1, this$static._state, 0);
          else {
            $Encode_3(this$static._rangeEncoder, this$static._isRepG1, this$static._state, 1);
            $Encode_3(this$static._rangeEncoder, this$static._isRepG2, this$static._state, pos - 2);
          }
        }
        if (len == 1)
          this$static._state = this$static._state < 7?9:11;
        else {
          $Encode_0(this$static._repMatchLenEncoder, this$static._rangeEncoder, len - 2, posState);
          this$static._state = this$static._state < 7?8:11;
        }
        distance = this$static._repDistances[pos];
        if (pos != 0) {
          for (i = pos; i >= 1; --i)
            this$static._repDistances[i] = this$static._repDistances[i - 1];
          this$static._repDistances[0] = distance;
        }
      }
       else {
        $Encode_3(this$static._rangeEncoder, this$static._isRep, this$static._state, 0);
        this$static._state = this$static._state < 7?7:10;
        $Encode_0(this$static._lenEncoder, this$static._rangeEncoder, len - 2, posState);
        pos -= 4;
        posSlot = GetPosSlot(pos);
        lenToPosState = GetLenToPosState(len);
        $Encode_2(this$static._posSlotEncoder[lenToPosState], this$static._rangeEncoder, posSlot);
        if (posSlot >= 4) {
          footerBits = (posSlot >> 1) - 1;
          baseVal = (2 | posSlot & 1) << footerBits;
          posReduced = pos - baseVal;
          if (posSlot < 14)
            ReverseEncode(this$static._posEncoders, baseVal - posSlot - 1, this$static._rangeEncoder, footerBits, posReduced);
          else {
            $EncodeDirectBits(this$static._rangeEncoder, posReduced >> 4, footerBits - 4);
            $ReverseEncode(this$static._posAlignEncoder, this$static._rangeEncoder, posReduced & 15);
            ++this$static._alignPriceCount;
          }
        }
        distance = pos;
        for (i = 3; i >= 1; --i)
          this$static._repDistances[i] = this$static._repDistances[i - 1];
        this$static._repDistances[0] = distance;
        ++this$static._matchPriceCount;
      }
      this$static._previousByte = $GetIndexByte(this$static._matchFinder, len - 1 - this$static._additionalOffset);
    }
    this$static._additionalOffset -= len;
    this$static.nowPos64 = add(this$static.nowPos64, fromInt(len));
    if (this$static._additionalOffset == 0) {
      if (this$static._matchPriceCount >= 128)
        $FillDistancesPrices(this$static);
      if (this$static._alignPriceCount >= 16)
        $FillAlignPrices(this$static);
      inSize[0] = this$static.nowPos64;
      outSize[0] = $GetProcessedSizeAdd(this$static._rangeEncoder);
      if ($GetNumAvailableBytes(this$static._matchFinder) == 0) {
        $Flush(this$static, lowBits_0(this$static.nowPos64));
        return;
      }
      if (compare_0(sub(this$static.nowPos64, progressPosValuePrev), P1000_longLit) >= 0) {
        this$static._finished = false;
        finished[0] = false;
        return;
      }
    }
  }
}

function $Create_2(this$static){
  var bt, numHashBytes;
  if (!this$static._matchFinder) {
    bt = ($clinit_210() , new BinTree());
    numHashBytes = 4;
    if (this$static._matchFinderType == 0)
      numHashBytes = 2;
    $SetType(bt, numHashBytes);
    this$static._matchFinder = bt;
  }
  $Create_1(this$static._literalEncoder, this$static._numLiteralPosStateBits, this$static._numLiteralContextBits);
  if (this$static._dictionarySize == this$static._dictionarySizePrev && this$static._numFastBytesPrev == this$static._numFastBytes)
    return;
  $Create_3(this$static._matchFinder, this$static._dictionarySize, 4096, this$static._numFastBytes, 274);
  this$static._dictionarySizePrev = this$static._dictionarySize;
  this$static._numFastBytesPrev = this$static._numFastBytes;
}

function $Encoder(this$static){
  var i;
  $clinit_209();
  this$static._repDistances = initDim(_3I_classLit, 0, -1, 4, 1);
  this$static._optimum = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit, 0, 11, 4096, 0);
  this$static._rangeEncoder = ($clinit_216() , new Encoder_0());
  this$static._isMatch = initDim(_3S_classLit, 0, -1, 192, 1);
  this$static._isRep = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static._isRepG0 = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static._isRepG1 = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static._isRepG2 = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static._isRep0Long = initDim(_3S_classLit, 0, -1, 192, 1);
  this$static._posSlotEncoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit, 0, 13, 4, 0);
  this$static._posEncoders = initDim(_3S_classLit, 0, -1, 114, 1);
  this$static._posAlignEncoder = $BitTreeEncoder(new BitTreeEncoder(), 4);
  this$static._lenEncoder = $Encoder$LenPriceTableEncoder(new Encoder$LenPriceTableEncoder());
  this$static._repMatchLenEncoder = $Encoder$LenPriceTableEncoder(new Encoder$LenPriceTableEncoder());
  this$static._literalEncoder = new Encoder$LiteralEncoder();
  this$static._matchDistances = initDim(_3I_classLit, 0, -1, 548, 1);
  this$static._posSlotPrices = initDim(_3I_classLit, 0, -1, 256, 1);
  this$static._distancesPrices = initDim(_3I_classLit, 0, -1, 512, 1);
  this$static._alignPrices = initDim(_3I_classLit, 0, -1, 16, 1);
  this$static.reps = initDim(_3I_classLit, 0, -1, 4, 1);
  this$static.repLens = initDim(_3I_classLit, 0, -1, 4, 1);
  this$static.processedInSize = initDim(_3J_classLit, 0, -1, 1, 3);
  this$static.processedOutSize = initDim(_3J_classLit, 0, -1, 1, 3);
  this$static.finished = initDim(_3Z_classLit, 0, -1, 1, 2);
  this$static.properties = initDim(_3B_classLit, 0, -1, 5, 1);
  this$static.tempPrices = initDim(_3I_classLit, 0, -1, 128, 1);
  for (i = 0; i < 4096; ++i)
    this$static._optimum[i] = new Encoder$Optimal();
  for (i = 0; i < 4; ++i)
    this$static._posSlotEncoder[i] = $BitTreeEncoder(new BitTreeEncoder(), 6);
  return this$static;
}

function $FillAlignPrices(this$static){
  var i;
  for (i = 0; i < 16; ++i)
    this$static._alignPrices[i] = $ReverseGetPrice(this$static._posAlignEncoder, i);
  this$static._alignPriceCount = 0;
}

function $FillDistancesPrices(this$static){
  var baseVal, encoder, footerBits, i, lenToPosState, posSlot, st, st2;
  for (i = 4; i < 128; ++i) {
    posSlot = GetPosSlot(i);
    footerBits = (posSlot >> 1) - 1;
    baseVal = (2 | posSlot & 1) << footerBits;
    this$static.tempPrices[i] = ReverseGetPrice(this$static._posEncoders, baseVal - posSlot - 1, footerBits, i - baseVal);
  }
  for (lenToPosState = 0; lenToPosState < 4; ++lenToPosState) {
    encoder = this$static._posSlotEncoder[lenToPosState];
    st = lenToPosState << 6;
    for (posSlot = 0; posSlot < this$static._distTableSize; ++posSlot)
      this$static._posSlotPrices[st + posSlot] = $GetPrice_1(encoder, posSlot);
    for (posSlot = 14; posSlot < this$static._distTableSize; ++posSlot)
      this$static._posSlotPrices[st + posSlot] += (posSlot >> 1) - 1 - 4 << 6;
    st2 = lenToPosState * 128;
    for (i = 0; i < 4; ++i)
      this$static._distancesPrices[st2 + i] = this$static._posSlotPrices[st + i];
    for (; i < 128; ++i)
      this$static._distancesPrices[st2 + i] = this$static._posSlotPrices[st + GetPosSlot(i)] + this$static.tempPrices[i];
  }
  this$static._matchPriceCount = 0;
}

function $Flush(this$static, nowPos){
  $ReleaseMFStream(this$static);
  $WriteEndMarker(this$static, nowPos & this$static._posStateMask);
  $FlushData(this$static._rangeEncoder);
}

function $GetOptimum(this$static, position){
  var cur, curAnd1Price, curAndLenCharPrice, curAndLenPrice, curBack, curPrice, currentByte, distance, i, len, lenEnd, lenMain, lenRes, lenTest, lenTest2, lenTestTemp, matchByte, matchPrice, newLen, nextIsChar, nextMatchPrice, nextOptimum, nextRepMatchPrice, normalMatchPrice, numAvailableBytes, numAvailableBytesFull, numDistancePairs, offs, offset, opt, optimum, pos, posPrev, posState, posStateNext, price_4, repIndex, repLen, repMatchPrice, repMaxIndex, shortRepPrice, startLen, state, state2, t, price, price_0, price_1, price_2, price_3;
  if (this$static._optimumEndIndex != this$static._optimumCurrentIndex) {
    lenRes = this$static._optimum[this$static._optimumCurrentIndex].PosPrev - this$static._optimumCurrentIndex;
    this$static.backRes = this$static._optimum[this$static._optimumCurrentIndex].BackPrev;
    this$static._optimumCurrentIndex = this$static._optimum[this$static._optimumCurrentIndex].PosPrev;
    return lenRes;
  }
  this$static._optimumCurrentIndex = this$static._optimumEndIndex = 0;
  if (this$static._longestMatchWasFound) {
    lenMain = this$static._longestMatchLength;
    this$static._longestMatchWasFound = false;
  }
   else {
    lenMain = $ReadMatchDistances(this$static);
  }
  numDistancePairs = this$static._numDistancePairs;
  numAvailableBytes = $GetNumAvailableBytes(this$static._matchFinder) + 1;
  if (numAvailableBytes < 2) {
    this$static.backRes = -1;
    return 1;
  }
  if (numAvailableBytes > 273)
    numAvailableBytes = 273;
  repMaxIndex = 0;
  for (i = 0; i < 4; ++i) {
    this$static.reps[i] = this$static._repDistances[i];
    this$static.repLens[i] = $GetMatchLen(this$static._matchFinder, -1, this$static.reps[i], 273);
    if (this$static.repLens[i] > this$static.repLens[repMaxIndex])
      repMaxIndex = i;
  }
  if (this$static.repLens[repMaxIndex] >= this$static._numFastBytes) {
    this$static.backRes = repMaxIndex;
    lenRes = this$static.repLens[repMaxIndex];
    $MovePos(this$static, lenRes - 1);
    return lenRes;
  }
  if (lenMain >= this$static._numFastBytes) {
    this$static.backRes = this$static._matchDistances[numDistancePairs - 1] + 4;
    $MovePos(this$static, lenMain - 1);
    return lenMain;
  }
  currentByte = $GetIndexByte(this$static._matchFinder, -1);
  matchByte = $GetIndexByte(this$static._matchFinder, -this$static._repDistances[0] - 1 - 1);
  if (lenMain < 2 && currentByte != matchByte && this$static.repLens[repMaxIndex] < 2) {
    this$static.backRes = -1;
    return 1;
  }
  this$static._optimum[0].State = this$static._state;
  posState = position & this$static._posStateMask;
  this$static._optimum[1].Price = ($clinit_216() , ProbPrices[this$static._isMatch[(this$static._state << 4) + posState] >>> 2]) + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position, this$static._previousByte), this$static._state >= 7, matchByte, currentByte);
  $MakeAsChar(this$static._optimum[1]);
  matchPrice = ProbPrices[2048 - this$static._isMatch[(this$static._state << 4) + posState] >>> 2];
  repMatchPrice = matchPrice + ProbPrices[2048 - this$static._isRep[this$static._state] >>> 2];
  if (matchByte == currentByte) {
    shortRepPrice = repMatchPrice + $GetRepLen1Price(this$static, this$static._state, posState);
    if (shortRepPrice < this$static._optimum[1].Price) {
      this$static._optimum[1].Price = shortRepPrice;
      $MakeAsShortRep(this$static._optimum[1]);
    }
  }
  lenEnd = lenMain >= this$static.repLens[repMaxIndex]?lenMain:this$static.repLens[repMaxIndex];
  if (lenEnd < 2) {
    this$static.backRes = this$static._optimum[1].BackPrev;
    return 1;
  }
  this$static._optimum[1].PosPrev = 0;
  this$static._optimum[0].Backs0 = this$static.reps[0];
  this$static._optimum[0].Backs1 = this$static.reps[1];
  this$static._optimum[0].Backs2 = this$static.reps[2];
  this$static._optimum[0].Backs3 = this$static.reps[3];
  len = lenEnd;
  do 
    this$static._optimum[len--].Price = 268435455;
  while (len >= 2);
  for (i = 0; i < 4; ++i) {
    repLen = this$static.repLens[i];
    if (repLen < 2)
      continue;
    price_4 = repMatchPrice + $GetPureRepPrice(this$static, i, this$static._state, posState);
    do {
      curAndLenPrice = price_4 + $GetPrice(this$static._repMatchLenEncoder, repLen - 2, posState);
      optimum = this$static._optimum[repLen];
      if (curAndLenPrice < optimum.Price) {
        optimum.Price = curAndLenPrice;
        optimum.PosPrev = 0;
        optimum.BackPrev = i;
        optimum.Prev1IsChar = false;
      }
    }
     while (--repLen >= 2);
  }
  normalMatchPrice = matchPrice + ProbPrices[this$static._isRep[this$static._state] >>> 2];
  len = this$static.repLens[0] >= 2?this$static.repLens[0] + 1:2;
  if (len <= lenMain) {
    offs = 0;
    while (len > this$static._matchDistances[offs])
      offs += 2;
    for (;; ++len) {
      distance = this$static._matchDistances[offs + 1];
      curAndLenPrice = normalMatchPrice + $GetPosLenPrice(this$static, distance, len, posState);
      optimum = this$static._optimum[len];
      if (curAndLenPrice < optimum.Price) {
        optimum.Price = curAndLenPrice;
        optimum.PosPrev = 0;
        optimum.BackPrev = distance + 4;
        optimum.Prev1IsChar = false;
      }
      if (len == this$static._matchDistances[offs]) {
        offs += 2;
        if (offs == numDistancePairs)
          break;
      }
    }
  }
  cur = 0;
  while (true) {
    ++cur;
    if (cur == lenEnd)
      return $Backward(this$static, cur);
    newLen = $ReadMatchDistances(this$static);
    numDistancePairs = this$static._numDistancePairs;
    if (newLen >= this$static._numFastBytes) {
      this$static._longestMatchLength = newLen;
      this$static._longestMatchWasFound = true;
      return $Backward(this$static, cur);
    }
    ++position;
    posPrev = this$static._optimum[cur].PosPrev;
    if (this$static._optimum[cur].Prev1IsChar) {
      --posPrev;
      if (this$static._optimum[cur].Prev2) {
        state = this$static._optimum[this$static._optimum[cur].PosPrev2].State;
        if (this$static._optimum[cur].BackPrev2 < 4)
          state = state < 7?8:11;
        else 
          state = state < 7?7:10;
      }
       else 
        state = this$static._optimum[posPrev].State;
      state = StateUpdateChar(state);
    }
     else 
      state = this$static._optimum[posPrev].State;
    if (posPrev == cur - 1) {
      if (this$static._optimum[cur].BackPrev == 0)
        state = state < 7?9:11;
      else 
        state = StateUpdateChar(state);
    }
     else {
      if (this$static._optimum[cur].Prev1IsChar && this$static._optimum[cur].Prev2) {
        posPrev = this$static._optimum[cur].PosPrev2;
        pos = this$static._optimum[cur].BackPrev2;
        state = state < 7?8:11;
      }
       else {
        pos = this$static._optimum[cur].BackPrev;
        if (pos < 4)
          state = state < 7?8:11;
        else 
          state = state < 7?7:10;
      }
      opt = this$static._optimum[posPrev];
      if (pos < 4) {
        if (pos == 0) {
          this$static.reps[0] = opt.Backs0;
          this$static.reps[1] = opt.Backs1;
          this$static.reps[2] = opt.Backs2;
          this$static.reps[3] = opt.Backs3;
        }
         else if (pos == 1) {
          this$static.reps[0] = opt.Backs1;
          this$static.reps[1] = opt.Backs0;
          this$static.reps[2] = opt.Backs2;
          this$static.reps[3] = opt.Backs3;
        }
         else if (pos == 2) {
          this$static.reps[0] = opt.Backs2;
          this$static.reps[1] = opt.Backs0;
          this$static.reps[2] = opt.Backs1;
          this$static.reps[3] = opt.Backs3;
        }
         else {
          this$static.reps[0] = opt.Backs3;
          this$static.reps[1] = opt.Backs0;
          this$static.reps[2] = opt.Backs1;
          this$static.reps[3] = opt.Backs2;
        }
      }
       else {
        this$static.reps[0] = pos - 4;
        this$static.reps[1] = opt.Backs0;
        this$static.reps[2] = opt.Backs1;
        this$static.reps[3] = opt.Backs2;
      }
    }
    this$static._optimum[cur].State = state;
    this$static._optimum[cur].Backs0 = this$static.reps[0];
    this$static._optimum[cur].Backs1 = this$static.reps[1];
    this$static._optimum[cur].Backs2 = this$static.reps[2];
    this$static._optimum[cur].Backs3 = this$static.reps[3];
    curPrice = this$static._optimum[cur].Price;
    currentByte = $GetIndexByte(this$static._matchFinder, -1);
    matchByte = $GetIndexByte(this$static._matchFinder, -this$static.reps[0] - 1 - 1);
    posState = position & this$static._posStateMask;
    curAnd1Price = curPrice + ProbPrices[this$static._isMatch[(state << 4) + posState] >>> 2] + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position, $GetIndexByte(this$static._matchFinder, -2)), state >= 7, matchByte, currentByte);
    nextOptimum = this$static._optimum[cur + 1];
    nextIsChar = false;
    if (curAnd1Price < nextOptimum.Price) {
      nextOptimum.Price = curAnd1Price;
      nextOptimum.PosPrev = cur;
      nextOptimum.BackPrev = -1;
      nextOptimum.Prev1IsChar = false;
      nextIsChar = true;
    }
    matchPrice = curPrice + ProbPrices[2048 - this$static._isMatch[(state << 4) + posState] >>> 2];
    repMatchPrice = matchPrice + ProbPrices[2048 - this$static._isRep[state] >>> 2];
    if (matchByte == currentByte && !(nextOptimum.PosPrev < cur && nextOptimum.BackPrev == 0)) {
      shortRepPrice = repMatchPrice + (ProbPrices[this$static._isRepG0[state] >>> 2] + ProbPrices[this$static._isRep0Long[(state << 4) + posState] >>> 2]);
      if (shortRepPrice <= nextOptimum.Price) {
        nextOptimum.Price = shortRepPrice;
        nextOptimum.PosPrev = cur;
        nextOptimum.BackPrev = 0;
        nextOptimum.Prev1IsChar = false;
        nextIsChar = true;
      }
    }
    numAvailableBytesFull = $GetNumAvailableBytes(this$static._matchFinder) + 1;
    numAvailableBytesFull = 4095 - cur < numAvailableBytesFull?4095 - cur:numAvailableBytesFull;
    numAvailableBytes = numAvailableBytesFull;
    if (numAvailableBytes < 2)
      continue;
    if (numAvailableBytes > this$static._numFastBytes)
      numAvailableBytes = this$static._numFastBytes;
    if (!nextIsChar && matchByte != currentByte) {
      t = min(numAvailableBytesFull - 1, this$static._numFastBytes);
      lenTest2 = $GetMatchLen(this$static._matchFinder, 0, this$static.reps[0], t);
      if (lenTest2 >= 2) {
        state2 = StateUpdateChar(state);
        posStateNext = position + 1 & this$static._posStateMask;
        nextRepMatchPrice = curAnd1Price + ProbPrices[2048 - this$static._isMatch[(state2 << 4) + posStateNext] >>> 2] + ProbPrices[2048 - this$static._isRep[state2] >>> 2];
        offset = cur + 1 + lenTest2;
        while (lenEnd < offset)
          this$static._optimum[++lenEnd].Price = 268435455;
        curAndLenPrice = nextRepMatchPrice + (price = $GetPrice(this$static._repMatchLenEncoder, lenTest2 - 2, posStateNext) , price + $GetPureRepPrice(this$static, 0, state2, posStateNext));
        optimum = this$static._optimum[offset];
        if (curAndLenPrice < optimum.Price) {
          optimum.Price = curAndLenPrice;
          optimum.PosPrev = cur + 1;
          optimum.BackPrev = 0;
          optimum.Prev1IsChar = true;
          optimum.Prev2 = false;
        }
      }
    }
    startLen = 2;
    for (repIndex = 0; repIndex < 4; ++repIndex) {
      lenTest = $GetMatchLen(this$static._matchFinder, -1, this$static.reps[repIndex], numAvailableBytes);
      if (lenTest < 2)
        continue;
      lenTestTemp = lenTest;
      do {
        while (lenEnd < cur + lenTest)
          this$static._optimum[++lenEnd].Price = 268435455;
        curAndLenPrice = repMatchPrice + (price_0 = $GetPrice(this$static._repMatchLenEncoder, lenTest - 2, posState) , price_0 + $GetPureRepPrice(this$static, repIndex, state, posState));
        optimum = this$static._optimum[cur + lenTest];
        if (curAndLenPrice < optimum.Price) {
          optimum.Price = curAndLenPrice;
          optimum.PosPrev = cur;
          optimum.BackPrev = repIndex;
          optimum.Prev1IsChar = false;
        }
      }
       while (--lenTest >= 2);
      lenTest = lenTestTemp;
      if (repIndex == 0)
        startLen = lenTest + 1;
      if (lenTest < numAvailableBytesFull) {
        t = min(numAvailableBytesFull - 1 - lenTest, this$static._numFastBytes);
        lenTest2 = $GetMatchLen(this$static._matchFinder, lenTest, this$static.reps[repIndex], t);
        if (lenTest2 >= 2) {
          state2 = state < 7?8:11;
          posStateNext = position + lenTest & this$static._posStateMask;
          curAndLenCharPrice = repMatchPrice + (price_1 = $GetPrice(this$static._repMatchLenEncoder, lenTest - 2, posState) , price_1 + $GetPureRepPrice(this$static, repIndex, state, posState)) + ProbPrices[this$static._isMatch[(state2 << 4) + posStateNext] >>> 2] + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position + lenTest, $GetIndexByte(this$static._matchFinder, lenTest - 1 - 1)), true, $GetIndexByte(this$static._matchFinder, lenTest - 1 - (this$static.reps[repIndex] + 1)), $GetIndexByte(this$static._matchFinder, lenTest - 1));
          state2 = StateUpdateChar(state2);
          posStateNext = position + lenTest + 1 & this$static._posStateMask;
          nextMatchPrice = curAndLenCharPrice + ProbPrices[2048 - this$static._isMatch[(state2 << 4) + posStateNext] >>> 2];
          nextRepMatchPrice = nextMatchPrice + ProbPrices[2048 - this$static._isRep[state2] >>> 2];
          offset = lenTest + 1 + lenTest2;
          while (lenEnd < cur + offset)
            this$static._optimum[++lenEnd].Price = 268435455;
          curAndLenPrice = nextRepMatchPrice + (price_2 = $GetPrice(this$static._repMatchLenEncoder, lenTest2 - 2, posStateNext) , price_2 + $GetPureRepPrice(this$static, 0, state2, posStateNext));
          optimum = this$static._optimum[cur + offset];
          if (curAndLenPrice < optimum.Price) {
            optimum.Price = curAndLenPrice;
            optimum.PosPrev = cur + lenTest + 1;
            optimum.BackPrev = 0;
            optimum.Prev1IsChar = true;
            optimum.Prev2 = true;
            optimum.PosPrev2 = cur;
            optimum.BackPrev2 = repIndex;
          }
        }
      }
    }
    if (newLen > numAvailableBytes) {
      newLen = numAvailableBytes;
      for (numDistancePairs = 0; newLen > this$static._matchDistances[numDistancePairs]; numDistancePairs += 2)
      ;
      this$static._matchDistances[numDistancePairs] = newLen;
      numDistancePairs += 2;
    }
    if (newLen >= startLen) {
      normalMatchPrice = matchPrice + ProbPrices[this$static._isRep[state] >>> 2];
      while (lenEnd < cur + newLen)
        this$static._optimum[++lenEnd].Price = 268435455;
      offs = 0;
      while (startLen > this$static._matchDistances[offs])
        offs += 2;
      for (lenTest = startLen;; ++lenTest) {
        curBack = this$static._matchDistances[offs + 1];
        curAndLenPrice = normalMatchPrice + $GetPosLenPrice(this$static, curBack, lenTest, posState);
        optimum = this$static._optimum[cur + lenTest];
        if (curAndLenPrice < optimum.Price) {
          optimum.Price = curAndLenPrice;
          optimum.PosPrev = cur;
          optimum.BackPrev = curBack + 4;
          optimum.Prev1IsChar = false;
        }
        if (lenTest == this$static._matchDistances[offs]) {
          if (lenTest < numAvailableBytesFull) {
            t = min(numAvailableBytesFull - 1 - lenTest, this$static._numFastBytes);
            lenTest2 = $GetMatchLen(this$static._matchFinder, lenTest, curBack, t);
            if (lenTest2 >= 2) {
              state2 = state < 7?7:10;
              posStateNext = position + lenTest & this$static._posStateMask;
              curAndLenCharPrice = curAndLenPrice + ProbPrices[this$static._isMatch[(state2 << 4) + posStateNext] >>> 2] + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position + lenTest, $GetIndexByte(this$static._matchFinder, lenTest - 1 - 1)), true, $GetIndexByte(this$static._matchFinder, lenTest - (curBack + 1) - 1), $GetIndexByte(this$static._matchFinder, lenTest - 1));
              state2 = StateUpdateChar(state2);
              posStateNext = position + lenTest + 1 & this$static._posStateMask;
              nextMatchPrice = curAndLenCharPrice + ProbPrices[2048 - this$static._isMatch[(state2 << 4) + posStateNext] >>> 2];
              nextRepMatchPrice = nextMatchPrice + ProbPrices[2048 - this$static._isRep[state2] >>> 2];
              offset = lenTest + 1 + lenTest2;
              while (lenEnd < cur + offset)
                this$static._optimum[++lenEnd].Price = 268435455;
              curAndLenPrice = nextRepMatchPrice + (price_3 = $GetPrice(this$static._repMatchLenEncoder, lenTest2 - 2, posStateNext) , price_3 + $GetPureRepPrice(this$static, 0, state2, posStateNext));
              optimum = this$static._optimum[cur + offset];
              if (curAndLenPrice < optimum.Price) {
                optimum.Price = curAndLenPrice;
                optimum.PosPrev = cur + lenTest + 1;
                optimum.BackPrev = 0;
                optimum.Prev1IsChar = true;
                optimum.Prev2 = true;
                optimum.PosPrev2 = cur;
                optimum.BackPrev2 = curBack + 4;
              }
            }
          }
          offs += 2;
          if (offs == numDistancePairs)
            break;
        }
      }
    }
  }
}

function $GetPosLenPrice(this$static, pos, len, posState){
  var lenToPosState, price;
  lenToPosState = GetLenToPosState(len);
  if (pos < 128)
    price = this$static._distancesPrices[lenToPosState * 128 + pos];
  else 
    price = this$static._posSlotPrices[(lenToPosState << 6) + GetPosSlot2(pos)] + this$static._alignPrices[pos & 15];
  return price + $GetPrice(this$static._lenEncoder, len - 2, posState);
}

function $GetPureRepPrice(this$static, repIndex, state, posState){
  var price;
  if (repIndex == 0) {
    price = ($clinit_216() , ProbPrices[this$static._isRepG0[state] >>> 2]);
    price += ProbPrices[2048 - this$static._isRep0Long[(state << 4) + posState] >>> 2];
  }
   else {
    price = ($clinit_216() , ProbPrices[2048 - this$static._isRepG0[state] >>> 2]);
    if (repIndex == 1)
      price += ProbPrices[this$static._isRepG1[state] >>> 2];
    else {
      price += ProbPrices[2048 - this$static._isRepG1[state] >>> 2];
      price += GetPrice(this$static._isRepG2[state], repIndex - 2);
    }
  }
  return price;
}

function $GetRepLen1Price(this$static, state, posState){
  return ($clinit_216() , ProbPrices[this$static._isRepG0[state] >>> 2]) + ProbPrices[this$static._isRep0Long[(state << 4) + posState] >>> 2];
}

function $Init_4(this$static){
  var i;
  $BaseInit(this$static);
  $Init_9(this$static._rangeEncoder);
  InitBitModels_0(this$static._isMatch);
  InitBitModels_0(this$static._isRep0Long);
  InitBitModels_0(this$static._isRep);
  InitBitModels_0(this$static._isRepG0);
  InitBitModels_0(this$static._isRepG1);
  InitBitModels_0(this$static._isRepG2);
  InitBitModels_0(this$static._posEncoders);
  $Init_3(this$static._literalEncoder);
  for (i = 0; i < 4; ++i)
    InitBitModels(this$static._posSlotEncoder[i].Models);
  $Init_2(this$static._lenEncoder, 1 << this$static._posStateBits);
  $Init_2(this$static._repMatchLenEncoder, 1 << this$static._posStateBits);
  InitBitModels(this$static._posAlignEncoder.Models);
  this$static._longestMatchWasFound = false;
  this$static._optimumEndIndex = 0;
  this$static._optimumCurrentIndex = 0;
  this$static._additionalOffset = 0;
}

function $MovePos(this$static, num){
  if (num > 0) {
    $Skip(this$static._matchFinder, num);
    this$static._additionalOffset += num;
  }
}

function $ReadMatchDistances(this$static){
  var lenRes;
  lenRes = 0;
  this$static._numDistancePairs = $GetMatches(this$static._matchFinder, this$static._matchDistances);
  if (this$static._numDistancePairs > 0) {
    lenRes = this$static._matchDistances[this$static._numDistancePairs - 2];
    if (lenRes == this$static._numFastBytes)
      lenRes += $GetMatchLen(this$static._matchFinder, lenRes - 1, this$static._matchDistances[this$static._numDistancePairs - 1], 273 - lenRes);
  }
  ++this$static._additionalOffset;
  return lenRes;
}

function $ReleaseMFStream(this$static){
  if (!!this$static._matchFinder && this$static._needReleaseMFStream) {
    this$static._matchFinder._stream = null;
    this$static._needReleaseMFStream = false;
  }
}

function $ReleaseStreams(this$static){
  $ReleaseMFStream(this$static);
  this$static._rangeEncoder.Stream = null;
}

function $SetDictionarySize_0(this$static, dictionarySize){
  var dicLogSize;
  if (dictionarySize < 1 || dictionarySize > 536870912)
    return false;
  this$static._dictionarySize = dictionarySize;
  for (dicLogSize = 0; dictionarySize > 1 << dicLogSize; ++dicLogSize)
  ;
  this$static._distTableSize = dicLogSize * 2;
  return true;
}

function $SetLcLpPb_0(this$static, lc, lp, pb){
  if (lp < 0 || lp > 4 || lc < 0 || lc > 8 || pb < 0 || pb > 4)
    return false;
  this$static._numLiteralPosStateBits = lp;
  this$static._numLiteralContextBits = lc;
  this$static._posStateBits = pb;
  this$static._posStateMask = (1 << this$static._posStateBits) - 1;
  return true;
}

function $SetMatchFinder(this$static, matchFinderIndex){
  var matchFinderIndexPrev;
  if (matchFinderIndex < 0 || matchFinderIndex > 2)
    return false;
  matchFinderIndexPrev = this$static._matchFinderType;
  this$static._matchFinderType = matchFinderIndex;
  if (!!this$static._matchFinder && matchFinderIndexPrev != this$static._matchFinderType) {
    this$static._dictionarySizePrev = -1;
    this$static._matchFinder = null;
  }
  return true;
}

function $SetNumFastBytes(this$static, numFastBytes){
  if (numFastBytes < 5 || numFastBytes > 273)
    return false;
  this$static._numFastBytes = numFastBytes;
  return true;
}

function $WriteCoderProperties(this$static, outStream){
  var i;
  this$static.properties[0] = (this$static._posStateBits * 5 + this$static._numLiteralPosStateBits) * 9 + this$static._numLiteralContextBits << 24 >> 24;
  for (i = 0; i < 4; ++i)
    this$static.properties[1 + i] = this$static._dictionarySize >> 8 * i << 24 >> 24;
  $write_0(outStream, this$static.properties, 0, 5);
}

function $WriteEndMarker(this$static, posState){
  var lenToPosState;
  if (!this$static._writeEndMark)
    return;
  $Encode_3(this$static._rangeEncoder, this$static._isMatch, (this$static._state << 4) + posState, 1);
  $Encode_3(this$static._rangeEncoder, this$static._isRep, this$static._state, 0);
  this$static._state = this$static._state < 7?7:10;
  $Encode_0(this$static._lenEncoder, this$static._rangeEncoder, 0, posState);
  lenToPosState = GetLenToPosState(2);
  $Encode_2(this$static._posSlotEncoder[lenToPosState], this$static._rangeEncoder, 63);
  $EncodeDirectBits(this$static._rangeEncoder, 67108863, 26);
  $ReverseEncode(this$static._posAlignEncoder, this$static._rangeEncoder, 15);
}

function GetPosSlot(pos){
  if (pos < 2048)
    return g_FastPos[pos];
  if (pos < 2097152)
    return g_FastPos[pos >> 10] + 20;
  return g_FastPos[pos >> 20] + 40;
}

function GetPosSlot2(pos){
  if (pos < 131072)
    return g_FastPos[pos >> 6] + 12;
  if (pos < 134217728)
    return g_FastPos[pos >> 16] + 32;
  return g_FastPos[pos >> 26] + 52;
}

function getClass_106(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder_2_classLit;
}

function Encoder(){
}

_ = Encoder.prototype = new Object_0();
_.getClass$ = getClass_106;
_.typeId$ = 0;
_._additionalOffset = 0;
_._alignPriceCount = 0;
_._dictionarySize = 4194304;
_._dictionarySizePrev = -1;
_._distTableSize = 44;
_._finished = false;
_._inStream = null;
_._longestMatchLength = 0;
_._longestMatchWasFound = false;
_._matchFinder = null;
_._matchFinderType = 1;
_._matchPriceCount = 0;
_._needReleaseMFStream = false;
_._numDistancePairs = 0;
_._numFastBytes = 32;
_._numFastBytesPrev = -1;
_._numLiteralContextBits = 3;
_._numLiteralPosStateBits = 0;
_._optimumCurrentIndex = 0;
_._optimumEndIndex = 0;
_._posStateBits = 2;
_._posStateMask = 3;
_._previousByte = 0;
_._state = 0;
_._writeEndMark = false;
_.backRes = 0;
_.nowPos64 = P0_longLit;
var g_FastPos;
function $Encode(this$static, rangeEncoder, symbol, posState){
  if (symbol < 8) {
    $Encode_3(rangeEncoder, this$static._choice, 0, 0);
    $Encode_2(this$static._lowCoder[posState], rangeEncoder, symbol);
  }
   else {
    symbol -= 8;
    $Encode_3(rangeEncoder, this$static._choice, 0, 1);
    if (symbol < 8) {
      $Encode_3(rangeEncoder, this$static._choice, 1, 0);
      $Encode_2(this$static._midCoder[posState], rangeEncoder, symbol);
    }
     else {
      $Encode_3(rangeEncoder, this$static._choice, 1, 1);
      $Encode_2(this$static._highCoder, rangeEncoder, symbol - 8);
    }
  }
}

function $Encoder$LenEncoder(this$static){
  var posState;
  this$static._choice = initDim(_3S_classLit, 0, -1, 2, 1);
  this$static._lowCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit, 0, 13, 16, 0);
  this$static._midCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit, 0, 13, 16, 0);
  this$static._highCoder = $BitTreeEncoder(new BitTreeEncoder(), 8);
  for (posState = 0; posState < 16; ++posState) {
    this$static._lowCoder[posState] = $BitTreeEncoder(new BitTreeEncoder(), 3);
    this$static._midCoder[posState] = $BitTreeEncoder(new BitTreeEncoder(), 3);
  }
  return this$static;
}

function $Init_2(this$static, numPosStates){
  var posState;
  InitBitModels_0(this$static._choice);
  for (posState = 0; posState < numPosStates; ++posState) {
    InitBitModels(this$static._lowCoder[posState].Models);
    InitBitModels(this$static._midCoder[posState].Models);
  }
  InitBitModels(this$static._highCoder.Models);
}

function $SetPrices(this$static, posState, numSymbols, prices, st){
  var a0, a1, b0, b1, i;
  a0 = ($clinit_216() , ProbPrices[this$static._choice[0] >>> 2]);
  a1 = ProbPrices[2048 - this$static._choice[0] >>> 2];
  b0 = a1 + ProbPrices[this$static._choice[1] >>> 2];
  b1 = a1 + ProbPrices[2048 - this$static._choice[1] >>> 2];
  i = 0;
  for (i = 0; i < 8; ++i) {
    if (i >= numSymbols)
      return;
    prices[st + i] = a0 + $GetPrice_1(this$static._lowCoder[posState], i);
  }
  for (; i < 16; ++i) {
    if (i >= numSymbols)
      return;
    prices[st + i] = b0 + $GetPrice_1(this$static._midCoder[posState], i - 8);
  }
  for (; i < numSymbols; ++i)
    prices[st + i] = b1 + $GetPrice_1(this$static._highCoder, i - 8 - 8);
}

function getClass_101(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenEncoder_2_classLit;
}

function Encoder$LenEncoder(){
}

_ = Encoder$LenEncoder.prototype = new Object_0();
_.getClass$ = getClass_101;
_.typeId$ = 0;
function $Encode_0(this$static, rangeEncoder, symbol, posState){
  $Encode(this$static, rangeEncoder, symbol, posState);
  if (--this$static._counters[posState] == 0) {
    $SetPrices(this$static, posState, this$static._tableSize, this$static._prices, posState * 272);
    this$static._counters[posState] = this$static._tableSize;
  }
}

function $Encoder$LenPriceTableEncoder(this$static){
  $Encoder$LenEncoder(this$static);
  this$static._prices = initDim(_3I_classLit, 0, -1, 4352, 1);
  this$static._counters = initDim(_3I_classLit, 0, -1, 16, 1);
  return this$static;
}

function $GetPrice(this$static, symbol, posState){
  return this$static._prices[posState * 272 + symbol];
}

function $UpdateTables(this$static, numPosStates){
  var posState;
  for (posState = 0; posState < numPosStates; ++posState) {
    $SetPrices(this$static, posState, this$static._tableSize, this$static._prices, posState * 272);
    this$static._counters[posState] = this$static._tableSize;
  }
}

function getClass_102(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenPriceTableEncoder_2_classLit;
}

function Encoder$LenPriceTableEncoder(){
}

_ = Encoder$LenPriceTableEncoder.prototype = new Encoder$LenEncoder();
_.getClass$ = getClass_102;
_.typeId$ = 0;
_._tableSize = 0;
function $Create_1(this$static, numPosBits, numPrevBits){
  var i, numStates;
  if (this$static.m_Coders != null && this$static.m_NumPrevBits == numPrevBits && this$static.m_NumPosBits == numPosBits)
    return;
  this$static.m_NumPosBits = numPosBits;
  this$static.m_PosMask = (1 << numPosBits) - 1;
  this$static.m_NumPrevBits = numPrevBits;
  numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
  this$static.m_Coders = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit, 0, 10, numStates, 0);
  for (i = 0; i < numStates; ++i)
    this$static.m_Coders[i] = $Encoder$LiteralEncoder$Encoder2(new Encoder$LiteralEncoder$Encoder2());
}

function $GetSubCoder(this$static, pos, prevByte){
  return this$static.m_Coders[((pos & this$static.m_PosMask) << this$static.m_NumPrevBits) + ((prevByte & 255) >>> 8 - this$static.m_NumPrevBits)];
}

function $Init_3(this$static){
  var i, numStates;
  numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
  for (i = 0; i < numStates; ++i)
    InitBitModels_0(this$static.m_Coders[i].m_Encoders);
}

function getClass_104(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder_2_classLit;
}

function Encoder$LiteralEncoder(){
}

_ = Encoder$LiteralEncoder.prototype = new Object_0();
_.getClass$ = getClass_104;
_.typeId$ = 0;
_.m_Coders = null;
_.m_NumPosBits = 0;
_.m_NumPrevBits = 0;
_.m_PosMask = 0;
function $Encode_1(this$static, rangeEncoder, symbol){
  var bit, context, i;
  context = 1;
  for (i = 7; i >= 0; --i) {
    bit = symbol >> i & 1;
    $Encode_3(rangeEncoder, this$static.m_Encoders, context, bit);
    context = context << 1 | bit;
  }
}

function $EncodeMatched(this$static, rangeEncoder, matchByte, symbol){
  var bit, context, i, matchBit, same, state;
  context = 1;
  same = true;
  for (i = 7; i >= 0; --i) {
    bit = symbol >> i & 1;
    state = context;
    if (same) {
      matchBit = matchByte >> i & 1;
      state += 1 + matchBit << 8;
      same = matchBit == bit;
    }
    $Encode_3(rangeEncoder, this$static.m_Encoders, state, bit);
    context = context << 1 | bit;
  }
}

function $Encoder$LiteralEncoder$Encoder2(this$static){
  this$static.m_Encoders = initDim(_3S_classLit, 0, -1, 768, 1);
  return this$static;
}

function $GetPrice_0(this$static, matchMode, matchByte, symbol){
  var bit, context, i, matchBit, price;
  price = 0;
  context = 1;
  i = 7;
  if (matchMode) {
    for (; i >= 0; --i) {
      matchBit = matchByte >> i & 1;
      bit = symbol >> i & 1;
      price += GetPrice(this$static.m_Encoders[(1 + matchBit << 8) + context], bit);
      context = context << 1 | bit;
      if (matchBit != bit) {
        --i;
        break;
      }
    }
  }
  for (; i >= 0; --i) {
    bit = symbol >> i & 1;
    price += GetPrice(this$static.m_Encoders[context], bit);
    context = context << 1 | bit;
  }
  return price;
}

function getClass_103(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit;
}

function Encoder$LiteralEncoder$Encoder2(){
}

_ = Encoder$LiteralEncoder$Encoder2.prototype = new Object_0();
_.getClass$ = getClass_103;
_.typeId$ = 61;
function $MakeAsChar(this$static){
  this$static.BackPrev = -1;
  this$static.Prev1IsChar = false;
}

function $MakeAsShortRep(this$static){
  this$static.BackPrev = 0;
  this$static.Prev1IsChar = false;
}

function getClass_105(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit;
}

function Encoder$Optimal(){
}

_ = Encoder$Optimal.prototype = new Object_0();
_.getClass$ = getClass_105;
_.typeId$ = 62;
_.BackPrev = 0;
_.BackPrev2 = 0;
_.Backs0 = 0;
_.Backs1 = 0;
_.Backs2 = 0;
_.Backs3 = 0;
_.PosPrev = 0;
_.PosPrev2 = 0;
_.Prev1IsChar = false;
_.Prev2 = false;
_.Price = 0;
_.State = 0;
function $BitTreeDecoder(this$static, numBitLevels){
  this$static.NumBitLevels = numBitLevels;
  this$static.Models = initDim(_3S_classLit, 0, -1, 1 << numBitLevels, 1);
  return this$static;
}

function $Decode_0(this$static, rangeDecoder){
  var bitIndex, m;
  m = 1;
  for (bitIndex = this$static.NumBitLevels; bitIndex != 0; --bitIndex)
    m = (m << 1) + $DecodeBit(rangeDecoder, this$static.Models, m);
  return m - (1 << this$static.NumBitLevels);
}

function $ReverseDecode(this$static, rangeDecoder){
  var bit, bitIndex, m, symbol;
  m = 1;
  symbol = 0;
  for (bitIndex = 0; bitIndex < this$static.NumBitLevels; ++bitIndex) {
    bit = $DecodeBit(rangeDecoder, this$static.Models, m);
    m <<= 1;
    m += bit;
    symbol |= bit << bitIndex;
  }
  return symbol;
}

function ReverseDecode(Models, startIndex, rangeDecoder, NumBitLevels){
  var bit, bitIndex, m, symbol;
  m = 1;
  symbol = 0;
  for (bitIndex = 0; bitIndex < NumBitLevels; ++bitIndex) {
    bit = $DecodeBit(rangeDecoder, Models, startIndex + m);
    m <<= 1;
    m += bit;
    symbol |= bit << bitIndex;
  }
  return symbol;
}

function getClass_110(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit;
}

function BitTreeDecoder(){
}

_ = BitTreeDecoder.prototype = new Object_0();
_.getClass$ = getClass_110;
_.typeId$ = 63;
_.Models = null;
_.NumBitLevels = 0;
function $BitTreeEncoder(this$static, numBitLevels){
  this$static.NumBitLevels = numBitLevels;
  this$static.Models = initDim(_3S_classLit, 0, -1, 1 << numBitLevels, 1);
  return this$static;
}

function $Encode_2(this$static, rangeEncoder, symbol){
  var bit, bitIndex, m;
  m = 1;
  for (bitIndex = this$static.NumBitLevels; bitIndex != 0;) {
    --bitIndex;
    bit = symbol >>> bitIndex & 1;
    $Encode_3(rangeEncoder, this$static.Models, m, bit);
    m = m << 1 | bit;
  }
}

function $GetPrice_1(this$static, symbol){
  var bit, bitIndex, m, price;
  price = 0;
  m = 1;
  for (bitIndex = this$static.NumBitLevels; bitIndex != 0;) {
    --bitIndex;
    bit = symbol >>> bitIndex & 1;
    price += GetPrice(this$static.Models[m], bit);
    m = (m << 1) + bit;
  }
  return price;
}

function $ReverseEncode(this$static, rangeEncoder, symbol){
  var bit, i, m;
  m = 1;
  for (i = 0; i < this$static.NumBitLevels; ++i) {
    bit = symbol & 1;
    $Encode_3(rangeEncoder, this$static.Models, m, bit);
    m = m << 1 | bit;
    symbol >>= 1;
  }
}

function $ReverseGetPrice(this$static, symbol){
  var bit, i, m, price;
  price = 0;
  m = 1;
  for (i = this$static.NumBitLevels; i != 0; --i) {
    bit = symbol & 1;
    symbol >>>= 1;
    price += GetPrice(this$static.Models[m], bit);
    m = m << 1 | bit;
  }
  return price;
}

function ReverseEncode(Models, startIndex, rangeEncoder, NumBitLevels, symbol){
  var bit, i, m;
  m = 1;
  for (i = 0; i < NumBitLevels; ++i) {
    bit = symbol & 1;
    $Encode_3(rangeEncoder, Models, startIndex + m, bit);
    m = m << 1 | bit;
    symbol >>= 1;
  }
}

function ReverseGetPrice(Models, startIndex, NumBitLevels, symbol){
  var bit, i, m, price;
  price = 0;
  m = 1;
  for (i = NumBitLevels; i != 0; --i) {
    bit = symbol & 1;
    symbol >>>= 1;
    price += ($clinit_216() , ProbPrices[((Models[startIndex + m] - bit ^ -bit) & 2047) >>> 2]);
    m = m << 1 | bit;
  }
  return price;
}

function getClass_111(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit;
}

function BitTreeEncoder(){
}

_ = BitTreeEncoder.prototype = new Object_0();
_.getClass$ = getClass_111;
_.typeId$ = 64;
_.Models = null;
_.NumBitLevels = 0;
function $DecodeBit(this$static, probs, index){
  var newBound, prob;
  prob = probs[index];
  newBound = (this$static.Range >>> 11) * prob;
  if ((this$static.Code ^ -2147483648) < (newBound ^ -2147483648)) {
    this$static.Range = newBound;
    probs[index] = prob + (2048 - prob >>> 5) << 16 >> 16;
    if ((this$static.Range & -16777216) == 0) {
      this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
      this$static.Range <<= 8;
    }
    return 0;
  }
   else {
    this$static.Range -= newBound;
    this$static.Code -= newBound;
    probs[index] = prob - (prob >>> 5) << 16 >> 16;
    if ((this$static.Range & -16777216) == 0) {
      this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
      this$static.Range <<= 8;
    }
    return 1;
  }
}

function $DecodeDirectBits(this$static, numTotalBits){
  var i, result, t;
  result = 0;
  for (i = numTotalBits; i != 0; --i) {
    this$static.Range >>>= 1;
    t = this$static.Code - this$static.Range >>> 31;
    this$static.Code -= this$static.Range & t - 1;
    result = result << 1 | 1 - t;
    if ((this$static.Range & -16777216) == 0) {
      this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
      this$static.Range <<= 8;
    }
  }
  return result;
}

function $Init_8(this$static){
  var i;
  this$static.Code = 0;
  this$static.Range = -1;
  for (i = 0; i < 5; ++i)
    this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
}

function InitBitModels(probs){
  var i;
  for (i = 0; i < probs.length; ++i)
    probs[i] = 1024;
}

function getClass_112(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Decoder_2_classLit;
}

function Decoder_0(){
}

_ = Decoder_0.prototype = new Object_0();
_.getClass$ = getClass_112;
_.typeId$ = 0;
_.Code = 0;
_.Range = 0;
_.Stream = null;
function $clinit_216(){
  $clinit_216 = nullMethod;
  var end, i, j, start;
  ProbPrices = initDim(_3I_classLit, 0, -1, 512, 1);
  for (i = 8; i >= 0; --i) {
    start = 1 << 9 - i - 1;
    end = 1 << 9 - i;
    for (j = start; j < end; ++j)
      ProbPrices[j] = (i << 6) + (end - j << 6 >>> 9 - i - 1);
  }
}

function $Encode_3(this$static, probs, index, symbol){
  var newBound, prob;
  prob = probs[index];
  newBound = (this$static.Range >>> 11) * prob;
  if (symbol == 0) {
    this$static.Range = newBound;
    probs[index] = prob + (2048 - prob >>> 5) << 16 >> 16;
  }
   else {
    this$static.Low = add(this$static.Low, and(fromInt(newBound), Pffffffff_longLit));
    this$static.Range -= newBound;
    probs[index] = prob - (prob >>> 5) << 16 >> 16;
  }
  if ((this$static.Range & -16777216) == 0) {
    this$static.Range <<= 8;
    $ShiftLow(this$static);
  }
}

function $EncodeDirectBits(this$static, v, numTotalBits){
  var i;
  for (i = numTotalBits - 1; i >= 0; --i) {
    this$static.Range >>>= 1;
    if ((v >>> i & 1) == 1)
      this$static.Low = add(this$static.Low, fromInt(this$static.Range));
    if ((this$static.Range & -16777216) == 0) {
      this$static.Range <<= 8;
      $ShiftLow(this$static);
    }
  }
}

function $FlushData(this$static){
  var i;
  for (i = 0; i < 5; ++i)
    $ShiftLow(this$static);
}

function $GetProcessedSizeAdd(this$static){
  return add(add(fromInt(this$static._cacheSize), this$static._position), P4_longLit);
}

function $Init_9(this$static){
  this$static._position = P0_longLit;
  this$static.Low = P0_longLit;
  this$static.Range = -1;
  this$static._cacheSize = 1;
  this$static._cache = 0;
}

function $ShiftLow(this$static){
  var LowHi, temp;
  LowHi = lowBits_0(shru(this$static.Low, 32));
  if (LowHi != 0 || compare_0(this$static.Low, Pff000000_longLit) < 0) {
    this$static._position = add(this$static._position, fromInt(this$static._cacheSize));
    temp = this$static._cache;
    do {
      $write(this$static.Stream, temp + LowHi);
      temp = 255;
    }
     while (--this$static._cacheSize != 0);
    this$static._cache = lowBits_0(this$static.Low) >>> 24;
  }
  ++this$static._cacheSize;
  this$static.Low = shl(and(this$static.Low, Pffffff_longLit), 8);
}

function GetPrice(Prob, symbol){
  $clinit_216();
  return ProbPrices[((Prob - symbol ^ -symbol) & 2047) >>> 2];
}

function InitBitModels_0(probs){
  $clinit_216();
  var i;
  for (i = 0; i < probs.length; ++i)
    probs[i] = 1024;
}

function getClass_113(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Encoder_2_classLit;
}

function Encoder_0(){
}

_ = Encoder_0.prototype = new Object_0();
_.getClass$ = getClass_113;
_.typeId$ = 0;
_.Low = P0_longLit;
_.Range = 0;
_.Stream = null;
_._cache = 0;
_._cacheSize = 0;
_._position = P0_longLit;
var ProbPrices;
function decode(utf){
  var buf, i, x, y, z;
  buf = $StringBuilder_0(new StringBuilder());
  for (i = 0; i < utf.length; ++i) {
    x = utf[i] & 255;
    if ((x & 128) == 0) {
      if (x == 0)
        throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
      $appendNonNull(buf.data, String.fromCharCode(x & 65535));
    }
     else if ((x & 224) == 192) {
      if (i + 1 >= utf.length)
        throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
      y = utf[++i] & 255;
      if ((y & 192) != 128)
        throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
      $append(buf.data, (x & 31) << 6 & 65535 | y & 63);
    }
     else if ((x & 240) == 224) {
      if (i + 2 >= utf.length)
        throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
      y = utf[++i] & 255;
      if ((y & 192) != 128)
        throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
      z = utf[++i] & 255;
      if ((z & 192) != 128)
        throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
      $appendNonNull(buf.data, String.fromCharCode(((x & 15) << 12 | (y & 63) << 6 | z & 63) & 65535));
    }
     else 
      throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
  }
  return $toString_0(buf.data);
}

function encode(s){
  var ch, chars, data, elen, i, charArr, n;
  chars = (n = s.length , charArr = initDim(_3C_classLit, 0, -1, n, 1) , $getChars(s, 0, n, charArr, 0) , charArr);
  elen = 0;
  for (i = 0; i < s.length; ++i) {
    ch = chars[i];
    if (ch >= 1 && ch <= 127)
      ++elen;
    else if (ch == 0 || ch >= 128 && ch <= 2047)
      elen += 2;
    else 
      elen += 3;
  }
  data = initDim(_3B_classLit, 0, -1, elen, 1);
  elen = 0;
  for (i = 0; i < s.length; ++i) {
    ch = chars[i];
    if (ch >= 1 && ch <= 127)
      data[elen++] = ch << 24 >> 24;
    else if (ch == 0 || ch >= 128 && ch <= 2047) {
      data[elen++] = (192 | ch >> 6 & 31) << 24 >> 24;
      data[elen++] = (128 | ch & 63) << 24 >> 24;
    }
     else {
      data[elen++] = (224 | ch >> 12 & 15) << 24 >> 24;
      data[elen++] = (128 | ch >> 6 & 63) << 24 >> 24;
      data[elen++] = (128 | ch & 63) << 24 >> 24;
    }
  }
  return data;
}

function $clinit_226(){
  $clinit_226 = nullMethod;
  DEFAULT_COMPRESSION_MODE = ($clinit_193() , MODE_1);
}

function $LZMADemo(this$static){
  $clinit_226();
  this$static.leftWindow = $TextArea(new TextArea());
  this$static.rightWindow = $TextArea(new TextArea());
  this$static.leftSizePanel = $SimplePanel(new SimplePanel());
  this$static.rightSizePanel = $SimplePanel(new SimplePanel());
  this$static.mode = DEFAULT_COMPRESSION_MODE;
  this$static.leftWindow.element.cols = 70;
  this$static.leftWindow.element.rows = 25;
  this$static.rightWindow.element.cols = 70;
  this$static.rightWindow.element.rows = 25;
  return this$static;
}

function $compress(this$static){
  this$static.rightWindow.element['value'] = '' != null?'':'';
  $updateSizes(this$static, false);
  $setWidget(this$static.rightSizePanel, $Label(new Label(), 'Compressing... 0%'));
  addCommand($LZMADemo$7(new LZMADemo$7(), this$static));
}

function $decompress(this$static){
  var data;
  this$static.leftWindow.element['value'] = '' != null?'':'';
  $updateSizes(this$static, false);
  data = $getRightData(this$static, true);
  if (data == null)
    return;
  $setWidget(this$static.leftSizePanel, $Label(new Label(), 'Decompressing... 0%'));
  addCommand($LZMADemo$8(new LZMADemo$8(), this$static, data));
}

function $getRightData(this$static, alert_0){
  var b, ch, digit, gothi, hinib, i, s;
  b = $ByteArrayOutputStream(new ByteArrayOutputStream());
  s = $getPropertyString(this$static.rightWindow.element, 'value');
  gothi = false;
  hinib = 0;
  for (i = 0; i < s.length; ++i) {
    ch = s.charCodeAt(i);
    if (' \t\f\n\r'.indexOf(fromCodePoint(ch)) != -1)
      continue;
    digit = digit_0(ch, 16);
    if (digit == -1) {
      if (alert_0) {
        $wnd.alert('invalid compressed input: invalid hex character `' + String.fromCharCode(ch) + "'");
      }
      return null;
    }
    if (gothi) {
      $ensureCapacity(b, b.count + 1);
      b.buf[b.count++] = (hinib << 4) + digit << 24 >> 24;
    }
     else 
      hinib = digit;
    gothi = !gothi;
  }
  if (gothi) {
    if (alert_0) {
      $wnd.alert('invalid compressed input: odd number of digits');
    }
    return null;
  }
  return $toByteArray(b);
}

function $onModuleLoad(this$static){
  var compressButton, compressClearButton, decompressButton, decompressClearButton, hPanel, i, leftBottom, leftPanel, modeBox, rightBottom, rightPanel;
  sUncaughtExceptionHandler = new LZMADemo$1();
  compressButton = $Button_0(new Button(), 'Compress', $LZMADemo$2(new LZMADemo$2(), this$static));
  compressClearButton = $Button_0(new Button(), 'Clear', $LZMADemo$3(new LZMADemo$3(), this$static));
  modeBox = $ListBox(new ListBox());
  for (i = 1; i <= 9; ++i)
    $insertItem(modeBox, 'Level ' + i, '' + i, -1);
  modeBox.element.selectedIndex = DEFAULT_COMPRESSION_MODE.level - 1;
  $addDomHandler(modeBox, $LZMADemo$4(new LZMADemo$4(), this$static, modeBox), ($clinit_20() , TYPE));
  leftBottom = $HorizontalPanel(new HorizontalPanel());
  $add_1(leftBottom, modeBox);
  $add_1(leftBottom, compressButton);
  $add_1(leftBottom, compressClearButton);
  $add_1(leftBottom, this$static.leftSizePanel);
  decompressButton = $Button_0(new Button(), 'Decompress', $LZMADemo$5(new LZMADemo$5(), this$static));
  decompressClearButton = $Button_0(new Button(), 'Clear', $LZMADemo$6(new LZMADemo$6(), this$static));
  rightBottom = $HorizontalPanel(new HorizontalPanel());
  $add_1(rightBottom, decompressButton);
  $add_1(rightBottom, decompressClearButton);
  $add_1(rightBottom, this$static.rightSizePanel);
  leftPanel = $VerticalPanel(new VerticalPanel());
  setStylePrimaryName(leftPanel.element, 'demo-panel');
  $add_2(leftPanel, this$static.leftWindow);
  $add_2(leftPanel, leftBottom);
  rightPanel = $VerticalPanel(new VerticalPanel());
  setStylePrimaryName(rightPanel.element, 'demo-panel');
  $add_2(rightPanel, this$static.rightWindow);
  $add_2(rightPanel, rightBottom);
  hPanel = $HorizontalPanel(new HorizontalPanel());
  hPanel.table['cellSpacing'] = 5;
  $add_1(hPanel, leftPanel);
  $add_1(hPanel, rightPanel);
  $add(($clinit_115() , get_0(null)), hPanel);
}

function $prettyPrint(data){
  var b, buf, i;
  buf = $StringBuilder(new StringBuilder());
  for (i = 0; i < data.length; ++i) {
    b = data[i] & 255;
    $append_2(buf, forDigit(b >> 4, 16));
    $append_2(buf, forDigit(b & 15, 16));
    $appendNonNull(buf.data, String.fromCharCode(i % 16 == 15?10:32));
  }
  return $toString_0(buf.data);
}

function $updateSizes(this$static, pcent){
  var rd, s, uc;
  uc = $getPropertyString(this$static.leftWindow.element, 'value').length;
  $setWidget(this$static.leftSizePanel, $Label(new Label(), uc + ' bytes'));
  rd = $getRightData(this$static, false);
  s = rd != null?rd.length + ' bytes' + (pcent && uc > 0?' (' + ~~((rd.length * 100 + 99) / uc) + '%)':''):'invalid hex input';
  $setWidget(this$static.rightSizePanel, $Label(new Label(), s));
}

function getClass_122(){
  return Lorg_dellroad_lzma_demo_client_LZMADemo_2_classLit;
}

function LZMADemo(){
}

_ = LZMADemo.prototype = new Object_0();
_.getClass$ = getClass_122;
_.typeId$ = 0;
var DEFAULT_COMPRESSION_MODE;
function getClass_114(){
  return Lorg_dellroad_lzma_demo_client_LZMADemo$1_2_classLit;
}

function LZMADemo$1(){
}

_ = LZMADemo$1.prototype = new Object_0();
_.getClass$ = getClass_114;
_.typeId$ = 0;
function $LZMADemo$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_115(){
  return Lorg_dellroad_lzma_demo_client_LZMADemo$2_2_classLit;
}

function onClick(e){
  $compress(this.this$0);
}

function LZMADemo$2(){
}

_ = LZMADemo$2.prototype = new Object_0();
_.getClass$ = getClass_115;
_.onClick = onClick;
_.typeId$ = 65;
_.this$0 = null;
function $LZMADemo$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_116(){
  return Lorg_dellroad_lzma_demo_client_LZMADemo$3_2_classLit;
}

function onClick_0(e){
  this.this$0.leftWindow.element['value'] = '' != null?'':'';
  $updateSizes(this.this$0, false);
}

function LZMADemo$3(){
}

_ = LZMADemo$3.prototype = new Object_0();
_.getClass$ = getClass_116;
_.onClick = onClick_0;
_.typeId$ = 66;
_.this$0 = null;
function $LZMADemo$4(this$static, this$0, val$modeBox){
  this$static.this$0 = this$0;
  this$static.val$modeBox = val$modeBox;
  return this$static;
}

function getClass_117(){
  return Lorg_dellroad_lzma_demo_client_LZMADemo$4_2_classLit;
}

function LZMADemo$4(){
}

_ = LZMADemo$4.prototype = new Object_0();
_.getClass$ = getClass_117;
_.typeId$ = 67;
_.this$0 = null;
_.val$modeBox = null;
function $LZMADemo$5(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_118(){
  return Lorg_dellroad_lzma_demo_client_LZMADemo$5_2_classLit;
}

function onClick_1(e){
  $decompress(this.this$0);
}

function LZMADemo$5(){
}

_ = LZMADemo$5.prototype = new Object_0();
_.getClass$ = getClass_118;
_.onClick = onClick_1;
_.typeId$ = 68;
_.this$0 = null;
function $LZMADemo$6(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_119(){
  return Lorg_dellroad_lzma_demo_client_LZMADemo$6_2_classLit;
}

function onClick_2(e){
  this.this$0.rightWindow.element['value'] = '' != null?'':'';
  $updateSizes(this.this$0, false);
}

function LZMADemo$6(){
}

_ = LZMADemo$6.prototype = new Object_0();
_.getClass$ = getClass_119;
_.onClick = onClick_2;
_.typeId$ = 69;
_.this$0 = null;
function $LZMADemo$7(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function execute_1(){
  var pcent;
  if (!this.c) {
    this.c = $LZMAByteArrayCompressor(new LZMAByteArrayCompressor(), encode($getPropertyString(this.this$0.leftWindow.element, 'value')), this.this$0.mode);
    return true;
  }
  if ($execute(this.c)) {
    pcent = ~~Math.max(Math.min($getProgress(this.c) * 100, 2147483647), -2147483648);
    $setWidget(this.this$0.rightSizePanel, $Label(new Label(), 'Compressing... ' + pcent + '%'));
    return true;
  }
  $setText_1(this.this$0.rightWindow, $prettyPrint($toByteArray(this.c.output)));
  $updateSizes(this.this$0, true);
  return false;
}

function getClass_120(){
  return Lorg_dellroad_lzma_demo_client_LZMADemo$7_2_classLit;
}

function LZMADemo$7(){
}

_ = LZMADemo$7.prototype = new Object_0();
_.execute = execute_1;
_.getClass$ = getClass_120;
_.typeId$ = 70;
_.c = null;
_.this$0 = null;
function $LZMADemo$8(this$static, this$0, val$data){
  this$static.this$0 = this$0;
  this$static.val$data = val$data;
  return this$static;
}

function execute_2(){
  var $e0, e, ioe, pcent, text;
  if (!this.d) {
    try {
      this.d = $LZMAByteArrayDecompressor(new LZMAByteArrayDecompressor(), this.val$data);
    }
     catch ($e0) {
      $e0 = caught($e0);
      if (instanceOf($e0, 24)) {
        e = $e0;
        $setWidget(this.this$0.leftSizePanel, $Label(new Label(), 'Decompression failed: ' + e.detailMessage));
        return false;
      }
       else 
        throw $e0;
    }
    return true;
  }
  if ($execute_0(this.d)) {
    pcent = ~~Math.max(Math.min($getProgress_0(this.d) * 100, 2147483647), -2147483648);
    $setWidget(this.this$0.leftSizePanel, $Label(new Label(), 'Decompressing... ' + pcent + '%'));
    return true;
  }
  ioe = this.d.exception;
  if (ioe) {
    $setWidget(this.this$0.leftSizePanel, $Label(new Label(), 'Decompression failed: ' + ioe.detailMessage));
    return false;
  }
  try {
    text = decode($toByteArray(this.d.output));
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 25)) {
      e = $e0;
      $setWidget(this.this$0.leftSizePanel, $Label(new Label(), 'Decompression failed: ' + e.detailMessage));
      return false;
    }
     else 
      throw $e0;
  }
  $setText_1(this.this$0.leftWindow, text);
  $updateSizes(this.this$0, true);
  return false;
}

function getClass_121(){
  return Lorg_dellroad_lzma_demo_client_LZMADemo$8_2_classLit;
}

function LZMADemo$8(){
}

_ = LZMADemo$8.prototype = new Object_0();
_.execute = execute_2;
_.getClass$ = getClass_121;
_.typeId$ = 71;
_.d = null;
_.this$0 = null;
_.val$data = null;
function init(){
  !!$stats && $stats({moduleName:$moduleName, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date()).getTime(), type:'onModuleLoadStart', className:'org.dellroad.lzma.demo.client.LZMADemo'});
  $onModuleLoad($LZMADemo(new LZMADemo()));
}

function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      init();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    init();
  }
}

function nullMethod(){
}

var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object'), Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer'), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable'), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception'), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException'), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException'), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$'), Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImpl'), Lcom_google_gwt_dom_client_DOMImplTrident_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplTrident'), Lcom_google_gwt_dom_client_DOMImplIE8_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplIE8'), Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent'), Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent'), Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ChangeEvent'), Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ClickEvent'), Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent$Type'), Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent$Type'), Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'PrivateMap'), Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'CloseEvent'), Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit = createForClass('com.google.gwt.event.shared.', 'DefaultHandlerRegistration'), Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager'), Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$HandlerRegistry'), Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$1'), Ljava_lang_Enum_2_classLit = createForClass('java.lang.', 'Enum'), _3_3D_classLit = createForArray('', '[[D'), Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'UIObject'), Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Widget'), Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Panel'), Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ComplexPanel'), Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbsolutePanel'), Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusWidget'), Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ButtonBase'), Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Button'), Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CellPanel'), Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel'), _3Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'Widget;'), Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Label'), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$HorizontalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasVerticalAlignment$VerticalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalPanel'), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection'), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList'), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList'), Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListBox'), _3C_classLit = createForArray('', '[C'), Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$DefaultRootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$1'), Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel$1'), Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBoxBase'), Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextArea'), Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'VerticalPanel'), Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection'), Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection$WidgetIterator'), Lcom_google_gwt_user_client_CommandExecutor_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor'), Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$CircularIterator'), Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$1'), Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$2'), Lcom_google_gwt_user_client_IncrementalCommandCanceledException_2_classLit = createForClass('com.google.gwt.user.client.', 'IncrementalCommandCanceledException'), Lcom_google_gwt_user_client_Timer$1_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer$1'), Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$ClosingEvent'), Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$WindowHandlers'), Ljava_io_InputStream_2_classLit = createForClass('java.io.', 'InputStream'), Ljava_io_ByteArrayInputStream_2_classLit = createForClass('java.io.', 'ByteArrayInputStream'), _3B_classLit = createForArray('', '[B'), Ljava_io_OutputStream_2_classLit = createForClass('java.io.', 'OutputStream'), Ljava_io_ByteArrayOutputStream_2_classLit = createForClass('java.io.', 'ByteArrayOutputStream'), Ljava_io_IOException_2_classLit = createForClass('java.io.', 'IOException'), Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang.', 'ArithmeticException'), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException'), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException'), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class'), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException'), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException'), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException'), _3I_classLit = createForArray('', '[I'), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException'), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String'), Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang.', 'StringBuffer'), Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang.', 'StringBuilder'), Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang.', 'UnsupportedOperationException'), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;'), Ljava_util_AbstractMap_2_classLit = createForClass('java.util.', 'AbstractMap'), Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util.', 'AbstractHashMap'), Ljava_util_AbstractSet_2_classLit = createForClass('java.util.', 'AbstractSet'), Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySet'), Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySetIterator'), Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util.', 'AbstractMapEntry'), Ljava_util_AbstractHashMap$MapEntryNull_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryNull'), Ljava_util_AbstractHashMap$MapEntryString_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryString'), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl'), Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util.', 'AbstractMap$1'), Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util.', 'AbstractMap$1$1'), Ljava_util_HashMap_2_classLit = createForClass('java.util.', 'HashMap'), Ljava_util_HashSet_2_classLit = createForClass('java.util.', 'HashSet'), Ljava_util_MapEntryImpl_2_classLit = createForClass('java.util.', 'MapEntryImpl'), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_InWindow_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZ.', 'InWindow'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_BinTree_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZ.', 'BinTree'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_OutWindow_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZ.', 'OutWindow'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Chunker_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Chunker'), _3S_classLit = createForArray('', '[S'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeDecoder;'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LenDecoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LenDecoder'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LiteralDecoder$Decoder2;'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LiteralDecoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LiteralDecoder$Decoder2'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$Optimal;'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeEncoder;'), _3J_classLit = createForArray('', '[J'), _3Z_classLit = createForArray('', '[Z'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LiteralEncoder$Encoder2;'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LiteralEncoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LiteralEncoder$Encoder2'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LenEncoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenPriceTableEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LenPriceTableEncoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$Optimal'), Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeDecoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeEncoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Decoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'Decoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Encoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'Encoder'), Lorg_dellroad_lzma_client_CompressionMode_2_classLit = createForEnum('org.dellroad.lzma.client.', 'CompressionMode'), Lorg_dellroad_lzma_client_LZMACompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMACompressor'), Lorg_dellroad_lzma_client_LZMAByteArrayCompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMAByteArrayCompressor'), Lorg_dellroad_lzma_client_LZMADecompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMADecompressor'), Lorg_dellroad_lzma_client_LZMAByteArrayDecompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMAByteArrayDecompressor'), Lorg_dellroad_lzma_demo_client_LZMADemo_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo'), Lorg_dellroad_lzma_demo_client_LZMADemo$1_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo$1'), Lorg_dellroad_lzma_demo_client_LZMADemo$2_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo$2'), Lorg_dellroad_lzma_demo_client_LZMADemo$3_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo$3'), Lorg_dellroad_lzma_demo_client_LZMADemo$4_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo$4'), Lorg_dellroad_lzma_demo_client_LZMADemo$5_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo$5'), Lorg_dellroad_lzma_demo_client_LZMADemo$6_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo$6'), Lorg_dellroad_lzma_demo_client_LZMADemo$7_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo$7'), Lorg_dellroad_lzma_demo_client_LZMADemo$8_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo$8');

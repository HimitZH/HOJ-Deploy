/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-512, as defined
 * in FIPS 180-2
 * Version 2.2 Copyright Anonymous Contributor, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 * http://www.sharejs.com/codes
 */
 
/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
 
/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_sha512(s)    { return rstr2hex(rstr_sha512(str2rstr_utf8(s))); }
function b64_sha512(s)    { return rstr2b64(rstr_sha512(str2rstr_utf8(s))); }
function any_sha512(s, e) { return rstr2any(rstr_sha512(str2rstr_utf8(s)), e);}
function hex_hmac_sha512(k, d)
  { return rstr2hex(rstr_hmac_sha512(str2rstr_utf8(k), str2rstr_utf8(d))); }
function b64_hmac_sha512(k, d)
  { return rstr2b64(rstr_hmac_sha512(str2rstr_utf8(k), str2rstr_utf8(d))); }
function any_hmac_sha512(k, d, e)
  { return rstr2any(rstr_hmac_sha512(str2rstr_utf8(k), str2rstr_utf8(d)), e);}
 
/*
 * Perform a simple self-test to see if the VM is working
 */
function sha512_vm_test()
{
  return hex_sha512("abc").toLowerCase() ==
    "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a" +
    "2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f";
}
 
/*
 * Calculate the SHA-512 of a raw string
 */
function rstr_sha512(s)
{
  return binb2rstr(binb_sha512(rstr2binb(s), s.length * 8));
}
 
/*
 * Calculate the HMAC-SHA-512 of a key and some data (raw strings)
 */
function rstr_hmac_sha512(key, data)
{
  var bkey = rstr2binb(key);
  if(bkey.length > 32) bkey = binb_sha512(bkey, key.length * 8);
 
  var ipad = Array(32), opad = Array(32);
  for(var i = 0; i < 32; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }
 
  var hash = binb_sha512(ipad.concat(rstr2binb(data)), 1024 + data.length * 8);
  return binb2rstr(binb_sha512(opad.concat(hash), 1024 + 512));
}
 
/*
 * Convert a raw string to a hex string
 */
function rstr2hex(input)
{
  try { hexcase } catch(e) { hexcase=0; }
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var output = "";
  var x;
  for(var i = 0; i < input.length; i++)
  {
    x = input.charCodeAt(i);
    output += hex_tab.charAt((x >>> 4) & 0x0F)
           +  hex_tab.charAt( x        & 0x0F);
  }
  return output;
}
 
/*
 * Convert a raw string to a base-64 string
 */
function rstr2b64(input)
{
  try { b64pad } catch(e) { b64pad=''; }
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var output = "";
  var len = input.length;
  for(var i = 0; i < len; i += 3)
  {
    var triplet = (input.charCodeAt(i) << 16)
                | (i + 1 < len ? input.charCodeAt(i+1) << 8 : 0)
                | (i + 2 < len ? input.charCodeAt(i+2)      : 0);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > input.length * 8) output += b64pad;
      else output += tab.charAt((triplet >>> 6*(3-j)) & 0x3F);
    }
  }
  return output;
}
 
/*
 * Convert a raw string to an arbitrary string encoding
 */
function rstr2any(input, encoding)
{
  var divisor = encoding.length;
  var i, j, q, x, quotient;
 
  /* Convert to an array of 16-bit big-endian values, forming the dividend */
  var dividend = Array(Math.ceil(input.length / 2));
  for(i = 0; i < dividend.length; i++)
  {
    dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
  }
 
  /*
   * Repeatedly perform a long division. The binary array forms the dividend,
   * the length of the encoding is the divisor. Once computed, the quotient
   * forms the dividend for the next step. All remainders are stored for later
   * use.
   */
  var full_length = Math.ceil(input.length * 8 /
                                    (Math.log(encoding.length) / Math.log(2)));
  var remainders = Array(full_length);
  for(j = 0; j < full_length; j++)
  {
    quotient = Array();
    x = 0;
    for(i = 0; i < dividend.length; i++)
    {
      x = (x << 16) + dividend[i];
      q = Math.floor(x / divisor);
      x -= q * divisor;
      if(quotient.length > 0 || q > 0)
        quotient[quotient.length] = q;
    }
    remainders[j] = x;
    dividend = quotient;
  }
 
  /* Convert the remainders to the output string */
  var output = "";
  for(i = remainders.length - 1; i >= 0; i--)
    output += encoding.charAt(remainders[i]);
 
  return output;
}
 
/*
 * Encode a string as utf-8.
 * For efficiency, this assumes the input is valid utf-16.
 */
function str2rstr_utf8(input)
{
  var output = "";
  var i = -1;
  var x, y;
 
  while(++i < input.length)
  {
    /* Decode utf-16 surrogate pairs */
    x = input.charCodeAt(i);
    y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
    if(0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF)
    {
      x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
      i++;
    }
 
    /* Encode output as utf-8 */
    if(x <= 0x7F)
      output += String.fromCharCode(x);
    else if(x <= 0x7FF)
      output += String.fromCharCode(0xC0 | ((x >>> 6 ) & 0x1F),
                                    0x80 | ( x         & 0x3F));
    else if(x <= 0xFFFF)
      output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                                    0x80 | ((x >>> 6 ) & 0x3F),
                                    0x80 | ( x         & 0x3F));
    else if(x <= 0x1FFFFF)
      output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                                    0x80 | ((x >>> 12) & 0x3F),
                                    0x80 | ((x >>> 6 ) & 0x3F),
                                    0x80 | ( x         & 0x3F));
  }
  return output;
}
 
/*
 * Encode a string as utf-16
 */
function str2rstr_utf16le(input)
{
  var output = "";
  for(var i = 0; i < input.length; i++)
    output += String.fromCharCode( input.charCodeAt(i)        & 0xFF,
                                  (input.charCodeAt(i) >>> 8) & 0xFF);
  return output;
}
 
function str2rstr_utf16be(input)
{
  var output = "";
  for(var i = 0; i < input.length; i++)
    output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF,
                                   input.charCodeAt(i)        & 0xFF);
  return output;
}
 
/*
 * Convert a raw string to an array of big-endian words
 * Characters >255 have their high-byte silently ignored.
 */
function rstr2binb(input)
{
  var output = Array(input.length >> 2);
  for(var i = 0; i < output.length; i++)
    output[i] = 0;
  for(var i = 0; i < input.length * 8; i += 8)
    output[i>>5] |= (input.charCodeAt(i / 8) & 0xFF) << (24 - i % 32);
  return output;
}
 
/*
 * Convert an array of big-endian words to a string
 */
function binb2rstr(input)
{
  var output = "";
  for(var i = 0; i < input.length * 32; i += 8)
    output += String.fromCharCode((input[i>>5] >>> (24 - i % 32)) & 0xFF);
  return output;
}
 
/*
 * Calculate the SHA-512 of an array of big-endian dwords, and a bit length
 */
var sha512_k;
function binb_sha512(x, len)
{
  if(sha512_k == undefined)
  {
    //SHA512 constants
    sha512_k = new Array(
new int64(0x428a2f98, -685199838), new int64(0x71374491, 0x23ef65cd),
new int64(-1245643825, -330482897), new int64(-373957723, -2121671748),
new int64(0x3956c25b, -213338824), new int64(0x59f111f1, -1241133031),
new int64(-1841331548, -1357295717), new int64(-1424204075, -630357736),
new int64(-670586216, -1560083902), new int64(0x12835b01, 0x45706fbe),
new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, -704662302),
new int64(0x72be5d74, -226784913), new int64(-2132889090, 0x3b1696b1),
new int64(-1680079193, 0x25c71235), new int64(-1046744716, -815192428),
new int64(-459576895, -1628353838), new int64(-272742522, 0x384f25e3),
new int64(0xfc19dc6, -1953704523), new int64(0x240ca1cc, 0x77ac9c65),
new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483),
new int64(0x5cb0a9dc, -1119749164), new int64(0x76f988da, -2096016459),
new int64(-1740746414, -295247957), new int64(-1473132947, 0x2db43210),
new int64(-1341970488, -1728372417), new int64(-1084653625, -1091629340),
new int64(-958395405, 0x3da88fc2), new int64(-710438585, -1828018395),
new int64(0x6ca6351, -536640913), new int64(0x14292967, 0xa0e6e70),
new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926),
new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, -1651133473),
new int64(0x650a7354, -1951439906), new int64(0x766a0abb, 0x3c77b2a8),
new int64(-2117940946, 0x47edaee6), new int64(-1838011259, 0x1482353b),
new int64(-1564481375, 0x4cf10364), new int64(-1474664885, -1136513023),
new int64(-1035236496, -789014639), new int64(-949202525, 0x654be30),
new int64(-778901479, -688958952), new int64(-694614492, 0x5565a910),
new int64(-200395387, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8),
new int64(0x19a4c116, -1194143544), new int64(0x1e376c08, 0x5141ab53),
new int64(0x2748774c, -544281703), new int64(0x34b0bcb5, -509917016),
new int64(0x391c0cb3, -976659869), new int64(0x4ed8aa4a, -482243893),
new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, -692930397),
new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60),
new int64(-2067236844, -1578062990), new int64(-1933114872, 0x1a6439ec),
new int64(-1866530822, 0x23631e28), new int64(-1538233109, -561857047),
new int64(-1090935817, -1295615723), new int64(-965641998, -479046869),
new int64(-903397682, -366583396), new int64(-779700025, 0x21c0c207),
new int64(-354779690, -840897762), new int64(-176337025, -294727304),
new int64(0x6f067aa, 0x72176fba), new int64(0xa637dc5, -1563912026),
new int64(0x113f9804, -1090974290), new int64(0x1b710b35, 0x131c471b),
new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493),
new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, -1676669620),
new int64(0x4cc5d4be, -885112138), new int64(0x597f299c, -60457430),
new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817));
  }
 
  //Initial hash values
  var H = new Array(
new int64(0x6a09e667, -205731576),
new int64(-1150833019, -2067093701),
new int64(0x3c6ef372, -23791573),
new int64(-1521486534, 0x5f1d36f1),
new int64(0x510e527f, -1377402159),
new int64(-1694144372, 0x2b3e6c1f),
new int64(0x1f83d9ab, -79577749),
new int64(0x5be0cd19, 0x137e2179));
 
  var T1 = new int64(0, 0),
    T2 = new int64(0, 0),
    a = new int64(0,0),
    b = new int64(0,0),
    c = new int64(0,0),
    d = new int64(0,0),
    e = new int64(0,0),
    f = new int64(0,0),
    g = new int64(0,0),
    h = new int64(0,0),
    //Temporary variables not specified by the document
    s0 = new int64(0, 0),
    s1 = new int64(0, 0),
    Ch = new int64(0, 0),
    Maj = new int64(0, 0),
    r1 = new int64(0, 0),
    r2 = new int64(0, 0),
    r3 = new int64(0, 0);
  var j, i;
  var W = new Array(80);
  for(i=0; i<80; i++)
    W[i] = new int64(0, 0);
 
  // append padding to the source string. The format is described in the FIPS.
  x[len >> 5] |= 0x80 << (24 - (len & 0x1f));
  x[((len + 128 >> 10)<< 5) + 31] = len;
 
  for(i = 0; i<x.length; i+=32) //32 dwords is the block size
  {
    int64copy(a, H[0]);
    int64copy(b, H[1]);
    int64copy(c, H[2]);
    int64copy(d, H[3]);
    int64copy(e, H[4]);
    int64copy(f, H[5]);
    int64copy(g, H[6]);
    int64copy(h, H[7]);
 
    for(j=0; j<16; j++)
    {
        W[j].h = x[i + 2*j];
        W[j].l = x[i + 2*j + 1];
    }
 
    for(j=16; j<80; j++)
    {
      //sigma1
      int64rrot(r1, W[j-2], 19);
      int64revrrot(r2, W[j-2], 29);
      int64shr(r3, W[j-2], 6);
      s1.l = r1.l ^ r2.l ^ r3.l;
      s1.h = r1.h ^ r2.h ^ r3.h;
      //sigma0
      int64rrot(r1, W[j-15], 1);
      int64rrot(r2, W[j-15], 8);
      int64shr(r3, W[j-15], 7);
      s0.l = r1.l ^ r2.l ^ r3.l;
      s0.h = r1.h ^ r2.h ^ r3.h;
 
      int64add4(W[j], s1, W[j-7], s0, W[j-16]);
    }
 
    for(j = 0; j < 80; j++)
    {
      //Ch
      Ch.l = (e.l & f.l) ^ (~e.l & g.l);
      Ch.h = (e.h & f.h) ^ (~e.h & g.h);
 
      //Sigma1
      int64rrot(r1, e, 14);
      int64rrot(r2, e, 18);
      int64revrrot(r3, e, 9);
      s1.l = r1.l ^ r2.l ^ r3.l;
      s1.h = r1.h ^ r2.h ^ r3.h;
 
      //Sigma0
      int64rrot(r1, a, 28);
      int64revrrot(r2, a, 2);
      int64revrrot(r3, a, 7);
      s0.l = r1.l ^ r2.l ^ r3.l;
      s0.h = r1.h ^ r2.h ^ r3.h;
 
      //Maj
      Maj.l = (a.l & b.l) ^ (a.l & c.l) ^ (b.l & c.l);
      Maj.h = (a.h & b.h) ^ (a.h & c.h) ^ (b.h & c.h);
 
      int64add5(T1, h, s1, Ch, sha512_k[j], W[j]);
      int64add(T2, s0, Maj);
 
      int64copy(h, g);
      int64copy(g, f);
      int64copy(f, e);
      int64add(e, d, T1);
      int64copy(d, c);
      int64copy(c, b);
      int64copy(b, a);
      int64add(a, T1, T2);
    }
    int64add(H[0], H[0], a);
    int64add(H[1], H[1], b);
    int64add(H[2], H[2], c);
    int64add(H[3], H[3], d);
    int64add(H[4], H[4], e);
    int64add(H[5], H[5], f);
    int64add(H[6], H[6], g);
    int64add(H[7], H[7], h);
  }
 
  //represent the hash as an array of 32-bit dwords
  var hash = new Array(16);
  for(i=0; i<8; i++)
  {
    hash[2*i] = H[i].h;
    hash[2*i + 1] = H[i].l;
  }
  return hash;
}
 
//A constructor for 64-bit numbers
function int64(h, l)
{
  this.h = h;
  this.l = l;
  //this.toString = int64toString;
}
 
//Copies src into dst, assuming both are 64-bit numbers
function int64copy(dst, src)
{
  dst.h = src.h;
  dst.l = src.l;
}
 
//Right-rotates a 64-bit number by shift
//Won't handle cases of shift>=32
//The function revrrot() is for that
function int64rrot(dst, x, shift)
{
    dst.l = (x.l >>> shift) | (x.h << (32-shift));
    dst.h = (x.h >>> shift) | (x.l << (32-shift));
}
 
//Reverses the dwords of the source and then rotates right by shift.
//This is equivalent to rotation by 32+shift
function int64revrrot(dst, x, shift)
{
    dst.l = (x.h >>> shift) | (x.l << (32-shift));
    dst.h = (x.l >>> shift) | (x.h << (32-shift));
}
 
//Bitwise-shifts right a 64-bit number by shift
//Won't handle shift>=32, but it's never needed in SHA512
function int64shr(dst, x, shift)
{
    dst.l = (x.l >>> shift) | (x.h << (32-shift));
    dst.h = (x.h >>> shift);
}
 
//Adds two 64-bit numbers
//Like the original implementation, does not rely on 32-bit operations
function int64add(dst, x, y)
{
   var w0 = (x.l & 0xffff) + (y.l & 0xffff);
   var w1 = (x.l >>> 16) + (y.l >>> 16) + (w0 >>> 16);
   var w2 = (x.h & 0xffff) + (y.h & 0xffff) + (w1 >>> 16);
   var w3 = (x.h >>> 16) + (y.h >>> 16) + (w2 >>> 16);
   dst.l = (w0 & 0xffff) | (w1 << 16);
   dst.h = (w2 & 0xffff) | (w3 << 16);
}
 
//Same, except with 4 addends. Works faster than adding them one by one.
function int64add4(dst, a, b, c, d)
{
   var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff);
   var w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (w0 >>> 16);
   var w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (w1 >>> 16);
   var w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (w2 >>> 16);
   dst.l = (w0 & 0xffff) | (w1 << 16);
   dst.h = (w2 & 0xffff) | (w3 << 16);
}
 
//Same, except with 5 addends
function int64add5(dst, a, b, c, d, e)
{
   var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff) + (e.l & 0xffff);
   var w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (e.l >>> 16) + (w0 >>> 16);
   var w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (e.h & 0xffff) + (w1 >>> 16);
   var w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (e.h >>> 16) + (w2 >>> 16);
   dst.l = (w0 & 0xffff) | (w1 << 16);
   dst.h = (w2 & 0xffff) | (w3 << 16);
}
/**
 * scrollboard.js
 * ACM?????????????????????????????????JQuery???Bootstrap
 *
 * Version 1.0.0
 * Author: qinshaoxuan qsxuan.com
 * Github: https://github.com/qinshaoxuan/ScrollBoard
 * Demo: https://qinshaoxuan.github.io/ScrollBoard/
 * 
 */

/**
 * ???????????????????????????api?????????
 */
const TEST_BACKEND_API = '';

/**
 * 
 * ????????????????????????HOJ???????????????
 * @value 0 Accepted
 * @value 1 Presentation Error
 * @value 2 Time Limit Exceeded
 * @value 3 Memory Limit Exceeded
 * @value 4 Wrong Answer
 * @value 5 Runtime Error
 * @value 6 Output Limit Exceeded
 * @value 7 Compile Error
 * @value 8 System Error
 * @value 9 Security Error
 * @value -1 Waiting
 *  HOJ:NEW
 * */
const statusMap = {
    '-3': 1,
    '-2': 7,
    '-1': 4,
    '0': 0,
    '1': 2,
    '2': 3,
    '3': 5,
    '4': 8,
    '5': -1,
    '6': -1,
    '7': -1,
    '8': 4,
    '9': -1,
    '10': 8
}

/**
 * ?????????????????????????????????
 * @return json
 */
function getContestInfo(cid){
    var contestInfo = null;
    $.ajax({
        type: "GET",
        content: "application/json",
        url: TEST_BACKEND_API + "/api/get-contest-scroll-board-info?cid="+cid,
        dataType: "json",
        data: {},
        async: false,
        success: function(result) {
            if(result.status == 200){
                let info = result.data;
                contestInfo = new ContestInfo(info.id, info.rankShowName, info.problemCount, 
                    info.startTime, info.sealRankTime, info.starUserList, info.balloonColor);
            }else{
                closeLoading();
                showErrorMessage("[Failed to get contest information]", result.msg);
            }
        },
        error: function(error) {
            closeLoading();
            showErrorMessage('[Failed to get contest information]', error.responseJSON.msg);
        }
    });
    return contestInfo;
}

/**
 * ????????????????????????????????????
 * @return json??????
 */
function getSubmissionList(cid, removeStar){
    var submissions = [];
    $.ajax({
        type: "GET",
        content: "application/json",
        url: TEST_BACKEND_API + "/api/get-contest-scroll-board-submission?cid="+cid+"&removeStar="+removeStar,
        dataType: "json",
        data: {},
        async: false,
        success: function(result) {
            if(result.status == 200){
                submissions = result.data;
            }else{
                closeLoading();
                showErrorMessage('[Failed to get contest submission record list]', result.msg);
            }
        },
        error: function(error) {
            closeLoading();
            showErrorMessage('[Failed to get contest submission record list]', error.responseJSON.msg);
        }
    });
    return submissions;
}


/**
 * ?????????????????????????????????????????????json????????????
 * @return {Array<Submit>} ???????????????Submit????????????
 */

function getSubmitList(submissions) {
    var data = new Array();
    for(var i in submissions){
        var sub = submissions[i];
        var alphabetId = sub.displayId;
        var status = parseInt(sub.status);
        var res = statusMap[status];
        data.push(new Submit(sub.submitId, sub.uid, alphabetId, StringToDate(sub.submitTime), res));
    }
    return data;
}

/**
 * ????????????url??????????????????
 * @return ????????????
 */
function getRequestParams() {
    var url = decodeURIComponent(location.search); //??????url???"?"???????????????
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            var tempArr = strs[i].split("=");
            // ????????????
            if (tempArr[1] == 'true') {
                tempArr[1] = true;
            }
            if (tempArr[1] == 'false') {
                tempArr[1] = false;
            }
            if (/^[\d|.]+$/.test(tempArr[1])) {
                tempArr[1] = Number(tempArr[1]);
            }
            // ????????????
            if (tempArr[0].search(/\[.*]/) == -1) {
                theRequest[tempArr[0]] = tempArr[1];
            } else {
                // ??????
                var key = tempArr[0].replace(/\[.*]/, '');
                if (!theRequest[key]) {
                    theRequest[key] = [tempArr[1]];
                } else {
                    theRequest[key].push(tempArr[1]);
                }
            }
        }
    }
    return theRequest;
}


/**
 * ???????????????
 */
function showErrorMessage(title, message){
    $('#myModalTitle').text(title);
    $('#errorMsg').text(message);
    $('#myModal').modal(); 
}

/**
 * ??????loading??????
 */
function closeLoading(){
    try {
        document.body.removeChild(document.getElementById("app-loader"));
    } catch (e) {}
}

/**
 * ?????????????????????????????????????????????json????????????
 * @return {Array<Team>} ???????????????Team????????????
 */
function getTeamList(submissions, rankShowName, starUsernameList) {
    var data = new Array();
    for (var key in submissions) {
        var team = submissions[key];
        var name = team[rankShowName];
        if(name == null || name == '' || name.trim().length == 0){
            name = team.username;
        }
        while (name!=name.replace(' ','_')) name=name.replace(' ','_');
        while (name!=name.replace('.','_')) name=name.replace('.','_');
        var girl = false;
        if(team.gender == "female") girl = true;
        var official = true;
        if(starUsernameList.indexOf(team.username) != -1){
            official = false;
        }
        var school = team.school == null? '': team.school;
        data[team.uid] = new Team(team.uid, name, null, official, girl, school);
    }
    return data;
}

function getTeamNum(s){
    var sum = 0;
    var ok = 0;
    for(var i=0;i<s.length;i++){
        if(s[i]=='-'){
            ok = 1;
            continue;
        }
        if(ok == 1){
            sum = sum*10+parseInt(s[i]);
        }
    }
    return sum;
}
function PrefixInteger(num, m) {
    return (Array(m).join(0) + num).slice(-m);
}

/**
 * yyyy-mm-dd hh:mm:ss?????????Date
 * @param {Date} s ????????????????????????
 */
 function StringToDate(s) {
    s = s.replace(/-/g,  "/");s
    return new Date(Date.parse(s));
}

/**
 * ContestInfo??????
 * @param {long}            id                ??????id
 * @param {int}             rankShowName      ??????????????????username???nickname???realname???
 * @param {String}          problemCount      ???????????????
 * @param {String}          startTime         ??????????????????
 * @param {String}          sealRankTime      ??????????????????
 * @param {Array<String>}   starUserList      ????????????????????????
 * @param {Object}          balloonColor      ?????????????????? { 'A': '#aaa' }
 */
 function ContestInfo(id, rankShowName, problemCount, startTime, sealRankTime, starUserList, balloonColor) {
    this.id = id;
    this.rankShowName = rankShowName; 
    this.problemCount = problemCount; 
    this.startTime = startTime;
    this.sealRankTime = sealRankTime;
    this.starUserList = starUserList;
    this.balloonColor = balloonColor;
}

/**
 * Submit??????
 * @param {int}     submitId    ??????runID
 * @param {int}     teamId      ??????ID
 * @param {String}  alphabetId  ??????????????????ID???A,B,C...
 * @param {int}     subTime     ????????????
 * @param {int}     resultId    ????????????ID
 */
function Submit(submitId, teamId, alphabetId, subTime, resultId) {
    this.submitId = submitId; //??????runID
    this.teamId = teamId; //??????ID
    this.alphabetId = alphabetId; //??????????????????ID???A,B,C,D...
    this.subTime = new Date(subTime);
    /**
     * ????????????ID
     * @type {int}
     * @value 0 Accepted
     * @value 1 Presentation Error
     * @value 2 Time Limit Exceeded
     * @value 3 Memory Limit Exceeded
     * @value 4 Wrong Answer
     * @value 5 Runtime Error
     * @value 6 Output Limit Exceeded
     * @value 7 Compile Error
     * @value 8 System Error
     * @value 9 Security Error
     * @value -1 Waiting
     */
    this.resultId = resultId;
}

/**
 * TeamProblem????????????????????????????????????????????????????????????
 */
function TeamProblem() {
    this.alphabetId = "";
    this.isAccepted = false;
    this.penalty = 0; //???????????????
    this.acceptedTime = new Date(); //AC??????
    this.submitCount = 0; //AC????????????????????????AC????????????1
	this.realCount = 0;
    this.isUnkonwn = false; //?????????????????????????????????????????????AC?????????false
	this.ACsubmitID = 0;
}

/**
 * Team??????
 * @param {int}     teamId      ??????ID
 * @param {String}  teamName    ?????????
 * @param {String}  teamMember  ??????
 * @param {boolean} official     ??????????????????
 */
function Team(teamId, teamName, teamMember, official, girl, teamSchool) {
    this.teamId = teamId; //??????ID
    this.teamName = teamName; //?????????
    this.teamMember = teamMember; //??????
    this.official = official; //????????????
    this.solved = 0; //?????????
    this.penalty = 0; //??????,???????????????
    this.girl = girl; //??????,?????????
    this.teamSchool = teamSchool // ??????
    this.submitProblemList = []; //??????????????????
    this.unkonwnAlphabetIdMap = new Array(); //???????????????AlphabetId??????
    this.submitList = []; //????????????
    this.lastRank = 0; //????????????
    this.nowRank = 0; //????????????
	this.lastAC = 0;
}

/**
 * Team???????????????????????????????????????????????????
 * @param  {Date}   startTime       ??????????????????
 * @param  {Date}   freezeBoardTime ????????????
 */
Team.prototype.init = function(board) {
	//?????????????????????
	var startTime = board.startTime;
	var freezeBoardTime = board.freezeBoardTime;
    this.submitList.sort(function(a, b) {
        return a.submitId - b.submitId;
    });
    for (var key in this.submitList) {
        var sub = this.submitList[key];
        //????????????
        var p = this.submitProblemList[sub.alphabetId];
        if (!p) p = new TeamProblem();
        //??????alphabetId
        p.alphabetId = sub.alphabetId;
        //??????AC?????????????????????
        if (p.isAccepted && p.acceptedTime < freezeBoardTime - startTime) continue;
		if (sub.resultId == 7) continue;
		if (sub.resultId==-1){
            p.isUnkonwn = true;
            this.unkonwnAlphabetIdMap[p.alphabetId] = true;
		}
        //????????????????????????isUnkonwn???true
        if (sub.subTime > freezeBoardTime) {
            p.isUnkonwn = true;
            this.unkonwnAlphabetIdMap[p.alphabetId] = true;
        }
        //??????????????????
        p.submitCount++;
		if (!p.isAccepted && sub.resultId!=7) p.realCount++;
        //??????AC??????
        p.isAccepted = (sub.resultId == 0);
        //??????????????????AC
        if (p.isAccepted) {
            //?????????AC??????
            p.acceptedTime = (sub.subTime.getTime() - startTime.getTime()) *1.0 /60000;
			p.acceptedTime = p.acceptedTime*60000;
			p.ACsubmitID = sub.submitId;
			if (parseInt(sub.submitId) > parseInt(this.lastAC))
				this.lastAC=sub.submitId;
			if (parseInt(board.FBList[sub.alphabetId.charCodeAt(0)-65])==0||parseInt(board.FBList[sub.alphabetId.charCodeAt(0)-65])>parseInt(p.ACsubmitID))
			{
				board.FBList[sub.alphabetId.charCodeAt(0)-65]=p.ACsubmitID;
			}
            //??????????????????AC??????????????????,????????????????????????1
            if (p.acceptedTime < freezeBoardTime - startTime) {
				p.submitCount = p.realCount;
                p.penalty += p.acceptedTime + (p.submitCount - 1) * 20 * 60 * 1000;
                this.solved++;
                this.penalty += p.penalty;
            }
        }

        //??????submitProblemList
        this.submitProblemList[p.alphabetId] = p;
    }
}

/**
 * ??????Team??????????????????????????????
 * @return {int} ???????????????????????????
 */
Team.prototype.countUnkonwnProblme = function() {
    var count = 0;
    for (var key in this.unkonwnAlphabetIdMap) {
        count++;
    }
    return count;
}

/**
 * ???????????????????????????????????????????????????
 * @return {boolean} true:????????????????????????,false:???????????????
 */
Team.prototype.updateOneProblem = function() {
    for (let key in board.balloonColor) {
		var subProblem = this.submitProblemList[key];
		if (!subProblem) continue;
		//????????????????????????
        if (subProblem.isUnkonwn) {
            //??????????????????
            subProblem.isUnkonwn = false;
            delete this.unkonwnAlphabetIdMap[subProblem.alphabetId];
            //??????AC????????????????????????
            if (subProblem.isAccepted) {
				subProblem.submitCount = subProblem.realCount;
                subProblem.penalty += subProblem.acceptedTime + (subProblem.submitCount - 1) * 20 * 60 * 1000;
                this.solved++;
                this.penalty += subProblem.penalty;
                return true;
            }
            return false;
        }
    }
}


/**
 * ??????????????????
 * @param {Team} a Team a
 * @param {Team} b Team b
 * @return {int} ??????a??????????????????b?????????
 */
function TeamCompare(a, b) {
    if (a.solved != b.solved) //?????????????????????????????????????????????
        return a.solved > b.solved ? -1 : 1;
    if (a.penalty != b.penalty) //???????????????????????????????????????
        return a.penalty < b.penalty ? -1 : 1;
	// if (parseInt(a.lastAC) != parseInt(b.lastAC))
 //    	return parseInt(a.lastAC) < parseInt(b.lastAC) ? -1 : 1; //??????????????????last AC???????????????
	return a.teamId.localeCompare(b.teamId);//??????0??????????????????
}



/**
 * Board??????
 * @param {ContestInfo}      contestInfo     ????????????
 * @param {Array<int>}       medalCounts     ?????????,??????????????????3??????,??????????????????4??????,?????????????????????
 */
function Board(contestInfo, medalCounts, removeStar) {
    this.contestInfo = contestInfo; // ????????????
    this.problemCount = contestInfo.problemCount; //????????????
    this.balloonColor = contestInfo.balloonColor; // ??????????????????
    this.medalCounts = medalCounts; //???????????????,??????????????????3??????,??????????????????4??????????????????????????????
    this.medalRanks = []; //??????????????????????????????RANK???
    this.medalStr = ["gold", "silver", "bronze"];
    this.problemList = []; //??????alphabetId????????????
    this.startTime = StringToDate(contestInfo.startTime);
    this.freezeBoardTime = StringToDate(contestInfo.sealRankTime);
    this.teamList = []; //?????????????????????teamList??????teamId???Team???????????????
    this.submitList = []; //??????????????????????????????submitList,Submit????????????
    this.teamNowSequence = []; //??????????????????????????????ID
    this.teamNextSequence = []; //?????????????????????????????????ID
    this.teamCount = 0; //????????????
    this.displayTeamPos = 0; //???????????????????????????
    this.noAnimate = true; //?????????????????????
	this.FBList = [];
    this.nowPos = 0;
    //????????????????????????alphabetId
    for (let key in this.balloonColor)
	{
        this.problemList.push(key);
		this.FBList.push(0);
	}

    //??????medalRanks
    this.medalRanks[0] = medalCounts[0];
    for (var i = 1; i < this.medalCounts.length; ++i) {
        this.medalRanks[i] = this.medalCounts[i] + this.medalRanks[i - 1];
    }

    //??????????????????submitList???teamList

    var submssions = getSubmissionList(this.contestInfo.id, removeStar);
    this.submitList = getSubmitList(submssions);
    this.teamList = getTeamList(submssions, this.contestInfo.rankShowName, this.contestInfo.starUserList);

    //???submit???????????????Team?????????
    for (var key in this.submitList) {
        var sub = this.submitList[key];
        this.teamList[sub.teamId].submitList.push(sub);
    }



    //?????????Team????????????????????????ID????????????
    for (var key in this.teamList) {
        var team = this.teamList[key];
        team.init(this);
        this.teamNowSequence.push(team);
        this.teamCount++;
    }
    this.displayTeamPos = this.teamCount - 1;
    this.nowPos = this.teamCount-1;
    //????????????
    this.teamNowSequence.sort(function(a, b) {
        return TeamCompare(a, b);
    });
    this.teamNextSequence = this.teamNowSequence.slice(0);

}


/**
 * ??????????????????,???????????????????????????????????????
 * @return {int} ???????????????????????????????????????????????????????????????-1
 */
Board.prototype.updateTeamSequence = function() {
    var teamSequence = this.teamNextSequence.slice(0); //???????????????js???????????????
    teamSequence.sort(function(a, b) {
        return TeamCompare(a, b);
    });

    //??????????????????????????????????????????????????????????????????????????????
    var toPos = -1;
    for (var i = 0; i < this.teamCount; i++) {

        if (this.teamNextSequence[i].teamId != teamSequence[i].teamId) {
            toPos = i;
            break;
        }
    }

    //????????????
    this.teamNowSequence = this.teamNextSequence.slice(0);
    this.teamNextSequence = teamSequence.slice(0);

    return toPos;
}


/**
 * ????????????????????????unkonwn????????????????????????????????????????????????????????????????????????
 * @return {Team} ?????????????????????Team????????????????????????null
 */

Board.prototype.UpdateOneTeam = function() {
    //?????????????????????????????????????????????????????????
    var updateTeamPos = this.nowPos;
    
    // while (updateTeamPos >= 0 && this.teamNextSequence[updateTeamPos].countUnkonwnProblme() < 1)
    //     updateTeamPos--;
    //????????????????????????
    if (updateTeamPos >= 0) {
        //?????????????????????????????????????????????????????????????????????????????????
        while (this.teamNextSequence[updateTeamPos].countUnkonwnProblme() > 0) {
            //????????????????????????
            this.teamNextSequence[updateTeamPos].updateOneProblem();
            return this.teamNextSequence[updateTeamPos];
        }
    }
    this.nowPos = this.nowPos-1;
    // return null;
    if (updateTeamPos >= 0) return this.teamNextSequence[updateTeamPos];
    return null;
}

/**
 * ????????????????????????
 */
Board.prototype.showInitBoard = function() {

    //???????????????????????????
    var rankPer = 5; //Rank??????????????????
    var teamPer = 25; //Team??????????????????
    var solvedPer = 4; //Solved??????????????????
    var penaltyPer = 7; //Penalty??????????????????
    var problemStatusPer = (100.0 - rankPer - teamPer - solvedPer - penaltyPer) / this.problemCount; //Problem??????????????????

    //??????
    var headHTML =
        "<div id=\"timer\"></div>\
        <div class=\"ranktable-head\">\
            <table class=\"table\">\
                <tr>\
                    <th width=\"" + rankPer + "%\">Rank</th>\
                    <th width=\"" + teamPer + "%\">Team</th>\
                    <th width=\"" + solvedPer + "%\">Solved</th>\
                    <th width=\"" + penaltyPer + "%\">Penalty</th>";
    var footHTML =
        "</tr>\
            </table>\
        </div>";
    $('body').append(headHTML + footHTML);

    //?????????
    for (var i = 0; i < this.problemList.length; i++) {
        var alphabetId = this.problemList[i];
        var bodyHTML = "<th width=\"" + problemStatusPer + "%\">" 

        var color = this.balloonColor[alphabetId];
        if(color){
            bodyHTML = bodyHTML
            +' <svg\
                t="1633685184463"\
                class="icon"\
                viewBox="0 0 1088 1024"\
                version="1.1"\
                xmlns="http://www.w3.org/2000/svg"\
                p-id="5840"\
                width="20"\
                height="20"\
                style="vertical-align: middle; margin-left: -10px!important;"\
            >\
                <path\
                d="M575.872 849.408c-104.576 0-117.632-26.56-119.232-31.808-6.528-22.528 32.896-70.592 63.744-96.768l-1.728-2.624c137.6-42.688 243.648-290.112 243.648-433.472A284.544 284.544 0 0 0 478.016 0a284.544 284.544 0 0 0-284.288 284.736c0 150.4 116.352 415.104 263.744 438.336-25.152 29.568-50.368 70.784-39.104 108.928 12.608 43.136 62.72 63.232 157.632 63.232 7.872 0 11.52 9.408 4.352 19.52-21.248 29.248-77.888 63.424-167.68 63.424V1024c138.944 0 215.936-74.816 215.936-126.528a46.72 46.72 0 0 0-16.32-36.608 56.32 56.32 0 0 0-36.416-11.456zM297.152 297.472c0 44.032-38.144 25.344-38.144-38.656 0-108.032 85.248-195.712 190.592-195.712 62.592 0 81.216 39.232 38.08 39.232-105.152 0.064-190.528 87.04-190.528 195.136z"\
                fill="'+ this.balloonColor[alphabetId]+'"\
                p-id="5841"\
                ></path>\
            </svg>';
        }

        bodyHTML = bodyHTML + alphabetId + "</th>";

        $('.ranktable-head tr').append(bodyHTML);
    }

    var maxRank = 1;

    //??????
    for (var i = 0; i < this.teamCount; i++) {

        var team = this.teamNowSequence[i];

        //??????????????????????????????????????????
        var rank = maxRank-1;
        var medal = -1;
        var girl = team.girl;
        if (team.solved != 0) {
			if (team.official==true)
			{
            	rank = maxRank;
            	maxRank = rank + 1;
			}
            for (var j = this.medalRanks.length - 1; j >= 0; j--) {
                if (rank <= this.medalRanks[j])
                    medal = j;
            }
        } else {
            rank = maxRank;
            medal = -1;
        }


        //??????HTML
        var headHTML =
            "<div id=\"team_" + team.teamId + "\" class=\"team-item\" team-id=\"" + team.teamId + "\"> \
                    <table class=\"table\"> \
                        <tr>";
		var rankHTML;
		if (team.official==true)
        	 rankHTML = "<th class=\"rank\" width=\"" + rankPer + "%\">" + rank + "</th>";
		else rankHTML = "<th class=\"rank\" width=\"" + rankPer + "%\">" + "*" + "</th>";
        var teamHTML = "<td class=\"team-name\" width=\"" + teamPer + "%\"><span class=\"fw-bold\">" + team.teamName + "</span><span class=\"univ\">" + team.teamSchool + "</span></td>";
        var solvedHTML = "<td class=\"solved fw-bold\" width=\"" + solvedPer + "%\">" + team.solved + "</td>";
        var penaltyHTML = "<td class=\"penalty\" width=\"" + penaltyPer + "%\">" + parseInt(team.penalty / 1000.0 / 60.0) + "</td>";
        var problemHTML = "";
        for (var key in this.problemList) {
            problemHTML += "<td class=\"problem-status\" width=\"" + problemStatusPer + "%\" alphabet-id=\"" + this.problemList[key] + "\">";
            var tProblem = team.submitProblemList[this.problemList[key]];
            if (tProblem) {
                var tryCount = tProblem.submitCount > 1 ? 'tries' : 'try';
                if (tProblem.isUnkonwn){
                    problemHTML += "<span class=\"label label-warning\"> ? <div class=\"try-count\">"+ tProblem.submitCount+ " " + tryCount +"</div></sapn></td>";
                }
                else {
                    if (tProblem.isAccepted) {
						if (tProblem.ACsubmitID==board.FBList[tProblem.alphabetId.charCodeAt(0)-65]){
                            problemHTML += "<span class=\"label label-primary\">" + parseInt(tProblem.acceptedTime / 1000.0 / 60.0) + "<div class=\"try-count\">"+ tProblem.submitCount+ " " + tryCount +"</div></sapn></td>";
                        }else{
							problemHTML += "<span class=\"label label-success\">" + parseInt(tProblem.acceptedTime / 1000.0 / 60.0) + "<div class=\"try-count\">"+ tProblem.submitCount+ " " + tryCount +"</div></sapn></td>";
                        }
                        //problemHTML += "<span class=\"label label-success\">" + tProblem.submitCount + "/" + parseInt(tProblem.acceptedTime / 1000.0 / 60.0) + "</span></td>";
                    } else {
                        problemHTML += "<span class=\"label label-danger\"> ?? <div class=\"try-count\">"+ tProblem.submitCount+ " " + tryCount +"</div></sapn></td>";
                    }
                }
            }
        }
        var footHTML =
            "</tr> \
                        </table> \
                    </div>";

        var HTML = headHTML + rankHTML + teamHTML + solvedHTML + penaltyHTML + problemHTML + footHTML;
        //??????HTML
        $('body').append(HTML);
        //?????????????????????CSS??????
        if (medal != -1 && team.official == true)
            $("#team_" + team.teamId + ' .rank').addClass(this.medalStr[medal]);
        if(girl == true){
            $("#team_" + team.teamId + ' .team-name').addClass("girl");
        }

    }


    //???????????????????????????????????????
    var headHTML =
        "<div id=\"team-void\" class=\"team-item\"> \
                    <table class=\"table\"> \
                        <tr>";
    var rankHTML = "<th class=\"rank\" width=\"" + rankPer + "%\"></th>";
    var teamHTML = "<td class=\"team-name\" width=\"" + teamPer + "%\"></td>";
    var solvedHTML = "<td class=\"solved\" width=\"" + solvedPer + "%\"></td>";
    var penaltyHTML = "<td class=\"penalty\" width=\"" + penaltyPer + "%\"></td>";
    var problemHTML = "";
    for (var key in this.problemList) {
        problemHTML += "<td class=\"problem-status\" width=\"" + problemStatusPer + "%\" alphabet-id=\"" + this.problemList[key] + "\"></td>";
    }
    var footHTML =
        "</tr> \
                        </table> \
                    </div>";

    var HTML = headHTML + rankHTML + teamHTML + solvedHTML + penaltyHTML + problemHTML + footHTML;
    //??????HTML
    $('body').append(HTML);



    //?????????????????????div????????????
    var headerHeight = 44; //???????????????
    var teamHeight = 68; //??????????????????
    for (var i = 0; i < this.teamCount; ++i) {
        //var teamId = this.teamList[this.teamNowSequence[i]].teamId;
        var teamId = this.teamNowSequence[i].teamId;
        $("div[team-id=\"" + teamId + "\"]").stop().animate({ top: i * teamHeight + headerHeight }, 300);
    }
    //????????????
    $("#team-void").stop().animate({ top: this.teamCount * teamHeight + headerHeight }, 300);
}

/**
 * ???????????????????????????????????????HTML??????
 * @param  {Team} team ????????????Team??????
 * @return {boolean} ????????????????????????AC
 */
Board.prototype.updateTeamStatus = function(team) {
    var thisBoard = this;
    //??????ProblemStatus
    for (var key in team.submitProblemList) {
        var tProblem = team.submitProblemList[key];
            //??????????????????HTML
            problemHTML = "";
            if (tProblem.isUnkonwn){
                var tryCount = tProblem.submitCount > 1 ? 'tries' : 'try';
                problemHTML = "<span class=\"label label-warning\"> ? <div class=\"try-count\">"+ tProblem.submitCount+ " " + tryCount +"</div></sapn></td>";
            }
            else {
                var tryCount = tProblem.submitCount > 1 ? 'tries' : 'try';
                if (tProblem.isAccepted) {
					if (tProblem.ACsubmitID==board.FBList[tProblem.alphabetId.charCodeAt(0)-65])
						problemHTML = "<span class=\"label label-primary\">" + parseInt(tProblem.acceptedTime / 1000.0 / 60.0) + "<div class=\"try-count\">"+ tProblem.submitCount+ " " + tryCount +"</div></sapn></td>";
					else
                    	problemHTML = "<span class=\"label label-success\">" + parseInt(tProblem.acceptedTime / 1000.0 / 60.0) + "<div class=\"try-count\">"+ tProblem.submitCount+ " " + tryCount +"</div></sapn></td>";
                } else {
                    problemHTML = "<span class=\"label label-danger\"> ?? <div class=\"try-count\">"+ tProblem.submitCount+ " " + tryCount +"</div></sapn></td>";
                }
            }


            var $problemStatus = $("#team_" + team.teamId + " .problem-status[alphabet-id=\"" + key + "\"]");
            var $statusSpan = $problemStatus.children('span[class="label label-warning"]');


            //???????????????????????????????????????
            if (tProblem.isUnkonwn == false) {

                //??????????????????????????????????????????
                $('.team-item.hold').removeClass("hold");
                var $team = $("div[team-id=\"" + team.teamId + "\"]");
                //???????????????
                $team.addClass("hold");

                //??????TeamDiv??????????????????
                var clientHeight = document.documentElement.clientHeight || document.body.clientHeight || 0;
                var teamTopHeight = $team.offset().top - clientHeight + 100;


                //????????????
                $('body,html').stop().animate({
                        scrollTop: teamTopHeight
                    },
                    500);

                //????????????????????????????????????????????????????????????????????????
                (function(thisBoard, tProblem, problemHTML) {
                    //??????????????????????????????????????????
                    var speed = 300; //????????????
                    $statusSpan.fadeOut(speed).fadeIn(speed).fadeOut(speed).fadeIn(speed, function() {
                        //????????????????????????
                        $(this).parent().html(problemHTML);
                    });
                })(thisBoard, tProblem, problemHTML);
            }
    }

    //??????????????????
    //????????????????????????????????????????????????????????????????????????
    (function(thisBoard, team) {
        //??????1.2s
        $('#timer').animate({ margin: 0 }, 1200, function() {

            /*
            ??????Rank
             */
            var maxRank = 1;

            //??????div??????????????????
            for (var i in thisBoard.medalStr) {
                $(".team-item .rank").removeClass(thisBoard.medalStr[i]);
            }
            // ????????????
            for (var i in thisBoard.medalStr) {
                $(".team-item .team-name").removeClass("girl");
            }

            //??????????????????????????????????????????
            for (var i = 0; i < thisBoard.teamCount; i++) {
                var t = thisBoard.teamNextSequence[i];
                var medal = -1;
                var rankValue = maxRank-1;
                var girl = t.girl;
                if (t.solved != 0) {
					if (t.official==true)
					{
                    	rankValue = maxRank;
                    	maxRank = rankValue + 1;
					}
                    for (var j = thisBoard.medalRanks.length - 1; j >= 0; j--) {
                        if (rankValue <= thisBoard.medalRanks[j])
                            medal = j;
                    }
                } else {
                    rankValue = maxRank;
                    medal = -1;
                }
				

                if (medal != -1 && t.official == true)
                    $("div[team-id=\"" + t.teamId + "\"]  .rank").addClass(thisBoard.medalStr[medal]);
                if(girl == true){
                    $("div[team-id=\"" + t.teamId + "\"]  .team-name").addClass("girl");
                }
				if (t.official==true)
                	$("#team_" + t.teamId + " .rank").html(rankValue);
				else 
					$("#team_" + t.teamId + " .rank").html("*");

            }

            //??????Solved
            $("#team_" + team.teamId + " .solved").html(team.solved);

            //??????Penaly
            $("#team_" + team.teamId + " .penalty").html(parseInt(team.penalty / 1000.0 / 60.0));
        }, false);

    })(thisBoard, team);

}


/**
 * ????????????div?????????
 * @param  {int} toPos ????????????????????????????????????????????????-1????????????
 */
Board.prototype.moveTeam = function(toPos) {
    var thisBoard = this;
    //????????????????????????????????????????????????????????????????????????
    (function(thisBoard) {
        var headerHeight = 44;
        var teamHeight = 68;
        for (var i = 0; i < thisBoard.teamCount; ++i) {
            var teamId = thisBoard.teamNextSequence[i].teamId;
            //??????1.5s??????????????????????????????????????????????????????
            if(toPos != -1)
                $("div[team-id=\"" + teamId + "\"]").animate({ margin: 0 }, 2000).animate({ top: i * teamHeight + headerHeight }, 1000, function() {
                    thisBoard.noAnimate = true;
                });
            else
                $("div[team-id=\"" + teamId + "\"]").animate({ margin: 0 }, 300 ,function() {
                    thisBoard.noAnimate = true;
                });
        }
    })(thisBoard);
}

/**
 * ???????????????????????????????????????????????????????????????
 */
Board.prototype.keydown = function() {
    //????????????????????????????????????
    if (this.noAnimate) {
        this.noAnimate = false;
        //???????????????????????????,?????????team==null
        var team = this.UpdateOneTeam();
        if (team) {
            //?????????????????????????????????
            var toPos = this.updateTeamSequence();
            //????????????HTML??????
            this.updateTeamStatus(team);
            //????????????
            this.moveTeam(toPos);
        } else {
            //???????????????????????????????????????
            $('.team-item.hold').removeClass("hold");
        }
    }
}

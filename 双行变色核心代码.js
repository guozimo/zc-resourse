/**
 * Created by zc on 2016/4/19.
 */
if(MainListColKind[i] == 'text' || MainListColKind[i] == 'textbr') {
    var len=MainListInitValue.length;
    $("document").ready(function () {
        var n=MainListColKind.length;
        eval("var"+" "+"ary"+i+""+"="+"[]");

        for (var k = 1; k < MainListInitValue.length; k++) {
            var cur = MainListInitValue[k];
            eval("var"+" "+"a"+i+""+"="+"cur["+i+"]");
            eval(("ary"+i)).push(eval(("a"+i)));
        }

        if ((len-1) % 2 == 0 && rowsCompare) {
            for (var t = 0; t <(len-2); t += 2) {
                var C = eval(("ary" + i) + "[" + (t) + "]");
                var D = eval(("ary" + i) + "[" + (t + 1) + "]");
                //console.log(C+"c");
                //console.log(D+"d");

                if (C && D && C != "undefined" && D != "undefined") {
                    if (C == D) {

                    } else {
                        $("#tablecontent_" +i+ "_" + (t+1) + "").css("background", rowsCompare);
                        $("#tablecontent_" +i+ "_" + (t + 2) + "").css("background", rowsCompare);
                    }
                }


            }
        }
    })
}
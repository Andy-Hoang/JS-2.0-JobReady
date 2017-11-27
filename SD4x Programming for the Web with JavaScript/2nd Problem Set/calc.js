
// declare global var
var no1="";       //way to set empty 
var no2="";
var operator_id="";
var result="";
var again_no2="";
var again_operator="";

// Event for "reset"
$("#clearButton").click(function(){
    no1=no2=operator_id=result="";
    $("input").prop("disabled", true).val("");
    $("#output").html("noI="+no1+",  op="+operator_id+",  noII="+no2+", result="+result);                     //show to html in <span> element    
    return no1, no2, operator_id, result;
})


/** case 1: Performing an operation on two numbers
*/

// Event for number

$(".number").click(function(){
    if (operator_id.length==0){
        no1 += $(this).val();
        $("input").prop("disabled", false).val(no1);    //enable "disabled" prop and set val() to show
        $("#output").html("noI="+no1+",  op="+operator_id+",  noII="+no2+", result="+result);                     //show to html in <span> element
        return no1;
    } else{
        no2 += $(this).val();
        $("input").prop("disabled", false).val(no2);
        $("#output").html("noI="+no1+",  op="+operator_id+",  noII="+no2+", result="+result);                     //show to html in <span> element
        return no2;
    }
})

// event for operator
$(".operator").click(function(){
    if (operator_id.length!=0){     // case 4: click operator_b
        calculation();              // calculate base on old operator_a   
        no1=result;                     // case 4: set no1: previous result
        no2="";                     // reset no2 i/o store old no2_a
    }                               // take new operator_b
    operator_id = $(this).prop("id"); // get "id" (id is just an property). Alternative: $(this)[0].id (jQuery selector return an array)                  
    $("#output").html("noI="+no1+",  op="+operator_id+",  noII="+no2+", result="+result);                     //show to html in <span> element
    return operator_id, no1, no2, result;    // result: from calculation above
})


// event for "="
$("#equalsButton").click(function(){

    //case 6: continue "=" right after a calculation
    if (result.length!=0 && no1.length==0 && no2.length==0 && operator_id.length==0){   
        no1=result;
        no2=again_no2;
        operator_id=again_operator;
        calculation();
        no1=no2=operator_id="";     //reset
        $("#output").html("noI="+no1+",  op="+operator_id+",  noII="+no2+", result="+result);                     //show to html in <span> element
        return no1, no2, operator_id, result; again_no2,again_operator;
    }
    else if(operator_id.length==0){      //case: w/o click operator
    
    } else if (no2.length==0){      //case: have operator but w/o no2
    
    } else {
    calculation();
    no1=no2=operator_id="";     //reset
    $("#output").html("noI="+no1+",  op="+operator_id+",  noII="+no2+", result="+result);                     //show to html in <span> element
    return no1, no2, operator_id, result; again_no2, again_operator;
    }
})

// calculation function
function calculation(){
    if (result.length!=0 && no1==""){      // case3: already have result of previous calculation
        no1=result;
    }
    if(operator_id=="addButton"){
        result=Number(no1)+Number(no2);
    } else if(operator_id=="subtractButton"){
        result=Number(no1)-Number(no2);
    } else if(operator_id=="multiplyButton"){
        result=Number(no1)*Number(no2);
    } else {
        if (no2==0){        // case: /0
            $("input").prop("disabled", false).val("Infinity");
            return false; // stop calculation
        } else {
            result=(Number(no1)/Number(no2));
        }
    }
    $("input").prop("disabled", false).val(result);
    again_no2=no2;
    again_operator=operator_id;
}

/** case 2: Continuing an operation:
*click operator: return operator
*click number: return no2
*click "=": no1=""=0 
*>>> change no1=result (of previous calculation)
*/

/** case 3: Starting a new operation
 * click new no: return no1
 * click operator: return operator_id
 * click new no: return no2
 * click "=": no1=(previous) result (because: result.length!=0 in case 2)
 * >>> add condition && no1="" in case 2
 */

/** case 4: Performing an operation on multiple numbers
 * new no: return no1_a
 * operator_a: return operator_id
 * new no: return no2_a
 * operator_b: return new operator_id (want: peform calculation simutaneously)
 * new no: return no2_b
 * "=": no1=no1_a, no2_b (want: no1=preious result)
 * >>> when click operator_b, operator_a already exist
 * >>> proceed "operator_a calculation" show result + then return operator_b, "reset_no1", result_a
 * >>> when click new no then "=": no1="", no2_b, result_a 
 */

 /** case 6: "=" right after a calculation
  * create again_no2, again_operator to save previous calculation
 */

 




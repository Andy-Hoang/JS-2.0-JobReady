
/** case 1: Performing an operation on two numbers
*/

// Event for number
var no1="";       //way to set empty 
var no2="";
var operator_id="";
var result="";

$(".number").click(function(){
    if (operator_id.length==0){
        no1 += $(this).val();
        $("input").prop("disabled", false).val(no1);    //enable "disabled" prop and set val() to show
        return no1;
    } else{
        no2 += $(this).val();
        $("input").prop("disabled", false).val(no2); 
        return no2;
    }
})

// event for operator
$(".operator").click(function(){
    operator_id = $(this).prop("id"); // get "id" (id is just an property). Alternative: $(this)[0].id (jQuery selector return an array)
    return operator_id;
})

// event for "="
$("#equalsButton").click(function(){
    if (result.length!=0 && no1==""){      // case: already have result of previous calculation
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
        } else {
            result=(Number(no1)/Number(no2));
        }
    }

    $("input").prop("disabled", false).val(result);
    no1=no2=operator_id="";     //reset
    return no1, no2, operator_id, result;
})

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
 * 
 */

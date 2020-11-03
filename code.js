let arr = [10, 5, 3, 7];
function qwerty()
{
    var val = document.getElementById('in').value;
    console.log(val);
    document.getElementById('str').innerHTML = val;
        var res = false;
        for (var i = 0; i < 4; i++)
        {
            for (var j = 0; j < 4; j++)
            {
                if (arr[i] + arr[j] == val)
                {
                    res = true;
                    break;
                }
                else 
                {
                    res = false;
                }
            }
        }
    if (res == false){
        alert("false");
    }
    else 
    {
        alert("true");
    }
}
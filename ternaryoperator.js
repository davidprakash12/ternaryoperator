<!DOCTYPE html>

<HTML>
    <HEAD>
        <SCRIPT>
            function Check(){
                var age=parseInt(document.getElementById("txtage").value);
                var status = (age>=18)?"Eligible":"Not Eligible";
                document.getElementById("ans").innerHTML=status;
            }
        </SCRIPT>
    </HEAD>
    <BODY>
        <h2>Ternary Operator</h2>
        <hr />
        <table>
            <tr>
                <td>
                    <label>Enter Age:</label>
                </td>
                <td>
                    <input type="text" name="txtage" id="txtage" />
                </td>
            </tr>
            
            <tr>
                <td>
                    &nbsp;
                </td>
                <td>
                    <input type="button" value="Check Vote Eligiblity" onclick="Check()" />
                </td>
            </tr>
             <tr>
                <td>
                    <label>Status</label>
                </td>
                <td>
                    <span id="ans">
                    
                    </span>
                </td>
            </tr>
        </table>
    </BODY>
</HTML>

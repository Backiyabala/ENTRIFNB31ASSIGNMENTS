let marks = [];

function findgrade() {
    // get the marks
    let input = document.getElementById("mark");
    let mark = Number(input.value);

    // validate the marks
    if (mark < 0 || mark > 100 || input.value === "") {
        document.getElementById("errormsg").innerHTML ="Marks must be in between 0 and 100";
        return false;
    }

    
    // push marks into an array
    marks.push(mark);
    input.value = "";
    document.getElementById("errormsg").innerHTML = "";
    input.placeholder = `Enter Mark ${marks.length+1}`;
    // console.log(marks);

    // Show result by marks entered
    if (marks.length == 5) {
        let total = 0;
        input.placeholder = "";

        for (let i = 0; i < marks.length; i++) {
            total += marks[i];
        }

        let average = total / 5;
        let grade;

        if (average >= 90) {
            grade = "A";
            resultemoji ="https://tse3.mm.bing.net/th/id/OIP.NeFrxSzUZdBz0ZVSy3w4CgHaHv?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        }
        else if (average < 90 && average >= 75) {
            grade = "B";
            resultemoji = "https://emojidirectory.com/wp-content/uploads/2025/04/Emoji-OK-768x677.png"

        }
        else if (average < 75 && average >= 60) {
            grade = "C";
            resultemoji = "https://th.bing.com/th/id/OIP.-4BR7b28crIPQDINyKXNJgHaGA?w=227&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"

        }
        else if (average < 60 && average >= 40) {
            grade = "D";
            resultemoji = "https://th.bing.com/th/id/OIP.TqCbovmLULy2o-akEijiPAHaHZ?w=203&h=202&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"

        }
        else {
            grade = "FAIL";
            resultemoji = "https://th.bing.com/th/id/OIP.VpKpf1nA--q0zdjtIz-CzgHaHa?w=162&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"

        }  

        document.getElementById("result").innerHTML= `
            <div style="text-align:center; margin:10px">        
                <div>
                    <img id="resultimg" src=${resultemoji} alt="Not found" />
                </div>
                <div>
                    Marks: ${marks.join(", ")} <br>
                    Total:<b> ${total}</b> / 500 <br>
                    Average: ${average.toFixed(2)} <br>
                    Grade: <b style="color:blue; font-size:2em">${grade}</b> <br>
                </div>
            </div>
        `;
        input.disabled = true;
        button.disabled = true;

    }
}
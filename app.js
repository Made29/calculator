let result = ""

$(document).ready(() => {
    $("#cal_9").click(() => {
        result += "9"
        $("#cal_screen").val(result)
    })

    $("#cal_8").click(() => {
        result += "8"
        $("#cal_screen").val(result)
    })

    $("#cal_7").click(() => {
        result += "7"
        $("#cal_screen").val(result)
    })

    $("#cal_6").click(() => {
        result += "6"
        $("#cal_screen").val(result)
    })

    $("#cal_5").click(() => {
        result += "5"
        $("#cal_screen").val(result)
    })

    $("#cal_4").click(() => {
        result += "4"
        $("#cal_screen").val(result)
    })

    $("#cal_3").click(() => {
        result += "3"
        $("#cal_screen").val(result)
    })

    $("#cal_2").click(() => {
        result += "2"
        $("#cal_screen").val(result)
    })

    $("#cal_1").click(() => {
        result += "1"
        $("#cal_screen").val(result)
    })

    $("#cal_0").click(() => {
        result += "0"
        $("#cal_screen").val(result)
    })

    $("#cal_plus").click(() => {
        result += " + "
        $("#cal_screen").val(result)
    })

    $("#cal_minus").click(() => {
        result += " - "
        $("#cal_screen").val(result)
    })

    $("#cal_times").click(() => {
        result += " x "
        $("#cal_screen").val(result)
    })

    $("#cal_devide").click(() => {
        result += " / "
        $("#cal_screen").val(result)
    })

    $("#cal_res").click(() => {
        let arr = result.split(' ')
        if(arr[2] === 0){
            for (let i = 0; i < arr.length; i+=2) {
                console.log(arr[i + 1])
                if(i === 0){
                    if (arr[i + 1] === '+') {
                        result = parseInt(arr[i]) + parseInt(arr[i + 2])
                    } else if (arr[i + 1] === '-') {
                        result = parseInt(arr[i]) - parseInt(arr[i + 2])
                    } else if (arr[i + 1] == 'x') {
                        result = parseInt(arr[i]) * parseInt(arr[i + 2])
                    } else if (arr[i + 1] === '/') {
                        result = parseInt(arr[i]) / parseInt(arr[i + 2])
                    }
                }else{
                    if (arr[i + 1] === '+') {
                        result += parseInt(arr[i + 2])
                    } else if (arr[i + 1] === '-') {
                        result -= parseInt(arr[i + 2])
                    } else if (arr[i + 1] == 'x') {
                        result *= parseInt(arr[i + 2])
                    } else if (arr[i + 1] === '/') {
                        result /= parseInt(arr[i + 2])
                    }
                }
            }
        }else{
            result = eval(result)
        }

        $("#cal_screen").val(result)
    })

    $("#cal_AC").click(() => {
        result = ""
        $("#cal_screen").val(result)
    })
})
// Participation Activity 2
function compute_rank() {
    let math_score = Number(document.getElementById('math_score').value);

    if (math_score > 94) (
        window.alert('Gold')
    )
    else if (math_score > 78) (
        window.alert('silver')
    )
    else if (math_score > 68) (
        window.alert('Bronze')
    )
}
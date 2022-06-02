const clickAlert = () => {
    alert('Trudy Judy');
}

function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', clickAlert);
}

addingEventListener()

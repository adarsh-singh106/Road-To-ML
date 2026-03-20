// INIT
async function init() {
    try {
        const response = await fetch('http://localhost:3000/get-profile');
        const user = await response.json();

        document.getElementById('name').textContent = user.name || 'Anna Smith';
        document.getElementById('email').textContent = user.email || 'anna.smith@example.com';
        document.getElementById('interests').textContent = user.interests || 'coding';

        document.getElementById('container').style.display = 'block';
    } catch (error) {
        console.error('Error loading profile:', error);
    }
}

// UPDATE PROFILE
async function handleUpdateProfileRequest() {
    const payload = {
        name: document.getElementById('input-name').value,
        email: document.getElementById('input-email').value,
        interests: document.getElementById('input-interests').value
    };

    try {
        const response = await fetch('http://localhost:3000/update-profile', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        document.getElementById('name').textContent = data.name;
        document.getElementById('email').textContent = data.email;
        document.getElementById('interests').textContent = data.interests;

        toggleView(false);
    } catch (error) {
        console.error('Update failed:', error);
    }
}

// SWITCH TO EDIT MODE
function updateProfile() {
    document.getElementById('input-name').value =
        document.getElementById('name').textContent;

    document.getElementById('input-email').value =
        document.getElementById('email').textContent;

    document.getElementById('input-interests').value =
        document.getElementById('interests').textContent;

    toggleView(true);
}

// TOGGLE VIEW
function toggleView(isEdit) {
    document.getElementById('container').style.display = isEdit ? 'none' : 'block';
    document.getElementById('container-edit').style.display = isEdit ? 'block' : 'none';
}

// RUN INIT
init();
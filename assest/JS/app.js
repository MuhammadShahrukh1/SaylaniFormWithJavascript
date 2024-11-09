

function dataGet() {
    const data = {};
    data['country'] = document.getElementById('country').value;
    data['city'] = document.getElementById('city').value;
    data['course'] = document.getElementById('course').value;
    data['computer'] = document.getElementById('computer').value;
    data['fullName'] = document.getElementById('fullName').value;
    data['fatherName'] = document.getElementById('fatherName').value;
    data['cnic'] = document.getElementById('cnic').value;
    data['fatherCnic'] = document.getElementById('fatherCnic').value;
    data['email'] = document.getElementById('email').value;
    data['phone'] = document.getElementById('phone').value;
    data['date'] = document.getElementById('date').value;
    data['gender'] = document.getElementById('gender').value;
    data['address'] = document.getElementById('address').value;
    data['qualification'] = document.getElementById('qualification').value;
    data['laptop'] = document.getElementById('laptop').value;
    console.log(data)

    data['country'] = document.getElementById('country').value = '';
    data['city'] = document.getElementById('city').value = '';
    document.getElementById('course').value = '';
    document.getElementById('computer').value = '';
    document.getElementById('fullName').value = '';
    document.getElementById('fatherName').value = '';
    document.getElementById('cnic').value = '';
    document.getElementById('fatherCnic').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('date').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('address').value = '';
    document.getElementById('qualification').value = '';
    document.getElementById('laptop').value = '';
}



